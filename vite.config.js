import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.js", // Entry point for the package
      name: "BlobImageGenerator", // Global variable name for UMD builds
      fileName: "index", // Output file name
      formats: ["es", "cjs"], // Output formats (ESM and CommonJS)
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Externalize React and ReactDOM
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
