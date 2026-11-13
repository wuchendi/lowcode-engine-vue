import { describe, expect, it } from 'vitest'
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
