import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const Probe = {
  name: 'Probe',
  props: ['maxURL', 'maxHeight'],
  render(this: any, h: any) {
    return h(
      'i',
      { attrs: { id: 'probe' } },
      `${this.maxURL}|${this.maxHeight}`,
    )
  },
}

describe('prop name casing', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('passes props whose names contain consecutive capitals', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        children: [
          {
            componentName: 'Probe',
            id: 'probe-node',
            props: { maxURL: '/api', 'max-height': 10 },
          },
        ],
      },
      components: { Probe },
    })
    expect(mounted.el.querySelector('#probe')?.textContent).toBe('/api|10')
  })
})
