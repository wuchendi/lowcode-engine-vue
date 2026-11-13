import { describe, expect, it } from 'vitest'
import { getAdapter } from '../../src'
import { Slot } from '../../src/simulator/builtin-components'
import { h, mountRender } from '../helpers/mount-renderer'

describe('Slot', () => {
  it('renders default slot content inside div.lc-container', async () => {
    const { el, destroy } = await mountRender(() =>
      h(Slot, null, {
        default: () => [
          h('span', null, { default: () => [getAdapter().text('child')] }),
        ],
      }),
    )
    expect(el.tagName).toBe('DIV')
    expect(el.classList.contains('lc-container')).toBe(true)
    expect(el.querySelector('span')?.textContent).toBe('child')
    destroy()
  })
})
