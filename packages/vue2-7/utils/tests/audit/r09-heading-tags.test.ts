import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../../../renderer/tests/helpers/mount-renderer'
import {
  buildTestComponents,
  mountRenderer,
} from '../../../renderer/tests/helpers/mount-renderer'

const schemaFor = (tag: string) => ({
  componentName: 'Page',
  id: 'page',
  children: [{ componentName: tag, id: 'node', children: 'title' }],
})

describe('audit R-09', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('R-09 control: a div entry is built and renders a <div>', async () => {
    expect(buildTestComponents({ div: 'div' })).toHaveProperty('div')
    mounted = await mountRenderer({
      schema: schemaFor('div'),
      components: { div: 'div' },
    })
    expect(mounted.el.querySelector('div')?.textContent).toBe('title')
  })

  it('R-09: an h1 entry is built and renders an <h1>', async () => {
    expect(buildTestComponents({ h1: 'h1' })).toHaveProperty('h1')
    mounted = await mountRenderer({
      schema: schemaFor('h1'),
      components: { h1: 'h1' },
    })
    expect(mounted.el.querySelector('h1')?.textContent).toBe('title')
  })
})
