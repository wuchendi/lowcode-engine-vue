import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

type Listener = (info: {
  key: string
  prop: { path: string[] }
  newValue: unknown
  oldValue?: unknown
}) => void

// Most edits in the designer set a prop the node did not have yet, or remove
// one, so the leaf must react to keys being added and deleted.
describe('design mode prop changes for keys not in the initial schema', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  async function setup() {
    const listeners: Listener[] = []
    const nodeSchema = {
      componentName: 'span',
      id: 'target',
      props: { id: 'target-el' },
      children: 'text',
    }
    const node = {
      isLocked: false,
      export: () => nodeSchema,
      getProp: () => null,
      getPropValue: () => undefined,
      isContainer: () => false,
      onChildrenChange: () => () => {},
      onPropChange: (listener: Listener) => {
        listeners.push(listener)
        return () => {}
      },
    }
    mounted = await mountRenderer({
      schema: { componentName: 'Page', id: 'page', children: [nodeSchema] },
      components: { span: 'span' },
      designMode: 'design',
      getNode: ((id: string) => (id === 'target' ? node : null)) as never,
    })
    const emit = async (key: string, newValue: unknown, oldValue?: unknown) => {
      for (const listener of listeners) {
        listener({ key, prop: { path: [key] }, newValue, oldValue })
      }
      await nextTick()
    }
    const el = () => mounted?.el.querySelector('#target-el')
    return { emit, el }
  }

  it('renders a prop that is added after mount', async () => {
    const { emit, el } = await setup()
    expect(el()?.getAttribute('title')).toBeNull()

    await emit('title', 'added')
    expect(el()?.getAttribute('title')).toBe('added')

    await emit('title', 'changed', 'added')
    expect(el()?.getAttribute('title')).toBe('changed')
  })

  it('drops a prop that is removed after being added', async () => {
    const { emit, el } = await setup()
    await emit('title', 'added')
    expect(el()?.getAttribute('title')).toBe('added')

    await emit('title', undefined, 'added')
    expect(el()?.getAttribute('title')).toBeNull()
  })
})
