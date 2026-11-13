import { describe, expect, it } from 'vitest'
import type { CreateElement } from 'vue'
import Vue from 'vue'
import { h } from '../../src/utils/Vue3Adapter'

describe('Vue3Adapter h', () => {
  it('renders the default slot as children of a native tag', () => {
    const vm = new Vue({
      render: (createElement: CreateElement) =>
        h(
          'div',
          { class: 'x' },
          { default: () => [createElement('span', 'child')] },
        ),
    }).$mount()

    const el = vm.$el as HTMLElement
    expect(el.tagName).toBe('DIV')
    expect(el.classList.contains('x')).toBe(true)
    expect(el.querySelector('span')?.textContent).toBe('child')
    vm.$destroy()
  })

  it('passes all slots of a component tag as scoped slots', () => {
    const Comp = {
      render(this: Vue, createElement: CreateElement) {
        return createElement('div', [
          createElement('p', this.$scopedSlots.default?.({ v: 'd' })),
          createElement('i', this.$scopedSlots.extra?.({ v: 'e' })),
        ])
      },
    }
    const vm = new Vue({
      render: (createElement: CreateElement) =>
        h(
          Comp,
          {},
          {
            default: (arg: any) => [createElement('span', arg.v)],
            extra: (arg: any) => [createElement('b', arg.v)],
          },
        ),
    }).$mount()

    const el = vm.$el as HTMLElement
    expect(el.querySelector('p span')?.textContent).toBe('d')
    expect(el.querySelector('i b')?.textContent).toBe('e')
    vm.$destroy()
  })
})
