import { buildComponents, getAdapter } from '@cdlab996/lowcode-vue-core'
import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const globals = window as unknown as Record<string, unknown>

describe('directives of a library', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    Reflect.deleteProperty(globals, '__DirectiveLib')
  })

  it('a v-xxx prop uses the directive a library exports in `directives`', async () => {
    const values: unknown[] = []
    const record = (_el: Element, binding: { value: unknown }) =>
      values.push(binding.value)
    // Vue 2 calls `bind`, Vue 3 `mounted`
    globals.__DirectiveLib = {
      directives: { 'lib-probe': { bind: record, mounted: record } },
    }
    buildComponents({ 'directive-lib': '__DirectiveLib' }, {})

    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        children: [
          {
            componentName: 'div',
            id: 'target',
            props: { 'v-lib-probe': 'on', title: 't' },
          },
        ],
      },
      components: { div: 'div' },
    })

    expect(values).toEqual(['on'])
    const target = mounted.el.querySelector('[title="t"]')
    expect(target?.hasAttribute('v-lib-probe')).toBe(false)
  })

  it('ignores libraries without directives', () => {
    globals.__DirectiveLib = { Button: {} }
    expect(() =>
      buildComponents(
        { 'directive-lib': '__DirectiveLib', missing: '__No' },
        {},
      ),
    ).not.toThrow()
    expect(getAdapter().version).toBeGreaterThan(1)
  })
})
