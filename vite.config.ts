import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  build: {
    minify: "esbuild", // faster build and smaller output
    sourcemap: false, // disable source map in production
    outDir: "dist", // ensure proper output folder
    target: "es2018", // reduce transpile cost
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
