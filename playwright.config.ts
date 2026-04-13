import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 60000,
  testDir: "./e2e/tests",

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  fullyParallel: false,
  workers: 2,

  reporter: [
    ["html", { outputFolder: "playwright-report" }],
    ["line"],
  ],

  use: {
    baseURL: "https://demo.realworld.show",
    trace: "on-first-retry",
    screenshot: "on",
  },

  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});