import Renderer from '@cdlab996/lowcode-vue-renderer2.7'
import { afterEach, describe, expect, it } from 'vitest'
import type { Component } from 'vue'
import Vue, { nextTick } from 'vue'
import { buildTestComponents } from '../helpers/mount-renderer'

type Dict = Record<string, any>

interface ParentData {
  schema: Dict
  scope?: Dict
  locale?: string
  messages?: Dict
}

interface Mounted {
  parent: Vue & ParentData
  el: () => HTMLElement
  destroy: () => void
}

function mountParent(initial: ParentData): Mounted {
  const target = document.createElement('div')
  document.body.appendChild(target)
  const components = buildTestComponents({ div: 'div' })
  const parent = new Vue({
    data: () => ({
      scope: undefined,
      locale: undefined,
      messages: undefined,
      ...initial,
    }),
    render(h) {
      const self = this as unknown as ParentData
      return h(Renderer as Component, {
        props: {
          schema: self.schema,
          scope: self.scope,
          locale: self.locale,
          messages: self.messages,
          components,
        },
      })
    },
  }).$mount(target) as Vue & ParentData
  return {
    parent,
    el: () => parent.$el as HTMLElement,
    destroy: () => {
      parent.$destroy()
      ;(parent.$el as HTMLElement).remove()
    },
  }
}

function findStyle(id: string): HTMLStyleElement | null {
  return document.head.querySelector(`style[data-id="${id}"]`)
}

function textOf(el: HTMLElement, id: string): string | undefined {
  return el.querySelector(`[data-test="${id}"]`)?.textContent ?? undefined
}

function expr(id: string, value: string) {
  return {
    componentName: 'div',
    id,
    props: { 'data-test': id },
    children: { type: 'JSExpression', value },
  }
}

describe('root scope css (S-15)', () => {
  let mounted: Mounted | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  const cssSchema = (css?: string) => ({
    componentName: 'Page',
    id: 'css-page',
    css,
    children: [],
  })

  it('injects the page style on mount', async () => {
    mounted = mountParent({ schema: cssSchema('.a { color: red; }') })
    await nextTick()
    expect(findStyle('css-page')?.innerHTML).toBe('.a { color: red; }')
  })

  it('updates the style when a new schema object changes css', async () => {
    mounted = mountParent({ schema: cssSchema('.a { color: red; }') })
    await nextTick()
    mounted.parent.schema = cssSchema('.a { color: blue; }')
    await nextTick()
    await nextTick()
    expect(findStyle('css-page')?.innerHTML).toBe('.a { color: blue; }')
  })

  it('updates the style when schema.css is mutated reactively', async () => {
    mounted = mountParent({ schema: cssSchema('.a { color: red; }') })
    await nextTick()
    mounted.parent.schema.css = '.a { color: green; }'
    await nextTick()
    await nextTick()
    expect(findStyle('css-page')?.innerHTML).toBe('.a { color: green; }')
  })

  it('removes the style when css is removed', async () => {
    mounted = mountParent({ schema: cssSchema('.a { color: red; }') })
    await nextTick()
    mounted.parent.schema.css = ''
    await nextTick()
    await nextTick()
    expect(findStyle('css-page')).toBeNull()
  })

  it('removes the style from head on destroy', async () => {
    mounted = mountParent({ schema: cssSchema('.a { color: red; }') })
    await nextTick()
    expect(findStyle('css-page')).not.toBeNull()
    mounted.destroy()
    mounted = undefined
    expect(findStyle('css-page')).toBeNull()
  })
})

describe('root scope __scope / locale (S-16)', () => {
  let mounted: Mounted | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  const scopeSchema = {
    componentName: 'Page',
    id: 'scope-page',
    children: [
      expr('label', 'this.utils.label()'),
      expr('constant', 'this.constants.X'),
      expr('extra', 'String(this.extra)'),
      expr('i18n', 'this.i18n("hello")'),
      expr('locale', 'this.currentLocale'),
    ],
  }

  it('reflects a replaced __scope object', async () => {
    mounted = mountParent({
      schema: scopeSchema,
      scope: {
        utils: { label: () => 'label-a' },
        constants: { X: 'x-a' },
        extra: 'extra-a',
      },
    })
    await nextTick()
    expect(textOf(mounted.el(), 'label')).toBe('label-a')
    expect(textOf(mounted.el(), 'constant')).toBe('x-a')
    expect(textOf(mounted.el(), 'extra')).toBe('extra-a')

    mounted.parent.scope = {
      utils: { label: () => 'label-b' },
      constants: { X: 'x-b' },
    }
    await nextTick()
    await nextTick()
    expect(textOf(mounted.el(), 'label')).toBe('label-b')
    expect(textOf(mounted.el(), 'constant')).toBe('x-b')
    // keys absent from the new __scope are removed
    expect(textOf(mounted.el(), 'extra')).toBe('undefined')
  })

  it('reflects reactive top-level key changes on __scope', async () => {
    mounted = mountParent({
      schema: scopeSchema,
      scope: {
        utils: { label: () => 'label-a' },
        constants: { X: 'x-a' },
      },
    })
    await nextTick()
    ;(mounted.parent.scope as Dict).constants = { X: 'x-c' }
    await nextTick()
    await nextTick()
    expect(textOf(mounted.el(), 'constant')).toBe('x-c')
  })

  it('does not let __scope remove i18n / currentLocale', async () => {
    mounted = mountParent({
      schema: scopeSchema,
      scope: {
        utils: { label: () => 'l' },
        constants: { X: 'x' },
        i18n: () => 'scope-i18n',
      },
      locale: 'en-US',
      messages: { 'en-US': { hello: 'Hello' } },
    })
    await nextTick()
    mounted.parent.scope = { utils: { label: () => 'l' }, constants: {} }
    await nextTick()
    await nextTick()
    expect(textOf(mounted.el(), 'i18n')).toBe('Hello')
    expect(textOf(mounted.el(), 'locale')).toBe('en-US')
  })

  it('updates i18n output and currentLocale when locale / messages change', async () => {
    mounted = mountParent({
      schema: scopeSchema,
      scope: { utils: { label: () => 'l' }, constants: {} },
      locale: 'en-US',
      messages: {
        'en-US': { hello: 'Hello' },
        'zh-CN': { hello: '你好' },
      },
    })
    await nextTick()
    expect(textOf(mounted.el(), 'i18n')).toBe('Hello')
    expect(textOf(mounted.el(), 'locale')).toBe('en-US')

    mounted.parent.locale = 'zh-CN'
    await nextTick()
    await nextTick()
    expect(textOf(mounted.el(), 'i18n')).toBe('你好')
    expect(textOf(mounted.el(), 'locale')).toBe('zh-CN')

    mounted.parent.messages = { 'zh-CN': { hello: '您好' } }
    await nextTick()
    await nextTick()
    expect(textOf(mounted.el(), 'i18n')).toBe('您好')
  })
})
