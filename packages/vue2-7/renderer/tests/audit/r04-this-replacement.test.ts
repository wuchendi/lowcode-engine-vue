import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const schema = {
  componentName: 'Page',
  id: 'page',
  children: [
    {
      componentName: 'div',
      id: 'target',
      props: {
        title: { type: 'JSExpression', value: '"click this now"' },
      },
      children: 'content',
    },
  ],
}

describe('R-04 this replacement', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('R-04: "this" inside a string literal is not rewritten', async () => {
    mounted = await mountRenderer({ schema, components: { div: 'div' } })
    const target = mounted.el.querySelector('[title]')
    expect(target?.getAttribute('title')).toBe('click this now')
  })
})
