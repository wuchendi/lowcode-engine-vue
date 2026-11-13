import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import type { MountedParent } from '../helpers/mount-renderer'
import { mountWithState } from '../helpers/mount-renderer'

type Listener = (info: {
  key: string
  prop: { path: string[] }
  newValue: unknown
  oldValue?: unknown
}) => void

function createNode(schema: Record<string, unknown>) {
  const listeners: Listener[] = []
  const node = {
    isLocked: false,
    export: () => schema,
    getProp: () => null,
    getPropValue: () => undefined,
    isContainer: () => false,
    onChildrenChange: () => () => {},
    onPropChange: (listener: Listener) => {
      listeners.push(listener)
      return () => {}
    },
  }
  const emit = async (key: string, newValue: unknown, oldValue?: unknown) => {
    for (const listener of listeners) {
      listener({ key, prop: { path: [key] }, newValue, oldValue })
    }
    await nextTick()
    await nextTick()
  }
  return { node, emit }
}

// The designer can replace a node object while keeping its id (for example
// when the document schema is imported again). The rendered leaf must follow
// the new node instead of staying subscribed to the old one.
describe('design mode node replaced under the same id', () => {
  let mounted: MountedParent<Record<string, unknown>> | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('applies prop changes emitted by the replacement node', async () => {
    const nodeSchema = {
      componentName: 'span',
      id: 'target',
      props: { id: 'target-el', title: 'initial' },
      children: 'text',
    }
    const first = createNode(nodeSchema)
    const second = createNode(nodeSchema)
    let current = first

    const pageSchema = () => ({
      componentName: 'Page',
      id: 'page',
      children: [nodeSchema],
    })
    mounted = mountWithState(
      {
        schema: pageSchema(),
        designMode: 'design',
        getNode: (id: string) => (id === 'target' ? current.node : null),
      },
      { span: 'span' },
    )
    await nextTick()
    const title = () =>
      mounted?.el().querySelector('#target-el')?.getAttribute('title')
    expect(title()).toBe('initial')

    // The node object is swapped, then the tree re-renders (as it does when
    // the designer reports the change).
    current = second
    mounted.state.schema = pageSchema()
    await nextTick()
    await nextTick()
    expect(title()).toBe('initial')

    await second.emit('title', 'from replacement', 'initial')
    expect(title()).toBe('from replacement')
  })
})
