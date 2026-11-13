import { afterEach, describe, expect, it, vi } from 'vitest'
import type Vue from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

type PropChangeListener = (info: {
  key: string
  prop: { path: string[] }
  newValue: unknown
  oldValue?: unknown
}) => void

function createNodeStub(schema: Record<string, unknown>) {
  const listeners: PropChangeListener[] = []
  const node = {
    isLocked: false,
    export: () => schema,
    getProp: () => null,
    getPropValue: () => undefined,
    isContainer: () => false,
    onChildrenChange: () => () => {},
    onPropChange: (listener: PropChangeListener) => {
      listeners.push(listener)
      return () => {}
    },
  }
  const emit = (key: string, newValue: unknown, oldValue?: unknown) => {
    for (const listener of listeners) {
      listener({ key, prop: { path: [key] }, newValue, oldValue })
    }
  }
  return { node, listeners, emit }
}

function collectInstances(vm: Vue): Vue[] {
  return [vm, ...vm.$children.flatMap(collectInstances)]
}

function internalAttrs(root: HTMLElement): string[] {
  return Array.from(root.querySelectorAll('*')).flatMap((el) =>
    el
      .getAttributeNames()
      .filter((name) => name.startsWith('___') && name.endsWith('___')),
  )
}

describe('unified leaf', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('keys loop items and reports refs per item in design mode', async () => {
    const onCompGetCtx = vi.fn()
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        children: [
          {
            componentName: 'span',
            id: 'item',
            loop: [1, 2, 3],
            props: { ref: 'items' },
            children: 'item',
          },
        ],
      },
      components: { span: 'span' },
      designMode: 'design',
      onCompGetCtx,
    })

    const instances = collectInstances(mounted.vm)
    const keys = instances
      .map((inst) => inst.$vnode?.key)
      .filter((key) => typeof key === 'string' && key.startsWith('item'))
    expect(keys).toEqual(['item-0', 'item-1', 'item-2'])

    const itemCalls = onCompGetCtx.mock.calls.filter(
      ([schema]) => schema.id === 'item',
    )
    expect(itemCalls).toHaveLength(3)
    expect(new Set(itemCalls.map(([, inst]) => inst)).size).toBe(3)

    const owner = instances.find((inst) => Array.isArray(inst.$refs.items))
    expect(owner?.$refs.items).toHaveLength(3)
  })

  it('removes a named slot when its JSSlot prop is removed', async () => {
    const slotValue = {
      type: 'JSSlot',
      value: [
        {
          componentName: 'span',
          id: 'header-content',
          props: { id: 'header-el' },
          children: 'header',
        },
      ],
    }
    const leafSchema = {
      componentName: 'WithSlot',
      id: 'leaf',
      props: { header: slotValue },
    }
    const { node, emit } = createNodeStub(leafSchema)
    const WithSlot = {
      name: 'WithSlot',
      render(this: Vue, h: Vue.CreateElement) {
        return h('div', { attrs: { id: 'with-slot' } }, [
          this.$scopedSlots.header?.({}),
        ])
      },
    }
    mounted = await mountRenderer({
      schema: { componentName: 'Page', id: 'page', children: [leafSchema] },
      components: { WithSlot, span: 'span' },
      designMode: 'design',
      getNode: ((id: string) => (id === 'leaf' ? node : null)) as never,
    })
    expect(mounted.el.querySelector('#header-el')).not.toBeNull()

    emit('header', undefined, slotValue)
    await mounted.flush()

    expect(mounted.el.querySelector('#with-slot')).not.toBeNull()
    expect(mounted.el.querySelector('#header-el')).toBeNull()
    expect(
      mounted.el.querySelector('#with-slot')?.getAttributeNames(),
    ).not.toContain('header')
  })

  it('applies designer keys without leaking them into the DOM', async () => {
    const leafSchema = {
      componentName: 'div',
      id: 'leaf',
      props: { id: 'leaf-el' },
      children: 'leaf',
    }
    const { node, emit } = createNodeStub(leafSchema)
    const current = await mountRenderer({
      schema: { componentName: 'Page', id: 'page', children: [leafSchema] },
      components: { div: 'div' },
      designMode: 'design',
      getNode: ((id: string) => (id === 'leaf' ? node : null)) as never,
    })
    mounted = current
    const count = () => current.el.querySelectorAll('#leaf-el').length
    expect(count()).toBe(1)

    emit('___hidden___', true)
    await mounted.flush()
    expect(count()).toBe(0)

    emit('___hidden___', false)
    await mounted.flush()
    expect(count()).toBe(1)
    expect(internalAttrs(mounted.el)).toEqual([])

    emit('___condition___', false)
    await mounted.flush()
    expect(count()).toBe(0)

    emit('___condition___', true)
    await mounted.flush()
    expect(count()).toBe(1)
    expect(internalAttrs(mounted.el)).toEqual([])

    emit('___loop___', [1, 2])
    await mounted.flush()
    expect(count()).toBe(2)
    expect(internalAttrs(mounted.el)).toEqual([])
  })
})
