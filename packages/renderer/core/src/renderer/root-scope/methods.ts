import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import { parseSchema } from '../../shared'
import type { RuntimeScope } from '../scope'

export function useRootMethods(
  methodsSchema: IPublicTypeRootSchema['methods'],
  scope: RuntimeScope,
) {
  // 处理 methods
  const methods = parseSchema(methodsSchema, scope) ?? {}
  Object.assign(scope, methods)
}
