import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'

function isObject(value: any): value is Record<string, unknown> {
  return value !== null && typeof value === 'object'
}

export function isPlainObject(value: any): value is any {
  if (!isObject(value)) {
    return false
  }
  const proto = Object.getPrototypeOf(value)
  return (
    proto === Object.prototype ||
    proto === null ||
    Object.getPrototypeOf(proto) === null
  )
}

/** `meta.setupBindings`: bindings of `setup()` recorded by the source panel. */
interface SetupBindings {
  state?: Record<string, unknown>
  methods?: string[]
}

function setupBindingsOf(root: IPublicTypeRootSchema | undefined) {
  const bindings = root?.meta?.setupBindings
  return isObject(bindings) ? (bindings as SetupBindings) : {}
}

/** The part of the engine's project the setters read. */
interface ProjectLike {
  currentDocument?: {
    exportSchema(stage: never): IPublicTypeRootSchema | undefined
  } | null
  exportSchema(stage?: never): { componentsTree: IPublicTypeRootSchema[] }
}

/**
 * The root schema being edited: the current page or component. A project
 * has several documents, and `exportSchema().componentsTree[0]` is always
 * the first page.
 */
export function currentRoot(
  project: ProjectLike,
): IPublicTypeRootSchema | undefined {
  return (
    project.currentDocument?.exportSchema('save' as never) ??
    project.exportSchema().componentsTree[0]
  )
}

/** State of a root schema: `state` and the state returned by `setup()`. */
export function rootState(
  root: IPublicTypeRootSchema | undefined,
): Record<string, unknown> {
  return { ...root?.state, ...setupBindingsOf(root).state }
}

/** Method names of a root schema: `methods` and the functions returned by `setup()`. */
export function rootMethods(root: IPublicTypeRootSchema | undefined): string[] {
  return [
    ...new Set([
      ...Object.keys(root?.methods ?? {}),
      ...(setupBindingsOf(root).methods ?? []),
    ]),
  ]
}
