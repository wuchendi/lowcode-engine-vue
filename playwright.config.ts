import { defineConfig, devices } from '@playwright/test'

/** A running designer, or the preview of its build (`pnpm build:designer`). */
const baseURL = process.env.DESIGNER_URL ?? 'http://localhost:5577'

export default defineConfig({
  testDir: './e2e',
  // The designer loads the engine, Vue and the materials on every page
  timeout: 5 * 60_000,
  expect: { timeout: 30_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL,
    ...devices['Desktop Chrome'],
    viewport: { width: 1440, height: 900 },
    trace: 'retain-on-failure',
  },
  webServer: process.env.DESIGNER_URL
    ? undefined
    : {
        command: 'pnpm -C apps/designer preview',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
      },
})
