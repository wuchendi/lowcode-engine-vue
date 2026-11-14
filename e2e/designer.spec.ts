import { expect, test } from '@playwright/test'
import { collectErrors, openDesigner } from './designer'

for (const vue of [2, 3] as const) {
  test.describe(`Vue ${vue}`, () => {
    test('loads the designer and renders the page', async ({ page }) => {
      const errors = collectErrors(page)
      const frame = await openDesigner(page, vue)
      await expect(frame.locator('.lc-page')).not.toBeEmpty()
      const runtime = await frame.evaluate(() => window.Vue?.version)
      expect(runtime).toMatch(new RegExp(`^${vue}\\.`))
      expect(errors).toEqual([])
    })

    test('loads nothing from third-party hosts', async ({ page, baseURL }) => {
      const external = new Set<string>()
      const { origin } = new URL(baseURL ?? '')
      page.on('request', (request) => {
        // Images of the page being designed are its content
        const canvas = request.frame() !== page.mainFrame()
        if (canvas && request.resourceType() === 'image') return
        const url = new URL(request.url())
        if (/^https?:$/.test(url.protocol) && url.origin !== origin) {
          external.add(`${url.origin}${url.pathname}`)
        }
      })
      await openDesigner(page, vue)
      await page.evaluate(() =>
        window.AliLowCodeEngine.skeleton.showPanel('codeEditor'),
      )
      await page.waitForTimeout(2000)
      expect([...external]).toEqual([])
    })

    test('type-checks the page code against the Vue typings', async ({
      page,
    }) => {
      await openDesigner(page, vue)
      await page.evaluate(() =>
        window.AliLowCodeEngine.skeleton.showPanel('codeEditor'),
      )
      await page.waitForFunction(() =>
        window.monaco?.editor
          .getModels()
          .some((model: { uri: { path: string } }) =>
            model.uri.path.startsWith('/node_modules/vue/'),
          ),
      )
      const code = [
        "import { computed, ref } from 'vue'",
        'const n = ref(1)',
        'const text: string = computed(() => n.value * 2).value',
        'export { text }',
      ].join('\n')
      const diagnostics = await page.evaluate(async (code) => {
        const { monaco } = window
        const uri = monaco.Uri.parse('file:///e2e.ts')
        const model = monaco.editor.createModel(code, 'typescript', uri)
        const worker = await monaco.languages.typescript.getTypeScriptWorker()
        const client = await worker(uri)
        const found = await client.getSemanticDiagnostics(uri.toString())
        model.dispose()
        return found.map((d: { code: number }) => d.code)
      }, code)
      // Only the deliberate number -> string error
      expect(diagnostics).toEqual([2322])
    })
  })
}

declare global {
  interface Window {
    Vue?: { version: string }
  }
}
