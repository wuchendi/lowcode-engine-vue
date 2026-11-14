import { expect, test } from '@playwright/test'
import { collectErrors, openDesigner } from './designer'

for (const vue of [2, 3] as const) {
  test(`generates the Vue ${vue} project of the page`, async ({ page }) => {
    const errors = collectErrors(page)
    await openDesigner(page, vue)
    await page.locator('.lc-top-area button', { hasText: '出码' }).click()
    const files = page.locator('.lowcode-code-generator-files li')
    await expect(files).toContainText([
      'package.json',
      'src/main.js',
      'src/pages/index.vue',
    ])
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page
        .locator('.next-dialog-footer button', { hasText: '下载 zip' })
        .click(),
    ])
    expect(download.suggestedFilename()).toMatch(/\.zip$/)
    expect(errors).toEqual([])
  })
}
