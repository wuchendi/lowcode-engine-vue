import { existsSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import type { Plugin } from 'vite'

export interface ExtraLib {
  path: string
  content: string
}

/** Typings file of a package resolved from `from` (a package directory). */
function typings(from: string, name: string) {
  const require = createRequire(join(from, 'package.json'))
  const manifest = require.resolve(`${name}/package.json`)
  const pkg = JSON.parse(readFileSync(manifest, 'utf8'))
  const dir = dirname(manifest)
  const file = join(dir, pkg.types ?? pkg.typings)
  return { dir, file, content: readFileSync(file, 'utf8') }
}

/**
 * Declaration chunks a typings file imports relatively (`./router-x.mjs` ->
 * `router-x.d.mts`), keyed by their path relative to the typings file.
 */
function chunks(file: string, content: string, found = new Map<string, string>()) {
  for (const [, spec] of content.matchAll(/from\s+["'](\.\/[^"']+)\.m?js["']/g)) {
    for (const ext of ['.d.mts', '.d.ts']) {
      const name = `${spec.slice(2)}${ext}`
      const path = join(dirname(file), name)
      if (found.has(name) || !existsSync(path)) continue
      const chunk = readFileSync(path, 'utf8')
      found.set(name, chunk)
      chunks(path, chunk, found)
    }
  }
  return found
}

/**
 * The typings of the installed Vue 3 (`vue-3`) and vue-router 5
 * (`vue-router-5`), each registered as `node_modules/<name>/index.d.ts` so
 * their imports of each other resolve in Monaco.
 */
export function readVue3Types(root: string = join(import.meta.dirname, '..')): ExtraLib[] {
  const vue = typings(root, 'vue-3')
  const runtimeDom = typings(vue.dir, '@vue/runtime-dom')
  const runtimeCore = typings(runtimeDom.dir, '@vue/runtime-core')
  const reactivity = typings(runtimeCore.dir, '@vue/reactivity')
  const shared = typings(runtimeCore.dir, '@vue/shared')
  const router = typings(root, 'vue-router-5')
  return Object.entries({
    vue,
    '@vue/runtime-dom': runtimeDom,
    '@vue/runtime-core': runtimeCore,
    '@vue/reactivity': reactivity,
    '@vue/shared': shared,
    'vue-router': router,
  }).flatMap(([name, { file, content }]) => [
    { path: `file:///node_modules/${name}/index.d.ts`, content },
    ...[...chunks(file, content)].map(([chunk, chunkContent]) => ({
      path: `file:///node_modules/${name}/${chunk}`,
      content: chunkContent,
    })),
  ])
}

const ID = 'virtual:vue3-types'

/** `virtual:vue3-types`: the Vue 3 typings read at build time. */
export function vue3Types(): Plugin {
  return {
    name: 'vue3-types',
    resolveId: (id) => (id === ID ? `\0${ID}` : null),
    load: (id) =>
      id === `\0${ID}`
        ? `export default ${JSON.stringify(readVue3Types())}`
        : null,
  }
}
