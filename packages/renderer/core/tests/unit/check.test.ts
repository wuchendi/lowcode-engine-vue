import { describe, expect, it } from 'vitest'
import { isNil, isObject } from '../../src/shared'

describe('isNil', () => {
  it('is true for null and undefined only', () => {
    expect(isNil(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
    expect(isNil(0)).toBe(false)
    expect(isNil('')).toBe(false)
  })
})

describe('isObject', () => {
  it('is true for objects and false for null', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject('a')).toBe(false)
  })
})
