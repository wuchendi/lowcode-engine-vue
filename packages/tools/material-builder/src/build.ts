import { existsSync } from 'node:fs'
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative, resolve } from 'node:path'
import type { InlineConfig, Plugin, PluginOption, Rolldown } from 'vite'
import { build, loadConfigFromFile, preview } from 'vite'
import { createAssets } from './assets'
import type { CodegenManifest } from './codegen'
import { readCodegenManifest } from './codegen'
import { writeMetaEntry } from './entries'
import type {
  LowcodeAssetsConfig,
  LowcodeMaterialOptions,
  LowcodeMaterialPlugin,
  LowcodeNpmInfo,
} from './options'
import { PLUGIN_NAME } from './options'

/** Globals of the canvas and preview pages: Vue, the renderer API and React. */
const DEFAULT_EXTERNALS: Record<string, string> = {
  vue: 'Vue',
  // @vitejs/plugin-vue2 aliases `vue` to the runtime build
  'vue/dist/vue.runtime.esm.js': 'Vue',
  react: 'React',
  'react-dom': 'ReactDOM',
  '@cdlab996/lowcode-vue2': 'LCVueRenderer',
  '@cdlab996/lowcode-vue3': 'LCVueRenderer',
}

export interface CommonArgs {
  root: string
  mode?: string
}

interface Context {
  root: string
  mode: string
  configFile: string | false
  outDir: string
  entry: string
  metaDir: string
  library: string
  sourceMap: boolean
  npmInfo: LowcodeNpmInfo
  globals: Record<string, string>
  assetsConfig: LowcodeAssetsConfig
  codegen?: CodegenManifest
}

async function flattenPlugins(plugins: PluginOption[] = []) {
  const result: unknown[] = []
  for (const plugin of plugins) {
    const resolved = await plugin
    if (Array.isArray(resolved))
      result.push(...(await flattenPlugins(resolved)))
    else if (resolved) result.push(resolved)
  }
  return result
}

/** `@scope/my-pkg2.7` -> `ScopeMyPkg2.7`, the naming the materials always used. */
function toLibraryName(packageName: string) {
  return packageName
    .replace(/[/@-](\w)/g, (_, char: string) => char.toUpperCase())
    .replace(/^\w/, (char) => char.toUpperCase())
}

async function createContext(
  { root, mode }: CommonArgs,
  command: 'build' | 'serve',
): Promise<Context> {
  const resolvedMode =
    mode ?? (command === 'build' ? 'production' : 'development')
  const loaded = await loadConfigFromFile(
    { command, mode: resolvedMode },
    undefined,
    root,
  )
  const plugin = (await flattenPlugins(loaded?.config.plugins)).find(
    (p): p is LowcodeMaterialPlugin =>
      (p as LowcodeMaterialPlugin).name === PLUGIN_NAME,
  )
  const options: LowcodeMaterialOptions = plugin?.api.options ?? {}
  const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'))

  const entry = resolve(root, options.entry ?? 'src/index.ts')
  const manifest = readCodegenManifest(await readFile(entry, 'utf8'), pkg)
  return {
    root,
    mode: resolvedMode,
    configFile: loaded?.path ?? false,
    outDir: resolve(root, loaded?.config.build?.outDir ?? 'dist'),
    entry,
    metaDir: options.metaDir ? resolve(root, options.metaDir) : dirname(entry),
    library: options.library ?? toLibraryName(pkg.name ?? 'Library'),
    sourceMap: options.sourceMap ?? true,
    npmInfo: {
      package: pkg.name ?? '',
      version: pkg.version ?? '',
      destructuring: true,
      ...options.npmInfo,
    },
    globals: { ...DEFAULT_EXTERNALS, ...options.externals },
    assetsConfig: {
      baseUrl: 'https://unpkg.com/{name}@{version}',
      groups: [],
      categories: [],
      builtinAssets: {},
      ...options.assetsConfig,
    },
    codegen: Object.keys(manifest.exports).length > 0 ? manifest : undefined,
  }
}

const GLOBAL_PREFIX = '\0lowcode-global:'

/**
 * Resolves each external to a CommonJS module that reads the global variable,
 * so both `import` and the `require()` calls inside CommonJS dependencies
 * (Element UI, Ant Design Vue 1, ...) end up on the page globals.
 */
function globalsPlugin(globals: Record<string, string>): Plugin {
  return {
    name: 'lowcode-material:globals',
    enforce: 'pre',
    resolveId(id) {
      return Object.prototype.hasOwnProperty.call(globals, id)
        ? GLOBAL_PREFIX + id
        : null
    },
    load(id) {
      if (!id.startsWith(GLOBAL_PREFIX)) return null
      const path = globals[id.slice(GLOBAL_PREFIX.length)]
        .split('.')
        .map((key) => `[${JSON.stringify(key)}]`)
        .join('')
      return `module.exports = (typeof globalThis !== 'undefined' ? globalThis : self)${path}`
    },
  }
}

/**
 * Vite config of one output: an IIFE that assigns the entry's exports to
 * `window[globalName]`.
 */
function createConfig(
  ctx: Context,
  entry: string,
  fileBase: string,
  globalName: string,
  minify: boolean,
  watch: boolean,
): InlineConfig {
  // An IIFE name with dots would become a namespace path, so bundle under a
  // plain identifier and assign the real name afterwards.
  const variable = `__lowcode_${globalName.replace(/[^\w$]/g, '_')}`
  const output: Rolldown.OutputOptions = {
    esModule: true,
    footer: `;(typeof globalThis !== 'undefined' ? globalThis : self)[${JSON.stringify(globalName)}] = ${variable};`,
  }
  return {
    root: ctx.root,
    mode: ctx.mode,
    configFile: ctx.configFile,
    publicDir: false,
    logLevel: 'warn',
    plugins: [globalsPlugin(ctx.globals)],
    resolve: {
      // Webpack-era styles import packages as `~pkg/...`.
      alias: [{ find: /^~(?=[@\w])/, replacement: '' }],
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        ctx.mode === 'production' ? 'production' : 'development',
      ),
    },
    build: {
      outDir: ctx.outDir,
      emptyOutDir: false,
      copyPublicDir: false,
      sourcemap: !minify && ctx.sourceMap,
      // Without source maps the plain files are minified as well, as before.
      minify: minify || !ctx.sourceMap,
      cssMinify: minify || !ctx.sourceMap,
      reportCompressedSize: false,
      watch: watch ? {} : null,
      lib: {
        entry,
        formats: ['iife'],
        name: variable,
        fileName: () => `${fileBase}.js`,
        cssFileName: fileBase,
      },
      rolldownOptions: { output },
    },
  }
}

function libraryFiles(ctx: Context, fileBase: string) {
  const css = `${fileBase}.css`
  return [...(existsSync(join(ctx.outDir, css)) ? [css] : []), `${fileBase}.js`]
}

export async function buildMaterial(args: CommonArgs & { clean?: boolean }) {
  const ctx = await createContext(args, 'build')
  const metaEntry = await writeMetaEntry(
    join(ctx.root, 'node_modules/.lowcode-builder'),
    ctx.metaDir,
    ctx.npmInfo,
  )
  if (args.clean) await rm(ctx.outDir, { recursive: true, force: true })
  await mkdir(ctx.outDir, { recursive: true })
  await copyScreenshots(ctx)

  const metaLibrary = `${ctx.library}Meta`
  for (const minify of [false, true]) {
    const suffix = minify ? '.min' : ''
    await build(
      createConfig(
        ctx,
        ctx.entry,
        `index${suffix}`,
        ctx.library,
        minify,
        false,
      ),
    )
    await build(
      createConfig(ctx, metaEntry, `meta${suffix}`, metaLibrary, minify, false),
    )
    await writeFile(
      join(ctx.outDir, `assets${suffix}.json`),
      createAssets({
        assetsConfig: ctx.assetsConfig,
        npmInfo: ctx.npmInfo,
        mode: ctx.mode,
        library: ctx.library,
        files: libraryFiles(ctx, `index${suffix}`),
        metaFile: `meta${suffix}.js`,
        relativePath: relative(ctx.root, ctx.outDir),
        minify,
        codegen: ctx.codegen,
      }),
    )
  }
  console.log(
    `Built ${ctx.npmInfo.package} into ${relative(process.cwd(), ctx.outDir) || '.'}`,
  )
}

/** Copies the material's `screenshots/` (snippet images) into the output. */
async function copyScreenshots(ctx: Context) {
  const source = join(ctx.root, 'screenshots')
  if (existsSync(source)) {
    await cp(source, join(ctx.outDir, 'screenshots'), { recursive: true })
  }
}

function waitForFirstBuild(watcher: Rolldown.RolldownWatcher) {
  return new Promise<void>((done, fail) => {
    watcher.on('event', (event) => {
      if (event.code === 'END') done()
      else if (event.code === 'ERROR') fail(event.error)
    })
  })
}

export async function devMaterial(
  args: CommonArgs & { host?: string; port?: number },
) {
  const ctx = await createContext(args, 'serve')
  const host = args.host ?? '127.0.0.1'
  const port = args.port ?? 9000
  const metaEntry = await writeMetaEntry(
    join(ctx.root, 'node_modules/.lowcode-builder'),
    ctx.metaDir,
    ctx.npmInfo,
  )
  await mkdir(ctx.outDir, { recursive: true })

  const watchers = (await Promise.all([
    build(createConfig(ctx, ctx.entry, 'index', ctx.library, false, true)),
    build(
      createConfig(ctx, metaEntry, 'meta', `${ctx.library}Meta`, false, true),
    ),
  ])) as Rolldown.RolldownWatcher[]
  await Promise.all(watchers.map(waitForFirstBuild))
  await copyScreenshots(ctx)

  await writeFile(
    join(ctx.outDir, 'assets.json'),
    createAssets({
      assetsConfig: ctx.assetsConfig,
      npmInfo: ctx.npmInfo,
      mode: ctx.mode,
      library: ctx.library,
      files: libraryFiles(ctx, 'index'),
      metaFile: 'meta.js',
      relativePath: '',
      localBaseUrl: `http://${host}:${port}`,
      minify: false,
      codegen: ctx.codegen,
    }),
  )

  const server = await preview({
    root: ctx.root,
    configFile: false,
    logLevel: 'warn',
    build: { outDir: ctx.outDir },
    preview: { host, port, strictPort: true, cors: true },
  })
  console.log(
    `Serving ${ctx.npmInfo.package}: http://${host}:${port}/assets.json`,
  )
  return server
}
