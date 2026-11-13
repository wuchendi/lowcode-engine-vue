export function isFunction(val: unknown): val is (...args: any[]) => any {
  return typeof val === 'function'
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isObject(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === 'object'
}
