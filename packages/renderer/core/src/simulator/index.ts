import type { BuiltinSimulatorHost } from '@alilc/lowcode-designer'
import type { VueSimulatorRenderer } from './interface'
import { createSimulatorRenderer } from './simulator'

export type {
  DocumentInstance,
  SimulatorViewLayout,
  VueSimulatorRenderer,
} from './interface'
export { createDocumentInstance, createSimulatorRenderer } from './simulator'

/**
 * Creates the simulator for the canvas window and exposes it as
 * `window.SimulatorRenderer`, where the designer host looks for it.
 */
export function installSimulatorRenderer(
  host?: BuiltinSimulatorHost,
): VueSimulatorRenderer {
  const win = window as Window & {
    SimulatorRenderer?: VueSimulatorRenderer | null
    LCSimulatorHost?: unknown
  }
  const simulator = createSimulatorRenderer(host)
  win.SimulatorRenderer = simulator
  win.addEventListener('beforeunload', () => {
    win.LCSimulatorHost = null
    win.SimulatorRenderer = null
    simulator.dispose()
  })
  return simulator
}
