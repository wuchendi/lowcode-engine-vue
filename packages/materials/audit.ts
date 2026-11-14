import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { readCodegenManifest } from '../tools/material-builder/src/codegen'

/** Native attributes the docs list and the components forward to an inner element. */
const NATIVE_ATTRS = new Set([
  'placeholder',
  'maxlength',
  'minlength',
  'readonly',
  'disabled',
  'autofocus',
  'autocomplete',
  'name',
  'rows',
  'max',
  'min',
  'step',
  'multiple',
  'capture',
  'accept',
  'alt',
  'referrerpolicy',
  'referrerPolicy',
  'inputmode',
  'inputAlign',
  'tabindex',
  'form',
  'resize',
  'id',
])

type Component = Record<string, any>
const camel = (s: string) =>
  s.replace(/-(\w)/g, (_, c: string) => c.toUpperCase())

function propsOf(
  comp: Component | undefined,
  seen = new Set<Component>(),
): Set<string> {
  const out = new Set<string>()
  if (!comp || seen.has(comp)) return out
  seen.add(comp)
  for (const mixin of comp.mixins ?? [])
    for (const p of propsOf(mixin, seen)) out.add(p)
  if (comp.extends) for (const p of propsOf(comp.extends, seen)) out.add(p)
  const props = comp.props
  if (Array.isArray(props)) for (const p of props) out.add(camel(p))
  else if (props) for (const p of Object.keys(props)) out.add(camel(p))
  return out
}

/** The fields of a component meta the audit reads. */
interface Meta {
  componentName: string
  docUrl?: string
  configure?: unknown
  snippets?: { screenshot?: string }[]
}

export interface AuditInput {
  /** Material directory (`import.meta.dirname` of the test, `..`). */
  dir: string
  metas: Record<string, { default: Meta }>
  library: Record<string, any>
  vue: 2 | 3
  /** Prefix every docUrl starts with. */
  docs: string
}

export interface AuditIssue {
  component: string
  issue: string
}

/** Checks the metas against the library components; returns the issues. */
export function auditMetas({
  dir,
  metas,
  library,
  vue,
  docs,
}: AuditInput): AuditIssue[] {
  const pkg = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'))
  const manifest = readCodegenManifest(
    readFileSync(join(dir, 'src/index.ts'), 'utf8'),
    pkg,
  )
  const issues: AuditIssue[] = []
  for (const { default: meta } of Object.values(metas)) {
    const component = meta.componentName
    const report = (issue: string) => issues.push({ component, issue })
    const source = manifest.exports[component]
    if (!source) {
      report('not exported by the material entry')
      continue
    }
    let comp: Component | undefined = library[source.exportName]
    for (const sub of source.subName?.split('.') ?? []) comp = comp?.[sub]
    if (!comp) {
      report(
        `${source.exportName}${source.subName ? `.${source.subName}` : ''} is not in ${source.package}`,
      )
      continue
    }
    if (!meta.docUrl?.startsWith(docs))
      report(`docUrl ${meta.docUrl ?? '(none)'}`)
    for (const snippet of meta.snippets ?? []) {
      const shot = snippet.screenshot
      if (!shot) report('snippet without screenshot')
      else if (shot.startsWith('./') && !existsSync(join(dir, shot)))
        report(`screenshot ${shot} is missing`)
    }
    const declared = propsOf(comp)
    const configure = meta.configure as {
      props?: any[]
      supports?: { events?: any[] }
    }
    for (const prop of configure.props ?? []) {
      const name = String(prop.name)
      if (!/^[\w:-]+$/.test(name)) report(`prop name ${name}`)
      const setter = prop.setter
      const isSlot = setter?.componentName === 'SlotSetter'
      if (isSlot) continue
      const target =
        name === 'v-model'
          ? vue === 2
            ? (comp.model?.prop ?? 'value')
            : 'modelValue'
          : name.startsWith('v-model:')
            ? camel(name.slice(8))
            : name
      if (!declared.has(target) && !NATIVE_ATTRS.has(target))
        report(`prop ${name} is not declared`)
    }
    for (const event of configure.supports?.events ?? []) {
      const name = String(event.name ?? event)
      // Vue 3 only calls camelCase handlers of camelCase emits (`onExpandChange`);
      // wrappers forward undeclared events to the component they render
      const valid = vue === 3 ? /^on[A-Z][A-Za-z0-9]*$/ : /^on[A-Z][\w-]*$/
      if (!valid.test(name)) report(`event ${name} is not a handler name`)
    }
  }
  return issues
}
