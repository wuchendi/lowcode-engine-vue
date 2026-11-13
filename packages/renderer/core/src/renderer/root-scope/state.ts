import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import { reactive, toRefs } from 'vue'
import { parseSchema } from '../../shared'

/** Reactive page state: the schema `state` with `initData` merged over it. */
export function useRootState(
  stateSchema: IPublicTypeRootSchema['state'],
  initData: Record<string, unknown>,
) {
  const states = (parseSchema(stateSchema) ?? {}) as Record<string, unknown>
  return toRefs(reactive({ ...states, ...initData }))
}

export type RootData = Record<string, unknown>
