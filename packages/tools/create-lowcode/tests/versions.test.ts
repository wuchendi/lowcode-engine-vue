import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, test } from 'vitest'

const file = (path: string) =>
  readFileSync(fileURLToPath(new URL(path, import.meta.url)), 'utf8')

/** `catalogs.<catalog>.<name>` of pnpm-workspace.yaml. */
function catalogVersion(catalog: string, name: string) {
  const yaml = file('../../../../pnpm-workspace.yaml')
  const section = yaml
    .split(/\n {2}(?=[\w"-]+:\n)/)
    .find((block) => block.startsWith(`${catalog}:`))
  const line = section
    ?.split('\n')
    .find((l) => l.trim().replace(/"/g, '').startsWith(`${name}:`))
  return line?.split(':').pop()?.trim()
}

const builder = JSON.parse(file('../../material-builder/package.json'))

describe.each([
  [2, 'vue2-7'],
  [3, 'vue3'],
])('Vue %i template', (version, vueCatalog) => {
  const deps = JSON.parse(file(`../template/vue${version}/package.json`))
    .devDependencies as Record<string, string>

  test('uses the workspace versions', () => {
    expect(deps.vite).toBe(catalogVersion('dev', 'vite'))
    expect(deps['@biomejs/biome']).toBe(catalogVersion('dev', '@biomejs/biome'))
    expect(deps['@alilc/lowcode-types']).toBe(
      catalogVersion('shared', '@alilc/lowcode-types'),
    )
    expect(deps['@cdlab996/lowcode-material-builder']).toBe(
      `^${builder.version}`,
    )
    expect(deps.vue).toBe(catalogVersion(vueCatalog, 'vue'))
  })
})
