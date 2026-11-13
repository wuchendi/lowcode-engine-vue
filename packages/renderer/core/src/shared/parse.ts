import type {
  IPublicTypeI18nData,
  JSExpression,
  JSFunction,
} from '@alilc/lowcode-types'
import { ensureArray } from './array'
import { isFunction, isPlainObject, isString } from './check'
import { evaluateExpression } from './expression'
import { isI18nData, isJSExpression, isJSFunction } from './schema-guards'

import type { BlockScope } from './types'

export const EXPRESSION_TYPE = {
  JSEXPRESSION: 'JSExpression',
  JSFUNCTION: 'JSFunction',
  JSSLOT: 'JSSlot',
  JSBLOCK: 'JSBlock',
  I18N: 'i18n',
} as const

export function parseI18n(i18nInfo: IPublicTypeI18nData, scope?: BlockScope) {
  return parseExpression(
    {
      type: EXPRESSION_TYPE.JSEXPRESSION,
      value: `this.i18n(${JSON.stringify(i18nInfo.key)})`,
    },
    scope,
  ) as string | undefined
}

export function parseExpression(
  str: JSFunction,
  scope?: BlockScope,
): CallableFunction
export function parseExpression(str: JSExpression, scope?: BlockScope): unknown
export function parseExpression(
  str: JSExpression | JSFunction,
  scope?: BlockScope,
): CallableFunction | unknown
export function parseExpression(
  str: JSExpression | JSFunction,
  scope?: BlockScope,
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
  scope?: BlockScope,
): string | undefined
export function parseSchema(
  schema: JSFunction,
  scope?: BlockScope,
): CallableFunction
export function parseSchema(schema: JSExpression, scope?: BlockScope): unknown
export function parseSchema<T extends object>(
  schema: T,
  scope: BlockScope,
): Record<string, unknown>
export function parseSchema<T>(schema: T, scope?: BlockScope): T
export function parseSchema(schema: unknown, scope?: BlockScope): unknown {
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
