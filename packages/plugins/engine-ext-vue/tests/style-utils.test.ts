import { describe, expect, it } from 'vitest'
import {
  addUnit,
  getUnit,
  hexify,
  isCssVarBind,
  parseToCssCode,
  parseToStyleData,
  parseValue,
  removeUnit,
  toHump,
  toLine,
  unifyStyle,
} from '../src/setter/style-setter/utils'

describe('style setter utils', () => {
  it('converts between style data and the CSS of the code editor', () => {
    const style = { fontSize: '14px', backgroundColor: '#fff' }
    const css = parseToCssCode(style)
    expect(css).toContain('font-size: 14px;')
    expect(css).toContain('background-color: #fff;')
    expect(parseToStyleData(css)).toEqual(style)
  })

  it('converts property names', () => {
    expect(toLine('borderTopLeftRadius')).toBe('border-top-left-radius')
    expect(toHump('border-top-left-radius')).toBe('borderTopLeftRadius')
  })

  it('adds and removes units', () => {
    expect(addUnit(12, 'px')).toBe('12px')
    expect(addUnit(null, 'px')).toBeNull()
    expect(removeUnit('12px')).toBe(12)
    expect(removeUnit(undefined)).toBeNull()
    expect(getUnit('12rem')).toBe('rem')
    expect(getUnit(12)).toBe('')
  })

  it('reads one value of a shorthand', () => {
    expect(parseValue('10px auto 4px', 0)).toBe('10')
    expect(parseValue('10px auto 4px', 1)).toBeNull()
    expect(parseValue('10px auto 4px', 2)).toBe('4')
    expect(parseValue(undefined, 0)).toBeUndefined()
    expect(unifyStyle('  1px   solid  red')).toBe('1px solid red')
  })

  it('blends rgba colors on white', () => {
    expect(hexify('rgba(0, 0, 0, 1)')).toBe('#000000')
    expect(hexify('rgba(0, 0, 0, 0)')).toBe('#ffffff')
  })

  it('detects CSS variable bindings', () => {
    expect(isCssVarBind('var(--primary)')).toBe(true)
    expect(isCssVarBind('#fff')).toBe(false)
    expect(isCssVarBind(1)).toBe(false)
  })
})
