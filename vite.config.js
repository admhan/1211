import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/1211/",     // << obligatoire pour GitHub Pages
  plugins: [react()],
});
