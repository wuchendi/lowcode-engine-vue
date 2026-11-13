import type {
  IPublicTypeComponentMap,
  IPublicTypePackage,
  IPublicTypeProjectSchema,
} from '@alilc/lowcode-types'
import type * as LowcodeVue from '@cdlab996/lowcode-vue3'
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

void (async () => {
  await loadScript(runtime.vue)
  await loadScript(runtime.renderer)
  const { AssetLoader, buildComponents, getAdapter, Renderer } = (
    window as unknown as { LCVueRenderer: typeof LowcodeVue }
  ).LCVueRenderer

  const packages = readJson<IPublicTypePackage[]>('packages', [])
  const projectSchema = readJson<Partial<IPublicTypeProjectSchema>>(
    'projectSchema',
    {},
  )
  const { componentsMap = [], componentsTree = [] } = projectSchema

  const components: Record<string, IPublicTypeComponentMap> = {}
  for (const item of componentsMap) {
    if (item.componentName) components[item.componentName] = item
  }
  const libraryMap: Record<string, string> = {}
  const urls: string[][] = []
  for (const pkg of packages) {
    if (pkg.package && pkg.library) libraryMap[pkg.package] = pkg.library
    if (pkg.urls) urls.push(([] as string[]).concat(pkg.urls as string))
  }
  await new AssetLoader().load(urls)

  getAdapter().mount(
    Renderer,
    {
      class: 'lowcode-preview',
      schema: componentsTree[0],
      components: buildComponents(libraryMap, components as never),
    },
    document.getElementById('lce-container')!,
  )
})()
