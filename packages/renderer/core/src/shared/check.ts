export function isNil(val: unknown): val is null | undefined {
  return val === null || val === undefined
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isFunction(val: unknown): val is (...args: any[]) => any {
  return typeof val === 'function'
}

export function isObject(val: unknown): val is Record<string, unknown> {
  return !isNil(val) && typeof val === 'object'
}

export function isPlainObject(val: unknown): val is Record<string, unknown> {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function isPromise(val: unknown): val is Promise<unknown> {
  return isObject(val) && isFunction(val.then)
}

export interface ESModule {
  __esModule: true
  default: unknown
}

export function isESModule(val: unknown): val is ESModule {
  return isObject(val) && !!val.__esModule
}

export function isCSSUrl(url: string): boolean {
  return /\.css$/.test(url)
}

export function isElement(node: unknown): node is Element {
  return isObject(node) && node.nodeType === Node.ELEMENT_NODE
}

/** Same conversion Vue applies to prop names: `max-height` -> `maxHeight`. */
export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_, c: string) => c.toUpperCase())
}

export function lowerFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
