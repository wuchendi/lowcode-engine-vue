import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import type { RuntimeScope } from '../../utils'
import { parseSchema } from '../../utils'

export function useRootMethods(
  methodsSchema: IPublicTypeRootSchema['methods'],
  scope: RuntimeScope,
) {
  // 处理 methods
  const methods = parseSchema(methodsSchema, scope) ?? {}
  Object.assign(scope, methods)
}
