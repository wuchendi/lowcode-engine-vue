import { describe, expect, it } from 'vitest'
import Vue from 'vue'
import Slot from '../../src/buildin-components/slot'

describe('Slot', () => {
  it('renders default slot content inside div.lc-container', () => {
    const vm = new Vue({
      render: (h) => h(Slot, [h('span', 'child')]),
    }).$mount()

    const el = vm.$el as HTMLElement
    expect(el.tagName).toBe('DIV')
    expect(el.classList.contains('lc-container')).toBe(true)
    const span = el.querySelector('span')
    expect(span?.textContent).toBe('child')

    vm.$destroy()
  })
})
