import tailwindcss from "@tailwindcss/vite"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@chakra-ui/react": resolve("packages/react/src"),
      "@chakra-ui/charts": resolve("packages/charts/src"),
      compositions: resolve("apps/compositions/src"),
    },
  },
})
