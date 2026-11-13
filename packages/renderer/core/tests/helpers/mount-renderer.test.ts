import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from './mount-renderer'
import { mountRenderer } from './mount-renderer'

const schema = {
  componentName: 'Page',
  id: 'page',
  children: [
    {
      componentName: 'div',
      id: 'div',
      children: 'hello renderer',
    },
  ],
}

describe('mountRenderer', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('renders static text in live mode', async () => {
    mounted = await mountRenderer({ schema, components: { div: 'div' } })
    expect(mounted.el.textContent).toContain('hello renderer')
    expect(mounted.html()).toContain('<div')
  })

  it('renders static text in design mode', async () => {
    mounted = await mountRenderer({
      schema,
      components: { div: 'div' },
      designMode: 'design',
    })
    expect(mounted.el.textContent).toContain('hello renderer')
  })
})
