import type { IPublicTypeComponentSchema } from '@alilc/lowcode-types'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import { createSimulatorRenderer } from '../../src/simulator/simulator'
import { h, mountRender } from '../helpers/mount-renderer'
import { createStubDocument, createStubHost } from './stub-host'

const schema = {
  componentName: 'Component',
  fileName: 'Greeting',
  id: 'greeting',
  lifeCycles: {
    initProps: {
      type: 'JSExpression',
      value: '({ name: { default: "world" } })',
    },
  },
  children: [
    {
      componentName: 'span',
      id: 'text',
      props: { class: 'greeting' },
      children: { type: 'JSExpression', value: '"hello " + this.name' },
    },
  ],
} as unknown as IPublicTypeComponentSchema

describe('simulator.createComponent', () => {
  const disposers: Array<() => void> = []

  afterEach(() => {
    for (const dispose of disposers.splice(0)) dispose()
  })

  it('renders a low-code component with its declared props', async () => {
    const doc = createStubDocument({ id: 'doc', fileName: 'index' })
    const host = createStubHost({ documents: [doc], currentDocument: doc })
    const simulator = createSimulatorRenderer(host)
    disposers.push(() => simulator.dispose())
    simulator.components = {
      span: (await import('../../src')).accessLibrary('span') as object,
    }

    const Greeting = simulator.createComponent(schema)!
    const withProp = await mountRender(() => h(Greeting, { name: 'vue' }))
    disposers.push(withProp.destroy)
    const withDefault = await mountRender(() => h(Greeting))
    disposers.push(withDefault.destroy)

    const greeting = (el: HTMLElement) =>
      (el.parentElement ?? el).querySelector('.greeting')?.textContent
    expect(greeting(withProp.el)).toBe('hello vue')
    expect(greeting(withDefault.el)).toBe('hello world')
  })

  it('updates on prop changes and emits declared events to the parent', async () => {
    const doc = createStubDocument({ id: 'doc', fileName: 'index' })
    const host = createStubHost({ documents: [doc], currentDocument: doc })
    const simulator = createSimulatorRenderer(host)
    disposers.push(() => simulator.dispose())
    simulator.components = {
      button: (await import('../../src')).accessLibrary('button') as object,
    }
    const counter = createCounter()
    const Counter = simulator.createComponent(counter)!
    const onChange = vi.fn()
    const state = reactive({ start: 1 })
    const mounted = await mountRender(() =>
      h(Counter, { start: state.start, onChange }),
    )
    disposers.push(mounted.destroy)
    const button = () =>
      (mounted.el.parentElement ?? mounted.el).querySelector(
        'button',
      ) as HTMLButtonElement

    expect(button().textContent).toBe('1')
    state.start = 5
    await nextTick()
    await nextTick()
    expect(button().textContent).toBe('5')

    button().click()
    expect(onChange).toHaveBeenCalledWith(6)
  })
})

function createCounter() {
  return {
    componentName: 'Component',
    fileName: 'Counter',
    id: 'counter',
    lifeCycles: {
      initProps: { type: 'JSExpression', value: '({ start: Number })' },
      initEmits: { type: 'JSExpression', value: '["change"]' },
    },
    methods: {
      bump: {
        type: 'JSFunction',
        value: 'function () { this.$emit("change", this.start + 1) }',
      },
    },
    children: [
      {
        componentName: 'button',
        id: 'bump',
        props: {
          onClick: { type: 'JSFunction', value: 'function () { this.bump() }' },
        },
        children: { type: 'JSExpression', value: 'String(this.start)' },
      },
    ],
  } as unknown as IPublicTypeComponentSchema
}
