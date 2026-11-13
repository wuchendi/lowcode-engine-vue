import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const schema = {
  componentName: 'Page',
  id: 'page',
  children: [
    {
      componentName: 'div',
      id: 'parent',
      props: { id: 'loop-parent' },
      children: [
        {
          componentName: 'span',
          id: 'item',
          loop: [1, 2, 3],
          children: 'item',
        },
      ],
    },
  ],
}

function directChildTags(mounted: MountedRenderer): string[] {
  const parent = mounted.el.querySelector('#loop-parent')
  expect(parent).not.toBeNull()
  return Array.from(parent?.children ?? []).map((child) => child.tagName)
}

describe('R-02: loop wrapper', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('R-02: live loop renders items as direct siblings without a wrapper', async () => {
    mounted = await mountRenderer({
      schema,
      components: { div: 'div', span: 'span' },
    })
    expect(directChildTags(mounted)).toEqual(['SPAN', 'SPAN', 'SPAN'])
  })

  it('R-02: design loop renders items as direct siblings without a wrapper', async () => {
    mounted = await mountRenderer({
      schema,
      components: { div: 'div', span: 'span' },
      designMode: 'design',
    })
    expect(directChildTags(mounted)).toEqual(['SPAN', 'SPAN', 'SPAN'])
  })
})
