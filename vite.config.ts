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
        passes: 3, // Multiple compression passes
      },
      mangle: {
        toplevel: true, // Obfuscate top-level variable names
        properties: {
          regex: /^_/, // Obfuscate properties starting with underscore
        },
        safari10: true, // Safari 10 compatibility
      },
      format: {
        comments: false, // Remove all comments
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
