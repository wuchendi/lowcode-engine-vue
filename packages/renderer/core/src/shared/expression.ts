import { rewriteThis } from './rewrite-this'

type CompiledExpression = (this: unknown, scope: unknown) => unknown
type FunctionFactory = (body: string) => CompiledExpression

const SELF = '__self'

const localCache = new Map<string, CompiledExpression>()
const hostCache = new Map<string, CompiledExpression>()

export function inSameDomain() {
  try {
    return (
      window.parent !== window &&
      window.parent.location.host === window.location.host
    )
  } catch {
    return false
  }
}

function getHostFunctionFactory(): FunctionFactory | undefined {
  if (!inSameDomain()) return undefined
  const factory = (window.parent as Window & { __newFunc?: unknown }).__newFunc
  return typeof factory === 'function'
    ? (factory as FunctionFactory)
    : undefined
}

function compileExpression(source: string): CompiledExpression {
  // Prefer the same-domain designer host so the function runs in the top window
  const factory = getHostFunctionFactory()
  const cache = factory ? hostCache : localCache
  let fn = cache.get(source)
  if (!fn) {
    // `this` is rewritten to a local bound to the scope so it also means the
    // scope inside nested non-arrow functions. Non-strict body: `with`
    // resolves bare identifiers through the scope.
    const body = `var ${SELF} = arguments[0];\nwith (arguments[0] || {}) { return ${rewriteThis(source, SELF)}\n}`
    fn = factory ? factory(body) : (new Function(body) as CompiledExpression)
    cache.set(source, fn)
  }
  return fn
}

/**
 * Evaluates an expression source with `this` bound to the scope and bare
 * identifiers resolved through it. Compiled functions are cached per source.
 */
export function evaluateExpression(source: string, scope?: unknown): unknown {
  return compileExpression(source).call(scope, scope)
}

/** @internal test-only */
export function getExpressionCacheSize() {
  return localCache.size + hostCache.size
}

/** @internal test-only */
export function clearExpressionCache() {
  localCache.clear()
  hostCache.clear()
}

/** Mirrors Vue 3 `toDisplayString`, which Vue 2.7 does not export. */
export function toDisplayString(value: unknown): string {
  if (value == null) return ''
  if (typeof value === 'string') return value
  if (
    Array.isArray(value) ||
    (typeof value === 'object' &&
      (value.toString === Object.prototype.toString ||
        typeof value.toString !== 'function'))
  ) {
    return JSON.stringify(value, null, 2)
  }
  return String(value)
}
