import type {
  IPublicTypeI18nData,
  IPublicTypeJSExpression,
  IPublicTypeJSFunction,
  IPublicTypeJSSlot,
  IPublicTypeNodeSchema,
} from '@alilc/lowcode-types'
import { isObject } from './check'

// Schema type guards, matching @alilc/lowcode-utils (the guards exported by
// @alilc/lowcode-types are deprecated, and lowcode-utils pulls in React and
// Node's `events` for its other modules).

/** A JSExpression; the internal `{ extType: 'function' }` form is a function. */
export function isJSExpression(data: unknown): data is IPublicTypeJSExpression {
  return (
    isObject(data) &&
    data.type === 'JSExpression' &&
    data.extType !== 'function'
  )
}

/** A JSFunction, or a JSExpression with `extType: 'function'`. */
export function isJSFunction(data: unknown): data is IPublicTypeJSFunction {
  return (
    isObject(data) &&
    (data.type === 'JSFunction' ||
      (data.type === 'JSExpression' && data.extType === 'function'))
  )
}

export function isJSSlot(data: unknown): data is IPublicTypeJSSlot {
  return isObject(data) && data.type === 'JSSlot'
}

export function isI18nData(data: unknown): data is IPublicTypeI18nData {
  return isObject(data) && data.type === 'i18n'
}

export function isDOMText(data: unknown): data is string {
  return typeof data === 'string'
}

export function isNodeSchema(data: unknown): data is IPublicTypeNodeSchema {
  return isObject(data) && 'componentName' in data && !data.isNode
}
