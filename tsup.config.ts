import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  treeshake: true,
  // Enable CSS support - esbuild automatically handles .module.css files as CSS modules
  // SCSS files are pre-compiled to CSS via the build:css script
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      ".css": "css",
    };
  },
});
