import path from "path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslintPlugin from "vite-plugin-eslint"
import stylelintPlugin from "vite-plugin-stylelint"

export default defineConfig(() => ({
  plugins: [
    react(),
    eslintPlugin({
      include: ["./src/**/*.jsx", "./src/**/*.js"]
    }),
    stylelintPlugin({
      lintInWorker: true,
      lintOnStart: true,
      chokidar: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@context": path.resolve(__dirname, "src/context"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@ui": path.resolve(__dirname, "src/@ui/_ui.js"),
      // For Styles
      "@mixins": path.resolve(__dirname, "src/styles/_mixins.scss"),
      "@breakpoints": path.resolve(__dirname, "src/breakpoints.js")
    }
  }
}))
