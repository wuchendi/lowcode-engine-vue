export function isNil(val: unknown): val is null | undefined {
  return val === null || val === undefined
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isFunction(val: unknown): val is (...args: any[]) => any {
  return typeof val === 'function'
}

/** Same conversion Vue 2 applies to prop names: `max-height` -> `maxHeight`. */
export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_, c: string) => c.toUpperCase())
}

export function lowerFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
