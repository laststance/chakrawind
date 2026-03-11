import tailwindcss from "@tailwindcss/vite"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@laststance/chakrawind-ui": resolve("packages/react/src"),
      compositions: resolve("apps/compositions/src"),
    },
  },
})
