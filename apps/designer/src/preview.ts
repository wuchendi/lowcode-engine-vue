import type * as LowcodeVue from '@cdlab996/lowcode-vue3'
import { DEFAULT_LOCALE, LOCALES } from './utils/locales'
import { findPage } from './utils/pages'
import { createLocalProjectStorage } from './utils/project-storage'
import { runtime, vueVersion } from './version'

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`failed to load ${src}`))
    document.head.appendChild(script)
  })
}

function link(label: string, params: URLSearchParams, current: boolean) {
  const a = document.createElement('a')
  a.href = `?${params}`
  a.textContent = label
  if (current) a.style.fontWeight = '600'
  return a
}

/** Links to the other pages and locales, above the preview. */
function renderNav(
  pages: { fileName?: string }[],
  current: { fileName?: string } | undefined,
  locales: typeof LOCALES,
  locale: string,
  params: URLSearchParams,
) {
  if (pages.length < 2 && locales.length < 2) return
  const nav = document.createElement('nav')
  nav.className = 'lowcode-preview-pages'
  nav.style.cssText =
    'display: flex; gap: 12px; padding: 8px 12px; border-bottom: 1px solid #e6e6e6; font-size: 13px'
  if (pages.length > 1) {
    for (const root of pages) {
      const search = new URLSearchParams(params)
      search.set('page', root.fileName ?? '')
      nav.appendChild(link(root.fileName ?? '', search, root === current))
    }
  }
  if (locales.length > 1) {
    const spacer = document.createElement('span')
    spacer.style.flex = '1'
    nav.appendChild(spacer)
    for (const { label, value } of locales) {
      const search = new URLSearchParams(params)
      search.set('locale', value)
      nav.appendChild(link(label, search, value === locale))
    }
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

  const saved = await createLocalProjectStorage(
    window.localStorage,
    vueVersion,
  ).load()
  const packages = saved?.packages ?? []
  const { componentsMap = [], componentsTree = [] } = saved?.schema ?? {}
  const params = new URLSearchParams(window.location.search)
  const pages = componentsTree.filter(
    (root) => root.componentName !== 'Component',
  )
  const page = findPage(pages, params.get('page'))
  // The project messages in the locale of the canvas (`?locale=`)
  const messages = (saved?.schema?.i18n ?? {}) as Record<
    string,
    Record<string, string>
  >
  const locale = params.get('locale') ?? DEFAULT_LOCALE
  const locales = LOCALES.filter(({ value }) => value in messages)
  renderNav(pages, page, locales, locale, params)

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
      locale,
      messages,
    },
    document.getElementById('lce-container')!,
  )
})()
