import { afterEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { getAdapter } from '../../src'
import type { MountedRenderer } from '../helpers/mount-renderer'
import {
  h,
  mountRenderer,
  settle,
  testComponent,
} from '../helpers/mount-renderer'

const expr = (value: string) => ({ type: 'JSExpression', value })
const fn = (value: string) => ({ type: 'JSFunction', value })

/** A `div` showing the value of an expression, found by `data-test`. */
const show = (id: string, value: string) => ({
  componentName: 'div',
  id,
  props: { 'data-test': id },
  children: expr(value),
})

// Query from the container: a fragment root has no element of its own
const text = (m: MountedRenderer, id: string) =>
  (m.el.parentElement ?? m.el).querySelector(`[data-test="${id}"]`)?.textContent

describe('schema options', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('renders Page, Block and Component schemas', async () => {
    for (const componentName of ['Page', 'Block', 'Component']) {
      mounted = await mountRenderer({
        schema: {
          componentName,
          id: componentName,
          state: { name: componentName },
          children: [show('name', 'this.name')],
        },
        components: { div: 'div' },
      })
      expect(mounted.el.textContent).toContain(componentName)
      mounted.destroy()
      mounted = undefined
    }
  })

  it('initData merges over state and can read methods', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        state: { a: 1, b: 1 },
        methods: { two: fn('function () { return 2 }') },
        lifeCycles: {
          initData: expr('function () { return { b: this.two(), c: 3 } }'),
        },
        children: [show('sum', '`${this.a}${this.b}${this.c}`')],
      },
      components: { div: 'div' },
    })
    expect(text(mounted, 'sum')).toBe('123')
  })

  it('initComputed and initWatch react to state changes', async () => {
    const seen: unknown[] = []
    ;(globalThis as Record<string, unknown>).__seen = seen
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        state: { count: 1 },
        lifeCycles: {
          initComputed: expr(
            '({ double() { return this.count * 2 }, label: { get() { return "n" + this.count } } })',
          ),
          initWatch: expr(
            '({ count(value, old) { window.__seen.push([value, old]) } })',
          ),
        },
        children: [show('double', 'this.double'), show('label', 'label')],
      },
      components: { div: 'div' },
    })
    expect(text(mounted, 'double')).toBe('2')
    expect(text(mounted, 'label')).toBe('n1')

    mounted.scope.count = 5
    await nextTick()
    await nextTick()
    expect(text(mounted, 'double')).toBe('10')
    expect(text(mounted, 'label')).toBe('n5')
    expect(seen).toEqual([[5, 1]])
  })

  it('initWatch supports immediate handlers and method names', async () => {
    const seen: unknown[] = []
    ;(globalThis as Record<string, unknown>).__seen = seen
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        state: { title: 'a' },
        methods: { onTitle: fn('function (v) { window.__seen.push(v) }') },
        lifeCycles: {
          initWatch: expr(
            '({ title: [{ handler: "onTitle", immediate: true }] })',
          ),
        },
      },
    })
    expect(seen).toEqual(['a'])
    mounted.scope.title = 'b'
    await nextTick()
    expect(seen).toEqual(['a', 'b'])
  })

  it('setup bindings, initProvide and initInject reach the scope', async () => {
    const Child = testComponent({
      name: 'Child',
      render: () => h('i'),
    })
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        lifeCycles: {
          setup: expr(
            'function () { return { fromSetup: "setup-value", greet() { return "hi" } } }',
          ),
          initProvide: expr('({ theme: "dark" })'),
          initInject: expr('({ missing: { default: "fallback" } })'),
        },
        children: [
          show('setup', 'this.fromSetup + "/" + this.greet()'),
          show('inject', 'this.missing'),
          { componentName: 'Child', id: 'child' },
        ],
      },
      components: { div: 'div', Child },
    })
    expect(text(mounted, 'setup')).toBe('setup-value/hi')
    expect(text(mounted, 'inject')).toBe('fallback')
  })

  it('waits for an async setup before rendering', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        lifeCycles: {
          setup: expr(
            'async function () { await Promise.resolve(); return { loaded: "yes" } }',
          ),
        },
        children: [show('loaded', 'this.loaded')],
      },
      components: { div: 'div' },
    })
    await settle()
    await settle()
    expect(text(mounted, 'loaded')).toBe('yes')
  })

  it('initModule exports become scope variables', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page-module',
        lifeCycles: {
          initModule: expr(
            '(() => ($cached, $scope) => { const exports = {}; exports.pick = (a) => a + "!"; return exports })()',
          ),
        },
        children: [show('picked', 'pick("ok")')],
      },
      components: { div: 'div' },
    })
    expect(text(mounted, 'picked')).toBe('ok!')
  })

  it('initProps reads values passed with the props prop and falls back to defaults', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Component',
        id: 'comp',
        lifeCycles: {
          initProps: expr(
            '({ title: { default: "untitled" }, size: { default: () => 1 } })',
          ),
        },
        children: [show('props', '`${this.title}:${this.size}`')],
      },
      components: { div: 'div' },
      props: { title: 'given' },
    })
    expect(text(mounted, 'props')).toBe('given:1')
  })

  it('resolves bare identifiers through the scope', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        state: { user: 'ann' },
        children: [show('bare', 'user.toUpperCase()')],
      },
      components: { div: 'div' },
    })
    expect(text(mounted, 'bare')).toBe('ANN')
  })

  it('v-model binds the version-specific model prop and event', async () => {
    const { prop, event } = getAdapter().modelOf({})
    const Input = testComponent({
      name: 'Input',
      props: [prop],
      render: ({ props, emit }) =>
        h(
          'button',
          { id: 'model', onClick: () => emit(event, 'next') },
          {
            default: () => [getAdapter().text(String(props[prop]))],
          },
        ),
    })
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        state: { value: 'first' },
        children: [
          {
            componentName: 'Input',
            id: 'input',
            props: { 'v-model': expr('this.value') },
          },
          show('value', 'this.value'),
        ],
      },
      components: { div: 'div', Input },
    })
    const button = mounted.el.querySelector('#model') as HTMLElement
    expect(button.textContent).toBe('first')
    button.click()
    await nextTick()
    expect(text(mounted, 'value')).toBe('next')
    expect(button.textContent).toBe('next')
  })
})
