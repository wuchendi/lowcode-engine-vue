import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

function createSchema(title: string) {
  return {
    componentName: 'Page',
    id: 'page',
    children: [
      {
        componentName: 'div',
        id: 'child',
        props: { id: 'child-el', title },
        children: 'child',
      },
    ],
  }
}

describe('R-07: live schema replacement', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('R-07: live mode re-renders when the schema prop is replaced', async () => {
    mounted = await mountRenderer({
      schema: createSchema('old'),
      components: { div: 'div' },
    })
    const before = mounted.el.querySelector('#child-el')
    expect(before?.getAttribute('title')).toBe('old')

    const renderer = mounted.vm.$children[0]
    ;(renderer.$props as { schema: unknown }).schema = createSchema('new')
    await mounted.flush()

    const after = mounted.el.querySelector('#child-el')
    expect(after?.getAttribute('title')).toBe('new')
  })
})
