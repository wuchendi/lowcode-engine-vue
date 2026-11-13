import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import type { MountedRenderer } from '../../core/tests/helpers/mount-renderer'
import { mountRenderer } from '../../core/tests/helpers/mount-renderer'
import { vue2Adapter } from '../src/adapter'

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
      components: { Btn: vue2Adapter.wrapTag(FunctionalButton) },
    })
    const btn = () => mounted?.el.querySelector('#btn')
    expect(btn()?.getAttribute('data-type')).toBe('primary')
    expect(btn()?.textContent).toBe('before')

    const page = mounted.scope as unknown as { text: string }
    expect(page).toBeDefined()
    if (page) page.text = 'after'
    await nextTick()
    await nextTick()

    expect(btn()?.textContent).toBe('after')
    expect(btn()?.getAttribute('data-type')).toBe('primary')
    expect(btn()?.getAttribute('data-size')).toBe('large')
  })
})
