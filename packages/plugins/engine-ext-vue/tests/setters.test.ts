// @vitest-environment jsdom
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import BoolSetter from '../src/setter/bool-setter'
import NumberSetter from '../src/setter/number-setter'
import RadioGroupSetter from '../src/setter/radiogroup-setter'
import StringSetter from '../src/setter/string-setter'

vi.mock('@alilc/lowcode-engine', () => ({ common: {} }))

let container: HTMLDivElement | undefined

function render(type: React.ComponentType<any>, props: object) {
  container = document.createElement('div')
  document.body.appendChild(container)
  act(() => {
    ReactDOM.render(React.createElement(type, props), container!)
  })
  return container
}

afterEach(() => {
  if (container) ReactDOM.unmountComponentAtNode(container)
  document.body.innerHTML = ''
})

describe('setters', () => {
  it('StringSetter shows and changes the value', () => {
    const onChange = vi.fn()
    const input = render(StringSetter, { value: 'a', onChange }).querySelector(
      'input',
    )!
    expect(input.value).toBe('a')
    act(() => {
      Simulate.change(input, { target: { value: 'ab' } } as never)
    })
    expect(onChange).toHaveBeenCalledWith('ab')
  })

  it('BoolSetter toggles the value', () => {
    const onChange = vi.fn()
    const root = render(BoolSetter, { value: false, onChange })
    act(() => {
      ;(root.querySelector('.next-switch') as HTMLElement).click()
    })
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('NumberSetter gives numbers, 0 for an empty input', () => {
    const onChange = vi.fn()
    const input = render(NumberSetter, { value: 1, onChange }).querySelector(
      'input',
    )!
    expect(input.value).toBe('1')
    act(() => {
      Simulate.change(input, { target: { value: '5' } } as never)
    })
    act(() => {
      Simulate.change(input, { target: { value: '' } } as never)
    })
    expect(onChange.mock.calls).toEqual([[5], [0]])
  })

  it('RadioGroupSetter selects an option', () => {
    const onChange = vi.fn()
    const root = render(RadioGroupSetter, {
      value: 'small',
      options: [
        { title: 'Small', value: 'small' },
        { title: 'Large', value: 'large' },
      ],
      onChange,
    })
    const large = [...root.querySelectorAll('label, .next-radio-wrapper')].find(
      (item) => item.textContent?.includes('Large'),
    ) as HTMLElement
    act(() => {
      ;(large.querySelector('input') ?? large).click()
    })
    expect(onChange).toHaveBeenCalledWith('large')
  })
})
