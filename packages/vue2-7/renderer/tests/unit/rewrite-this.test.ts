import { describe, expect, it } from 'vitest'
import { rewriteThis } from '../../src/utils/rewrite-this'

const r = (source: string) => rewriteThis(source, '__self')

describe('rewriteThis', () => {
  it('rewrites the this token in code', () => {
    expect(r('this.a + this')).toBe('__self.a + __self')
    expect(r('function () { return this.x }')).toBe(
      'function () { return __self.x }',
    )
    expect(r('(v) => this[v]')).toBe('(v) => __self[v]')
  })

  it('respects identifier boundaries', () => {
    expect(r('thisA + _this + this$ + $this + this1')).toBe(
      'thisA + _this + this$ + $this + this1',
    )
  })

  it('leaves string literals untouched', () => {
    expect(r(`'this \\' this' + "this \\" this" + this`)).toBe(
      `'this \\' this' + "this \\" this" + __self`,
    )
  })

  it('leaves comments untouched', () => {
    expect(r('this // this\nthis /* this */ this')).toBe(
      '__self // this\n__self /* this */ __self',
    )
  })

  it('rewrites only the substitutions of template literals', () => {
    expect(r('`this ${this.a} this`')).toBe('`this ${__self.a} this`')
    expect(r('`a ${ { b: `this ${this.c}` }.b } this`')).toBe(
      '`a ${ { b: `this ${__self.c}` }.b } this`',
    )
    expect(r('`\\${this}`')).toBe('`\\${this}`')
    expect(r('`${"}"} ${this}`')).toBe('`${"}"} ${__self}`')
  })

  it('leaves regex literals untouched', () => {
    expect(r('/this/.test(this.s)')).toBe('/this/.test(__self.s)')
    expect(r('x = /th\\/is[/]this/g; this')).toBe(
      'x = /th\\/is[/]this/g; __self',
    )
    expect(r('return /this/')).toBe('return /this/')
    expect(r('typeof /this/')).toBe('typeof /this/')
    expect(r('`${/this/.source}${this}`')).toBe('`${/this/.source}${__self}`')
  })

  it('treats / after an operand as division', () => {
    expect(r('a / this.b / 2')).toBe('a / __self.b / 2')
    expect(r('(a) / this / (b)')).toBe('(a) / __self / (b)')
    expect(r('a[0] / this')).toBe('a[0] / __self')
    expect(r('1 / this')).toBe('1 / __self')
  })
})
