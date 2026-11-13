import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import { reactive, toRefs } from 'vue'
import { parseSchema } from '../../utils'

export function useRootState(stateSchema: IPublicTypeRootSchema['state']) {
  // 处理 state
  const states = parseSchema(stateSchema) ?? {}
  return toRefs(reactive(states))
}

export type RootData = ReturnType<typeof useRootState>
