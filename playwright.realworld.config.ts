import { defineConfig } from "@playwright/test"

const REALWORLD_SERVER_URL = "http://127.0.0.1:4173"

export default defineConfig({
  testDir: "./tests/realworld-e2e",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  snapshotPathTemplate: "{testDir}/__screenshots__/realworld/{testFilePath}/{arg}{ext}",
  expect: {
    toHaveScreenshot: {
      animations: "disabled"
    }
  },
  use: {
    viewport: { width: 1280, height: 800 }
  },
  projects: [
    {
      name: "realworld-chakra",
      use: {
        baseURL: `${REALWORLD_SERVER_URL}/chakra`
      }
    },
    {
      name: "realworld-wind",
      use: {
        baseURL: `${REALWORLD_SERVER_URL}/wind`
      }
    }
  ],
  webServer: {
    command: "pnpm start",
    url: REALWORLD_SERVER_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
})
