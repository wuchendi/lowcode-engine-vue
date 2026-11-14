import { parseAst } from 'vite'

/** How generated code imports the components of a material. */
export interface CodegenManifest {
  /** Component export of the material -> its source in a library. */
  exports: Record<string, { package: string; exportName: string }>
  /** Style imports of the entry, e.g. `vant/lib/index.css`. */
  styles: string[]
  /** Versions of the libraries used by `exports` and `styles`. */
  dependencies: Record<string, string>
}

interface PackageDependencies {
  dependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

const isBare = (source: string) =>
  !source.startsWith('.') && !source.startsWith('/')

/** `@scope/ui/dist/a.css` -> `@scope/ui`, `vant/lib/index.css` -> `vant`. */
function packageName(source: string) {
  const parts = source.split('/')
  return source.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0]
}

const STYLE = /\.(css|less|s[ac]ss|styl)$/

/**
 * Reads the material entry: components re-exported from a library
 * (`export { Button as VanButton } from 'vant'`) and side-effect style
 * imports, with the library versions of the material's package.json.
 */
export function readCodegenManifest(
  code: string,
  pkg: PackageDependencies,
): CodegenManifest {
  const manifest: CodegenManifest = {
    exports: {},
    styles: [],
    dependencies: {},
  }
  const used = new Set<string>()
  for (const node of parseAst(code, { lang: 'ts' }).body) {
    if (node.type === 'ImportDeclaration') {
      const source = String(node.source.value)
      if (
        node.specifiers.length === 0 &&
        isBare(source) &&
        STYLE.test(source)
      ) {
        manifest.styles.push(source)
        used.add(packageName(source))
      }
    } else if (node.type === 'ExportNamedDeclaration' && node.source) {
      const source = String(node.source.value)
      if (!isBare(source)) continue
      for (const specifier of node.specifiers) {
        const name = (id: { type: string; name?: string; value?: unknown }) =>
          id.type === 'Identifier' ? String(id.name) : String(id.value)
        manifest.exports[name(specifier.exported)] = {
          package: source,
          exportName: name(specifier.local),
        }
      }
      used.add(packageName(source))
    }
  }
  const versions = { ...pkg.peerDependencies, ...pkg.dependencies }
  for (const name of used) {
    if (versions[name]) manifest.dependencies[name] = versions[name]
  }
  return manifest
}
