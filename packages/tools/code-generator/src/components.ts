import type { CodegenManifest, MaterialPackage } from './types'
import { pascalCase } from './value'

export interface ComponentsMapItem {
  componentName: string
  package?: string
  exportName?: string
  subName?: string
}

/** How a page reaches a component. */
export interface ResolvedComponent {
  /** Tag in the template. */
  tag: string
  /** Import of the component (none for native tags). */
  importFrom?: { source: string; imported: string; local: string }
  /** `const <tag> = <local>.<sub>` for sub-components. */
  sub?: string
  /** Library whose styles and version the project needs. */
  library?: string
}

const NATIVE_TAG = /^[a-z][a-z0-9-]*$/

export class ComponentResolver {
  private readonly manifests = new Map<string, CodegenManifest>()

  constructor(
    packages: MaterialPackage[],
    private readonly componentsMap: ComponentsMapItem[],
    /** File names of the Block / Component roots: component name -> file path. */
    private readonly localComponents: Map<string, string>,
  ) {
    for (const pkg of packages) {
      if (pkg.codegen) this.manifests.set(pkg.package, pkg.codegen)
    }
  }

  /** Manifest of a material package. */
  manifest(pkg: string) {
    return this.manifests.get(pkg)
  }

  /** A componentsMap entry from the manifest exporting the component. */
  private fromManifests(componentName: string): ComponentsMapItem | undefined {
    const [exportName, ...sub] = componentName.split('.')
    for (const [pkg, manifest] of this.manifests) {
      if (manifest.exports[exportName]) {
        return {
          componentName,
          package: pkg,
          exportName,
          subName: sub.length ? sub.join('.') : undefined,
        }
      }
    }
  }

  /** `null` when the component cannot be imported. */
  resolve(componentName: string): ResolvedComponent | null {
    const local = this.localComponents.get(componentName)
    if (local) {
      const tag = pascalCase(componentName)
      return {
        tag,
        importFrom: { source: local, imported: 'default', local: tag },
      }
    }
    const mapped = this.componentsMap.find(
      (c) => c.componentName === componentName,
    )
    // Exported schemas list components without a package (native tags too)
    const item =
      (mapped?.package ? mapped : undefined) ??
      this.fromManifests(componentName)
    if (!item) {
      return NATIVE_TAG.test(componentName) ? { tag: componentName } : null
    }
    const manifest = item.package ? this.manifests.get(item.package) : undefined
    const exportName = item.exportName ?? componentName.split('.')[0]
    const source = manifest?.exports[exportName]
    if (!source) return null
    const tag = pascalCase(componentName)
    const library = source.package.startsWith('@')
      ? source.package.split('/').slice(0, 2).join('/')
      : source.package.split('/')[0]
    // A sub-component of the manifest (`Select.Option`) reads its library
    // component, imported under the material name of that component
    if (source.subName) {
      const parent = Object.entries(manifest?.exports ?? {}).find(
        ([, s]) =>
          s.package === source.package &&
          s.exportName === source.exportName &&
          !s.subName,
      )?.[0]
      const localName = parent ?? pascalCase(source.exportName)
      return {
        tag,
        importFrom: {
          source: source.package,
          imported: source.exportName,
          local: localName,
        },
        sub: `${localName}.${source.subName}`,
        library,
      }
    }
    const sub = item.subName
    const localName = sub ? pascalCase(exportName) : tag
    return {
      tag,
      importFrom: {
        source: source.package,
        imported: source.exportName,
        local: localName,
      },
      sub: sub ? `${localName}.${sub}` : undefined,
      library,
    }
  }
}
