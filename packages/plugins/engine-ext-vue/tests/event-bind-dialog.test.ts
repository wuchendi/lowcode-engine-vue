// @vitest-environment jsdom
import { EventEmitter } from 'node:events'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const engine = vi.hoisted(() => ({
  emitted: [] as unknown[][],
  panels: [] as string[],
}))

vi.mock('@alilc/lowcode-engine', () => {
  const bus = new EventEmitter()
  return {
    common: {},
    event: {
      on: (name: string, listener: (...args: unknown[]) => void) =>
        bus.on(name, listener),
      emit: (name: string, ...args: unknown[]) => {
        engine.emitted.push([name, ...args])
        bus.emit(name, ...args)
      },
    },
    project: {
      exportSchema: () => ({
        componentsTree: [
          {
            componentName: 'Page',
            methods: {
              submit: { type: 'JSFunction', value: 'function () {}' },
            },
          },
        ],
      }),
    },
    skeleton: { showPanel: (name: string) => engine.panels.push(name) },
  }
})

const { event } = await import('@alilc/lowcode-engine')
const { default: EventBindDialog } = await import(
  '../src/plugin/plugin-event-bind-dialog'
)

const TEMPLATE = 'onClick(event,${extParams}){\n  console.log(event)\n}'

let container: HTMLDivElement

function open(isEdit = false) {
  act(() => {
    event.emit(
      'common:eventBindDialog.openDialog',
      'onClick',
      'event-setter',
      '',
      isEdit,
      'onClick',
      { template: TEMPLATE },
    )
  })
}

function ok() {
  const button = [
    ...document.querySelectorAll('.next-dialog-footer button'),
  ].find((b) => b.textContent === '确定') as HTMLButtonElement
  act(() => button.click())
}

beforeEach(() => {
  engine.emitted.length = 0
  engine.panels.length = 0
  container = document.createElement('div')
  document.body.appendChild(container)
  act(() => {
    ReactDOM.render(
      React.createElement(EventBindDialog, {
        config: { pluginKey: 'eventBindDialog' },
      } as never),
      container,
    )
  })
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container)
  document.body.innerHTML = ''
})

describe('EventBindDialog', () => {
  it('lists the methods of the page and proposes the event name', () => {
    open()
    const items = [...document.querySelectorAll('.select-item')].map(
      (item) => item.textContent,
    )
    expect(items).toContain('submit')
    const input = document.querySelector(
      '.event-input-container input',
    ) as HTMLInputElement
    expect(input.value).toBe('onClick')
    // No props.xxx tip: Vue components emit events
    const title = document.querySelector(
      '.dialog-right-container .dialog-small-title',
    )
    expect(title?.querySelector('.next-icon-help')).toBeNull()
  })

  it('binds a new method and adds it to the source panel', async () => {
    open()
    ok()
    expect(engine.emitted).toContainEqual([
      'event-setter.bindEvent',
      'onClick',
      undefined,
      'onClick',
    ])
    expect(engine.panels).toEqual(['codeEditor'])
    await new Promise((resolve) => setTimeout(resolve, 250))
    expect(engine.emitted).toContainEqual([
      'codeEditor.addFunction',
      {
        functionName: 'onClick',
        template: 'onClick(event){\n  console.log(event)\n}',
      },
    ])
  })

  it('binds an existing method without adding one', async () => {
    open()
    const submit = [...document.querySelectorAll('.select-item')].find(
      (item) => item.textContent === 'submit',
    ) as HTMLElement
    act(() => submit.click())
    ok()
    expect(engine.emitted).toContainEqual([
      'event-setter.bindEvent',
      'submit',
      undefined,
      'onClick',
    ])
    await new Promise((resolve) => setTimeout(resolve, 250))
    expect(engine.panels).toEqual([])
    expect(
      engine.emitted.some(([name]) => name === 'codeEditor.addFunction'),
    ).toBe(false)
  })
})
