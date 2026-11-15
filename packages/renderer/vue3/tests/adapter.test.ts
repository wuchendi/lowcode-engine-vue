import { describe, expect, it } from 'vitest'
import type { VNode } from 'vue'
import { createApp, defineComponent, Fragment, h, nextTick, ref } from 'vue'
import { vue3Adapter } from '../src/adapter'

async function mount(root: object, directives: Record<string, object> = {}) {
  const el = document.createElement('div')
  document.body.appendChild(el)
  const app = createApp(root)
  for (const [name, def] of Object.entries(directives)) app.directive(name, def)
  const vm = app.mount(el)
  await nextTick()
  return { el, vm, unmount: () => (app.unmount(), el.remove()) }
}

describe('vue3Adapter', () => {
  it('applies v-xxx props as registered directives', async () => {
    const calls: unknown[] = []
    const value = ref(1)
    const Root = defineComponent({
      setup: () => () =>
        vue3Adapter.h('div', { id: 'target', 'v-probe:arg.mod': value.value }),
    })
    const { el, unmount } = await mount(Root, {
      probe: {
        mounted: (
          _el: Element,
          b: { value: unknown; arg?: string; modifiers: object },
        ) => calls.push(['mounted', b.value, b.arg, b.modifiers]),
        updated: (_el: Element, b: { value: unknown }) =>
          calls.push(['updated', b.value]),
      },
    })
    expect(el.querySelector('#target')?.hasAttribute('v-probe:arg.mod')).toBe(
      false,
    )
    value.value = 2
    await nextTick()
    expect(calls).toEqual([
      ['mounted', 1, 'arg', { mod: true }],
      ['updated', 2],
    ])
    unmount()
  })

  it('applies a directive registered through the adapter', async () => {
    const calls: unknown[] = []
    vue3Adapter.registerDirective('adapter-probe', {
      mounted: (_el: Element, b: { value: unknown }) => calls.push(b.value),
    })
    const Root = defineComponent({
      setup: () => () =>
        vue3Adapter.h('div', { id: 'target', 'v-adapter-probe': 'x' }),
    })
    // Not registered on the app
    const { el, unmount } = await mount(Root)
    expect(calls).toEqual(['x'])
    expect(el.querySelector('#target')?.hasAttribute('v-adapter-probe')).toBe(
      false,
    )
    unmount()
  })

  it('adds and removes a directive of a rendered vnode', async () => {
    const calls: string[] = []
    vue3Adapter.registerDirective('toggle-probe', {
      mounted: () => calls.push('mounted'),
      updated: () => calls.push('updated'),
      unmounted: () => calls.push('unmounted'),
    })
    const Child = defineComponent({
      setup: () => () => h('p', { class: 'child' }),
    })
    // 0: no directive key, 1: the key, 2: the key removed again
    const step = ref(0)
    const props = () => (step.value === 1 ? { 'v-toggle-probe': true } : {})
    const Root = defineComponent({
      setup: () => () =>
        h('section', [
          vue3Adapter.h('div', { key: 'el', id: 'el', ...props() }) as VNode,
          vue3Adapter.h(Child, { key: 'comp', ...props() }) as VNode,
          h('span', { key: 'after' }, String(step.value)),
        ]),
    })
    const { el, unmount } = await mount(Root)
    // Vue patches the directives of a vnode by index: a vnode that gains or
    // loses one has to be another vnode
    step.value = 1
    await nextTick()
    expect(calls).toEqual(['mounted', 'mounted'])
    step.value = 2
    await nextTick()
    expect(calls).toEqual(['mounted', 'mounted', 'unmounted', 'unmounted'])
    expect(el.querySelector('#el')).not.toBeNull()
    expect(el.querySelector('.child')).not.toBeNull()
    expect(el.querySelector('span')?.textContent).toBe('2')
    unmount()
  })

  it('renders every slot of a native tag as children', async () => {
    const Root = defineComponent({
      setup: () => () =>
        vue3Adapter.h('section', null, {
          default: () => [h('i', 'a')],
          extra: () => [h('b', 'b')],
        }),
    })
    const { el, unmount } = await mount(Root)
    expect(el.querySelector('section')?.innerHTML).toBe('<i>a</i><b>b</b>')
    unmount()
  })

  it('finds the DOM nodes of a fragment component', async () => {
    let instance: unknown
    const Multi = defineComponent({
      mounted() {
        instance = this
      },
      render: () => h(Fragment, [h('p', 'one'), h('p', 'two')]),
    })
    const { unmount } = await mount(defineComponent({ render: () => h(Multi) }))
    const nodes = vue3Adapter.domNodesOf(instance as never)
    expect(nodes?.map((n) => n.textContent)).toEqual(['one', 'two'])
    unmount()
  })
})
