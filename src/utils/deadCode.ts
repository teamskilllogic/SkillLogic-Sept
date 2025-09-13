/**
 * Dead Code Injection (100% FREE)
 * Adds fake code that confuses reverse engineers but never executes
 */

// Generate realistic fake variables and functions
export class DeadCodeGenerator {
  private static fakeCounter = 0;

  // Generate fake variable names
  static generateFakeVar(): string {
    const prefixes = ['temp', 'data', 'config', 'state', 'cache', 'buffer', 'handler', 'manager'];
    const suffixes = ['Value', 'State', 'Config', 'Data', 'Cache', 'Info', 'Result', 'Output'];

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return `${prefix}${suffix}${++this.fakeCounter}`;
  }

  // Create fake functions that look legitimate
  static createFakeFunction(name?: string): string {
    const funcName = name || this.generateFakeVar();
    const params = ['data', 'options', 'callback', 'config'].slice(0, Math.floor(Math.random() * 3) + 1);

    const fakeBodies = [
      `return Math.random() > 0.5 ? ${Math.random()} : null;`,
      `var temp = ${Math.random()}; return temp * 2;`,
      `console.log('Processing...'); return Date.now();`,
      `var result = []; for(var i = 0; i < 3; i++) result.push(i); return result;`,
      `return JSON.stringify({fake: true, timestamp: Date.now()});`,
      `var obj = {x: ${Math.random()}, y: ${Math.random()}}; return obj.x + obj.y;`
    ];

    const body = fakeBodies[Math.floor(Math.random() * fakeBodies.length)];

    return `
function ${funcName}(${params.join(', ')}) {
  ${body}
}`;
  }

  // Create fake API endpoints and handlers
  static createFakeApiCode(): string {
    return `
// Fake API configuration (never used)
var fakeApiConfig = {
  endpoints: {
    users: '/api/fake/users',
    data: '/api/fake/data',
    auth: '/api/fake/auth'
  },
  timeout: 5000,
  retries: 3
};

// Fake API handler (never called)
function handleFakeApiResponse(response) {
  if (response && response.status === 200) {
    return response.data || {};
  }
  return null;
}

// Fake error handler (never used)
function logFakeError(error, context) {
  var timestamp = new Date().toISOString();
  var errorLog = {
    timestamp: timestamp,
    error: error.message || 'Unknown error',
    context: context || 'general',
    stack: error.stack || ''
  };
  return errorLog;
}`;
  }

  // Create fake data processing functions
  static createFakeDataProcessors(): string {
    return `
// Fake data processors (never executed)
var fakeProcessors = {
  validateInput: function(input) {
    return input && typeof input === 'object' && input.length > 0;
  },

  transformData: function(data) {
    return data.map(function(item) {
      return Object.assign({}, item, {processed: true});
    });
  },

  calculateMetrics: function(dataset) {
    var sum = dataset.reduce(function(acc, val) { return acc + (val.value || 0); }, 0);
    return {
      total: sum,
      average: sum / dataset.length,
      processed: Date.now()
    };
  }
};

// Fake utility functions (never used)
function generateFakeId() {
  return 'fake_' + Math.random().toString(36).substr(2, 9);
}

function formatFakeDate(timestamp) {
  var date = new Date(timestamp || Date.now());
  return date.toISOString().split('T')[0];
}`;
  }

  // Create fake business logic
  static createFakeBusinessLogic(): string {
    return `
// Fake business rules (never executed)
var fakeBusinessRules = {
  pricing: {
    basic: 9.99,
    premium: 19.99,
    enterprise: 49.99
  },

  features: {
    basic: ['feature1', 'feature2'],
    premium: ['feature1', 'feature2', 'feature3'],
    enterprise: ['feature1', 'feature2', 'feature3', 'feature4']
  },

  limits: {
    basic: {requests: 1000, storage: '1GB'},
    premium: {requests: 10000, storage: '10GB'},
    enterprise: {requests: 100000, storage: '100GB'}
  }
};

// Fake calculation functions (never called)
function calculateFakeDiscount(plan, duration) {
  var basePrice = fakeBusinessRules.pricing[plan] || 0;
  var multiplier = duration === 'yearly' ? 10 : 1;
  var discount = duration === 'yearly' ? 0.2 : 0;
  return basePrice * multiplier * (1 - discount);
}

function validateFakeLimits(plan, usage) {
  var limits = fakeBusinessRules.limits[plan];
  return usage.requests <= limits.requests && usage.storage <= limits.storage;
}`;
  }

  // Inject all fake code
  static injectDeadCode(): string {
    if (process.env.NODE_ENV === 'development') {
      return ''; // No fake code in development
    }

    return `
${this.createFakeApiCode()}
${this.createFakeDataProcessors()}
${this.createFakeBusinessLogic()}
${this.createFakeFunction('processUserData')}
${this.createFakeFunction('validateSecurityToken')}
${this.createFakeFunction('encryptSensitiveData')}
${this.createFakeFunction('handlePaymentProcessing')}
`;
  }
}

// Dead code injection wrapper
export const withDeadCode = <T>(realFunction: () => T): T => {
  if (process.env.NODE_ENV === 'production') {
    // Inject fake code (but never execute it)
    eval(`
      // This code creates confusion but never runs
      if (false) {
        ${DeadCodeGenerator.injectDeadCode()}
      }
    `);
  }

  return realFunction();
};

// Fake component code for React
export const createFakeComponents = (): string => {
  if (process.env.NODE_ENV === 'development') return '';

  return `
// Fake React components (never rendered)
function FakeLoadingSpinner({size, color}) {
  return React.createElement('div', {
    className: 'fake-spinner',
    style: {width: size, height: size, borderColor: color}
  });
}

function FakeErrorBoundary({children, fallback}) {
  var hasError = React.useState(false)[0];
  if (hasError) {
    return fallback || React.createElement('div', null, 'Something went wrong');
  }
  return children;
}

function FakeDataTable({data, columns, onSort}) {
  return React.createElement('table', null,
    React.createElement('thead', null,
      React.createElement('tr', null,
        columns.map(function(col) {
          return React.createElement('th', {key: col.key, onClick: function() { onSort(col.key); }}, col.title);
        })
      )
    ),
    React.createElement('tbody', null,
      data.map(function(row, index) {
        return React.createElement('tr', {key: index},
          columns.map(function(col) {
            return React.createElement('td', {key: col.key}, row[col.key]);
          })
        );
      })
    )
  );
}`;
};

// Fake constants and configuration
export const FAKE_CONSTANTS = process.env.NODE_ENV === 'production' ? {
  API_ENDPOINTS: {
    FAKE_AUTH: 'https://fake-api.example.com/auth',
    FAKE_DATA: 'https://fake-api.example.com/data',
    FAKE_PAYMENTS: 'https://fake-api.example.com/payments'
  },
  FAKE_KEYS: {
    PUBLIC_KEY: 'fake_pk_12345abcdef',
    ANALYTICS_ID: 'fake_GA_12345',
    STRIPE_KEY: 'fake_sk_test_12345'
  },
  FAKE_SETTINGS: {
    MAX_RETRIES: 3,
    TIMEOUT: 5000,
    CACHE_DURATION: 300000
  }
} : {};

// Export fake functions that never get called
export const fakeUtilities = {
  processPayment: () => withDeadCode(() => ({ success: false, error: 'Not implemented' })),
  validateUser: () => withDeadCode(() => ({ valid: false })),
  encryptData: () => withDeadCode(() => 'fake_encrypted_data'),
  generateReport: () => withDeadCode(() => ({ report: 'fake_report' }))
};

export default DeadCodeGenerator;
