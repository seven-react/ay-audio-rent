import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@forms": path.resolve(__dirname, "./src/forms"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@svg": path.resolve(__dirname, "./src/assets/Svg"),
      // "@packages": path.resolve(__dirname, "./src/assets/packages"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@home": path.resolve(__dirname, "./src/pages/home"),
       
      // "@events": path.resolve(__dirname, "./src/components/Events"),
    },
  },

  plugins: [react(), svgr()],
  outDir: 'dist', // Default is 'dist'
});
