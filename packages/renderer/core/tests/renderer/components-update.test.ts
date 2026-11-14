import type { VueComponent } from '@cdlab996/lowcode-vue-core'
import { Renderer } from '@cdlab996/lowcode-vue-core'
import { afterEach, describe, expect, it } from 'vitest'
import { nextTick, shallowReactive } from 'vue'
import {
  buildTestComponents,
  h,
  mountRender,
  testComponent,
} from '../helpers/mount-renderer'

const schema = {
  componentName: 'Page',
  id: 'page',
  children: [{ componentName: 'XButton', id: 'button', props: {} }],
}

describe('components update', () => {
  const disposers: Array<() => void> = []

  afterEach(() => {
    for (const dispose of disposers.splice(0)) dispose()
  })

  it('re-renders a node once its component is added', async () => {
    const state = shallowReactive({ components: buildTestComponents({}) })
    const mounted = await mountRender(() =>
      h(Renderer as VueComponent, { schema, components: state.components }),
    )
    disposers.push(mounted.destroy)
    const text = () => (mounted.el.parentElement ?? mounted.el).textContent

    expect(text()).toContain('component not found: XButton')

    const XButton = testComponent({
      name: 'XButton',
      render: () =>
        h('button', { class: 'x-button' }, { default: () => ['ok'] }),
    })
    state.components = { ...state.components, XButton }
    await nextTick()
    await nextTick()

    expect(text()).not.toContain('component not found')
    expect(
      (mounted.el.parentElement ?? mounted.el).querySelector('.x-button'),
    ).not.toBeNull()
  })
})
