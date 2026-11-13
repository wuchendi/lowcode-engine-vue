import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

type SettingsWindow = Window & { WeShineProductSettings?: unknown }

const schema = {
  componentName: 'Page',
  id: 'page',
  children: [
    {
      componentName: 'div',
      id: 'target',
      props: { title: '${top}|${a.b}' },
      children: 'content',
    },
  ],
}

describe('R-05 nested template path', () => {
  let mounted: MountedRenderer | undefined
  let hadSettings = false
  let originalSettings: unknown

  beforeEach(() => {
    const win = window as SettingsWindow
    hadSettings = 'WeShineProductSettings' in win
    originalSettings = win.WeShineProductSettings
    win.WeShineProductSettings = { a: { b: 'NESTED' }, top: 'TOP' }
  })

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    const win = window as SettingsWindow
    if (hadSettings) {
      win.WeShineProductSettings = originalSettings
    } else {
      Reflect.deleteProperty(win, 'WeShineProductSettings')
    }
  })

  it('R-05: a string prop with template placeholders passes through unchanged', async () => {
    mounted = await mountRenderer({ schema, components: { div: 'div' } })
    const target = mounted.el.querySelector('[title]')
    expect(target?.getAttribute('title')).toBe('${top}|${a.b}')
  })
})
