import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import type { MountedRenderer } from '../../../renderer/tests/helpers/mount-renderer'
import { mountRenderer } from '../../../renderer/tests/helpers/mount-renderer'

const Item = defineComponent({
  name: 'Item',
  render: () => h('span', 'item'),
})

describe('audit R-11', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  // Documents Vue 2 ordering: the ref callback (onCompGetCtx) runs before the
  // instance is mounted, so `_isMounted` is still false. The simulator's
  // `mountInstance` filter in packages/vue-simulator-renderer/src/simulator.ts
  // must account for this; the bookkeeping fix belongs to the simulator
  // workstream.
  it('R-11: onCompGetCtx sees each loop instance before it is mounted', async () => {
    const recorded: boolean[] = []
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        children: [{ componentName: 'Item', id: 'item', loop: [1, 2, 3] }],
      },
      components: { Item },
      designMode: 'design',
      onCompGetCtx: (schema, inst) => {
        if (schema.id === 'item') {
          recorded.push((inst as unknown as { _isMounted: boolean })._isMounted)
        }
      },
    })

    expect(mounted.el.querySelectorAll('span')).toHaveLength(3)
    expect(recorded).toEqual([false, false, false])
  })
})
