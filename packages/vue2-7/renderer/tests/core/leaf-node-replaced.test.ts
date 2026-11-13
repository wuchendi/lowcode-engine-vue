import { afterEach, describe, expect, it } from 'vitest'
import type Vue from 'vue'
import { nextTick } from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

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

function collectInstances(vm: Vue): Vue[] {
  return [vm, ...vm.$children.flatMap(collectInstances)]
}

// The designer can replace a node object while keeping its id (for example
// when the document schema is imported again). The rendered leaf must follow
// the new node instead of staying subscribed to the old one.
describe('design mode node replaced under the same id', () => {
  let mounted: MountedRenderer | undefined

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

    mounted = await mountRenderer({
      schema: { componentName: 'Page', id: 'page', children: [nodeSchema] },
      components: { span: 'span' },
      designMode: 'design',
      getNode: ((id: string) =>
        id === 'target' ? current.node : null) as never,
    })
    const title = () =>
      mounted?.el.querySelector('#target-el')?.getAttribute('title')
    expect(title()).toBe('initial')

    // The node object is swapped, then the tree re-renders (as it does when
    // the designer reports the change).
    current = second
    for (const instance of collectInstances(mounted.vm)) instance.$forceUpdate()
    await nextTick()
    expect(title()).toBe('initial')

    await second.emit('title', 'from replacement', 'initial')
    expect(title()).toBe('from replacement')
  })
})
