import { defineConfig, devices } from "@playwright/test"

/**
 * Playwright visual parity configuration.
 * - Chromium only
 * - Deterministic screenshot defaults
 * - Centralized snapshot path template
 */
export default defineConfig({
  testDir: "./tests",
  testMatch: ["visual/parity/**/*.spec.ts"],
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    ...devices["Desktop Chrome"],
    viewport: { width: 1280, height: 720 }
  },
  snapshotPathTemplate: "{testDir}/__screenshots__{/projectName}/{testFilePath}/{arg}{ext}",
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      maxDiffPixels: 0
    }
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 }
      }
    }
  ]
})
