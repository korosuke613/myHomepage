import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  // Limit the number of workers on CI, use default locally
  workers: process.env.CI ? 2 : undefined,
  reporter: [process.env.CI ? ['junit', { outputFile: 'test-results/results.xml' }] : ['list']]
}
export default config
