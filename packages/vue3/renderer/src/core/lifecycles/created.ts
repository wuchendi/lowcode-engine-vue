import { isFunction } from '@cdlab996/lowcode-utils'
import type { RuntimeScope, SchemaParser } from '../../utils'

export function created(
  parser: SchemaParser,
  schema: unknown,
  scope: RuntimeScope,
): void {
  const createdFn = parser.parseSchema(schema, false)
  isFunction(createdFn) && createdFn.call(scope)
}
