// Performance monitoring utilities for startup website

interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    pageLoadTime: 0,
    domContentLoaded: 0,
  };

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics() {
    // Basic performance metrics
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;

      // Log performance for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', this.metrics);
      }
    });

    // Core Web Vitals monitoring
    this.observeCoreWebVitals();
  }

  private observeCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            this.metrics.largestContentfulPaint = entries[entries.length - 1].startTime;
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            this.metrics.firstContentfulPaint = entries[0].startTime;
          }
        });
        fcpObserver.observe({ type: 'paint', buffered: true });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries() as any[]) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          this.metrics.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as any[];
          if (entries.length > 0) {
            this.metrics.firstInputDelay = entries[0].processingStart - entries[0].startTime;
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

      } catch (error) {
        console.warn('Performance Observer not fully supported:', error);
      }
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public logMetrics() {
    console.log('Current Performance Metrics:', this.getMetrics());
  }

  // Report critical performance issues
  public reportSlowPerformance() {
    const metrics = this.getMetrics();
    const issues: string[] = [];

    if (metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500) {
      issues.push('LCP is slow (> 2.5s)');
    }

    if (metrics.firstInputDelay && metrics.firstInputDelay > 100) {
      issues.push('FID is high (> 100ms)');
    }

    if (metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.1) {
      issues.push('CLS is high (> 0.1)');
    }

    if (issues.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('Performance Issues Detected:', issues);
    }

    return issues;
  }
}

// Image lazy loading utility
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Resource preloading utilities
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/images/logo.png',
    // Add other critical images/fonts here
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    if (resource.endsWith('.png') || resource.endsWith('.jpg') || resource.endsWith('.webp')) {
      link.as = 'image';
    }
    document.head.appendChild(link);
  });
};

// Memory leak detection for development
export const detectMemoryLeaks = () => {
  if (process.env.NODE_ENV === 'development') {
    let lastMemory = (performance as any).memory?.usedJSHeapSize || 0;

    setInterval(() => {
      const currentMemory = (performance as any).memory?.usedJSHeapSize || 0;
      const memoryIncrease = currentMemory - lastMemory;

      if (memoryIncrease > 10 * 1024 * 1024) { // 10MB increase
        console.warn('Potential memory leak detected. Memory increased by:',
          Math.round(memoryIncrease / 1024 / 1024), 'MB');
      }

      lastMemory = currentMemory;
    }, 30000); // Check every 30 seconds
  }
};

export default PerformanceMonitor;
