import type { VueSimulatorRenderer } from './interface'
import { createSimulatorRenderer } from './simulator'

export function installSimulatorRenderer(): VueSimulatorRenderer {
  const win = window as Window & {
    SimulatorRenderer?: VueSimulatorRenderer | null
    LCSimulatorHost?: unknown
  }
  const simulator = createSimulatorRenderer()

  win.SimulatorRenderer = simulator

  win.addEventListener('beforeunload', () => {
    win.LCSimulatorHost = null
    win.SimulatorRenderer = null
    simulator.dispose()
  })

  return simulator
}

export * from '@cdlab996/lowcode-vue-renderer2.7'
export {
  config as vueRendererConfig,
  default as VueRenderer,
} from '@cdlab996/lowcode-vue-renderer2.7'
export * from './interface'
export { createSimulatorRenderer }
