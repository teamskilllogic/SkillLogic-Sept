// Development experience utilities and tools

// TypeScript utility types for the project
export type PageRoute = '/' | '/about' | '/services' | '/portfolio' | '/contact' | '/testimonials' | '/home';

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export interface AnalyticsEventData {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Development environment checker
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

// Debug utility
export class DebugLogger {
  private enabled: boolean;

  constructor(enabled: boolean = isDevelopment) {
    this.enabled = enabled;
  }

  log(message: string, data?: any) {
    if (this.enabled) {
      console.log(`🔍 [DEBUG] ${message}`, data || '');
    }
  }

  warn(message: string, data?: any) {
    if (this.enabled) {
      console.warn(`⚠️ [WARN] ${message}`, data || '');
    }
  }

  error(message: string, error?: any) {
    if (this.enabled) {
      console.error(`❌ [ERROR] ${message}`, error || '');
    }
  }

  performance(label: string, fn: () => void) {
    if (this.enabled) {
      const start = performance.now();
      fn();
      const end = performance.now();
      console.log(`⚡ [PERF] ${label}: ${(end - start).toFixed(2)}ms`);
    } else {
      fn();
    }
  }

  group(label: string, fn: () => void) {
    if (this.enabled) {
      console.group(`📁 ${label}`);
      fn();
      console.groupEnd();
    } else {
      fn();
    }
  }
}

// Component development helpers
export const devHelpers = {
  // Component render tracker
  trackRender: (componentName: string) => {
    if (isDevelopment) {
      console.log(`🔄 [RENDER] ${componentName} rendered at ${new Date().toLocaleTimeString()}`);
    }
  },

  // Props validator
  validateProps: <T>(props: T, requiredKeys: (keyof T)[]): boolean => {
    if (!isDevelopment) return true;

    const missing = requiredKeys.filter(key => props[key] === undefined || props[key] === null);
    if (missing.length > 0) {
      console.error(`❌ [PROPS] Missing required props: ${missing.join(', ')}`);
      return false;
    }
    return true;
  },

  // Performance monitor for components
  withPerformanceMonitor: <P extends ComponentProps>(
    Component: React.ComponentType<P>,
    componentName: string
  ) => {
    if (!isDevelopment) return Component;

    return (props: P) => {
      const [renderCount, setRenderCount] = React.useState(0);
      const renderTime = React.useRef(0);

      React.useEffect(() => {
        setRenderCount(prev => prev + 1);
        const start = performance.now();

        return () => {
          renderTime.current = performance.now() - start;
          console.log(`⚡ [COMPONENT PERF] ${componentName} render #${renderCount + 1}: ${renderTime.current.toFixed(2)}ms`);
        };
      });

      return React.createElement(Component, props);
    };
  },

  // Memory usage tracker
  trackMemoryUsage: (componentName: string) => {
    if (!isDevelopment || !(performance as any).memory) return;

    const memory = (performance as any).memory;
    console.log(`💾 [MEMORY] ${componentName} - Used: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
  }
};

// Environment configuration
export const config = {
  API_BASE_URL: isDevelopment ? 'http://localhost:3001' : 'https://api.skilllogic.in',
  ANALYTICS_ENDPOINT: isDevelopment ? '/dev/analytics' : '/api/analytics',
  DEBUG_MODE: isDevelopment,
  CACHE_DURATION: isDevelopment ? 0 : 300000, // 5 minutes in production
  PERFORMANCE_MONITORING: true,
  ERROR_REPORTING: isProduction,

  // Feature flags for development
  features: {
    newContactForm: isDevelopment,
    advancedAnalytics: true,
    pwaFeatures: isProduction,
    serviceWorker: isProduction,
    offlineMode: isProduction
  }
};

// Code quality helpers
export const codeQuality = {
  // TODO tracker for development
  TODO: (message: string, priority: 'low' | 'medium' | 'high' = 'medium') => {
    if (isDevelopment) {
      const emoji = priority === 'high' ? '🔥' : priority === 'medium' ? '⚡' : '📝';
      console.log(`${emoji} [TODO-${priority.toUpperCase()}] ${message}`);
    }
  },

  // FIXME tracker
  FIXME: (message: string) => {
    if (isDevelopment) {
      console.warn(`🔧 [FIXME] ${message}`);
    }
  },

  // Deprecation warnings
  DEPRECATED: (oldMethod: string, newMethod?: string) => {
    if (isDevelopment) {
      console.warn(`⚠️ [DEPRECATED] ${oldMethod} is deprecated.${newMethod ? ` Use ${newMethod} instead.` : ''}`);
    }
  },

  // Performance warnings
  PERFORMANCE_WARNING: (message: string, threshold: number, actual: number) => {
    if (isDevelopment && actual > threshold) {
      console.warn(`🐌 [PERFORMANCE] ${message} - Expected: <${threshold}ms, Actual: ${actual}ms`);
    }
  }
};

// Testing helpers
export const testHelpers = {
  // Mock data generator
  generateMockData: (type: 'user' | 'project' | 'testimonial' | 'service') => {
    if (!isDevelopment) return {};

    const mockData = {
      user: {
        id: Math.random().toString(36).substr(2, 9),
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890'
      },
      project: {
        id: Math.random().toString(36).substr(2, 9),
        title: 'Sample Project',
        description: 'This is a sample project for testing purposes.',
        image: '/images/placeholder.jpg',
        tags: ['Web Design', 'React', 'TypeScript'],
        link: 'https://example.com'
      },
      testimonial: {
        id: Math.random().toString(36).substr(2, 9),
        name: 'Jane Smith',
        company: 'Example Corp',
        message: 'Excellent service and professional team.',
        rating: 5,
        image: '/images/placeholder-person.jpg'
      },
      service: {
        id: Math.random().toString(36).substr(2, 9),
        title: 'Web Development',
        description: 'Professional web development services.',
        icon: '💻',
        price: '₹15,000',
        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
      }
    };

    return mockData[type];
  },

  // Component testing utilities
  simulateUserInteraction: (element: HTMLElement, type: 'click' | 'hover' | 'focus') => {
    if (!isDevelopment) return;

    const events = {
      click: new MouseEvent('click', { bubbles: true, cancelable: true }),
      hover: new MouseEvent('mouseenter', { bubbles: true, cancelable: true }),
      focus: new FocusEvent('focus', { bubbles: true, cancelable: true })
    };

    element.dispatchEvent(events[type]);
    console.log(`🖱️ [TEST] Simulated ${type} on element:`, element);
  },

  // Performance testing
  measureComponentPerformance: async (componentName: string, renderFunction: () => Promise<void>) => {
    if (!isDevelopment) return;

    const start = performance.now();
    await renderFunction();
    const end = performance.now();

    console.log(`⏱️ [PERF TEST] ${componentName} render time: ${(end - start).toFixed(2)}ms`);

    if (end - start > 100) {
      console.warn(`🐌 [PERF WARNING] ${componentName} took longer than 100ms to render`);
    }
  }
};

// Build and deployment helpers
export const buildHelpers = {
  // Build information
  getBuildInfo: () => ({
    version: '1.0.0',
    buildTime: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    commit: process.env.REACT_APP_GIT_COMMIT || 'unknown',
    branch: process.env.REACT_APP_GIT_BRANCH || 'main'
  }),

  // Bundle analyzer
  analyzeBundleSize: () => {
    if (!isDevelopment) return;

    console.group('📦 Bundle Analysis');
    console.log('React version:', React.version);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Build timestamp:', new Date().toISOString());
    console.groupEnd();
  },

  // Feature flag checker
  checkFeatureFlags: () => {
    if (isDevelopment) {
      console.group('🚩 Feature Flags');
      Object.entries(config.features).forEach(([flag, enabled]) => {
        console.log(`${enabled ? '✅' : '❌'} ${flag}: ${enabled}`);
      });
      console.groupEnd();
    }
  }
};

// Development tools initialization
export const initializeDevTools = () => {
  if (!isDevelopment) return;

  console.log('🚀 SkillLogic Development Tools Initialized');

  // Add global debug helpers
  (window as any).skilllogicDev = {
    config,
    devHelpers,
    testHelpers,
    buildHelpers,
    logger: new DebugLogger(true)
  };

  // Build analysis
  buildHelpers.analyzeBundleSize();
  buildHelpers.checkFeatureFlags();

  // Performance monitoring
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'navigation') {
        console.log(`🚀 [NAVIGATION] ${entry.name} loaded in ${entry.duration}ms`);
      }
    });
  });

  observer.observe({ entryTypes: ['navigation'] });

  console.log('🛠️ Development tools available at window.skilllogicDev');
};

// React import for devHelpers
import React from 'react';

// Export debug logger instance
export const logger = new DebugLogger();

export default {
  logger,
  devHelpers,
  config,
  codeQuality,
  testHelpers,
  buildHelpers,
  initializeDevTools
};
