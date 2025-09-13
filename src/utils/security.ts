// Security and validation utilities for startup website

// Rate limiting utility
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private limits: Map<string, { maxRequests: number; windowMs: number }> = new Map();

  constructor() {
    // Define default limits
    this.setLimit('form_submission', 5, 60000); // 5 submissions per minute
    this.setLimit('contact_form', 3, 300000); // 3 contact forms per 5 minutes
    this.setLimit('api_request', 100, 60000); // 100 API requests per minute
    this.setLimit('search', 50, 60000); // 50 searches per minute
  }

  setLimit(key: string, maxRequests: number, windowMs: number) {
    this.limits.set(key, { maxRequests, windowMs });
  }

  isAllowed(key: string, identifier: string = 'default'): boolean {
    const limitKey = `${key}:${identifier}`;
    const limit = this.limits.get(key);

    if (!limit) return true;

    const now = Date.now();
    const requests = this.requests.get(limitKey) || [];

    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < limit.windowMs);

    // Check if limit exceeded
    if (validRequests.length >= limit.maxRequests) {
      return false;
    }

    // Add current request
    validRequests.push(now);
    this.requests.set(limitKey, validRequests);

    return true;
  }

  getRemainingRequests(key: string, identifier: string = 'default'): number {
    const limitKey = `${key}:${identifier}`;
    const limit = this.limits.get(key);

    if (!limit) return Infinity;

    const now = Date.now();
    const requests = this.requests.get(limitKey) || [];
    const validRequests = requests.filter(time => now - time < limit.windowMs);

    return Math.max(0, limit.maxRequests - validRequests.length);
  }

  getTimeUntilReset(key: string, identifier: string = 'default'): number {
    const limitKey = `${key}:${identifier}`;
    const limit = this.limits.get(key);

    if (!limit) return 0;

    const requests = this.requests.get(limitKey) || [];
    if (requests.length === 0) return 0;

    const oldestRequest = Math.min(...requests);
    const timeUntilReset = limit.windowMs - (Date.now() - oldestRequest);

    return Math.max(0, timeUntilReset);
  }
}

// Form validation utilities
export const validators = {
  email: (email: string): { isValid: boolean; error?: string } => {
    if (!email) return { isValid: false, error: 'Email is required' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, error: 'Please enter a valid email address' };
    }

    // Additional security checks
    if (email.length > 254) {
      return { isValid: false, error: 'Email address is too long' };
    }

    // Check for suspicious patterns
    const suspiciousPatterns = [
      /script/i, /javascript/i, /onload/i, /onclick/i, /<.*>/
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(email)) {
        return { isValid: false, error: 'Email contains invalid characters' };
      }
    }

    return { isValid: true };
  },

  phone: (phone: string): { isValid: boolean; error?: string } => {
    if (!phone) return { isValid: false, error: 'Phone number is required' };

    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');

    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      return { isValid: false, error: 'Please enter a valid phone number' };
    }

    // Indian phone number validation
    if (cleanPhone.length === 10 && /^[6-9]\d{9}$/.test(cleanPhone)) {
      return { isValid: true };
    }

    // International format
    if (cleanPhone.length >= 11 && cleanPhone.length <= 15) {
      return { isValid: true };
    }

    return { isValid: false, error: 'Please enter a valid phone number' };
  },

  name: (name: string): { isValid: boolean; error?: string } => {
    if (!name) return { isValid: false, error: 'Name is required' };

    if (name.length < 2) {
      return { isValid: false, error: 'Name must be at least 2 characters' };
    }

    if (name.length > 50) {
      return { isValid: false, error: 'Name must not exceed 50 characters' };
    }

    // Check for special characters and numbers
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return { isValid: false, error: 'Name can only contain letters, spaces, apostrophes, and hyphens' };
    }

    return { isValid: true };
  },

  message: (message: string): { isValid: boolean; error?: string } => {
    if (!message) return { isValid: false, error: 'Message is required' };

    if (message.length < 10) {
      return { isValid: false, error: 'Message must be at least 10 characters' };
    }

    if (message.length > 1000) {
      return { isValid: false, error: 'Message must not exceed 1000 characters' };
    }

    // Check for malicious content
    const maliciousPatterns = [
      /<script/i, /javascript:/i, /onload=/i, /onclick=/i, /onerror=/i,
      /eval\(/i, /setTimeout\(/i, /setInterval\(/i
    ];

    for (const pattern of maliciousPatterns) {
      if (pattern.test(message)) {
        return { isValid: false, error: 'Message contains invalid content' };
      }
    }

    return { isValid: true };
  },

  url: (url: string): { isValid: boolean; error?: string } => {
    if (!url) return { isValid: true }; // Optional field

    try {
      const urlObj = new URL(url);
      if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
        return { isValid: false, error: 'URL must use HTTP or HTTPS protocol' };
      }
      return { isValid: true };
    } catch {
      return { isValid: false, error: 'Please enter a valid URL' };
    }
  }
};

// Input sanitization
export const sanitizers = {
  text: (input: string): string => {
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/script/gi, '') // Remove script tags
      .slice(0, 1000); // Limit length
  },

  email: (email: string): string => {
    return email.toLowerCase().trim();
  },

  phone: (phone: string): string => {
    // Keep only digits, plus, and spaces
    return phone.replace(/[^\d+\s-()]/g, '').trim();
  },

  name: (name: string): string => {
    return name
      .trim()
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/[^a-zA-Z\s'-]/g, ''); // Remove invalid characters
  }
};

// Security headers utility
export const securityHeaders = {
  // Content Security Policy
  getCSPHeader: (): string => {
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cdn.gpteng.co https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "media-src 'self' https:",
      "connect-src 'self' https://api.skilllogic.in https://www.google-analytics.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ');
  },

  // Security headers for forms (use for fetch requests)
  getFormHeaders: (): Record<string, string> => {
    return {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    };
  },

  // Server-side headers (for deployment configuration)
  getServerHeaders: (): Record<string, string> => {
    return {
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Content-Security-Policy': securityHeaders.getCSPHeader()
    };
  }
};

// CSRF protection
export class CSRFProtection {
  private token: string;

  constructor() {
    this.token = this.generateToken();
    this.addTokenToForms();
  }

  private generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private addTokenToForms(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'csrf_token';
      tokenInput.value = this.token;
      form.appendChild(tokenInput);
    });
  }

  public getToken(): string {
    return this.token;
  }

  public validateToken(submittedToken: string): boolean {
    return submittedToken === this.token;
  }

  public refreshToken(): void {
    this.token = this.generateToken();
    this.addTokenToForms();
  }
}

// Honeypot field for bot detection
export const addHoneypot = (form: HTMLFormElement): void => {
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website'; // Bots often fill this
  honeypot.style.display = 'none';
  honeypot.setAttribute('tabindex', '-1');
  honeypot.setAttribute('autocomplete', 'off');

  form.appendChild(honeypot);
};

// Secure form submission utility
export class SecureFormHandler {
  private rateLimiter: RateLimiter;
  private csrfProtection: CSRFProtection;

  constructor() {
    this.rateLimiter = new RateLimiter();
    this.csrfProtection = new CSRFProtection();
  }

  public async submitForm(formData: Record<string, any>, formType: string): Promise<{
    success: boolean;
    error?: string;
    data?: any;
  }> {
    // Check rate limiting
    const userIdentifier = this.getUserIdentifier();
    if (!this.rateLimiter.isAllowed(formType, userIdentifier)) {
      const timeUntilReset = this.rateLimiter.getTimeUntilReset(formType, userIdentifier);
      return {
        success: false,
        error: `Too many requests. Please wait ${Math.ceil(timeUntilReset / 1000)} seconds before trying again.`
      };
    }

    // Validate CSRF token
    if (!this.csrfProtection.validateToken(formData.csrf_token)) {
      return {
        success: false,
        error: 'Security validation failed. Please refresh the page and try again.'
      };
    }

    // Validate honeypot
    if (formData.website && formData.website.trim() !== '') {
      return {
        success: false,
        error: 'Spam detected.'
      };
    }

    // Validate form fields
    const validationErrors = this.validateFormData(formData, formType);
    if (validationErrors.length > 0) {
      return {
        success: false,
        error: validationErrors.join(', ')
      };
    }

    // Sanitize data
    const sanitizedData = this.sanitizeFormData(formData);

    try {
      // Submit to your API
      const response = await fetch(`/api/${formType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...securityHeaders.getFormHeaders(),
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      return { success: true, data: result };

    } catch (error) {
      return {
        success: false,
        error: 'Failed to submit form. Please try again later.'
      };
    }
  }

  private getUserIdentifier(): string {
    // Use IP address or session ID in production
    return localStorage.getItem('skilllogic_user_id') || 'anonymous';
  }

  private validateFormData(data: Record<string, any>, formType: string): string[] {
    const errors: string[] = [];

    switch (formType) {
      case 'contact':
        if (!validators.name(data.name).isValid) {
          errors.push(validators.name(data.name).error!);
        }
        if (!validators.email(data.email).isValid) {
          errors.push(validators.email(data.email).error!);
        }
        if (data.phone && !validators.phone(data.phone).isValid) {
          errors.push(validators.phone(data.phone).error!);
        }
        if (!validators.message(data.message).isValid) {
          errors.push(validators.message(data.message).error!);
        }
        break;
    }

    return errors;
  }

  private sanitizeFormData(data: Record<string, any>): Record<string, any> {
    const sanitized: Record<string, any> = {};

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string') {
        switch (key) {
          case 'email':
            sanitized[key] = sanitizers.email(value);
            break;
          case 'phone':
            sanitized[key] = sanitizers.phone(value);
            break;
          case 'name':
            sanitized[key] = sanitizers.name(value);
            break;
          default:
            sanitized[key] = sanitizers.text(value);
        }
      } else {
        sanitized[key] = value;
      }
    }

    return sanitized;
  }
}

// Initialize security features
export const initializeSecurity = () => {
  // Only add meta tags that are valid for HTML (not HTTP-only headers)
  const validMetaTags = {
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  Object.entries(validMetaTags).forEach(([name, content]) => {
    // Check if meta tag already exists
    const existingMeta = document.querySelector(`meta[http-equiv="${name}"]`);
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = content;
      document.head.appendChild(meta);
    }
  });

  // Note: X-Frame-Options, X-XSS-Protection, and Permissions-Policy
  // must be set via server HTTP headers, not meta tags

  // Initialize CSRF protection
  new CSRFProtection();

  // Add honeypot to all forms
  document.querySelectorAll('form').forEach(form => {
    addHoneypot(form as HTMLFormElement);
  });
};

// Export main classes and utilities
export const rateLimiter = new RateLimiter();
export const secureFormHandler = new SecureFormHandler();

export default {
  validators,
  sanitizers,
  securityHeaders,
  CSRFProtection,
  SecureFormHandler,
  initializeSecurity,
  rateLimiter,
  secureFormHandler
};
