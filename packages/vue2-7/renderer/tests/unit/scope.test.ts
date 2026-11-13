import { describe, expect, it } from 'vitest'
import Vue from 'vue'
import { mergeScope } from '../../src/utils/scope'

describe('mergeScope', () => {
  const createRuntimeScope = () =>
    new Vue({ data: () => ({ someState: 'state' }) }) as never as Record<
      string,
      unknown
    >

  it('keeps the runtime scope as the prototype root', () => {
    const runtime = createRuntimeScope()
    const merged = mergeScope(runtime as never, { item: 1 }, [{ index: 2 }])

    expect(merged).not.toBe(runtime)
    expect(merged.someState).toBe('state')
    expect(merged.item).toBe(1)
    expect(merged.index).toBe(2)

    let root: object = merged
    while (Object.getPrototypeOf(root) !== Object.getPrototypeOf(runtime)) {
      root = Object.getPrototypeOf(root)
    }
    expect(root).toBe(runtime)
  })

  it('roots the chain at the runtime scope even when it is not first', () => {
    const runtime = createRuntimeScope()
    const merged = mergeScope({ item: 1 }, runtime as never)

    expect(merged.someState).toBe('state')
    expect(merged.item).toBe(1)
    expect(Object.getPrototypeOf(merged)).toBe(runtime)
  })

  it('returns the only valid scope unchanged', () => {
    const runtime = createRuntimeScope()
    expect(mergeScope(runtime as never, null, {})).toBe(runtime)
  })
})
