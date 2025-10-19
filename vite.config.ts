import path from "path"
import react from "@vitejs/plugin-react-swc" // This is the correct plugin for your project
import { defineConfig } from "vite"

export default defineConfig({
  base: "/aayush-anand-portfolio-muse/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})