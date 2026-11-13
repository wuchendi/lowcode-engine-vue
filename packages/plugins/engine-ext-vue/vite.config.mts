import { createRequire } from 'node:module'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

/** Libraries the designer page provides as globals. */
const GLOBALS: Record<string, string> = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  moment: 'moment',
  lodash: '_',
  '@alifd/next': 'Next',
  '@alilc/lowcode-engine': 'AliLowCodeEngine',
}

const GLOBAL_PREFIX = '\0engine-ext-global:'

/**
 * Resolves the page globals to `module.exports = window.X`, so default,
 * named and CommonJS imports of bundled dependencies all read the globals.
 */
function globals(map: Record<string, string>): Plugin {
  return {
    name: 'engine-ext:globals',
    enforce: 'pre',
    resolveId(id) {
      if (Object.prototype.hasOwnProperty.call(map, id))
        return GLOBAL_PREFIX + id
      // lodash / lodash-es and their public per-method modules read `_`
      const lodash = id.match(/^lodash(?:-es)?(?:\/([a-zA-Z]\w*)(?:\.js)?)?$/)
      return lodash
        ? `${GLOBAL_PREFIX}_${lodash[1] ? `.${lodash[1]}` : ''}`
        : null
    },
    load(id) {
      if (!id.startsWith(GLOBAL_PREFIX)) return null
      const key = id.slice(GLOBAL_PREFIX.length)
      const path = (map[key] ?? key)
        .split('.')
        .map((part) => `[${JSON.stringify(part)}]`)
        .join('')
      return `module.exports = window${path}`
    },
  }
}

export default defineConfig({
  plugins: [globals(GLOBALS)],
  // The setters are React components rendered by the engine's React 16
  // mixed-setter uses the engine's mobx through legacy decorators
  oxc: { jsx: { runtime: 'classic' }, decorator: { legacy: true } },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    global: 'window',
  },
  resolve: {
    alias: [
      // @alilc/lowcode-utils needs Node's events
      {
        find: /^events$/,
        replacement: createRequire(import.meta.url).resolve('events/'),
      },
      { find: /^~(?=[@\w])/, replacement: '' },
    ],
  },
  css: { preprocessorOptions: { less: { javascriptEnabled: true } } },
  build: {
    target: 'es2018',
    lib: {
      entry: './src/index.tsx',
      formats: ['iife'],
      // The entry assigns `window.AliLowCodeEngineExt` itself
      name: '__lowcodeEngineExt',
      fileName: () => 'engine-ext.js',
      cssFileName: 'engine-ext',
    },
    rolldownOptions: { output: { exports: 'named' } },
  },
})
