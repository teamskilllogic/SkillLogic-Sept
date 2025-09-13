/**
 * Control Flow Flattening (100% FREE)
 * Makes code execution paths harder to analyze
 */

// Control flow obfuscation utilities
export class FlowObfuscator {
  private static switchCounter = 0;

  // Convert linear code to switch-based flow
  static flattenFlow<T>(steps: Array<() => T>): T | undefined {
    if (process.env.NODE_ENV === 'development') {
      // In development, execute normally for debugging
      let result: T | undefined;
      steps.forEach(step => {
        result = step();
      });
      return result;
    }

    // In production, use flattened control flow
    let state = 0;
    let result: T | undefined;
    const stateMap = steps.map((_, index) => index);

    // Shuffle execution order to confuse analyzers
    const shuffled = [...stateMap].sort(() => Math.random() - 0.5);

    while (state < steps.length) {
      switch (shuffled[state] || state) {
        case 0:
          result = steps[0]();
          state = 1;
          break;
        case 1:
          if (steps[1]) result = steps[1]();
          state = 2;
          break;
        case 2:
          if (steps[2]) result = steps[2]();
          state = 3;
          break;
        case 3:
          if (steps[3]) result = steps[3]();
          state = 4;
          break;
        case 4:
          if (steps[4]) result = steps[4]();
          state = 5;
          break;
        default:
          return result;
      }
    }
    return result;
  }

  // Obfuscate conditional logic
  static obfuscateCondition<T>(
    condition: boolean | (() => boolean),
    trueBranch: () => T,
    falseBranch: () => T
  ): T {
    if (process.env.NODE_ENV === 'development') {
      const cond = typeof condition === 'function' ? condition() : condition;
      return cond ? trueBranch() : falseBranch();
    }

    // Production: Use obfuscated flow
    const cond = typeof condition === 'function' ? condition() : condition;
    const branches = [falseBranch, trueBranch];
    const index = cond ? 1 : 0;

    // Add fake complexity
    const fakeVar = Math.random() > 0.5 ? 1 : 0;
    const realIndex = (index + fakeVar) % 2 === fakeVar ? index : 1 - index;

    return branches[realIndex]();
  }

  // Create fake execution paths
  static createDecoy<T>(realFunction: () => T, decoys: Array<() => any>): T {
    if (process.env.NODE_ENV === 'development') {
      return realFunction();
    }

    // Execute fake functions to confuse debuggers
    const executionOrder = Math.floor(Math.random() * (decoys.length + 1));

    for (let i = 0; i < decoys.length; i++) {
      if (i === executionOrder) {
        const result = realFunction();
        // Continue with decoys
        decoys.slice(i).forEach(decoy => {
          try { decoy(); } catch { /* Ignore fake errors */ }
        });
        return result;
      } else {
        try { decoys[i](); } catch { /* Ignore fake errors */ }
      }
    }

    return realFunction();
  }
}

// Flattened execution wrapper
export const executeProtected = <T>(steps: Array<() => T>): T | undefined => {
  return FlowObfuscator.flattenFlow(steps);
};

// Conditional execution with obfuscated flow
export const ifProtected = <T>(
  condition: boolean | (() => boolean),
  trueBranch: () => T,
  falseBranch: () => T
): T => {
  return FlowObfuscator.obfuscateCondition(condition, trueBranch, falseBranch);
};

// Protected function execution with decoys
export const runWithDecoys = <T>(
  realFunction: () => T,
  ...decoyFunctions: Array<() => any>
): T => {
  return FlowObfuscator.createDecoy(realFunction, decoyFunctions);
};

// Example usage helpers
export const ProtectedExecutor = {
  // For API calls
  secureApiCall: async <T>(apiFunction: () => Promise<T>): Promise<T> => {
    return executeProtected([
      () => {
        // Fake pre-processing
        const timestamp = Date.now();
        return timestamp;
      },
      () => {
        // Real API call
        return apiFunction();
      },
      () => {
        // Fake post-processing
        Math.random() * 1000;
        return undefined;
      }
    ]) as T;
  },

  // For data processing
  processData: <T>(processor: () => T): T => {
    return runWithDecoys(
      processor,
      () => Math.random() * 100, // Fake computation 1
      () => Date.now() % 1000,   // Fake computation 2
      () => 'fake'.length * 2    // Fake computation 3
    );
  },

  // For conditional rendering
  conditionalRender: <T>(condition: boolean, component: () => T, fallback: () => T): T => {
    return ifProtected(condition, component, fallback);
  }
};

export default FlowObfuscator;
