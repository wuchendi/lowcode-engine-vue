import { afterEach, describe, expect, it } from 'vitest'
import type { Component, CreateElement } from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const ScopedSlotHost: Component = {
  name: 'ScopedSlotHost',
  render(this: Vue, h: CreateElement) {
    const slots = this.$scopedSlots
    return h('div', [
      h('div', { class: 'default' }, slots.default?.({ name: 'n1' })),
      h('div', { class: 'cell' }, slots.cell?.({ name: 'n2' })),
    ])
  },
}

const slotRenderingScopeName = {
  type: 'JSSlot',
  params: ['scope'],
  value: [
    {
      componentName: 'span',
      children: { type: 'JSExpression', value: 'this.scope.name' },
    },
  ],
}

const schema = {
  componentName: 'Page',
  id: 'page',
  children: [
    {
      componentName: 'ScopedSlotHost',
      id: 'host',
      props: {
        default: slotRenderingScopeName,
        cell: slotRenderingScopeName,
      },
    },
  ],
}

describe('R-03 default slot scope', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('R-03: default scoped slot receives its scope argument', async () => {
    mounted = await mountRenderer({
      schema,
      components: { ScopedSlotHost, span: 'span' },
    })
    const defaultText = mounted.el.querySelector('.default')?.textContent
    const cellText = mounted.el.querySelector('.cell')?.textContent
    expect(cellText).toBe('n2')
    expect(defaultText).toBe('n1')
  })
})
