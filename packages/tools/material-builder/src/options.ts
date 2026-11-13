import type { Plugin } from 'vite'

export interface LowcodeNpmInfo {
  /** Package name. Defaults to `name` in package.json. */
  package?: string
  /** Package version. Defaults to `version` in package.json. */
  version?: string
  /** Whether components are read from the library by destructuring. */
  destructuring?: boolean
}

export interface LowcodeBuiltinAssets {
  packages?: unknown[]
  components?: unknown[]
}

export interface LowcodeAssetsConfig {
  /**
   * Base URL of the published files, or one URL per mode. `{name}`,
   * `{version}` and `{origin}` are replaced.
   * Defaults to `https://unpkg.com/{name}@{version}`.
   */
  baseUrl?: string | Record<string, string>
  groups?: string[]
  categories?: string[]
  builtinAssets?: LowcodeBuiltinAssets
}

export interface LowcodeMaterialOptions {
  /** Component entry. Defaults to `src/index.ts`. */
  entry?: string
  /** Directory searched for `meta.*` and `*.meta.*`. Defaults to the entry directory. */
  metaDir?: string
  /**
   * Global name of the component library; the meta library is
   * `${library}Meta`. Defaults to a PascalCase form of the package name.
   */
  library?: string
  /** Emit source maps for the non-minified files. Defaults to `true`. */
  sourceMap?: boolean
  npmInfo?: LowcodeNpmInfo
  /** Extra externals: module id -> global variable name. */
  externals?: Record<string, string>
  assetsConfig?: LowcodeAssetsConfig
}

export const PLUGIN_NAME = 'lowcode-material'

export interface LowcodeMaterialPlugin extends Plugin {
  api: { options: LowcodeMaterialOptions }
}

/**
 * Declares the material options in `vite.config.ts`. The plugin does not
 * change the Vite build; `lowcode-material build` and `lowcode-material dev`
 * read the options from it.
 */
export function lowcodeMaterial(
  options: LowcodeMaterialOptions = {},
): LowcodeMaterialPlugin {
  return { name: PLUGIN_NAME, api: { options } }
}
