import * as path from 'path'
import { test, expect } from '@playwright/test'

type CheckPage = {
  name: string,
  path: string
}

const port = process.env.NUXT_PORT ? process.env.NUXT_PORT : 3000
const baseUrl = `http://localhost:${port}`

const checkPages: CheckPage[] = [
  { name: 'root', path: '/' },
  { name: 'activity', path: '/activity' },
  { name: 'document', path: '/document' },
  { name: 'dormitory', path: '/dormitory' },
  { name: 'dormitory_introduction', path: '/dormitory_introduction' }
]

test.describe.parallel('Visual Regression Test', () => {
  for (const checkPage of checkPages) {
    test(`${checkPage.name}`, async ({ page }) => {
      await page.goto(
        path.join(baseUrl, checkPage.path),
        { waitUntil: 'domcontentloaded' }
      )

      expect(await page.screenshot({ fullPage: true }))
        .toMatchSnapshot(
          `${checkPage.name}.png`,
          { threshold: 0.075 }
        )
    })
  }
})
