import { expect, test } from '@playwright/test'
import { collectErrors, openDesigner } from './designer'

for (const vue of [2, 3] as const) {
  test(`generates the Vue ${vue} project of the page`, async ({ page }) => {
    const errors = collectErrors(page)
    // A slow Monaco: the editors of the files clicked meanwhile all wait for
    // the one load (no second AMD loader)
    await page.route(
      '**/runtime/monaco/vs/editor/editor.main.js',
      async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        await route.continue()
      },
    )
    await openDesigner(page, vue)
    await page.locator('.lc-top-area button', { hasText: '出码' }).click()
    const files = page.locator('.lowcode-code-generator-files li')
    await expect(files).toContainText([
      'package.json',
      'src/main.js',
      'src/pages/index.vue',
    ])
    // Every file in the preview: its Monaco language must be served
    for (const file of await files.all()) {
      await file.click()
      await page.waitForTimeout(300)
    }
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
