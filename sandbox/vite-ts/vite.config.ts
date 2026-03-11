import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@laststance/chakrawind-ui": resolve("..", "..", "packages/react/src"),
    },
  },
})
