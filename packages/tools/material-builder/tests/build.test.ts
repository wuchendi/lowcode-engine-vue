import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { expect, test } from 'vitest'
import { buildMaterial } from '../src/build'

const fixture = (name: string) =>
  fileURLToPath(new URL(`./fixtures/${name}`, import.meta.url))

test('reads Vue 2 from the page when imported through its runtime build', async () => {
  const root = fixture('vue2-runtime')
  await buildMaterial({ root, clean: true })
  const code = await readFile(`${root}/dist/index.js`, 'utf8')
  expect(code).toContain('["Vue"]')
  expect(code).not.toContain('Vue.js v2')
}, 60_000)
