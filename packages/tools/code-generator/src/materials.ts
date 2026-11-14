import type { MaterialPackage } from './types'

export interface AssetPackage {
  package?: string
  urls?: string | string[]
  codegen?: MaterialPackage['codegen']
  [key: string]: unknown
}

type Fetch = (url: string) => Promise<{ ok: boolean; json(): Promise<unknown> }>

/**
 * Material packages with their code generation manifest: the `codegen` of
 * the assets, otherwise the one in the `assets.json` next to the package
 * script (where the material builder writes it).
 */
export async function materialPackages(
  packages: AssetPackage[],
  fetchJson: Fetch = fetch,
  base: string = location.href,
): Promise<MaterialPackage[]> {
  return Promise.all(
    packages
      .filter((pkg): pkg is AssetPackage & { package: string } => !!pkg.package)
      .map(async (pkg) => {
        if (pkg.codegen) return { package: pkg.package, codegen: pkg.codegen }
        const urls = Array.isArray(pkg.urls)
          ? pkg.urls
          : pkg.urls
            ? [pkg.urls]
            : []
        const script = urls.find((url) => /\.js(\?|$)/.test(url))
        if (!script) return { package: pkg.package }
        try {
          const response = await fetchJson(
            new URL('assets.json', new URL(script, base)).href,
          )
          if (!response.ok) return { package: pkg.package }
          const assets = (await response.json()) as {
            packages?: AssetPackage[]
          }
          const entry = assets.packages?.find(
            (item) => item.package === pkg.package,
          )
          return entry?.codegen
            ? { package: pkg.package, codegen: entry.codegen }
            : { package: pkg.package }
        } catch {
          return { package: pkg.package }
        }
      }),
  )
}
