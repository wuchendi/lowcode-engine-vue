import { readFile } from 'node:fs/promises'
import { expect, test } from '@playwright/test'
import { clearPage, openDesigner } from './designer'

const MARK = 'Exported button'

test('exports a project and imports it into an empty designer', async ({
  browser,
}) => {
  // Design: a page with one button, exported
  const design = await browser.newPage()
  const frame = await openDesigner(design, 3)
  await clearPage(design)
  await design.evaluate((text) => {
    const doc = window.AliLowCodeEngine.project.currentDocument
    doc.insertNode(doc.root, {
      componentName: 'VanButton',
      props: { text },
    })
  }, MARK)
  await expect(frame.locator('.lc-page')).toContainText(MARK)
  const [download] = await Promise.all([
    design.waitForEvent('download'),
    design.locator('.lc-top-area button', { hasText: '导出' }).click(),
  ])
  const file = test.info().outputPath('project.json')
  await download.saveAs(file)
  const exported = JSON.parse(await readFile(file, 'utf8'))
  expect(exported).toMatchObject({
    format: 'lowcode-engine-vue-project',
    vue: 3,
  })
  await design.close()

  // Import into another browser context (its own localStorage)
  const context = await browser.newContext()
  const page = await context.newPage()
  await openDesigner(page, 3)
  const [chooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('.lc-top-area button', { hasText: '导入' }).click(),
  ])
  await chooser.setFiles(file)
  await Promise.all([
    page.waitForEvent('load'),
    page.locator('.next-dialog-footer button', { hasText: '确定' }).click(),
  ])
  const imported = await openDesigner(page, 3)
  await expect(imported.locator('.lc-page')).toContainText(MARK)
  await context.close()
})

test('refuses a project of the other Vue version', async ({ page }) => {
  await openDesigner(page, 2)
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('.lc-top-area button', { hasText: '导出' }).click(),
  ])
  await openDesigner(page, 3)
  const [chooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('.lc-top-area button', { hasText: '导入' }).click(),
  ])
  await chooser.setFiles(await download.path())
  await expect(page.getByText('这是 Vue 2 的项目')).toBeVisible()
})

test('previews the saved project', async ({ page }) => {
  const frame = await openDesigner(page, 3)
  await clearPage(page)
  await page.evaluate((text) => {
    const doc = window.AliLowCodeEngine.project.currentDocument
    doc.insertNode(doc.root, { componentName: 'VanButton', props: { text } })
  }, MARK)
  await expect(frame.locator('.lc-page')).toContainText(MARK)
  const [preview] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('.lc-top-area button', { hasText: '预览' }).click(),
  ])
  await expect(preview.locator('.lowcode-preview')).toContainText(MARK)
})
