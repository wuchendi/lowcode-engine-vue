import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const leafSchema = {
  componentName: 'div',
  id: 'leaf',
  props: { id: 'leaf-el' },
  children: 'leaf',
}

const schema = {
  componentName: 'Page',
  id: 'page',
  children: [leafSchema],
}

type PropChangeListener = (info: {
  key: string
  prop: { path: string[] }
  newValue: unknown
  oldValue?: unknown
}) => void

function createNodeStub() {
  const listeners: PropChangeListener[] = []
  const node = {
    isLocked: false,
    export: () => leafSchema,
    getProp: () => null,
    getPropValue: () => undefined,
    isContainer: () => false,
    onChildrenChange: () => () => {},
    onPropChange: (listener: PropChangeListener) => {
      listeners.push(listener)
      return () => {}
    },
  }
  return { node, listeners }
}

describe('designer-internal keys', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('designer-internal prop keys do not leak into DOM attributes', async () => {
    const { node, listeners } = createNodeStub()
    mounted = await mountRenderer({
      schema,
      components: { div: 'div' },
      designMode: 'design',
      getNode: ((id: string) => (id === 'leaf' ? node : null)) as never,
    })
    expect(listeners).toHaveLength(1)

    listeners[0]({
      key: '___condition___',
      prop: { path: ['___condition___'] },
      newValue: true,
    })
    await mounted.flush()

    const el = mounted.el.querySelector('#leaf-el')
    expect(el).not.toBeNull()
    const internalAttrs = (el?.getAttributeNames() ?? []).filter(
      (name) => name.startsWith('___') && name.endsWith('___'),
    )
    expect(internalAttrs).toEqual([])
  })
})
