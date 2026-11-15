import {
  createReadStream,
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  watch,
} from 'node:fs'
import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import type { ServerResponse } from 'node:http'
import { createRequire } from 'node:module'
import {
  basename,
  dirname,
  extname,
  join,
  relative,
  resolve,
  sep,
} from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Connect, Plugin } from 'vite'
import { defineConfig } from 'vite'

const here = dirname(fileURLToPath(import.meta.url))
const packages = resolve(here, '../../packages')

/** A file of a dependency of the designer. */
function appFile(name: string, file: string) {
  const require = createRequire(import.meta.url)
  return join(dirname(require.resolve(`${name}/package.json`)), file)
}

/** Directory of a dependency of one of the renderer packages. */
function packageDir(owner: string, name: string) {
  const require = createRequire(join(packages, owner, 'package.json'))
  return dirname(require.resolve(`${name}/package.json`))
}

/**
 * Files served at runtime: the engine and its globals (React, Fusion,
 * lodash, moment), Vue, Monaco, the renderer/simulator bundles of each Vue
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
  const vendor: Record<string, [string, string]> = {
    'react.js': ['react', 'umd/react.production.min.js'],
    'react-dom.js': ['react-dom', 'umd/react-dom.production.min.js'],
    'prop-types.js': ['prop-types', 'prop-types.min.js'],
    'lodash.js': ['lodash', 'lodash.min.js'],
    'moment.js': ['moment', 'min/moment.min.js'],
    'next.js': ['@alifd/next', 'dist/next.min.js'],
    'theme-variables.css': ['@alifd/theme-lowcode-light', 'variables.css'],
    'theme.css': ['@alifd/theme-lowcode-light', 'dist/next.var.min.css'],
    'engine-core.js': ['@alilc/lowcode-engine', 'dist/js/engine-core.js'],
    'engine-core.css': ['@alilc/lowcode-engine', 'dist/css/engine-core.css'],
  }
  for (const [name, [pkg, file]] of Object.entries(vendor)) {
    files[`runtime/vendor/${name}`] = appFile(pkg, file)
  }
  files['runtime/monaco/vs'] = appFile('monaco-editor', 'min/vs')
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

/** Modules provided as globals by the vendor scripts in index.html. */
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
 * Resolves the page-provided modules to `module.exports = window.X`, both in
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

/**
 * Monaco languages the editors use: javascript / typescript / json / css in
 * the setters and the source panel; html (`.vue`), markdown and yaml in the
 * code generator preview.
 */
const MONACO_LANGUAGES = ['typescript', 'json', 'css', 'html']
const MONACO_TOKENIZERS = [
  'javascript',
  'typescript',
  'css',
  'html',
  'markdown',
  'yaml',
]

/**
 * Whether a file of a runtime directory is served and copied. Monaco loads
 * languages and translations on demand: only the used ones ship. The
 * designer loads `index.js`, `index.css`, `meta.js`, `assets.json` (read
 * by the code generator) and the screenshots of a material (not its `.min`
 * copies).
 */
function isPublished(route: string, file: string) {
  if (route === 'runtime/monaco/vs') {
    const [dir, name] = file.split('/')
    if (/^nls\.messages\./.test(file)) return false
    if (dir === 'language' && name) return MONACO_LANGUAGES.includes(name)
    if (dir === 'basic-languages' && name && !name.includes('.')) {
      return MONACO_TOKENIZERS.includes(name)
    }
    return true
  }
  if (route.startsWith('materials/')) {
    // assets.json: the code generator reads the imports (`codegen`) from it
    return /^(index\.(js|css)|meta\.js|assets\.json|screenshots(\/.*)?)$/.test(
      file,
    )
  }
  return true
}

/**
 * The fonts, images and icon scripts the engine, its plugins and the setters
 * load from alicdn are kept in `public/vendor`: their URLs point there.
 */
const vendored = new Set(readdirSync(resolve(here, 'public/vendor')))
/**
 * The CDN Monaco of the code editors (`@monaco-editor/loader` configured by
 * `@alilc/lowcode-plugin-base-monaco-editor`): the self-hosted one instead,
 * loaded when an editor first opens. Absolute: the workers resolve it too.
 */
const CDN_MONACO =
  /(["'`])https:\/\/g\.alicdn\.com\/code\/lib\/monaco-editor\/[\d.]+\/min\/vs\1/g
function localize(code: string) {
  return code
    .replace(CDN_MONACO, '(location.origin + "/runtime/monaco/vs")')
    .replace(
      /(?:https?:)?\/\/[\w.-]*alicdn\.com\/[^\s"'`()]*?\/([^/\s"'`()?#]+)(?=[\s"'`()?#])/g,
      (url, name: string) => (vendored.has(name) ? `/vendor/${name}` : url),
    )
}
/** Runtime files with alicdn URLs: the engine, its globals and engine-ext. */
const isLocalized = (route: string) =>
  /^runtime\/(vendor|engine-ext)\/.+\.(js|css)$/.test(route)

/** Localizes the bundled modules (also the pre-bundled dependencies). */
function localizeModules(): Plugin {
  const plugin = {
    name: 'designer:localize',
    transform(code: string) {
      return code.includes('alicdn.com') ? localize(code) : null
    },
  }
  return {
    ...plugin,
    config: () => ({
      optimizeDeps: { rolldownOptions: { plugins: [plugin] } },
    }),
  }
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
        const file = path.slice(route.length + 1)
        return isPublished(route, file) ? join(source, file) : undefined
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
    const route = Object.keys(files).find((key) => files[key] === file)
    if (route && isLocalized(route)) {
      res.end(localize(readFileSync(file, 'utf8')))
    } else {
      createReadStream(file).pipe(res)
    }
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
        if (isLocalized(route)) {
          await writeFile(target, localize(await readFile(source, 'utf8')))
        } else {
          await cp(source, target, {
            recursive: true,
            filter: (path) =>
              path === source ||
              isPublished(route, relative(source, path).split(sep).join('/')),
          })
        }
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
  plugins: [
    globals(GLOBALS),
    localizeModules(),
    serveRuntime(mode === 'development'),
  ],
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
