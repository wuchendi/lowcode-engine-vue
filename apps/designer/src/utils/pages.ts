import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'

const PAGE_PATH = /^\/([\w-]+(\/[\w-]+)*)?$/

/** Message key of why a page cannot have `path` (route form, unique), or null. */
export function pagePathError(
  path: string,
  taken: string[],
): 'PagePathInvalid' | 'PagePathTaken' | null {
  if (!PAGE_PATH.test(path)) return 'PagePathInvalid'
  if (taken.includes(path)) return 'PagePathTaken'
  return null
}

/** An empty page at `fileName`. */
export function newPageSchema(fileName: string): IPublicTypeRootSchema {
  return { componentName: 'Page', fileName, props: {}, title: '', children: [] }
}

/** The page at `path`, or the first one. */
export function findPage<T extends { fileName?: string }>(
  tree: T[],
  path: string | null,
): T | undefined {
  return tree.find((root) => root.fileName === path) ?? tree[0]
}
