import { describe, expect, it } from 'vitest'
import type { Component } from 'vue'
import Vue from 'vue'
import { functionalComp, generateHtmlComp } from '../../src/build-components'

function mount(comp: Component, data: Record<string, any>) {
  const vm = new Vue({ render: (h) => h(comp, data) }).$mount()
  return { el: vm.$el as HTMLElement, destroy: () => vm.$destroy() }
}

describe('native tag wrapper', () => {
  it('accepts lowercase tag names with digits and rejects invalid names', () => {
    expect(generateHtmlComp('h1')).toBeDefined()
    expect(generateHtmlComp('my-el2')).toBeDefined()
    expect(generateHtmlComp('1h')).toBeUndefined()
    expect(generateHtmlComp('-div')).toBeUndefined()
    expect(generateHtmlComp('Div')).toBeUndefined()
  })

  it.each([
    ['generateHtmlComp', () => generateHtmlComp('section') as Component],
    ['functionalComp', () => functionalComp('section')],
  ])(
    '%s forwards attrs, listeners, default and named/scoped slots',
    (_, make) => {
      let clicks = 0
      const { el, destroy } = mount(make(), {
        attrs: { title: 't' },
        on: { click: () => (clicks += 1) },
        scopedSlots: {
          default: () => [
            new Vue().$createElement('span', { class: 'def' }, 'body'),
          ],
          header: (props?: { label?: string }) => [
            new Vue().$createElement(
              'span',
              { class: 'hdr' },
              props?.label ?? 'hdr',
            ),
          ],
        },
      })
      expect(el.tagName).toBe('SECTION')
      expect(el.getAttribute('title')).toBe('t')
      expect(el.querySelector('.def')?.textContent).toBe('body')
      expect(el.querySelector('.hdr')?.textContent).toBe('hdr')
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      expect(clicks).toBe(1)
      destroy()
    },
  )
})
