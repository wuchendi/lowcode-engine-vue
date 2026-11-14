import { afterAll, afterEach, describe, expect, it } from 'vitest'
import type { CreateElement } from 'vue'
import Vue from 'vue'
import type { MountedRenderer } from '../../core/tests/helpers/mount-renderer'
import { mountRenderer } from '../../core/tests/helpers/mount-renderer'

// Element UI's Steps / Step, Carousel / CarouselItem and Tabs / TabPane reach
// their parent through `this.$parent` and their children through `$children`
type StepsVm = Vue & { steps: unknown[]; items: unknown[] }
const created: StepsVm[] = []
const Steps = Vue.extend({
  name: 'Steps',
  data: () => ({ steps: [] as unknown[], items: [] as unknown[] }),
  created(this: StepsVm) {
    created.push(this)
  },
  mounted(this: Vue & { items: unknown[] }) {
    this.items = this.$children.filter((c) => c.$options.name === 'Step')
  },
  render(this: Vue, h: CreateElement) {
    return h('div', { class: 'steps' }, this.$slots.default)
  },
})
const Step = Vue.extend({
  name: 'Step',
  beforeCreate(this: Vue) {
    ;(this.$parent as Vue & { steps: unknown[] }).steps.push(this)
  },
  render(this: Vue, h: CreateElement) {
    return h('span', { class: 'step' }, 'step')
  },
})

describe('Leaf in the parent chain (Vue 2)', () => {
  let mounted: MountedRenderer | undefined
  const errors: unknown[] = []
  const handler = Vue.config.errorHandler
  Vue.config.errorHandler = (error) => {
    errors.push(error)
  }

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    errors.length = 0
  })
  afterAll(() => {
    Vue.config.errorHandler = handler
  })

  it.each(['live', 'design'] as const)(
    'is skipped by $parent and $children in %s mode',
    async (designMode) => {
      created.length = 0
      mounted = await mountRenderer({
        designMode,
        components: { Steps, Step },
        schema: {
          componentName: 'Page',
          id: 'page',
          children: [
            {
              componentName: 'Steps',
              id: 'steps',
              children: [
                { componentName: 'Step', id: 'a' },
                { componentName: 'Step', id: 'b' },
              ],
            },
          ],
        },
      } as never)
      const el = mounted.el.parentElement ?? mounted.el
      expect(errors).toEqual([])
      expect(el.querySelectorAll('.step')).toHaveLength(2)
      const [steps] = created
      expect(steps.steps).toHaveLength(2)
      expect(steps.items).toHaveLength(2)
      // `$parent.$children[index]` (Element UI's Step) finds the steps only
      expect(steps.$children.map((c) => c.$options.name)).toEqual([
        'Step',
        'Step',
      ])
    },
  )
})
