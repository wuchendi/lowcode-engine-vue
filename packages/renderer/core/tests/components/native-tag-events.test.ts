import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

declare global {
  var __r01Clicks: number | undefined
}

describe('native tag events', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    globalThis.__r01Clicks = undefined
  })

  it('onClick on a native button tag fires on click', async () => {
    globalThis.__r01Clicks = 0
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        children: [
          {
            componentName: 'button',
            id: 'btn',
            props: {
              onClick: {
                type: 'JSFunction',
                value: 'function () { window.__r01Clicks += 1; }',
              },
            },
            children: 'click',
          },
        ],
      },
      components: { button: 'button' },
    })

    const button = mounted.el.querySelector('button') as HTMLButtonElement
    expect(button).not.toBeNull()
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await mounted.flush()

    expect(globalThis.__r01Clicks).toBe(1)
  })
})
