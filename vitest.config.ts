import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import { playwright } from "@vitest/browser-playwright"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      watch: false,
      coverage: {
        provider:
          (process.env.VITEST_COVERAGE_PROVIDER as "v8" | "istanbul") ?? "v8",
        reporter: ["text", "json", "lcov", "html"],
        include: ["packages/react/src/**/*.{ts,tsx}"],
        exclude: ["**/*.stories.{ts,tsx}", "**/*.d.ts", "**/generated/**"],
      },
      benchmark: {
        include: ["**/*.bench.{ts,tsx}"],
        exclude: ["node_modules", "dist"],
      },
      projects: [
        {
          extends: true,
          test: {
            name: "unit",
            environment: "jsdom",
            include: ["**/*test.{ts,tsx}"],
            setupFiles: ["vitest.setup.ts"],
          },
        },
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, ".storybook"),
              storybookScript: "pnpm storybook --no-open",
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              provider: playwright({}),
              headless: true,
              instances: [{ browser: "chromium" }],
            },
            setupFiles: [".storybook/vitest.setup.ts"],
          },
        },
        {
          extends: true,
          test: {
            name: "coexist",
            environment: "jsdom",
            include: ["tests/coexist/**/*.test.{ts,tsx}"],
            setupFiles: ["tests/coexist/setup.ts"],
          },
        },
      ],
    },
  }),
)
