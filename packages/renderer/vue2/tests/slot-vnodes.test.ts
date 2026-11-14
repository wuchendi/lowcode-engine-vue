import { afterEach, describe, expect, it } from 'vitest'
import type { CreateElement, VNode } from 'vue'
import Vue from 'vue'
import type { MountedRenderer } from '../../core/tests/helpers/mount-renderer'
import { mountRenderer, settle } from '../../core/tests/helpers/mount-renderer'

// Element UI's Tabs: reads its panes from `$slots.default` after every
// update and stores their instances (re-rendering when they change)
type TabsVm = Vue & { panes: unknown[] }
let tabs: TabsVm | undefined
let renders = 0
const Tabs = Vue.extend({
  name: 'Tabs',
  data: () => ({ panes: [] as unknown[] }),
  methods: {
    calcPanes(this: TabsVm) {
      const panes = ((this.$slots.default ?? []) as VNode[])
        .filter(
          (v) =>
            (v.componentOptions?.Ctor as { options?: { name?: string } })
              ?.options?.name === 'TabPane',
        )
        .map((v) => v.componentInstance)
      const changed =
        panes.length !== this.panes.length ||
        panes.some((pane, i) => pane !== this.panes[i])
      if (changed) this.panes = panes
    },
  },
  mounted(this: TabsVm) {
    tabs = this
    ;(this as unknown as { calcPanes(): void }).calcPanes()
  },
  updated(this: TabsVm) {
    ;(this as unknown as { calcPanes(): void }).calcPanes()
  },
  render(this: TabsVm, h: CreateElement) {
    renders++
    return h(
      'div',
      { class: 'tabs', attrs: { 'data-panes': this.panes.length } },
      this.$slots.default,
    )
  },
})
const TabPane = Vue.extend({
  name: 'TabPane',
  render: (h: CreateElement) => h('section', 'pane'),
})

describe('default slot content (Vue 2)', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    tabs = undefined
    renders = 0
  })

  it('is passed as children, so $slots.default holds the rendered vnodes', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        children: [
          {
            componentName: 'Tabs',
            id: 'tabs',
            children: [
              { componentName: 'TabPane', id: 'a' },
              { componentName: 'TabPane', id: 'b' },
            ],
          },
        ],
      },
      components: { Tabs, TabPane },
    })
    await settle()
    await settle()
    expect(tabs!.panes).toHaveLength(2)
    expect(tabs!.panes.every((pane) => pane instanceof Vue)).toBe(true)
    // Settled: the panes did not change on every update
    expect(renders).toBeLessThan(5)
  })
})
