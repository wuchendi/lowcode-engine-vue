import { expect, test } from '@playwright/test'
import { clearPage, openDesigner } from './designer'

for (const vue of [2, 3] as const) {
  test(`Vue ${vue}: selects a node in the canvas and edits it with a setter`, async ({
    page,
  }) => {
    const frame = await openDesigner(page, vue)
    await clearPage(page)
    await page.evaluate(() => {
      const doc = window.AliLowCodeEngine.project.currentDocument
      doc.insertNode(doc.root, {
        componentName: 'VanButton',
        props: { text: 'Before' },
      })
    })
    const button = frame.locator('.lc-page .van-button')
    await expect(button).toContainText('Before')

    // Select by clicking in the canvas
    await button.click()
    await expect
      .poll(() =>
        page.evaluate(() =>
          window.AliLowCodeEngine.project.currentDocument.selection
            .getNodes()
            .map((node: { componentName: string }) => node.componentName),
        ),
      )
      .toEqual(['VanButton'])

    // The history merges the changes of one second into one step
    await page.waitForTimeout(1200)

    // Edit the text with its StringSetter
    const input = page.locator('.lc-settings-main input[value="Before"]')
    await input.fill('After')
    await expect(button).toContainText('After')

    await page.waitForTimeout(1200)

    // Undo restores it
    await page.evaluate(() =>
      window.AliLowCodeEngine.project.currentDocument.history.back(),
    )
    await expect(button).toContainText('Before')
  })
}
