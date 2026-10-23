import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: { port: 8080, host: true },
  build: {
    target: "es2020",
    rollupOptions: {
      // O build de pré-renderização (SSR) não separa o React em arquivo próprio
      output: isSsrBuild ? {} : { manualChunks: { react: ["react", "react-dom"] } },
    },
  },
}));
