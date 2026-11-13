import { describe, expect, it, vi } from 'vitest'
import type { CreateElement } from 'vue'
import Vue from 'vue'
import type { MountedRenderer } from '../../core/tests/helpers/mount-renderer'
import { mountRenderer } from '../../core/tests/helpers/mount-renderer'
import { toVNodeData } from '../src/vnode-data'

const ObjectComp = {
  props: ['title', 'fooBar'],
  render(h: CreateElement) {
    return h('div')
  },
}

const CtorComp = Vue.extend({
  props: { title: String },
  render(h) {
    return h('div')
  },
})

describe('toVNodeData', () => {
  it('maps a declared prop to props (object component, camelCase compare)', () => {
    const data = toVNodeData(ObjectComp, { title: 't', 'foo-bar': 1 })
    expect(data.props).toEqual({ title: 't', fooBar: 1 })
    expect(data.attrs).toEqual({})
  })

  it('reads declared props from a Vue.extend constructor', () => {
    const data = toVNodeData(CtorComp, { title: 't', id: 'x' })
    expect(data.props).toEqual({ title: 't' })
    expect(data.attrs).toEqual({ id: 'x' })
  })

  it('maps an undeclared primitive to attrs', () => {
    const data = toVNodeData(ObjectComp, { id: 'x', disabled: true })
    expect(data.attrs).toEqual({ id: 'x', disabled: true })
    expect(data.props).toEqual({})
  })

  it('drops undeclared function/object/array values from attrs', () => {
    const fn = () => 1
    const data = toVNodeData(ObjectComp, {
      fn,
      obj: { a: 1 },
      arr: [1],
      fooBar: { kept: true },
    })
    expect(data.attrs).toEqual({})
    expect(data.props).toEqual({ fooBar: { kept: true } })
  })

  it('maps key/ref/class/style to same-named fields', () => {
    const ref = () => {}
    const data = toVNodeData('div', {
      key: 'k',
      ref,
      class: { a: true },
      style: { color: 'red' },
    })
    expect(data.key).toBe('k')
    expect(data.ref).toBe(ref)
    expect(data.class).toEqual({ a: true })
    expect(data.style).toEqual({ color: 'red' })
    expect(data.attrs).toEqual({})
  })

  it('maps onXxx and onUpdate:xxx to on, keeping array handlers', () => {
    const a = () => {}
    const b = () => {}
    const data = toVNodeData('div', {
      onClick: a,
      'onUpdate:modelValue': [a, b],
    })
    expect(data.on).toEqual({ click: a, 'update:modelValue': [a, b] })
    expect(data.attrs).toEqual({})
  })

  it('maps v-xxx keys to directives and not to attrs', () => {
    const data = toVNodeData('div', { 'v-focus': true })
    expect(data.directives).toHaveLength(1)
    expect(data.directives![0]).toMatchObject({
      name: 'focus',
      rawName: 'v-focus',
      value: true,
    })
    expect(data.attrs).toEqual({})
  })

  it('merges an explicit attrs object, which wins over undeclared primitives', () => {
    const data = toVNodeData(ObjectComp, {
      id: 'x',
      title2: 'p',
      attrs: { title2: 'explicit', role: 'button' },
    })
    expect(data.attrs).toEqual({ id: 'x', title2: 'explicit', role: 'button' })
    expect(data.props).toEqual({})
  })

  it('passes domProps and nativeOn objects through to VNodeData', () => {
    const click = () => {}
    const data = toVNodeData(ObjectComp, {
      domProps: { innerHTML: '<b>x</b>' },
      nativeOn: { click },
    })
    expect(data.domProps).toEqual({ innerHTML: '<b>x</b>' })
    expect(data.nativeOn).toEqual({ click })
    expect(data.attrs).toEqual({})
    expect(data.props).toEqual({})
  })

  it('never treats attrs/domProps/nativeOn as declared props', () => {
    const Comp = { props: ['attrs', 'domProps', 'nativeOn'] }
    const click = () => {}
    const data = toVNodeData(Comp, {
      attrs: { a: 1 },
      domProps: { value: 'v' },
      nativeOn: { click },
    })
    expect(data.props).toEqual({})
    expect(data.attrs).toEqual({ a: 1 })
    expect(data.domProps).toEqual({ value: 'v' })
    expect(data.nativeOn).toEqual({ click })
  })

  it('puts every slot, including default, into proxied scopedSlots', () => {
    const def = (scope: unknown) => [scope]
    const named = () => []
    const data = toVNodeData('div', {}, { default: def, cell: named })
    expect(data.scopedSlots?.default).toBe(def)
    expect(data.scopedSlots?.cell).toBe(named)
    expect((def as any).proxy).toBe(true)
  })
})

describe('rendering through the normaliser', () => {
  let mounted: MountedRenderer | undefined

  const mount = async (
    comp: unknown,
    props: Record<string, unknown>,
    extra: Record<string, unknown> = {},
  ) => {
    mounted?.destroy()
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        ...extra,
        children: [{ componentName: 'Target', id: 'target', props }],
      },
      components: { Target: comp as any },
    })
    return mounted
  }

  it('does not write undeclared function/object values as DOM attributes', async () => {
    const m = await mount(
      {
        props: ['declared'],
        render(this: any, h: CreateElement) {
          return h('div', { class: 'root' }, String(this.declared?.a))
        },
      },
      {
        declared: { a: 1 },
        obj: { b: 2 },
        fn: { type: 'JSFunction', value: 'function () {}' },
        id: 'x',
      },
    )
    const root = m.el.querySelector('.root')!
    expect(root.textContent).toBe('1')
    expect(root.getAttribute('id')).toBe('x')
    expect(root.hasAttribute('obj')).toBe(false)
    expect(root.hasAttribute('fn')).toBe(false)
    expect(root.hasAttribute('declared')).toBe(false)
    m.destroy()
    mounted = undefined
  })

  it('binds nativeOn handlers to the component root element', async () => {
    const onClick = vi.fn()
    const m = await mount(
      {
        render(h: CreateElement) {
          return h('div', { class: 'native-root' }, 'x')
        },
      },
      { nativeOn: { click: onClick } },
    )
    ;(m.el.querySelector('.native-root') as HTMLElement).click()
    expect(onClick).toHaveBeenCalledTimes(1)
    m.destroy()
    mounted = undefined
  })

  it('v-model honours the component model option', async () => {
    const Checkbox = {
      model: { prop: 'checked', event: 'change' },
      props: { checked: Boolean, value: String },
      render(this: any, h: CreateElement) {
        return h(
          'button',
          {
            class: 'cb',
            on: { click: () => this.$emit('change', !this.checked) },
          },
          `${this.checked}|${this.value}`,
        )
      },
    }
    const m = await mount(
      Checkbox,
      { 'v-model': { type: 'JSExpression', value: 'this.on' } },
      { state: { on: false } },
    )
    const btn = m.el.querySelector('.cb') as HTMLElement
    expect(btn.textContent).toBe('false|undefined')
    btn.click()
    await m.flush()
    expect((m.el.querySelector('.cb') as HTMLElement).textContent).toBe(
      'true|undefined',
    )
    m.destroy()
    mounted = undefined
  })

  it('v-model defaults to value/input, v-model:foo uses update:foo', async () => {
    const Field = {
      props: ['value', 'foo'],
      render(this: any, h: CreateElement) {
        return h('div', [
          h('button', {
            class: 'a',
            on: { click: () => this.$emit('input', 'A') },
          }),
          h('button', {
            class: 'b',
            on: { click: () => this.$emit('update:foo', 'B') },
          }),
          h('span', { class: 'out' }, `${this.value}|${this.foo}`),
        ])
      },
    }
    const m = await mount(
      Field,
      {
        'v-model': { type: 'JSExpression', value: 'this.v' },
        'v-model:foo': { type: 'JSExpression', value: 'this.f' },
      },
      { state: { v: 'v0', f: 'f0' } },
    )
    expect(m.el.querySelector('.out')!.textContent).toBe('v0|f0')
    ;(m.el.querySelector('.a') as HTMLElement).click()
    ;(m.el.querySelector('.b') as HTMLElement).click()
    await m.flush()
    expect(m.el.querySelector('.out')!.textContent).toBe('A|B')
    m.destroy()
    mounted = undefined
  })
})
