import { describe, expect, it } from 'vitest'
import { isNotNil, isObject } from '../../src/simulator/utils/check'

describe('isNotNil', () => {
  it('returns false for null and undefined', () => {
    expect(isNotNil(null)).toBe(false)
    expect(isNotNil(undefined)).toBe(false)
  })

  it('returns true for falsy non-nil values', () => {
    expect(isNotNil(0)).toBe(true)
  })
})

describe('isObject', () => {
  it('returns true for plain objects', () => {
    expect(isObject({})).toBe(true)
  })

  it('returns false for null', () => {
    expect(isObject(null)).toBe(false)
  })
})
