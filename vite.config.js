import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
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
