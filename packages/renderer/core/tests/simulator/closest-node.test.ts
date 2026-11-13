import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import type { ComponentInstance, VueComponent } from '../../src'
import { getAdapter } from '../../src'
import {
  getClosestNodeInstance,
  getClosestNodeInstanceByComponent,
} from '../../src/simulator/utils/closest-node'
import type { CompRootHTMLElement } from '../../src/simulator/utils/comp-node'
import {
  ComponentRecord,
  setCompRootData,
} from '../../src/simulator/utils/comp-node'
import { h, mountRender } from '../helpers/mount-renderer'

/** A component that renders `render()` and reports its instance on mount. */
function capturing(
  render: () => object,
  onInstance: (i: ComponentInstance) => void,
) {
  return defineComponent({
    setup() {
      const instance = getCurrentInstance()!
        .proxy as unknown as ComponentInstance
      onMounted(() => onInstance(instance))
      return render
    },
  }) as unknown as VueComponent
}

function tag(instance: ComponentInstance, docId: string, nodeId: string): void {
  setCompRootData(instance.$el as CompRootHTMLElement, {
    docId,
    nodeId,
    instance,
  })
}

const span = (id?: string) => h('span', id ? { id } : null)
const destroyers: Array<() => void> = []

afterEach(() => {
  for (const destroy of destroyers.splice(0)) destroy()
})

async function mountCapturing(render: () => object) {
  let instance!: ComponentInstance
  const Comp = capturing(render, (i) => (instance = i))
  const mounted = await mountRender(() => h(Comp))
  destroyers.push(mounted.destroy)
  return instance
}

const idOf = (instance: ComponentInstance) => getAdapter().instanceId(instance)

describe('getClosestNodeInstance', () => {
  it('resolves a nested child element to the closest tagged root', async () => {
    const vm = await mountCapturing(() =>
      h('div', null, {
        default: () => [h('section', null, { default: () => [span('leaf')] })],
      }),
    )
    tag(vm, 'd1', 'n1')
    const leaf = (vm.$el as Element).querySelector('#leaf') as Element

    expect(getClosestNodeInstance(leaf, undefined)).toEqual({
      docId: 'd1',
      nodeId: 'n1',
      instance: new ComponentRecord('d1', 'n1', idOf(vm)),
    })
  })

  it('skips non-matching roots when a specId is given', async () => {
    let inner!: ComponentInstance
    const Inner = capturing(
      () => h('p', null, { default: () => [span('leaf')] }),
      (i) => (inner = i),
    )
    const outer = await mountCapturing(() =>
      h('div', null, { default: () => [h(Inner)] }),
    )
    tag(outer, 'd1', 'n0')
    tag(inner, 'd1', 'n1')
    const leaf = (outer.$el as Element).querySelector('#leaf') as Element

    expect(getClosestNodeInstance(leaf, undefined)?.nodeId).toBe('n1')
    expect(getClosestNodeInstance(leaf, 'n0')).toEqual({
      docId: 'd1',
      nodeId: 'n0',
      instance: new ComponentRecord('d1', 'n0', idOf(outer)),
    })
  })

  it('returns null for an element detached from the document', () => {
    const el = document.createElement('div')
    setCompRootData(el as CompRootHTMLElement, {
      docId: 'd1',
      nodeId: 'n1',
      instance: {} as never,
    })

    expect(getClosestNodeInstance(el, undefined)).toBeNull()
  })

  it('returns null when no ancestor is tagged', async () => {
    const vm = await mountCapturing(() =>
      h('div', null, { default: () => [span('leaf')] }),
    )
    const leaf = (vm.$el as Element).querySelector('#leaf') as Element

    expect(getClosestNodeInstance(leaf, undefined)).toBeNull()
  })
})

describe('getClosestNodeInstanceByComponent', () => {
  it('walks $parent from a child instance to the tagged parent', async () => {
    let child!: ComponentInstance
    const Child = capturing(
      () => span(),
      (i) => (child = i),
    )
    const parent = await mountCapturing(() =>
      h('div', null, { default: () => [h(Child)] }),
    )
    tag(parent, 'd1', 'n1')

    expect(getClosestNodeInstanceByComponent(child, undefined)).toEqual({
      docId: 'd1',
      nodeId: 'n1',
      instance: new ComponentRecord('d1', 'n1', idOf(parent)),
    })
  })
})
