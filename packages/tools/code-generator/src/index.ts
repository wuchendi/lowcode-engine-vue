import type { IPublicTypeProjectSchema } from '@alilc/lowcode-types'
import type { ComponentsMapItem } from './components'
import { ComponentResolver } from './components'
import { formatFiles } from './format'
import type { PageEntry } from './project'
import { projectContextSource, projectFiles } from './project'
import { runtimeSource } from './runtime'
import type { RootSchema } from './script'
import { pageScript } from './script'
import { TemplateBuilder } from './template'
import type { GeneratedProject, GenerateOptions } from './types'
import { pascalCase } from './value'

export { type AssetPackage, materialPackages } from './materials'
export type {
  CodegenManifest,
  GeneratedProject,
  GenerateOptions,
  MaterialPackage,
  VueVersion,
} from './types'
export { toZip } from './zip'

type Root = RootSchema & {
  id?: string
  css?: string
  props?: Record<string, unknown>
  children?: unknown
}

/**
 * Generates a Vite + Vue project from a project schema: one single-file
 * component per Page (`src/pages`) and Block / Component (`src/components`)
 * root, the router, the entry and, when used, the page context
 * (`src/lowcode`: data sources, utils, constants, i18n).
 */
export async function generateProject(
  schema: IPublicTypeProjectSchema,
  options: GenerateOptions,
): Promise<GeneratedProject> {
  const { vue, packages } = options
  const warnings: string[] = []
  const warn = (message: string) => {
    if (!warnings.includes(message)) warnings.push(message)
  }
  const roots = (schema.componentsTree ?? []) as unknown as Root[]
  const componentsMap = (schema.componentsMap ?? []) as ComponentsMapItem[]

  const taken = new Set<string>()
  const fileNames = roots.map((root, index) => {
    // File names can be route paths (`/`, `/user/list`)
    const base = (root.fileName ?? '')
      .replace(/^\/+|\/+$/g, '')
      .replace(/[^\w-]/g, '-')
    let name =
      base ||
      (root.fileName ? 'index' : `${root.componentName.toLowerCase()}${index}`)
    while (taken.has(name)) name = `${name}-${index}`
    taken.add(name)
    return name
  })
  const blockNames = roots
    .map((root, index) =>
      root.componentName === 'Page' ? null : fileNames[index],
    )
    .filter((name): name is string => !!name)

  const files: Record<string, string> = {}
  const pages: PageEntry[] = []
  const libraries = new Set<string>()
  let usesContext = false
  const directives = new Set<string>()

  roots.forEach((root, index) => {
    const name = fileNames[index]
    const isPage = root.componentName === 'Page'
    const path = `src/${isPage ? 'pages' : 'components'}/${name}.vue`
    const fileWarn = (message: string) => warn(`${path}: ${message}`)
    const local = new Map(
      blockNames
        .filter((block) => block !== name)
        .map((block) => [
          block,
          `${isPage ? '../components/' : './'}${block}.vue`,
        ]),
    )
    const resolver = new ComponentResolver(packages, componentsMap, local)
    const template = new TemplateBuilder(resolver, vue, fileWarn).root(
      root as never,
    )
    const { script, usesContext: pageUsesContext } = pageScript({
      root,
      vue,
      components: template.components,
      templateUsesContext: template.usesContext,
      contextImport: '../lowcode',
      warn: fileWarn,
    })
    usesContext ||= pageUsesContext
    for (const directive of template.directives) directives.add(directive)
    for (const component of template.components.values()) {
      if (component.library) libraries.add(component.library)
    }
    const style = root.css?.trim()
      ? `\n\n<style>\n${root.css.trim()}\n</style>\n`
      : '\n'
    files[path] =
      `${template.template}\n\n<script>\n${script.trimEnd()}\n</script>${style}`
    if (isPage) pages.push({ name, component: pascalCase(name) })
  })

  const dependencies: Record<string, string> = {}
  const styles: string[] = []
  for (const { codegen } of packages) {
    if (!codegen) continue
    for (const library of libraries) {
      if (codegen.dependencies[library])
        dependencies[library] = codegen.dependencies[library]
    }
    for (const style of codegen.styles) {
      const owner = style.startsWith('@')
        ? style.split('/').slice(0, 2).join('/')
        : style.split('/')[0]
      if (libraries.has(owner) && !styles.includes(style)) styles.push(style)
    }
  }

  if (usesContext) {
    files['src/lowcode/index.js'] = runtimeSource
    files['src/lowcode/project.js'] = projectContextSource(
      schema as never,
      dependencies,
      warn,
    )
  }
  if (pages.length === 0) warn('The project has no page')
  else {
    Object.assign(
      files,
      projectFiles({
        vue,
        name: options.name ?? 'lowcode-app',
        pages,
        dependencies,
        styles,
        directives: [...directives],
      }),
    )
  }

  return {
    files: options.format ? await formatFiles(files, warn) : files,
    warnings,
  }
}
