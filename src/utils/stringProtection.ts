/**
 * Advanced String Obfuscation Utility (100% FREE)
 * Converts readable strings into unreadable encoded formats
 */

// String encoding techniques
export const StringProtection = {
  // Method 1: Base64 + Rotation encoding
  encode: (str: string): string => {
    if (typeof str !== 'string' || str.length === 0) return str;

    try {
      // Apply Caesar cipher rotation
      const rotated = str.split('').map(char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode(code + 3); // Simple rotation
      }).join('');

      // Convert to base64
      const base64 = btoa(rotated);

      // Add extra obfuscation layer
      return base64.split('').reverse().join('');
    } catch {
      return str; // Return original if encoding fails
    }
  },

  // Decoder function (needed for runtime)
  decode: (encoded: string): string => {
    if (typeof encoded !== 'string' || encoded.length === 0) return encoded;

    try {
      // Reverse the string
      const unreversed = encoded.split('').reverse().join('');

      // Decode from base64
      const base64Decoded = atob(unreversed);

      // Reverse Caesar cipher
      const original = base64Decoded.split('').map(char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode(code - 3);
      }).join('');

      return original;
    } catch {
      return encoded; // Return encoded if decoding fails
    }
  },

  // Method 2: Hex encoding with padding
  hexEncode: (str: string): string => {
    return str.split('').map(char => {
      const hex = char.charCodeAt(0).toString(16);
      return ('00' + hex).slice(-2); // Pad with zeros
    }).join('');
  },

  hexDecode: (hex: string): string => {
    let result = '';
    for (let i = 0; i < hex.length; i += 2) {
      const hexPair = hex.substr(i, 2);
      result += String.fromCharCode(parseInt(hexPair, 16));
    }
    return result;
  },

  // Method 3: Unicode escape sequences
  unicodeEncode: (str: string): string => {
    return str.split('').map(char => {
      const code = char.charCodeAt(0);
      return '\\u' + ('0000' + code.toString(16)).slice(-4);
    }).join('');
  },

  // Method 4: Array-based encoding
  arrayEncode: (str: string): number[] => {
    return str.split('').map(char => char.charCodeAt(0));
  },

  arrayDecode: (arr: number[]): string => {
    return arr.map(code => String.fromCharCode(code)).join('');
  }
};

// Auto-obfuscation wrapper for sensitive strings
export const protect = (str: string): string => {
  // In production, return encoded string with inline decoder
  if (process.env.NODE_ENV === 'production') {
    const encoded = StringProtection.encode(str);
    return `(function(e){try{var r=e.split('').reverse().join(''),d=atob(r),o=d.split('').map(function(c){return String.fromCharCode(c.charCodeAt(0)-3)}).join('');return o}catch(x){return e}})('${encoded}')`;
  }

  // In development, return original for debugging
  return str;
};

// Protect common sensitive strings
export const PROTECTED_STRINGS = {
  API_BASE: protect('https://api.skilllogic.com'),
  ANALYTICS_KEY: protect('sk_analytics_2024'),
  APP_SECRET: protect('skilllogic_secret_key'),
  ERROR_MESSAGES: {
    UNAUTHORIZED: protect('Unauthorized access'),
    SERVER_ERROR: protect('Internal server error'),
    RATE_LIMITED: protect('Too many requests')
  }
};

// Runtime string decoder (will be obfuscated in build)
export const decodeString = (encoded: string): string => {
  return StringProtection.decode(encoded);
};

export default StringProtection;
