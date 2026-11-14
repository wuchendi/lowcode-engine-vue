import type { Frame, Page } from '@playwright/test'
import { expect, test } from '@playwright/test'
import { clearPage, openDesigner } from './designer'

const GROUPS = ['Element 组件', 'Vant 组件', 'Ant Design 组件']

interface Snippet {
  name: string
  modal: boolean
  parent: string | null
  schema: Record<string, unknown>
}

function snippets(page: Page): Promise<Snippet[]> {
  return page.evaluate((groups) => {
    const out: Snippet[] = []
    for (const [
      name,
      meta,
    ] of window.AliLowCodeEngine.material.getComponentMetasMap()) {
      const m = meta.getMetadata()
      if (!groups.includes(m.group) || !m.snippets?.length) continue
      const parents = m.configure?.component?.nestingRule?.parentWhitelist
      out.push({
        name,
        modal: !!m.configure?.component?.isModal,
        parent: Array.isArray(parents) ? parents[0] : null,
        schema: m.snippets[0].schema,
      })
    }
    return out
  }, GROUPS)
}

for (const vue of [2, 3] as const) {
  test(`renders the snippet of every Vue ${vue} material component`, async ({
    page,
  }) => {
    test.setTimeout(20 * 60_000)
    let current: string | null = null
    const errors = new Map<string, string[]>()
    const record = (text: string) => {
      if (current) errors.set(current, [...(errors.get(current) ?? []), text])
    }
    page.on('pageerror', (error) => record(error.message))
    page.on('console', (message) => {
      if (message.type() === 'error') record(message.text())
    })

    let frame: Frame
    const setup = async () => {
      frame = await openDesigner(page, vue)
      await clearPage(page)
    }
    await setup()
    const all = await snippets(page)
    expect(all.length).toBeGreaterThan(200)
    // Compared by content: an empty element can be as long as the placeholder
    const html = () =>
      frame.evaluate(() => document.querySelector('.lc-page')?.innerHTML)
    const baseline = await html()
    const waitFor = async (check: (html?: string) => boolean, ms: number) => {
      for (let t = 0; t < ms; t += 100) {
        if (check(await html())) return true
        await page.waitForTimeout(100)
      }
      return false
    }
    const byName = new Map(all.map((s) => [s.name, s]))

    const failed: string[] = []
    for (const snippet of all) {
      // Slot children render inside a slot of their main component only
      const parent = snippet.parent ? byName.get(snippet.parent) : undefined
      if (snippet.parent === 'Slot' || parent?.parent === 'Slot') continue
      current = snippet.name
      await waitFor((now) => now === baseline, 2000)
      const schema = parent
        ? {
            componentName: parent.name,
            props: parent.schema.props ?? {},
            children: [snippet.schema],
          }
        : snippet.schema
      const id = await page
        .evaluate((schema) => {
          const doc = window.AliLowCodeEngine.project.currentDocument
          return doc.insertNode(doc.root, schema, undefined, true)?.id
        }, schema)
        .catch((error: Error) => record(`insert: ${error.message}`))
      const rendered = await waitFor((now) => now !== baseline, 1500)
      await page.waitForTimeout(150)
      if (!id || (!snippet.modal && !rendered) || errors.has(snippet.name)) {
        failed.push(
          `${snippet.name}: ${errors.get(snippet.name)?.join('; ') ?? (id ? 'nothing rendered' : 'not inserted')}`,
        )
      }
      await page
        .evaluate(
          (id) =>
            window.AliLowCodeEngine.project.currentDocument
              .getNodeById(id)
              ?.remove(),
          id,
        )
        .catch(() => {})
      // A crashed render breaks the next ones: start over
      if (errors.has(snippet.name)) {
        current = null
        await setup()
      }
      current = null
    }
    expect(failed).toEqual([])
  })
}
