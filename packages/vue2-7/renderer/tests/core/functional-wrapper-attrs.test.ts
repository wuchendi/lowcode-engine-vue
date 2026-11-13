import { functionalComp } from '@cdlab996/lowcode-utils2.7'
import { afterEach, describe, expect, it } from 'vitest'
import type Vue from 'vue'
import { nextTick } from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

// A functional component such as Vant's button, wrapped the way
// buildComponents wraps library components.
const FunctionalButton = {
  functional: true,
  props: { type: String, size: String },
  render(h: any, ctx: any) {
    return h(
      'button',
      {
        attrs: {
          id: 'btn',
          'data-type': String(ctx.props.type),
          'data-size': String(ctx.props.size),
        },
      },
      ctx.children,
    )
  },
}

function findPage(vm: Vue): Vue | undefined {
  if ('text' in vm) return vm
  for (const child of vm.$children) {
    const found = findPage(child)
    if (found) return found
  }
}

describe('functional component wrapper', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('keeps props when only its slot content re-renders', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        state: { text: 'before' },
        children: [
          {
            componentName: 'Btn',
            id: 'btn-node',
            props: {
              type: 'primary',
              size: 'large',
              children: { type: 'JSExpression', value: 'this.text' },
            },
          },
        ],
      },
      components: { Btn: functionalComp(FunctionalButton as never) },
    })
    const btn = () => mounted?.el.querySelector('#btn')
    expect(btn()?.getAttribute('data-type')).toBe('primary')
    expect(btn()?.textContent).toBe('before')

    const page = findPage(mounted.vm) as (Vue & { text: string }) | undefined
    expect(page).toBeDefined()
    if (page) page.text = 'after'
    await nextTick()
    await nextTick()

    expect(btn()?.textContent).toBe('after')
    expect(btn()?.getAttribute('data-type')).toBe('primary')
    expect(btn()?.getAttribute('data-size')).toBe('large')
  })
})
