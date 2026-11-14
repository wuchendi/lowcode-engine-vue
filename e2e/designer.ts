import type { Frame, Page } from '@playwright/test'

export type VueVersion = 2 | 3

/** Errors of the designer page and its simulator. */
export function collectErrors(page: Page) {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  return errors
}

/** Opens the designer in Chinese and waits for the canvas to render. */
export async function openDesigner(
  page: Page,
  vue: VueVersion,
): Promise<Frame> {
  await page.addInitScript(() =>
    localStorage.setItem(
      'ali-lowcode-config',
      JSON.stringify({ locale: 'zh-CN' }),
    ),
  )
  await page.goto(`/?vue=${vue}`)
  const element = await page.waitForSelector(
    'iframe.lc-simulator-content-frame',
  )
  const frame = await element.contentFrame()
  if (!frame) throw new Error('No simulator frame')
  await frame.waitForSelector('.lc-page')
  await page.waitForFunction(
    () => window.AliLowCodeEngine?.project.currentDocument?.root,
  )
  return frame
}

/** Removes every node of the current page. */
export async function clearPage(page: Page) {
  await page.evaluate(() => {
    const { root } = window.AliLowCodeEngine.project.currentDocument
    const children: { remove(): void }[] = []
    root.children.forEach((child: { remove(): void }) => children.push(child))
    for (const child of children) child.remove()
  })
}

declare global {
  interface Window {
    // The engine's and Monaco's global APIs
    AliLowCodeEngine: any
    monaco: any
  }
}
