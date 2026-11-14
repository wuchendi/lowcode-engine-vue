import type {
  IPublicTypePackage,
  IPublicTypeProjectSchema,
} from '@alilc/lowcode-types'
import type * as LowcodeVue from '@cdlab996/lowcode-vue3'
import { findPage } from './utils/pages'
import { runtime, storageKey } from './version'

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`failed to load ${src}`))
    document.head.appendChild(script)
  })
}

function readJson<T>(key: string, fallback: T): T {
  const raw = window.localStorage.getItem(storageKey(key))
  return raw ? (JSON.parse(raw) as T) : fallback
}

/** Links to the other pages, above the preview. */
function renderPageLinks(
  tree: { fileName?: string }[],
  current: { fileName?: string } | undefined,
  params: URLSearchParams,
) {
  const nav = document.createElement('nav')
  nav.className = 'lowcode-preview-pages'
  nav.style.cssText =
    'display: flex; gap: 12px; padding: 8px 12px; border-bottom: 1px solid #e6e6e6; font-size: 13px'
  for (const root of tree) {
    const link = document.createElement('a')
    const search = new URLSearchParams(params)
    search.set('page', root.fileName ?? '')
    link.href = `?${search}`
    link.textContent = root.fileName ?? ''
    if (root === current) link.style.fontWeight = '600'
    nav.appendChild(link)
  }
  document.body.prepend(nav)
}

void (async () => {
  await loadScript(runtime.vue)
  await loadScript(runtime.renderer)
  const {
    AssetLoader,
    buildComponents,
    getAdapter,
    lowCodeComponent,
    Renderer,
  } = (window as unknown as { LCVueRenderer: typeof LowcodeVue }).LCVueRenderer

  const packages = readJson<IPublicTypePackage[]>('packages', [])
  const projectSchema = readJson<Partial<IPublicTypeProjectSchema>>(
    'projectSchema',
    {},
  )
  const { componentsMap = [], componentsTree = [] } = projectSchema
  const params = new URLSearchParams(window.location.search)
  const pages = componentsTree.filter(
    (root) => root.componentName !== 'Component',
  )
  const page = findPage(pages, params.get('page'))
  if (pages.length > 1) renderPageLinks(pages, page, params)

  const components: Record<string, unknown> = {}
  for (const item of componentsMap) {
    const name = item.componentName
    if (!name) continue
    // Entries without a package: native tags render as such
    const hasPackage = !!(item as { package?: string }).package
    components[name] =
      hasPackage || !/^[a-z][a-z0-9-]*$/.test(name)
        ? item
        : { componentName: name, package: name }
  }
  // Low-code components: the Component roots of the project
  for (const root of componentsTree) {
    if (root.componentName === 'Component' && root.fileName) {
      components[root.fileName] = root
    }
  }
  const libraryMap: Record<string, string> = {}
  const urls: string[][] = []
  for (const pkg of packages) {
    if (pkg.package && pkg.library) libraryMap[pkg.package] = pkg.library
    if (pkg.urls) urls.push(([] as string[]).concat(pkg.urls as string))
  }
  await new AssetLoader().load(urls)

  const built: Record<string, unknown> = {}
  Object.assign(
    built,
    buildComponents(libraryMap, components as never, (schema) =>
      lowCodeComponent(schema, () => ({ components: built })),
    ),
  )

  getAdapter().mount(
    Renderer,
    {
      class: 'lowcode-preview',
      schema: page,
      components: built,
    },
    document.getElementById('lce-container')!,
  )
})()
