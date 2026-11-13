import { afterEach, describe, expect, it } from 'vitest'
import Vue from 'vue'
import {
  getClosestNodeInstance,
  getClosestNodeInstanceByComponent,
} from '../../src/utils/closest-node'
import type { CompRootHTMLElement } from '../../src/utils/comp-node'
import { ComponentRecord, setCompRootData } from '../../src/utils/comp-node'

type VueWithUid = Vue & { _uid: number }

const mounted: Vue[] = []

function mount(options: Record<string, unknown>): VueWithUid {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const vm = new Vue(options).$mount(container)
  mounted.push(vm)
  return vm as VueWithUid
}

function tag(vm: Vue, docId: string, nodeId: string): void {
  setCompRootData(vm.$el as CompRootHTMLElement, {
    docId,
    nodeId,
    instance: vm as never,
  })
}

afterEach(() => {
  for (const vm of mounted.splice(0)) {
    vm.$destroy()
    vm.$el.parentNode?.removeChild(vm.$el)
  }
})

describe('getClosestNodeInstance', () => {
  it('resolves a nested child element to the closest tagged root', () => {
    const vm = mount({
      render: (h: Vue.CreateElement) =>
        h('div', [h('section', [h('span', { attrs: { id: 'leaf' } })])]),
    })
    tag(vm, 'd1', 'n1')
    const leaf = vm.$el.querySelector('#leaf') as Element

    expect(getClosestNodeInstance(leaf, undefined)).toEqual({
      docId: 'd1',
      nodeId: 'n1',
      instance: new ComponentRecord('d1', 'n1', vm._uid),
    })
  })

  it('skips non-matching roots when a specId is given', () => {
    let inner!: VueWithUid
    const Inner = Vue.extend({
      mounted() {
        inner = this as VueWithUid
      },
      render: (h) => h('p', [h('span', { attrs: { id: 'leaf' } })]),
    })
    const outer = mount({
      render: (h: Vue.CreateElement) => h('div', [h(Inner)]),
    })
    tag(outer, 'd1', 'n0')
    tag(inner, 'd1', 'n1')
    const leaf = outer.$el.querySelector('#leaf') as Element

    expect(getClosestNodeInstance(leaf, undefined)?.nodeId).toBe('n1')
    expect(getClosestNodeInstance(leaf, 'n0')).toEqual({
      docId: 'd1',
      nodeId: 'n0',
      instance: new ComponentRecord('d1', 'n0', outer._uid),
    })
  })

  it('ignores Vue 3 __vueParentComponent markers', () => {
    const vm = mount({
      render: (h: Vue.CreateElement) =>
        h('div', [h('span', { attrs: { id: 'leaf' } })]),
    })
    tag(vm, 'd1', 'n1')
    const leaf = vm.$el.querySelector('#leaf') as Element
    // A stale Vue 3 marker pointing at an untagged instance must not be used.
    Object.assign(leaf, {
      __vueParentComponent: { $el: leaf, $parent: null },
    })

    expect(getClosestNodeInstance(leaf, undefined)?.nodeId).toBe('n1')
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

  it('returns null when no ancestor is tagged', () => {
    const vm = mount({
      render: (h: Vue.CreateElement) =>
        h('div', [h('span', { attrs: { id: 'leaf' } })]),
    })
    const leaf = vm.$el.querySelector('#leaf') as Element

    expect(getClosestNodeInstance(leaf, undefined)).toBeNull()
  })
})

describe('getClosestNodeInstanceByComponent', () => {
  it('walks $parent from a child instance to the tagged parent', () => {
    let child!: Vue
    const Child = Vue.extend({
      mounted() {
        child = this
      },
      render: (h) => h('span'),
    })
    const parent = mount({
      render: (h: Vue.CreateElement) => h('div', [h(Child)]),
    })
    tag(parent, 'd1', 'n1')

    expect(
      getClosestNodeInstanceByComponent(child as never, undefined),
    ).toEqual({
      docId: 'd1',
      nodeId: 'n1',
      instance: new ComponentRecord('d1', 'n1', parent._uid),
    })
  })
})
