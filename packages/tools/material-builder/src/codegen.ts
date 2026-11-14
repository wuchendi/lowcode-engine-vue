import { parseAst } from 'vite'

/** How generated code imports the components of a material. */
export interface CodegenManifest {
  /** Component export of the material -> its source in a library. */
  exports: Record<
    string,
    { package: string; exportName: string; subName?: string }
  >
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
  const name = (id: { type: string; name?: string; value?: unknown }) =>
    id.type === 'Identifier' ? String(id.name) : String(id.value)
  /** Local name -> named import of a library. */
  const imported = new Map<string, { package: string; exportName: string }>()
  for (const node of parseAst(code, { lang: 'ts' }).body) {
    if (node.type === 'ImportDeclaration') {
      const source = String(node.source.value)
      if (isBare(source)) {
        for (const specifier of node.specifiers) {
          if (specifier.type === 'ImportSpecifier') {
            imported.set(specifier.local.name, {
              package: source,
              exportName: name(specifier.imported),
            })
          }
        }
      }
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
        manifest.exports[name(specifier.exported)] = {
          package: source,
          exportName: name(specifier.local),
        }
      }
      used.add(packageName(source))
    } else if (
      node.type === 'ExportNamedDeclaration' &&
      node.declaration?.type === 'VariableDeclaration'
    ) {
      // `export const ASelectOption = Select.Option`
      for (const declarator of node.declaration.declarations) {
        const path: string[] = []
        let init = declarator.init
        while (init?.type === 'MemberExpression' && !init.computed) {
          path.unshift(name(init.property))
          init = init.object
        }
        const base = init?.type === 'Identifier' && imported.get(init.name)
        if (!base || !path.length || declarator.id.type !== 'Identifier')
          continue
        manifest.exports[declarator.id.name] = {
          ...base,
          subName: path.join('.'),
        }
        used.add(packageName(base.package))
      }
    }
  }
  const versions = { ...pkg.peerDependencies, ...pkg.dependencies }
  for (const name of used) {
    if (versions[name]) manifest.dependencies[name] = versions[name]
  }
  return manifest
}
