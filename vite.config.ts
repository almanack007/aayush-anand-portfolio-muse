import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // THIS IS THE CRITICAL LINE THAT WAS MISSING OR INCORRECT
  base: "/aayush-anand-portfolio-muse/",

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
