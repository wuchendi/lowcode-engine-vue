import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'
import { expect, test } from 'vitest'
import { buildMaterial } from '../src/build'

const root = fileURLToPath(new URL('./fixtures/screenshots', import.meta.url))

test('ships the screenshots and resolves them against meta.js', async () => {
  await buildMaterial({ root, clean: true })
  expect(existsSync(`${root}/dist/screenshots/button.webp`)).toBe(true)

  const code = await readFile(`${root}/dist/meta.js`, 'utf8')
  const sandbox: Record<string, unknown> = {
    URL,
    document: { currentScript: { src: 'https://cdn.test/material/meta.js' } },
  }
  sandbox.window = sandbox
  vm.createContext(sandbox)
  vm.runInContext(code, sandbox)
  const library = Object.entries(sandbox).find(([key]) =>
    key.endsWith('Meta'),
  )?.[1] as { components: { snippets: { screenshot: string }[] }[] }
  expect(library.components[0].snippets.map((s) => s.screenshot)).toEqual([
    'https://cdn.test/material/screenshots/button.webp',
    'https://cdn.test/a.png',
  ])
}, 60_000)
