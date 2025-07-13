import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    historyApiFallback: true,
    allowedHosts: [
      'f49188ed23d7.ngrok-free.app' 
    ]
  },
  preview: {
    historyApiFallback: true
  }
});
