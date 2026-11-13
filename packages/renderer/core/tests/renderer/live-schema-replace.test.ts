import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import type { MountedParent } from '../helpers/mount-renderer'
import { mountWithState } from '../helpers/mount-renderer'

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

describe('live schema replacement', () => {
  let mounted: MountedParent<{ schema: unknown }> | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('live mode re-renders when the schema prop is replaced', async () => {
    mounted = mountWithState({ schema: createSchema('old') })
    await nextTick()
    const before = mounted.el().querySelector('#child-el')
    expect(before?.getAttribute('title')).toBe('old')

    mounted.state.schema = createSchema('new')
    await nextTick()
    await nextTick()

    const after = mounted.el().querySelector('#child-el')
    expect(after?.getAttribute('title')).toBe('new')
  })
})
