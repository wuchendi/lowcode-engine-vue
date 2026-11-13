import { afterEach, describe, expect, it } from 'vitest'
import { getAdapter } from '../../src'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { h, mountRenderer, testComponent } from '../helpers/mount-renderer'

const Probe = testComponent({
  name: 'Probe',
  props: ['maxURL', 'maxHeight'],
  render: ({ props }) =>
    h(
      'i',
      { id: 'probe' },
      {
        default: () => [
          getAdapter().text(`${props.maxURL}|${props.maxHeight}`),
        ],
      },
    ),
})

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
