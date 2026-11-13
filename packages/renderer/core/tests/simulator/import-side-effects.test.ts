import { afterEach, describe, expect, it, vi } from 'vitest'
import { getAdapter, getRouterAdapter } from '../../src/adapter'
import { createStubHost } from './stub-host'

// `vi.resetModules()` reloads the adapter module too: re-install the adapter
const adapter = getAdapter()
const routerAdapter = getRouterAdapter()
async function importSimulator() {
  const module = await import('../../src/simulator')
  const fresh = await import('../../src/adapter')
  fresh.setAdapter(adapter)
  fresh.setRouterAdapter(routerAdapter)
  return module
}

const win = window as any

function listenedEvents(spy: { mock: { calls: unknown[][] } }) {
  return spy.mock.calls.map(([type]) => type)
}

describe('simulator: no import-time side effects', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    win.SimulatorRenderer = undefined
    win.LCSimulatorHost = undefined
  })

  it('importing the simulator creates nothing and registers no listeners', async () => {
    win.LCSimulatorHost = undefined
    const winSpy = vi.spyOn(window, 'addEventListener')
    const docSpy = vi.spyOn(document, 'addEventListener')
    vi.resetModules()

    await expect(import('../../src/simulator')).resolves.toBeDefined()

    expect(win.SimulatorRenderer).toBeUndefined()
    expect(listenedEvents(winSpy)).not.toContain('beforeunload')
    expect(listenedEvents(docSpy)).not.toContain('selectstart')
    expect(listenedEvents(docSpy)).not.toContain('dragstart')
  })

  it('installNativeSelectionGuard adds both listeners and disposes them', async () => {
    const { installNativeSelectionGuard } = await import(
      '../../src/simulator/utils/navtive-selection'
    )
    const addSpy = vi.spyOn(document, 'addEventListener')
    const removeSpy = vi.spyOn(document, 'removeEventListener')

    const dispose = installNativeSelectionGuard()
    expect(listenedEvents(addSpy)).toEqual(['selectstart', 'dragstart'])

    dispose()
    expect(listenedEvents(removeSpy)).toEqual(['selectstart', 'dragstart'])
    expect(removeSpy.mock.calls.map((c) => c[1])).toEqual(
      addSpy.mock.calls.map((c) => c[1]),
    )
  })

  it('createSimulatorRenderer uses the injected host only', async () => {
    const { createSimulatorRenderer } = await importSimulator()
    const host = createStubHost()

    const simulator = createSimulatorRenderer(host)

    expect(simulator.isSimulatorRenderer).toBe(true)
    expect(win.SimulatorRenderer).toBeUndefined()
    expect(host.connect).toHaveBeenCalledTimes(1)
    expect(host.autorun).toHaveBeenCalledTimes(1)
    simulator.dispose()
  })

  it('installSimulatorRenderer installs globals and cleans up on beforeunload', async () => {
    const { installSimulatorRenderer } = await importSimulator()
    win.LCSimulatorHost = createStubHost()
    const winSpy = vi.spyOn(window, 'addEventListener')

    const simulator = installSimulatorRenderer()

    expect(win.SimulatorRenderer).toBe(simulator)
    expect(listenedEvents(winSpy)).toContain('beforeunload')

    const dispose = vi.spyOn(simulator, 'dispose')
    window.dispatchEvent(new Event('beforeunload'))

    expect(win.LCSimulatorHost).toBeNull()
    expect(win.SimulatorRenderer).toBeNull()
    expect(dispose).toHaveBeenCalledTimes(1)
  })
})
