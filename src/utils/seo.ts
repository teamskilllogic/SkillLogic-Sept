import { useEffect } from 'react';

// SEO utilities for startup website

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: Record<string, any>;
}

// Enhanced SEO Hook
export const useSEO = (config: SEOConfig) => {
  const updateMetaTags = () => {
    // Update title
    document.title = config.title;

    // Update or create meta tags
    const metaTags = {
      description: config.description,
      keywords: config.keywords || '',
      'og:title': config.title,
      'og:description': config.description,
      'og:type': config.ogType || 'website',
      'og:image': config.ogImage || '/images/og-default.jpg',
      'twitter:card': config.twitterCard || 'summary_large_image',
      'twitter:title': config.title,
      'twitter:description': config.description,
      'twitter:image': config.ogImage || '/images/og-default.jpg'
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      if (content) {
        let metaElement = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement;

        if (!metaElement) {
          metaElement = document.createElement('meta');
          if (name.startsWith('og:') || name.startsWith('twitter:')) {
            metaElement.setAttribute('property', name);
          } else {
            metaElement.setAttribute('name', name);
          }
          document.head.appendChild(metaElement);
        }

        metaElement.setAttribute('content', content);
      }
    });

    // Update canonical URL
    if (config.canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.href = config.canonical;
    }

    // Add JSON-LD structured data
    if (config.jsonLd) {
      const existingJsonLd = document.querySelector('#jsonld-seo');
      if (existingJsonLd) {
        existingJsonLd.remove();
      }

      const script = document.createElement('script');
      script.id = 'jsonld-seo';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(config.jsonLd);
      document.head.appendChild(script);
    }
  };

  // Update on mount and when config changes
  useEffect(() => {
    updateMetaTags();

    // Cleanup function to remove dynamic meta tags
    return () => {
      if (config.jsonLd) {
        const jsonLdElement = document.querySelector('#jsonld-seo');
        if (jsonLdElement) {
          jsonLdElement.remove();
        }
      }
    };
  }, [config]);
};

// Accessibility utilities
export const initializeAccessibility = () => {
  // Skip links for keyboard navigation
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Enhanced focus management
  let lastFocusedElement: Element | null = null;

  document.addEventListener('focusin', (e) => {
    lastFocusedElement = e.target as Element;
  });

  // Escape key to close modals/dropdowns
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]');
      const openDropdowns = document.querySelectorAll('[aria-expanded="true"]');

      [...openModals, ...openDropdowns].forEach((element) => {
        if (element instanceof HTMLElement) {
          element.click(); // Trigger close
        }
      });
    }
  });

  // Focus trap for modals
  const trapFocus = (container: Element) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    container.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });

    firstFocusable.focus();
  };

  return { trapFocus };
};

// SEO audit utility
export const auditSEO = () => {
  const issues: string[] = [];
  const warnings: string[] = [];

  // Check title
  const title = document.title;
  if (!title) issues.push('Missing page title');
  else if (title.length > 60) warnings.push('Title is too long (>60 chars)');
  else if (title.length < 30) warnings.push('Title might be too short (<30 chars)');

  // Check meta description
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  if (!description) issues.push('Missing meta description');
  else if (description.length > 160) warnings.push('Meta description is too long (>160 chars)');
  else if (description.length < 120) warnings.push('Meta description might be too short (<120 chars)');

  // Check headings structure
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  const h1Count = document.querySelectorAll('h1').length;

  if (h1Count === 0) issues.push('Missing H1 tag');
  else if (h1Count > 1) issues.push('Multiple H1 tags found');

  // Check images alt text
  const images = Array.from(document.querySelectorAll('img'));
  const imagesWithoutAlt = images.filter(img => !img.getAttribute('alt'));
  if (imagesWithoutAlt.length > 0) {
    warnings.push(`${imagesWithoutAlt.length} images missing alt text`);
  }

  // Check links
  const links = Array.from(document.querySelectorAll('a'));
  const linksWithoutText = links.filter(link => !link.textContent?.trim());
  if (linksWithoutText.length > 0) {
    warnings.push(`${linksWithoutText.length} links without descriptive text`);
  }

  // Check for canonical URL
  if (!document.querySelector('link[rel="canonical"]')) {
    warnings.push('Missing canonical URL');
  }

  // Check for Open Graph tags
  if (!document.querySelector('meta[property="og:title"]')) {
    warnings.push('Missing Open Graph title');
  }

  return { issues, warnings };
};

// Performance SEO checker
export const checkSEOPerformance = () => {
  const metrics = {
    loadTime: 0,
    imageOptimization: 0,
    mobileOptimization: false,
    httpsEnabled: location.protocol === 'https:',
  };

  // Check load time
  if (window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
  }

  // Check image formats and sizes
  const images = Array.from(document.querySelectorAll('img'));
  const unoptimizedImages = images.filter(img => {
    const src = img.src.toLowerCase();
    return !src.includes('.webp') && !src.includes('.avif');
  });

  metrics.imageOptimization = ((images.length - unoptimizedImages.length) / images.length) * 100;

  // Check mobile optimization
  const viewport = document.querySelector('meta[name="viewport"]');
  metrics.mobileOptimization = !!viewport && viewport.getAttribute('content')?.includes('width=device-width');

  return metrics;
};

export default {
  useSEO,
  initializeAccessibility,
  auditSEO,
  checkSEOPerformance
};
