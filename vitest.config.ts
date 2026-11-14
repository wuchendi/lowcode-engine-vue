import { realpathSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const path = (p: string) => fileURLToPath(new URL(p, import.meta.url))
const real = (p: string) => realpathSync(path(p))

/**
 * One project per Vue version. Both run the core suites against their own
 * `vue` / `vue-router` and adapter; each also runs its adapter's suites.
 */
const project = (version: 'vue2' | 'vue3') => ({
  resolve: {
    alias: [
      {
        find: /^vue$/,
        replacement: real(`./packages/renderer/${version}/node_modules/vue`),
      },
      {
        find: /^vue-router$/,
        replacement: real(
          `./packages/renderer/${version}/node_modules/vue-router`,
        ),
      },
      {
        find: /^@cdlab996\/lowcode-vue-core$/,
        replacement: path('./packages/renderer/core/src/index.ts'),
      },
    ],
    dedupe: ['vue', 'vue-router'],
  },
  test: {
    name: version,
    environment: 'jsdom',
    include: [
      'packages/renderer/core/tests/**/*.test.ts',
      `packages/renderer/${version}/tests/**/*.test.ts`,
    ],
    setupFiles: [path(`./packages/renderer/core/tests/setup/${version}.ts`)],
  },
})

/** Pure modules of the designer plugins. */
const plugins = {
  test: {
    name: 'plugins',
    environment: 'node',
    include: ['packages/plugins/*/tests/**/*.test.ts'],
  },
}

/** Pure modules of the designer app. */
const designer = {
  test: {
    name: 'designer',
    environment: 'node',
    include: ['apps/designer/tests/**/*.test.ts'],
  },
}

/** Node tooling: the material builder and the project scaffold. */
const tools = {
  test: {
    name: 'tools',
    environment: 'node',
    include: ['packages/tools/*/tests/**/*.test.ts'],
  },
}

export default defineConfig({
  test: {
    projects: [project('vue2'), project('vue3'), plugins, designer, tools],
  },
})
