// Progressive Web App utilities for startup website

// Service Worker registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, show update notification
              showUpdateNotification();
            }
          });
        }
      });

      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Show update notification to user
const showUpdateNotification = () => {
  // Create a simple update notification
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm';
  notification.innerHTML = `
    <div class="flex items-center justify-between">
      <div>
        <p class="font-medium">New version available!</p>
        <p class="text-sm opacity-90">Refresh to get the latest updates.</p>
      </div>
      <button
        class="ml-4 bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
        onclick="window.location.reload()"
      >
        Update
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto remove after 10 seconds
  setTimeout(() => {
    notification.remove();
  }, 10000);
};

// Install PWA prompt
export const initializeInstallPrompt = () => {
  let deferredPrompt: BeforeInstallPromptEvent | null = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;

    // Show custom install button
    showInstallButton();
  });

  const showInstallButton = () => {
    const installButton = document.createElement('button');
    installButton.className = 'fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center gap-2';
    installButton.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
      </svg>
      Install App
    `;

    installButton.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }

        deferredPrompt = null;
        installButton.remove();
      }
    });

    document.body.appendChild(installButton);

    // Auto hide after 30 seconds
    setTimeout(() => {
      installButton.remove();
    }, 30000);
  };
};

// Offline status detection
export const initializeOfflineStatus = () => {
  const showOfflineStatus = (isOnline: boolean) => {
    const existingStatus = document.querySelector('#offline-status');
    if (existingStatus) {
      existingStatus.remove();
    }

    if (!isOnline) {
      const offlineNotification = document.createElement('div');
      offlineNotification.id = 'offline-status';
      offlineNotification.className = 'fixed top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm z-50';
      offlineNotification.textContent = 'You are currently offline. Some features may be limited.';
      document.body.appendChild(offlineNotification);
    }
  };

  // Initial status
  showOfflineStatus(navigator.onLine);

  // Listen for status changes
  window.addEventListener('online', () => showOfflineStatus(true));
  window.addEventListener('offline', () => showOfflineStatus(false));
};

// Cache management
export const cacheManagement = {
  // Clear old caches
  clearOldCaches: async () => {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      const currentCache = 'skilllogic-v1'; // Update version as needed

      const deletePromises = cacheNames
        .filter(name => name !== currentCache)
        .map(name => caches.delete(name));

      await Promise.all(deletePromises);
    }
  },

  // Cache critical resources
  cacheCriticalResources: async () => {
    if ('caches' in window) {
      const cache = await caches.open('skilllogic-critical-v1');
      const criticalResources = [
        '/',
        '/images/logo.png',
        '/favicon.ico',
        // Add other critical resources
      ];

      await cache.addAll(criticalResources);
    }
  },

  // Get cache size
  getCacheSize: async () => {
    if ('caches' in window && 'storage' in navigator && 'estimate' in navigator.storage) {
      const estimate = await navigator.storage.estimate();
      return {
        used: estimate.usage || 0,
        available: estimate.quota || 0,
        percentage: estimate.usage && estimate.quota ?
          Math.round((estimate.usage / estimate.quota) * 100) : 0
      };
    }
    return null;
  }
};

// PWA metrics and analytics
export const pwaAnalytics = {
  // Track PWA usage
  trackPWAUsage: () => {
    // Check if app is installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        (window.navigator as any).standalone ||
                        document.referrer.includes('android-app://');

    if (isStandalone) {
      console.log('App is running as PWA');
      // Track PWA usage in your analytics
    }
  },

  // Track performance metrics
  trackPerformanceMetrics: () => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      console.log('Connection info:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      });
    }
  },

  // Track app lifecycle
  trackAppLifecycle: () => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        console.log('App became visible');
      } else {
        console.log('App became hidden');
      }
    });

    window.addEventListener('beforeunload', () => {
      console.log('App is being unloaded');
    });
  }
};

// Initialize all PWA features
export const initializePWA = () => {
  registerServiceWorker();
  initializeInstallPrompt();
  initializeOfflineStatus();
  cacheManagement.cacheCriticalResources();
  pwaAnalytics.trackPWAUsage();
  pwaAnalytics.trackPerformanceMetrics();
  pwaAnalytics.trackAppLifecycle();
};

// TypeScript declarations for PWA events
declare global {
  interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  }
}

export default {
  registerServiceWorker,
  initializeInstallPrompt,
  initializeOfflineStatus,
  cacheManagement,
  pwaAnalytics,
  initializePWA
};
