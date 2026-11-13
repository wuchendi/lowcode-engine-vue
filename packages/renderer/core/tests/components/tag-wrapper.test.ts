import { describe, expect, it } from 'vitest'
import type { VueComponent } from '../../src'
import { accessLibrary, getAdapter } from '../../src'
import { h, mountRender } from '../helpers/mount-renderer'

describe('native tag wrapper', () => {
  it('accepts lowercase tag names with digits and rejects invalid names', () => {
    expect(accessLibrary('h1')).toBeDefined()
    expect(accessLibrary('my-el2')).toBeDefined()
    expect(accessLibrary('1h')).toBeUndefined()
    expect(accessLibrary('-div')).toBeUndefined()
    expect(accessLibrary('Div')).toBeUndefined()
  })

  it('forwards attrs, listeners, default and named slots', async () => {
    let clicks = 0
    const Section = getAdapter().wrapTag('section') as VueComponent
    const { el, destroy } = await mountRender(() =>
      h(
        Section,
        { title: 't', onClick: () => (clicks += 1) },
        {
          default: () => [
            h(
              'span',
              { class: 'def' },
              { default: () => [getAdapter().text('body')] },
            ),
          ],
          header: () => [
            h(
              'span',
              { class: 'hdr' },
              { default: () => [getAdapter().text('hdr')] },
            ),
          ],
        },
      ),
    )
    expect(el.tagName).toBe('SECTION')
    expect(el.getAttribute('title')).toBe('t')
    expect(el.querySelector('.def')?.textContent).toBe('body')
    expect(el.querySelector('.hdr')?.textContent).toBe('hdr')
    el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(clicks).toBe(1)
    destroy()
  })
})
