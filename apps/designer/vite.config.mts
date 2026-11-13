import { createReadStream, existsSync } from 'node:fs'
import { cp, mkdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

const here = dirname(fileURLToPath(import.meta.url))
const packages = resolve(here, '../../packages')

/** Directory of a dependency of one of the renderer packages. */
function packageDir(owner: string, name: string) {
  const require = createRequire(join(packages, owner, 'package.json'))
  return dirname(require.resolve(`${name}/package.json`))
}

/**
 * Files served at runtime: Vue, the renderer/simulator bundles of each Vue
 * version and the workspace materials. Served from the workspace in dev and
 * copied into the output on build.
 */
function runtimeFiles(): Record<string, string> {
  const files: Record<string, string> = {
    'runtime/vue2/vue.js': join(
      packageDir('renderer/vue2', 'vue'),
      'dist/vue.runtime.js',
    ),
    'runtime/vue3/vue.js': join(
      packageDir('renderer/vue3', 'vue'),
      'dist/vue.runtime.global.js',
    ),
  }
  for (const version of ['vue2', 'vue3']) {
    const dist = join(packages, 'renderer', version, 'dist')
    files[`runtime/${version}/renderer.js`] = join(dist, 'renderer.umd.js')
    files[`runtime/${version}/simulator.js`] = join(dist, 'simulator.umd.js')
    files[`runtime/${version}/simulator.css`] = join(dist, 'simulator.css')
  }
  for (const material of ['antd-vue1', 'element-ui', 'vant2']) {
    files[`materials/${material}`] = join(
      packages,
      'materials',
      material,
      'dist',
    )
  }
  return files
}

/** Modules provided as globals by the CDN scripts in index.html. */
const GLOBALS: Record<string, string> = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  lodash: '_',
  moment: 'moment',
  '@alifd/next': 'Next',
  '@alilc/lowcode-engine': 'AliLowCodeEngine',
  '@alilc/lowcode-editor-core': 'AliLowCodeEngine.common.editorCabin',
  '@alilc/lowcode-designer': 'AliLowCodeEngine.common.designerCabin',
  '@alilc/lowcode-editor-skeleton': 'AliLowCodeEngine.common.skeletonCabin',
  '@cdlab996/lowcode-engine-ext-vue': 'AliLowCodeEngineExt',
}

const GLOBAL_PREFIX = '\0designer-global:'

/**
 * Resolves the CDN-provided modules to `module.exports = window.X`, both in
 * the app and in pre-bundled dependencies, so default and named imports
 * read the page globals and the engine stays a single instance.
 */
function globals(map: Record<string, string>): Plugin {
  const plugin = {
    name: 'designer:globals',
    resolveId(id: string) {
      return Object.prototype.hasOwnProperty.call(map, id)
        ? GLOBAL_PREFIX + id
        : null
    },
    load(id: string) {
      if (!id.startsWith(GLOBAL_PREFIX)) return null
      const path = map[id.slice(GLOBAL_PREFIX.length)]
        .split('.')
        .map((key) => `[${JSON.stringify(key)}]`)
        .join('')
      return `module.exports = window${path}`
    },
  }
  return {
    ...plugin,
    enforce: 'pre',
    config: () => ({
      optimizeDeps: {
        exclude: Object.keys(map),
        rolldownOptions: { plugins: [plugin] },
      },
    }),
  }
}

function serveRuntime(): Plugin {
  const files = runtimeFiles()
  const lookup = (url: string) => {
    const path = decodeURIComponent(url.split('?')[0]).replace(/^\//, '')
    for (const [route, source] of Object.entries(files)) {
      if (path === route) return source
      if (path.startsWith(`${route}/`)) {
        return join(source, path.slice(route.length + 1))
      }
    }
  }
  return {
    name: 'designer:runtime',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = req.url && lookup(req.url)
        if (!file || !existsSync(file)) return next()
        res.setHeader(
          'Content-Type',
          file.endsWith('.css') ? 'text/css' : 'text/javascript',
        )
        createReadStream(file).pipe(res)
      })
    },
    async writeBundle(options) {
      const outDir = options.dir ?? resolve(here, 'dist')
      for (const [route, source] of Object.entries(files)) {
        const target = join(outDir, route)
        await mkdir(dirname(target), { recursive: true })
        await cp(source, target, { recursive: true })
      }
    },
  }
}

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(here, 'src') },
      // Webpack-era styles of the official plugins import packages as `~pkg`
      { find: /^~(?=[@\w])/, replacement: '' },
      // @alilc/lowcode-utils (used by the official plugins) needs Node's events
      {
        find: /^events$/,
        replacement: createRequire(import.meta.url).resolve('events/'),
      },
    ],
  },
  // Some dependencies of the official plugins read Node's `global`
  define: { global: 'window' },
  // The plugins and setters are React components rendered by the engine's React
  oxc: { jsx: { runtime: 'classic' } },
  css: { preprocessorOptions: { less: { javascriptEnabled: true } } },
  plugins: [globals(GLOBALS), serveRuntime()],
  build: {
    rolldownOptions: {
      input: {
        index: resolve(here, 'index.html'),
        preview: resolve(here, 'preview.html'),
      },
    },
  },
})
