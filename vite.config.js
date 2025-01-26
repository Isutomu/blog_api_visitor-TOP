import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://isutomu.github.io/blog_api_visitor-TOP/",
  plugins: [react()],
});
