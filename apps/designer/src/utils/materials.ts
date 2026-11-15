import type { IPublicTypeAssetsJson } from '@alilc/lowcode-types'

/** Why a material cannot be added. */
export class MaterialError extends Error {
  constructor(
    readonly reason: 'unreachable' | 'invalid',
    readonly url: string,
  ) {
    super(
      reason === 'unreachable'
        ? `${url} could not be loaded`
        : `${url} is not a material assets.json`,
    )
    this.name = 'MaterialError'
  }
}

type Fetch = (url: string) => Promise<Response>

interface AssetPackage {
  urls?: string | string[]
  [key: string]: unknown
}

interface AssetComponent {
  url?: string
  [key: string]: unknown
}

const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value)

/**
 * The assets of a material (`assets.json`, as the material builder writes
 * it): its packages and component descriptions, with the URLs resolved
 * against the assets.json.
 */
export async function fetchMaterialAssets(
  url: string,
  fetchJson: Fetch = fetch,
  // Relative URLs are relative to the designer page
  page: string | undefined = globalThis.location?.href,
): Promise<IPublicTypeAssetsJson & { packages: AssetPackage[] }> {
  let base: string
  try {
    base = new URL(url, page).href
  } catch {
    throw new MaterialError('invalid', url)
  }
  let assets: unknown
  try {
    const response = await fetchJson(base)
    if (!response.ok) throw new Error(String(response.status))
    assets = await response.json()
  } catch {
    throw new MaterialError('unreachable', url)
  }
  if (
    !isObject(assets) ||
    !Array.isArray(assets.packages) ||
    !Array.isArray(assets.components)
  ) {
    throw new MaterialError('invalid', url)
  }
  const resolve = (item: string) => new URL(item, base).href
  const packages = (assets.packages as AssetPackage[]).map((pkg) => ({
    ...pkg,
    ...(pkg.urls
      ? { urls: ([] as string[]).concat(pkg.urls).map(resolve) }
      : {}),
  }))
  const components = (assets.components as AssetComponent[]).map((component) =>
    typeof component.url === 'string'
      ? { ...component, url: resolve(component.url) }
      : component,
  )
  return {
    ...assets,
    packages,
    components,
  } as unknown as IPublicTypeAssetsJson & { packages: AssetPackage[] }
}
