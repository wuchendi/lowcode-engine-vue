import type {
  IPublicTypeI18nData,
  JSExpression,
  JSFunction,
} from '@alilc/lowcode-types'
import { isI18nData, isJSExpression, isJSFunction } from '@alilc/lowcode-types'
import { ensureArray } from './array'
import { isFunction, isString } from './check'
import { evaluateExpression } from './expression'
import { isPlainObject } from './object'
import type { BlockScope, RuntimeScope } from './scope'

export { inSameDomain } from './expression'

export const EXPRESSION_TYPE = {
  JSEXPRESSION: 'JSExpression',
  JSFUNCTION: 'JSFunction',
  JSSLOT: 'JSSlot',
  JSBLOCK: 'JSBlock',
  I18N: 'i18n',
} as const

export function parseI18n(i18nInfo: IPublicTypeI18nData, scope?: RuntimeScope) {
  return parseExpression(
    {
      type: EXPRESSION_TYPE.JSEXPRESSION,
      value: `this.i18n('${i18nInfo.key}')`,
    },
    scope,
  ) as string | undefined
}

export function parseExpression(
  str: JSFunction,
  scope?: RuntimeScope,
): CallableFunction
export function parseExpression(
  str: JSExpression,
  scope?: RuntimeScope,
): unknown
export function parseExpression(
  str: JSExpression | JSFunction,
  scope?: RuntimeScope,
): CallableFunction | unknown
export function parseExpression(
  str: JSExpression | JSFunction,
  scope?: RuntimeScope,
): CallableFunction | unknown {
  try {
    const result = evaluateExpression((str.value || '').trim(), scope)
    // Keep `this` pointing at the scope no matter how the function is invoked
    return isJSFunction(str) && scope && typeof result === 'function'
      ? result.bind(scope)
      : result
  } catch (err) {
    console.warn('parseExpression.error', err, str, scope)
    return undefined
  }
}

export function parseSchema(
  schema: IPublicTypeI18nData,
  scope?: RuntimeScope,
): string | undefined
export function parseSchema(
  schema: JSFunction,
  scope?: RuntimeScope,
): CallableFunction
export function parseSchema(schema: JSExpression, scope?: RuntimeScope): unknown
export function parseSchema<T extends object>(
  schema: T,
  scope: RuntimeScope,
): Record<string, unknown>
export function parseSchema<T>(schema: T, scope?: RuntimeScope): T
export function parseSchema(schema: unknown, scope?: RuntimeScope): unknown {
  if (isJSExpression(schema) || isJSFunction(schema)) {
    return parseExpression(schema, scope)
  } else if (isI18nData(schema)) {
    return parseI18n(schema as IPublicTypeI18nData, scope)
  } else if (isString(schema)) {
    return schema.trim()
  } else if (Array.isArray(schema)) {
    return schema.map((item) => parseSchema(item, scope))
  } else if (isFunction(schema)) {
    return schema.bind(scope)
  } else if (isPlainObject(schema)) {
    if (!schema) return schema
    const res: Record<string, unknown> = {}
    Object.keys(schema).forEach((key) => {
      if (key.startsWith('__')) return
      res[key] = parseSchema(schema[key], scope)
    })
    return res
  }
  return schema
}

export function parseSlotScope(args: unknown[], params: string[]): BlockScope {
  const slotParams: BlockScope = {}
  ensureArray(params).forEach((item, idx) => {
    slotParams[item] = args[idx]
  })
  return slotParams
}
