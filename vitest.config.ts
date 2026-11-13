import { fileURLToPath } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitest/config'

const src = (path: string) =>
  fileURLToPath(new URL(`./packages/${path}`, import.meta.url))

const exact = (name: string, path: string) => ({
  find: new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`),
  replacement: src(path),
})

// Each line resolves its own Vue: tests run against package sources, and the
// workspace packages are aliased to their `src` entry.
export default defineConfig({
  test: {
    projects: [
      {
        resolve: {
          alias: [
            exact('@cdlab996/lowcode-hooks2.7', 'vue2-7/hooks/src/index.ts'),
            exact('@cdlab996/lowcode-utils2.7', 'vue2-7/utils/src/index.ts'),
            exact(
              '@cdlab996/lowcode-vue-renderer2.7',
              'vue2-7/renderer/src/index.ts',
            ),
          ],
          dedupe: ['vue'],
        },
        test: {
          name: 'vue2-7',
          root: src('vue2-7'),
          environment: 'jsdom',
          include: ['*/tests/**/*.test.ts'],
        },
      },
      {
        plugins: [vueJsx()],
        resolve: {
          alias: [
            exact('@knxcloud/lowcode-hooks', 'vue3/hooks/src/index.ts'),
            exact('@knxcloud/lowcode-utils', 'vue3/utils/src/index.ts'),
            exact(
              '@knxcloud/lowcode-data-source',
              'vue3/data-source/src/index.ts',
            ),
            exact(
              '@knxcloud/lowcode-vue-renderer',
              'vue3/renderer/src/index.ts',
            ),
          ],
          dedupe: ['vue'],
        },
        test: {
          name: 'vue3',
          root: src('vue3'),
          globals: true,
          environment: 'jsdom',
          include: ['*/__tests__/**/*.spec.{ts,tsx}'],
        },
      },
    ],
  },
})
