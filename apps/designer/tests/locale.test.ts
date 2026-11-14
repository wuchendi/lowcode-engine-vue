import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = join(dirname(fileURLToPath(import.meta.url)), '../../..')

/** `zh-CN.json` files of the designer and the plugins. */
function localeDirs(dir: string): string[] {
  const found: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) found.push(...localeDirs(path))
    else if (entry.name === 'zh-CN.json') found.push(dir)
  }
  return found
}

const dirs = [
  ...localeDirs(join(root, 'apps/designer/src')),
  ...localeDirs(join(root, 'packages/plugins')),
]
const read = (dir: string, locale: string) =>
  JSON.parse(readFileSync(join(dir, `${locale}.json`), 'utf8'))

/** Leaf paths and values of nested messages. */
function leaves(value: unknown, path = ''): [string, unknown][] {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return Object.entries(value).flatMap(([key, child]) =>
      leaves(child, path ? `${path}.${key}` : key),
    )
  }
  return [[path, value]]
}

describe('locale files', () => {
  it('cover the designer and every plugin', () => {
    const owners = new Set(
      dirs.map((dir) => relative(root, dir).split('/').slice(0, 3).join('/')),
    )
    expect([...owners].sort()).toEqual([
      'apps/designer/src',
      'packages/plugins/code-generator',
      'packages/plugins/engine-ext-vue',
      'packages/plugins/vue-code-editor',
    ])
  })

  it.each(dirs.map((dir) => [relative(root, dir), dir]))(
    '%s has the same keys in both languages',
    (_name, dir) => {
      const zh = leaves(read(dir, 'zh-CN'))
      const en = leaves(read(dir, 'en-US'))
      expect(en.map(([key]) => key).sort()).toEqual(
        zh.map(([key]) => key).sort(),
      )
      for (const [key, value] of en) {
        expect(String(value), key).not.toMatch(/[一-鿿]/)
      }
      // The engine parses them as ICU messages: no tags, balanced braces
      for (const [key, value] of [...zh, ...en]) {
        const text = String(value)
        expect(text, key).not.toMatch(/<\/?[a-z][^>]*>/i)
        expect(text.split('{').length, key).toBe(text.split('}').length)
      }
    },
  )
})
