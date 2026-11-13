import { afterEach, describe, expect, it, vi } from 'vitest'
import { createStubHost } from '../helpers/stub-host'

const win = window as any

function listenedEvents(spy: { mock: { calls: unknown[][] } }) {
  return spy.mock.calls.map(([type]) => type)
}

describe('simulator S-19: no import-time side effects', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    win.SimulatorRenderer = undefined
    win.LCSimulatorHost = undefined
  })

  it('importing the runtime creates nothing and registers no listeners', async () => {
    win.LCSimulatorHost = undefined
    const winSpy = vi.spyOn(window, 'addEventListener')
    const docSpy = vi.spyOn(document, 'addEventListener')
    vi.resetModules()

    await expect(import('../../src/runtime')).resolves.toBeDefined()

    expect(win.SimulatorRenderer).toBeUndefined()
    expect(listenedEvents(winSpy)).not.toContain('beforeunload')
    expect(listenedEvents(docSpy)).not.toContain('selectstart')
    expect(listenedEvents(docSpy)).not.toContain('dragstart')
  })

  it('installNativeSelectionGuard adds both listeners and disposes them', async () => {
    const { installNativeSelectionGuard } = await import(
      '../../src/utils/navtive-selection'
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
    const { createSimulatorRenderer } = await import('../../src/runtime')
    const host = createStubHost()

    const simulator = createSimulatorRenderer(host)

    expect(simulator.isSimulatorRenderer).toBe(true)
    expect(win.SimulatorRenderer).toBeUndefined()
    expect(host.connect).toHaveBeenCalledTimes(1)
    expect(host.autorun).toHaveBeenCalledTimes(1)
    simulator.dispose()
  })

  it('installSimulatorRenderer installs globals and cleans up on beforeunload', async () => {
    const { installSimulatorRenderer } = await import('../../src/runtime')
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
