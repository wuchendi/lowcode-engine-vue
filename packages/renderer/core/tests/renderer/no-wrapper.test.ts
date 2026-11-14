import { afterEach, describe, expect, it } from 'vitest'
import * as Vue from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { h, mountRenderer, testComponent } from '../helpers/mount-renderer'

const isVue2 = Vue.version.startsWith('2.')

/** Name of the component of a vnode, on either Vue version. */
function componentName(vnode: Record<string, any>): string | undefined {
  if (isVue2) {
    return vnode.componentOptions?.Ctor?.options?.name
  }
  return typeof vnode.type === 'object' ? vnode.type.name : undefined
}

/** Like ant-design-vue's Select / Tabs: reads the child vnodes. */
const XList = testComponent({
  name: 'XList',
  render: ({ slots }) => {
    const children = (slots.default?.() ?? []) as Record<string, any>[]
    const names = children.map(componentName).filter(Boolean)
    return h('ul', { 'data-children': names.join(',') }, {
      default: () => children,
    } as never)
  },
})

const XItem = testComponent({
  name: 'XItem',
  props: ['label'],
  render: ({ props }) =>
    h('li', null, { default: () => [String(props.label)] } as never),
})

describe('nodes render as their component vnodes', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  for (const designMode of ['live', 'design'] as const) {
    it(`gives a component its children's vnodes (${designMode})`, async () => {
      mounted = await mountRenderer({
        schema: {
          componentName: 'Page',
          id: 'page',
          children: [
            {
              componentName: 'XList',
              id: 'list',
              children: [
                { componentName: 'XItem', id: 'a', props: { label: 'A' } },
                {
                  componentName: 'XItem',
                  id: 'b',
                  loop: [1, 2],
                  props: { label: 'B' },
                },
              ],
            },
          ],
        },
        components: { XList, XItem },
        designMode,
      })
      const list = mounted.el.querySelector('ul')!
      expect(list.dataset.children).toBe('XItem,XItem,XItem')
      expect(list.textContent).toBe('ABB')
    })
  }
})

describe('design mode updates', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('re-renders a changed node, not its unchanged siblings', async () => {
    const renders: Record<string, number> = {}
    const XCount = testComponent({
      name: 'XCount',
      props: ['label'],
      render: ({ props }) => {
        renders[props.label] = (renders[props.label] ?? 0) + 1
        return h('i', null, { default: () => [String(props.label)] } as never)
      },
    })
    const listeners = new Map<string, (info: object) => void>()
    const nodeOf = (schema: Record<string, unknown>) => ({
      isLocked: false,
      parent: null,
      export: () => schema,
      getProp: () => null,
      getPropValue: () => undefined,
      isContainer: () => false,
      onChildrenChange: () => () => {},
      onPropChange: (listener: (info: object) => void) => {
        listeners.set(schema.id as string, listener)
        return () => {}
      },
    })
    const changed = {
      componentName: 'XCount',
      id: 'changed',
      props: { label: 'x' },
    }
    const sibling = {
      componentName: 'XCount',
      id: 'sibling',
      props: { label: 's' },
    }
    const nodes: Record<string, unknown> = {
      changed: nodeOf(changed),
      sibling: nodeOf(sibling),
    }
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        children: [changed, sibling],
      },
      components: { XCount },
      designMode: 'design',
      getNode: ((id: string) => nodes[id] ?? null) as never,
    })
    expect(mounted.el.textContent).toBe('xs')
    const before = { ...renders }

    listeners.get('changed')!({
      key: 'label',
      prop: { path: ['label'] },
      newValue: 'y',
      oldValue: 'x',
    })
    await mounted.flush()

    expect(mounted.el.textContent).toBe('ys')
    expect(renders.y).toBe(1)
    expect(renders.s).toBe(before.s)
  })
})
