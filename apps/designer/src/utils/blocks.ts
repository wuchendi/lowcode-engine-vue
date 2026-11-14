import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'

export interface Block {
  id: string
  name: string
  /** The node tree, without node ids: every insertion is a new copy. */
  schema: IPublicTypeNodeSchema
  createdAt: number
}

type BlockStorage = Pick<Storage, 'getItem' | 'setItem'>

const isObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object'

/** `value` without the `id` of its nodes (slots included). */
export function withoutIds<T>(value: T): T {
  if (Array.isArray(value)) return value.map(withoutIds) as T
  if (!isObject(value)) return value
  const copy: Record<string, unknown> = {}
  const isNode = typeof value.componentName === 'string'
  for (const [key, child] of Object.entries(value)) {
    if (isNode && key === 'id') continue
    copy[key] = withoutIds(child)
  }
  return copy as T
}

/** Blocks saved under `key` of `storage`. */
export function createBlockStore(storage: BlockStorage, key: string) {
  const read = (): Block[] => {
    try {
      const blocks = JSON.parse(storage.getItem(key) ?? '[]')
      return Array.isArray(blocks) ? blocks : []
    } catch {
      return []
    }
  }
  const write = (blocks: Block[]) =>
    storage.setItem(key, JSON.stringify(blocks))

  return {
    list: read,
    save(name: string, schema: IPublicTypeNodeSchema): Block {
      const block: Block = {
        id: `block_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
        name,
        schema: withoutIds(schema),
        createdAt: Date.now(),
      }
      write([...read(), block])
      return block
    },
    remove(id: string) {
      write(read().filter((block) => block.id !== id))
    },
  }
}
