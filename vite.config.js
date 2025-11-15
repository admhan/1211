import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/1211/",   // Chemin obligatoire pour GitHub Pages (remplace par ton repo)
  plugins: [react()],
});
