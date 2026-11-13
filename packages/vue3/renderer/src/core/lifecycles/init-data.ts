import { isFunction, isObject } from '@knxcloud/lowcode-utils'
import type { RuntimeScope, SchemaParser } from '../../utils'
import { AccessTypes, addToScope } from '../../utils'

export function initData(
  parser: SchemaParser,
  schema: unknown,
  scope: RuntimeScope,
): void {
  const dataOptions = parser.parseSchema(schema, false)

  const dataResult = isFunction(dataOptions)
    ? dataOptions.call(scope)
    : isObject(dataOptions)
      ? dataOptions
      : null
  if (!dataResult || Object.keys(dataResult).length === 0) return

  addToScope(scope, AccessTypes.DATA, dataResult)
}
