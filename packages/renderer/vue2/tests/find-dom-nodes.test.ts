import { afterEach, describe, expect, it } from 'vitest'
import Vue from 'vue'
import { vue2Adapter } from '../src/adapter'

const findDOMNodes = vue2Adapter.domNodesOf

const mounted: Vue[] = []

function mount(options: Record<string, unknown>): Vue {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const vm = new Vue(options).$mount(container)
  mounted.push(vm)
  return vm
}

afterEach(() => {
  for (const vm of mounted.splice(0)) {
    vm.$destroy()
    vm.$el.parentNode?.removeChild(vm.$el)
  }
})

describe('vue2Adapter.domNodesOf', () => {
  it('returns the root element for an element root', () => {
    const vm = mount({ render: (h: Vue.CreateElement) => h('div') })

    expect(findDOMNodes(vm as never)).toEqual([vm.$el])
  })

  it('returns null for an empty render comment root', () => {
    const vm = mount({ render: (h: Vue.CreateElement) => h() })

    expect(vm.$el.nodeType).toBe(Node.COMMENT_NODE)
    expect(findDOMNodes(vm as never)).toBeNull()
  })

  it('returns null for a v-if false comment root', () => {
    const vm = mount({
      data: () => ({ show: false }),
      render(this: Vue & { show: boolean }, h: Vue.CreateElement) {
        return this.show ? h('div') : h()
      },
    })

    expect(findDOMNodes(vm as never)).toBeNull()
  })

  it('returns only the instance root, not its siblings', () => {
    let child!: Vue
    const Child = Vue.extend({
      mounted() {
        child = this
      },
      render: (h) => h('span', { attrs: { id: 'child' } }),
    })
    mount({
      render: (h: Vue.CreateElement) =>
        h('div', [h('i', { attrs: { id: 'before' } }), h(Child), h('b')]),
    })

    const nodes = findDOMNodes(child as never)
    expect(nodes).toHaveLength(1)
    expect(nodes?.[0]).toBe(child.$el)
  })
})
