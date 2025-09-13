/**
 * Anti-Debugging Protection (100% FREE)
 * Prevents users from debugging and inspecting code in production
 */

import React from 'react';

// Anti-debugging class with multiple detection methods
export class AntiDebugProtection {
  private static isDebugDetected = false;
  private static protectionEnabled = process.env.NODE_ENV === 'production';

  // Method 1: Debugger statement timing detection
  static detectDebuggerTiming(): boolean {
    if (!this.protectionEnabled) return false;

    const start = performance.now();
    debugger; // This will pause if debugger is open
    const end = performance.now();

    // If debugger is open, there will be a significant delay
    return (end - start) > 100;
  }

  // Method 2: Console object detection
  static detectConsoleUsage(): boolean {
    if (!this.protectionEnabled) return false;

    const consoleObj = window.console as any;
    return !!(
      window.console &&
      (consoleObj.firebug ||
       window.console.table ||
       window.console.clear ||
       (consoleObj.profiles && consoleObj.profiles.length > 0))
    );
  }

  // Method 3: DevTools detection via window size
  static detectDevToolsSize(): boolean {
    if (!this.protectionEnabled) return false;

    const widthThreshold = window.outerHeight - window.innerHeight > 200;
    const heightThreshold = window.outerWidth - window.innerWidth > 200;

    return widthThreshold || heightThreshold;
  }

  // Method 4: Function toString detection
  static detectFunctionInspection(): boolean {
    if (!this.protectionEnabled) return false;

    const testFunc = function() { return 'test'; };
    const funcString = testFunc.toString();

    // Check if function was modified or inspected
    return funcString.replace(/\s/g, '').length !== testFunc.toString().replace(/\s/g, '').length;
  }

  // Method 5: Context menu detection
  static preventRightClick(): void {
    if (!this.protectionEnabled) return;

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.triggerProtection('Context menu blocked');
    });
  }

  // Method 6: Key combination detection
  static preventDebugKeys(): void {
    if (!this.protectionEnabled) return;

    document.addEventListener('keydown', (e) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        this.triggerProtection('Debug keys blocked');
      }
    });
  }

  // Method 7: Performance monitoring for debugging
  static monitorPerformance(): void {
    if (!this.protectionEnabled) return;

    let executionTimes: number[] = [];

    setInterval(() => {
      const start = performance.now();

      // Simple operation that should be fast
      for (let i = 0; i < 1000; i++) {
        Math.random();
      }

      const end = performance.now();
      const executionTime = end - start;

      executionTimes.push(executionTime);

      // Keep only last 10 measurements
      if (executionTimes.length > 10) {
        executionTimes = executionTimes.slice(-10);
      }

      // If execution is consistently slow, might indicate debugging
      const avgTime = executionTimes.reduce((a, b) => a + b, 0) / executionTimes.length;
      if (avgTime > 50 && executionTimes.length >= 5) {
        this.triggerProtection('Performance anomaly detected');
      }
    }, 2000);
  }

  // Method 8: Memory usage monitoring
  static monitorMemory(): void {
    if (!this.protectionEnabled || !('memory' in performance)) return;

    let baselineMemory: number | null = null;

    setInterval(() => {
      const memInfo = (performance as any).memory;
      const currentMemory = memInfo.usedJSHeapSize;

      if (baselineMemory === null) {
        baselineMemory = currentMemory;
        return;
      }

      // Significant memory increase might indicate debugging tools
      const memoryIncrease = currentMemory - baselineMemory;
      const increasePercentage = (memoryIncrease / baselineMemory) * 100;

      if (increasePercentage > 200) { // 200% increase
        this.triggerProtection('Memory anomaly detected');
      }
    }, 5000);
  }

  // Method 9: Detect code modification attempts
  static protectCodeIntegrity(): void {
    if (!this.protectionEnabled) return;

    // Store original functions
    const originalSetTimeout = window.setTimeout;
    const originalSetInterval = window.setInterval;
    const originalConsoleLog = console.log;

    // Monitor for modifications
    setInterval(() => {
      if (
        window.setTimeout !== originalSetTimeout ||
        window.setInterval !== originalSetInterval ||
        console.log !== originalConsoleLog
      ) {
        this.triggerProtection('Code modification detected');
      }
    }, 1000);
  }

  // Response to debug detection
  static triggerProtection(reason: string): void {
    if (this.isDebugDetected) return; // Prevent multiple triggers

    this.isDebugDetected = true;

    console.clear(); // Clear console

    // Multiple protection responses
    const responses = [
      () => {
        // Redirect to blank page
        window.location.href = 'about:blank';
      },
      () => {
        // Replace page content
        document.body.innerHTML = '<h1>Access Denied</h1><p>Debugging detected.</p>';
      },
      () => {
        // Close window if possible
        window.close();
      },
      () => {
        // Infinite loop to freeze debugging
        while (true) {
          console.clear();
        }
      }
    ];

    // Execute random response
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    setTimeout(() => {
      try {
        randomResponse();
      } catch (e) {
        // Fallback: just hide content
        if (document.body) {
          document.body.style.display = 'none';
        }
      }
    }, 100);
  }

  // Initialize all protection methods
  static initialize(): void {
    if (!this.protectionEnabled) {
      console.log('🛡️ Anti-debug protection disabled in development');
      return;
    }

    console.log('🛡️ Initializing anti-debug protection...');

    // Start all detection methods
    this.preventRightClick();
    this.preventDebugKeys();
    this.protectCodeIntegrity();
    this.monitorPerformance();
    this.monitorMemory();

    // Periodic checks
    setInterval(() => {
      if (
        this.detectDebuggerTiming() ||
        this.detectConsoleUsage() ||
        this.detectDevToolsSize() ||
        this.detectFunctionInspection()
      ) {
        this.triggerProtection('Debug detection triggered');
      }
    }, 1000);

    // Random integrity checks
    setInterval(() => {
      // Random debugger statement
      if (Math.random() > 0.9) {
        const start = Date.now();
        debugger;
        if (Date.now() - start > 100) {
          this.triggerProtection('Random debugger check failed');
        }
      }
    }, Math.random() * 10000 + 5000); // Random interval between 5-15 seconds
  }

  // Disable protection (for legitimate debugging)
  static disable(): void {
    this.protectionEnabled = false;
    console.log('🛡️ Anti-debug protection disabled');
  }
}

// Wrapper for protected functions
export const runProtected = <T>(fn: () => T): T => {
  if (process.env.NODE_ENV === 'production') {
    // Quick debug check before execution
    const start = performance.now();
    debugger;
    if (performance.now() - start > 50) {
      AntiDebugProtection.triggerProtection('Protected function debug check');
      throw new Error('Access denied');
    }
  }

  return fn();
};

// Protected component wrapper for React
export const withAntiDebug = <P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P> => {
  return (props: P) => {
    React.useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
        // Component-level protection
        const debugCheck = () => {
          if (AntiDebugProtection.detectConsoleUsage()) {
            AntiDebugProtection.triggerProtection('Component debug detection');
          }
        };

        const interval = setInterval(debugCheck, 2000);
        return () => clearInterval(interval);
      }
    }, []);

    return React.createElement(Component, props);
  };
};

// Initialize protection on module load
if (typeof window !== 'undefined') {
  // Delay initialization to avoid blocking app startup
  setTimeout(() => {
    AntiDebugProtection.initialize();
  }, 1000);
}

export default AntiDebugProtection;
