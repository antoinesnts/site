import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

/**
 * BASE_PATH lets the same build serve from a sub-path (GitHub project pages
 * live at /<repo>/) or from a domain root. Defaults to root for local dev.
 */
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [reactRouter()],
  server: {
    // Honour PORT so the dev server can be placed on a specific port.
    port: Number(process.env.PORT) || 5173,
  },
  css: {
    modules: {
      // Readable class names in dev, short hashes in prod.
      generateScopedName:
        process.env.NODE_ENV === "production"
          ? "[hash:base64:6]"
          : "[name]__[local]",
    },
  },
});
