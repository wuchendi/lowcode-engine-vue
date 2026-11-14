import { join } from 'node:path'
import type { CodegenManifest } from './codegen'
import type { LowcodeAssetsConfig, LowcodeNpmInfo } from './options'

export interface AssetsInput {
  assetsConfig: LowcodeAssetsConfig
  npmInfo: LowcodeNpmInfo
  mode: string
  library: string
  /** Files of the component library, relative to the output directory. */
  files: string[]
  metaFile: string
  /** Output directory relative to the package root, e.g. `dist`. */
  relativePath: string
  /** Overrides `baseUrl`, used by the dev server. */
  localBaseUrl?: string
  minify: boolean
  /** Code generation manifest of the package, when it re-exports components. */
  codegen?: CodegenManifest
}

function joinUrl(base: string, ...paths: string[]): string {
  if (base.startsWith('http')) {
    const { origin, pathname } = new URL(base)
    return origin + join(pathname, ...paths)
  }
  return join(base, ...paths)
}

function getOrigin(url: string): string {
  return url.match(/(https?:)?\/\/([^/]+)/)?.[0] ?? ''
}

/** Builds the `assets.json` content consumed by the LowCode Engine. */
export function createAssets(input: AssetsInput): string {
  const { assetsConfig, npmInfo, mode, library } = input
  const {
    baseUrl = '',
    groups = [],
    categories = [],
    builtinAssets = {},
  } = assetsConfig
  const currentBaseUrl =
    typeof baseUrl === 'string' ? baseUrl : (baseUrl[mode] ?? '')
  const origin = getOrigin(currentBaseUrl)
  const fill = (text: string) =>
    text
      .replace(/{name}/g, npmInfo.package ?? '')
      .replace(/{origin}/g, origin)
      .replace(/{version}/g, npmInfo.version ?? '')
  const resolveUrl = (file: string) =>
    joinUrl(
      fill(input.localBaseUrl || currentBaseUrl),
      input.localBaseUrl ? '' : input.relativePath,
      file,
    )

  const assets = {
    version: npmInfo.version ?? '',
    packages: [
      ...(builtinAssets.packages ?? []),
      {
        package: npmInfo.package,
        version: npmInfo.version,
        library,
        urls: input.files.map(resolveUrl),
        ...(input.codegen ? { codegen: input.codegen } : {}),
      },
    ],
    components: [
      ...(builtinAssets.components ?? []),
      {
        exportName: `${library}Meta`,
        url: resolveUrl(input.metaFile),
        package: { npm: npmInfo.package ?? '' },
      },
    ],
    sort: { groupList: groups, categoryList: categories },
  }
  return fill(JSON.stringify(assets, undefined, input.minify ? undefined : 2))
}
