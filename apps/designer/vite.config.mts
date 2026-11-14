import { createReadStream, existsSync, statSync, watch } from 'node:fs'
import { cp, mkdir, writeFile } from 'node:fs/promises'
import type { ServerResponse } from 'node:http'
import { createRequire } from 'node:module'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Connect, Plugin } from 'vite'
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
function runtimeFiles(dev: boolean): Record<string, string> {
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
  const ext = join(packages, 'plugins', 'engine-ext-vue', 'dist')
  files['runtime/engine-ext/engine-ext.js'] = join(ext, 'engine-ext.js')
  files['runtime/engine-ext/engine-ext.css'] = join(ext, 'engine-ext.css')
  for (const version of ['vue2', 'vue3']) {
    const dist = join(packages, 'renderer', version, 'dist')
    files[`runtime/${version}/renderer.js`] = join(dist, 'renderer.umd.js')
    files[`runtime/${version}/simulator.js`] = join(dist, 'simulator.umd.js')
    files[`runtime/${version}/simulator.css`] = dev
      ? join(packages, 'renderer/core/src/simulator/simulator.css')
      : join(dist, 'simulator.css')
  }
  for (const material of [
    'antd-vue1',
    'element-ui',
    'vant2',
    'antd-vue4',
    'element-plus',
    'vant4',
  ]) {
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

/** Content types of the runtime files that are not scripts. */
const CONTENT_TYPES: Record<string, string> = {
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
}

const RELOAD_PATH = '/__designer_reload'
/** Written by a development build once its files are written. */
const BUILD_STAMP = resolve(here, 'dist/.build-stamp')

/**
 * Development mode (`pnpm dev`): reloads the open pages through server-sent
 * events when the designer build or a served package build changes.
 */
function watchForReload(paths: string[], send: () => void) {
  let timer: ReturnType<typeof setTimeout> | undefined
  const changed = () => {
    clearTimeout(timer)
    timer = setTimeout(send, 300)
  }
  for (const path of paths) {
    if (existsSync(path) && statSync(path).isDirectory()) {
      watch(path, { recursive: true }, changed)
    } else if (existsSync(dirname(path))) {
      // Ignore the removal when a build empties its output
      watch(dirname(path), (_event, name) => {
        if (name === basename(path) && existsSync(path)) changed()
      })
    }
  }
}

/**
 * Serves the runtime files: by the dev server and, in development mode, by
 * the preview server (straight from the packages, with page reloads); copied
 * into the output by production builds.
 */
function serveRuntime(dev: boolean): Plugin {
  const files = runtimeFiles(dev)
  const lookup = (url: string) => {
    const path = decodeURIComponent(url.split('?')[0]).replace(/^\//, '')
    for (const [route, source] of Object.entries(files)) {
      if (path === route) return source
      if (path.startsWith(`${route}/`)) {
        return join(source, path.slice(route.length + 1))
      }
    }
  }
  const serveFiles: Connect.NextHandleFunction = (req, res, next) => {
    const file = req.url && lookup(req.url)
    if (!file || !existsSync(file)) return next()
    res.setHeader(
      'Content-Type',
      CONTENT_TYPES[extname(file)] ?? 'text/javascript',
    )
    createReadStream(file).pipe(res)
  }
  return {
    name: 'designer:runtime',
    configureServer(server) {
      server.middlewares.use(serveFiles)
    },
    configurePreviewServer(server) {
      if (!dev) return
      const clients = new Set<ServerResponse>()
      server.middlewares.use(RELOAD_PATH, (req, res) => {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
        })
        clients.add(res)
        req.on('close', () => clients.delete(res))
      })
      server.middlewares.use(serveFiles)
      watchForReload(
        [
          BUILD_STAMP,
          ...Object.values(files).filter((file) => file.startsWith(packages)),
        ],
        () => {
          for (const client of clients) client.write('data: reload\n\n')
        },
      )
    },
    transformIndexHtml(html) {
      if (!dev) return html
      return html.replace(
        '</body>',
        `<script>new EventSource('${RELOAD_PATH}').onmessage = () => location.reload()</script></body>`,
      )
    },
    async writeBundle(options) {
      // The development preview serves them from the packages
      if (dev) return writeFile(BUILD_STAMP, String(Date.now()))
      const outDir = options.dir ?? resolve(here, 'dist')
      for (const [route, source] of Object.entries(files)) {
        const target = join(outDir, route)
        await mkdir(dirname(target), { recursive: true })
        await cp(source, target, { recursive: true })
      }
    },
  }
}

export default defineConfig(({ mode }) => ({
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
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true },
      // Only dependencies (Fusion) use Sass; their deprecation warnings
      // flood every build
      scss: {
        quietDeps: true,
        silenceDeprecations: [
          'import',
          'global-builtin',
          'if-function',
          'slash-div',
        ],
      },
    },
  },
  plugins: [globals(GLOBALS), serveRuntime(mode === 'development')],
  build: {
    // `pnpm dev` builds in development mode
    minify: mode !== 'development',
    rolldownOptions: {
      input: {
        index: resolve(here, 'index.html'),
        preview: resolve(here, 'preview.html'),
      },
    },
  },
}))
