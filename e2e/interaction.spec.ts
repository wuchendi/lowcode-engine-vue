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

for (const vue of [2, 3] as const) {
  test(`Vue ${vue}: picks a Vant icon with the icon setter`, async ({
    page,
  }) => {
    const frame = await openDesigner(page, vue)
    await clearPage(page)
    await page.evaluate(() => {
      const doc = window.AliLowCodeEngine.project.currentDocument
      const node = doc.insertNode(doc.root, {
        componentName: 'VanButton',
        props: { text: 'Icon' },
      })
      node.select()
    })
    // The setter of the materials' `icon` props comes from engine-ext-vue,
    // with the icon set of the library and its font
    await page.locator('.lc-settings-main .lc-icon-setter input').click()
    const icons = page.locator('.lowcode-icon-list li i.van-icon')
    await expect(icons.first()).toBeVisible()
    expect(await icons.count()).toBeGreaterThan(100)
    expect(
      await icons
        .first()
        .evaluate((el) => document.fonts.check('14px vant-icon') && !!el),
    ).toBe(true)
    await page.locator('.lowcode-icon-list li i.van-icon-plus').click()
    await expect(
      frame.locator('.lc-page .van-button .van-icon-plus'),
    ).toBeVisible()
  })
}
