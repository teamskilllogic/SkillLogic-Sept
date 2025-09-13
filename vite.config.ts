import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    // Security headers for development
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  plugins: [react()],
  build: {
    minify: "terser", // Better minification and obfuscation
    sourcemap: false, // disable source map in production
    outDir: "dist", // ensure proper output folder
    target: "es2018", // reduce transpile cost
    rollupOptions: {
      output: {
        // Obfuscate chunk file names
        chunkFileNames: 'assets/[hash].js',
        entryFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
        manualChunks: {
          // Split vendor code to reduce main bundle visibility
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'], // Remove specific console methods
        passes: 5, // Maximum compression passes
        sequences: true, // Join consecutive statements
        dead_code: true, // Remove unreachable code
        conditionals: true, // Optimize if-s and conditional expressions
        comparisons: true, // Optimize comparisons
        evaluate: true, // Evaluate constant expressions
        booleans: true, // Optimize boolean expressions
        loops: true, // Optimize loops
        unused: true, // Drop unreferenced functions/variables
        hoist_funs: true, // Hoist function declarations
        hoist_vars: true, // Hoist variable declarations
        if_return: true, // Optimize if/return and if/continue
        join_vars: true, // Join consecutive var declarations
        side_effects: false, // Drop side-effect-free statements
        collapse_vars: true, // Collapse single-use non-constant variables
        reduce_vars: true, // Improve optimization on variables assigned with and used as constant values
        ecma: 2020, // Use ES2020 optimizations
        toplevel: true, // Enable top level optimizations
      },
      mangle: {
        toplevel: true, // Obfuscate top-level variable names
        eval: true, // Mangle names in scopes where eval or with are used
        keep_fnames: false, // Don't keep function names
        properties: {
          regex: /^_|^[A-Z][A-Z0-9_]*$/, // Obfuscate properties starting with underscore or ALL_CAPS
          reserved: ['__proto__', 'constructor', 'prototype'], // Keep critical properties
        },
        safari10: true, // Safari 10 compatibility
      },
      format: {
        comments: false, // Remove all comments
        beautify: false, // Don't beautify output
        ascii_only: true, // Escape Unicode characters in strings and regexps
        webkit: true, // Enable workarounds for WebKit bugs
      },
      nameCache: {}, // Enable name caching for better optimization
      ie8: false, // Don't support IE8
      keep_fnames: false, // Don't preserve function names
      safari10: true, // Support Safari 10
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
