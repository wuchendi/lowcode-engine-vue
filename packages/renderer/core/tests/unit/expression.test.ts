import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  clearExpressionCache,
  getExpressionCacheSize,
} from '../../src/shared/expression'
import { parseExpression, parseI18n } from '../../src/shared/parse'

const expr = (value: string) => ({ type: 'JSExpression' as const, value })
const func = (value: string) => ({ type: 'JSFunction' as const, value })

describe('parseExpression', () => {
  beforeEach(() => {
    clearExpressionCache()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('binds this to the scope', () => {
    expect(parseExpression(expr('this.a + 1'), { a: 1 } as never)).toBe(2)
  })

  it('resolves bare identifiers through the scope', () => {
    expect(parseExpression(expr('a + b'), { a: 1, b: 2 } as never)).toBe(3)
  })

  it('leaves string literals containing "this" untouched', () => {
    expect(parseExpression(expr('"click this now"'))).toBe('click this now')
    expect(parseExpression(expr("'this' + this.x"), { x: '!' } as never)).toBe(
      'this!',
    )
  })

  it('compiles the same source only once', () => {
    const source = 'this.n * 2'
    expect(parseExpression(expr(source), { n: 1 } as never)).toBe(2)
    expect(parseExpression(expr(source), { n: 2 } as never)).toBe(4)
    expect(parseExpression(func(source), { n: 3 } as never)).toBe(6)
    expect(getExpressionCacheSize()).toBe(1)
    parseExpression(expr('this.n'), { n: 1 } as never)
    expect(getExpressionCacheSize()).toBe(2)
  })

  it('returns JSFunction values that use the scope as this', () => {
    const scope = { x: 1 } as never
    const fn = parseExpression(
      func('function () { return this.x }'),
      scope,
    ) as () => number
    expect(fn()).toBe(1)
    expect(fn.call({ x: 2 })).toBe(1)
  })

  it('supports arrow functions', () => {
    const fn = parseExpression(func('(v) => this.x + v'), {
      x: 1,
    } as never) as (v: number) => number
    expect(fn(2)).toBe(3)
  })

  it('supports v-model style $event handlers', () => {
    const scope = { x: 0, form: { name: '' } }
    const setX = parseExpression(
      func('function ($event) {this.x = $event}'),
      scope as never,
    ) as (v: unknown) => void
    setX.call({}, 5)
    expect(scope.x).toBe(5)

    const setName = parseExpression(
      func('function ($event) {form.name = $event}'),
      scope as never,
    ) as (v: unknown) => void
    setName('n')
    expect(scope.form.name).toBe('n')
  })

  it('binds this to the scope inside nested non-arrow callbacks', () => {
    const scope = { list: [] as number[], api: () => [1, 2] }
    const fn = parseExpression(
      func(
        'function () { [0].forEach(function () { this.list = this.api() }) }',
      ),
      scope as never,
    ) as () => void
    fn.call({})
    expect(scope.list).toEqual([1, 2])
  })

  it('binds this to the scope inside arrow functions', () => {
    const scope = { x: 0 }
    const fn = parseExpression(
      func('function () { [3].forEach((v) => { this.x = v }) }'),
      scope as never,
    ) as () => void
    fn()
    expect(scope.x).toBe(3)
  })

  it('leaves "this" in strings, template text and comments untouched', () => {
    const scope = { a: 'A' } as never
    expect(parseExpression(expr("'a this b'"), scope)).toBe('a this b')
    expect(parseExpression(expr('"a this b"'), scope)).toBe('a this b')
    expect(parseExpression(expr('`a this ${this.a}`'), scope)).toBe('a this A')
    expect(parseExpression(expr('this.a // this is a comment\n'), scope)).toBe(
      'A',
    )
    expect(parseExpression(expr('/* this */ this.a'), scope)).toBe('A')
  })

  it('resolves this inside nested template substitutions', () => {
    const scope = { a: 'A', b: 'B' } as never
    expect(
      parseExpression(expr('`${this.a}-${`${ { k: this.b }.k }`}`'), scope),
    ).toBe('A-B')
  })

  it('leaves regex literals containing "this" untouched', () => {
    const scope = { s: 'is this ok' } as never
    expect(parseExpression(expr('/this/.test(this.s)'), scope)).toBe(true)
    expect(parseExpression(expr('[/this/][0].source'), scope)).toBe('this')
    const fn = parseExpression(
      func('function () { return /th\\/is/.source }'),
      scope,
    ) as () => string
    expect(fn()).toBe('th\\/is')
  })

  it('keeps division working', () => {
    expect(
      parseExpression(expr('a / this.b / 2'), { a: 8, b: 2 } as never),
    ).toBe(2)
    expect(
      parseExpression(expr('(this.a) / this.b'), { a: 8, b: 2 } as never),
    ).toBe(4)
  })

  it('resolves i18n through the scope', () => {
    const scope = { i18n: (key: string) => `t:${key}` }
    expect(
      parseI18n({ type: 'i18n', key: 'hello' } as never, scope as never),
    ).toBe('t:hello')
  })

  it('warns and returns undefined on compile errors', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    expect(parseExpression(expr('this.('), {} as never)).toBeUndefined()
    expect(warn).toHaveBeenCalled()
  })

  it('warns and returns undefined on runtime errors', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    expect(parseExpression(expr('this.a.b.c'), {} as never)).toBeUndefined()
    expect(warn).toHaveBeenCalled()
  })

  it('passes the scope to the same-domain host __newFunc and caches it', () => {
    const newFunc = vi.fn((body: string) => new Function(body))
    vi.spyOn(window, 'parent', 'get').mockReturnValue({
      location: window.location,
      __newFunc: newFunc,
    } as never)

    const scope = { a: 1, b: 2 }
    expect(parseExpression(expr('this.a + b'), scope as never)).toBe(3)
    expect(parseExpression(expr('this.a + b'), { a: 2, b: 2 } as never)).toBe(4)
    expect(newFunc).toHaveBeenCalledTimes(1)

    const self = parseExpression(expr('this'), scope as never)
    expect(self).toBe(scope)
  })
})
