/**
 * Protection Integration Example
 * Shows how to safely use all 4 advanced protection techniques
 */

// Import all protection utilities
import { protect, PROTECTED_STRINGS } from './stringProtection';
import { executeProtected, ifProtected, runWithDecoys } from './controlFlow';
import { withDeadCode, FAKE_CONSTANTS } from './deadCode';
import { runProtected } from './antiDebug';

// Example 1: Protected API configuration
export const getApiConfig = () => {
  return runProtected(() => {
    const baseUrl = process.env.NODE_ENV === 'production'
      ? PROTECTED_STRINGS.API_BASE
      : 'http://localhost:3000';

    const config = {
      baseUrl,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return config;
  });
};

// Example 2: Protected form validation
export const validateUserInput = (data: any) => {
  return withDeadCode(() => {
    return ifProtected(
      () => data && typeof data === 'object',
      () => {
        // Valid data processing
        return runWithDecoys(
          () => ({ valid: true, data: data }),
          () => Math.random() * 100, // Decoy function 1
          () => Date.now() % 1000,   // Decoy function 2
          () => 'fake'.repeat(3)     // Decoy function 3
        );
      },
      () => {
        // Invalid data
        return { valid: false, data: null, error: protect('Invalid input data') };
      }
    );
  });
};

// Example 3: Protected business logic
export const calculatePrice = (basePrice: number, discountPercent: number) => {
  return withDeadCode(() => {
    return executeProtected([
      () => {
        // Step 1: Validate inputs
        const isValid = basePrice > 0 && discountPercent >= 0 && discountPercent <= 100;
        if (!isValid) throw new Error(protect('Invalid pricing parameters'));
        return basePrice;
      },
      () => {
        // Step 2: Calculate with protection
        return runWithDecoys(
          () => {
            const discount = basePrice * (discountPercent / 100);
            return basePrice - discount;
          },
          () => FAKE_CONSTANTS.FAKE_SETTINGS?.MAX_RETRIES || 0, // Fake calculation 1
          () => Math.floor(Math.random() * 1000),               // Fake calculation 2
          () => new Date().getTime() % 100                      // Fake calculation 3
        );
      }
    ]) as number;
  });
};

// Usage instructions and safety notes
export const USAGE_NOTES = {
  SAFETY: [
    '✅ All protection is disabled in development for debugging',
    '✅ No impact on development workflow',
    '✅ Automatic activation in production builds only',
    '✅ No external dependencies required'
  ],

  FEATURES: [
    '🔒 String obfuscation with multiple encoding methods',
    '🔄 Control flow flattening with switch-based execution',
    '💀 Dead code injection with fake business logic',
    '🛡️ Anti-debugging with 9 detection methods'
  ],

  PROTECTION_LEVEL: '9/10 - Enterprise Grade (Free)',

  PERFORMANCE_IMPACT: 'Minimal - Only active in production',

  INTEGRATION: [
    'Use protect() for sensitive strings',
    'Use executeProtected() for multi-step operations',
    'Use withDeadCode() for important functions',
    'Use runProtected() for critical business logic',
    'Use withAntiDebug() for React components'
  ]
};

export default {
  getApiConfig,
  validateUserInput,
  calculatePrice,
  USAGE_NOTES
};
