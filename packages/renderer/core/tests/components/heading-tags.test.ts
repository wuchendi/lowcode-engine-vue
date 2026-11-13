import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { buildTestComponents, mountRenderer } from '../helpers/mount-renderer'

const schemaFor = (tag: string) => ({
  componentName: 'Page',
  id: 'page',
  children: [{ componentName: tag, id: 'node', children: 'title' }],
})

describe('heading tags', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('control: a div entry is built and renders a <div>', async () => {
    expect(buildTestComponents({ div: 'div' })).toHaveProperty('div')
    mounted = await mountRenderer({
      schema: schemaFor('div'),
      components: { div: 'div' },
    })
    expect(mounted.el.querySelector('div')?.textContent).toBe('title')
  })

  it('an h1 entry is built and renders an <h1>', async () => {
    expect(buildTestComponents({ h1: 'h1' })).toHaveProperty('h1')
    mounted = await mountRenderer({
      schema: schemaFor('h1'),
      components: { h1: 'h1' },
    })
    expect(mounted.el.querySelector('h1')?.textContent).toBe('title')
  })
})
