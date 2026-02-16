import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ["src"] }),
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        const ext = format === "es" ? "mjs" : "js";
        return entryName === "index" ? `index.${ext}` : `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: [
        "vue",
        "@floating-ui/dom",
      ],
    },
    emptyOutDir: true,
  },
});
