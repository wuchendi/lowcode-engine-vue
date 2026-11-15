import type { Locator, Page } from '@playwright/test'
import { expect, test } from '@playwright/test'
import { openDesigner } from './designer'

/** The dialog box is centered in the viewport (within a few pixels). */
async function expectCentered(page: Page, dialog: Locator) {
  await expect(dialog).toBeVisible()
  // Wait for the opening animation
  await page.waitForTimeout(500)
  const box = (await dialog.boundingBox())!
  const viewport = page.viewportSize()!
  expect(Math.abs(box.x + box.width / 2 - viewport.width / 2)).toBeLessThan(4)
  expect(Math.abs(box.y + box.height / 2 - viewport.height / 2)).toBeLessThan(
    viewport.height / 4,
  )
}

test('the new page dialog is centered', async ({ page }) => {
  await openDesigner(page, 3)
  await page.evaluate(() =>
    window.AliLowCodeEngine.skeleton.showPanel('pagesPane'),
  )
  await page.getByRole('button', { name: '新建页面' }).click()
  await expectCentered(page, page.locator('.next-dialog').last())
})

test('the code generator dialog is centered and shows the code', async ({
  page,
}) => {
  await openDesigner(page, 3)
  await page.locator('.lc-top-area button', { hasText: '出码' }).click()
  const dialog = page.locator('.next-dialog').filter({
    has: page.locator('.lowcode-code-generator'),
  })
  await expectCentered(page, dialog)
  // Every component of the page resolves to an import
  await expect(dialog.getByText('has no import')).toHaveCount(0)
  const editor = dialog.locator('.monaco-editor').first()
  await expect(editor).toBeVisible()
  expect((await editor.boundingBox())!.height).toBeGreaterThan(300)
})
