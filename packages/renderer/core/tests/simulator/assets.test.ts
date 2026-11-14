import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import { createSimulatorRenderer } from '../../src/simulator/simulator'
import { createStubHost } from './stub-host'

const globals = window as unknown as Record<string, unknown>

describe('simulator assets', () => {
  const disposers: Array<() => void> = []

  afterEach(() => {
    for (const dispose of disposers.splice(0)) dispose()
    Reflect.deleteProperty(globals, 'AsyncLib')
  })

  it('loads an asset', async () => {
    const simulator = createSimulatorRenderer(createStubHost())
    disposers.push(() => simulator.dispose())

    // jsdom does not run inline scripts; a style asset shows the loading
    await simulator.load({ type: 'cssText', content: '.loaded-lib{color:red}' })

    const styles = [...document.head.querySelectorAll('style')]
    expect(styles.some((el) => el.textContent?.includes('.loaded-lib'))).toBe(
      true,
    )
  })

  it('resolves async libraries and builds their components', async () => {
    const host = createStubHost()
    const simulator = createSimulatorRenderer(host)
    disposers.push(() => simulator.dispose())
    const XButton = defineComponent({ name: 'XButton', render: () => null })
    host.libraryMap.lib = 'AsyncLib'
    host.designer.componentsMap.XButton = {
      package: 'lib',
      exportName: 'XButton',
      destructuring: true,
    }
    globals.AsyncLib = Promise.resolve({ XButton })

    await simulator.loadAsyncLibrary({
      lib: { async: true, library: 'AsyncLib' },
    })

    expect(globals.AsyncLib).toEqual({ XButton })
    expect(simulator.getComponent('XButton')).toBeTruthy()
  })
})
