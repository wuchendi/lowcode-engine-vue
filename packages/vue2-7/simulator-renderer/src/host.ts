import type { BuiltinSimulatorHost } from '@alilc/lowcode-designer'

export function getHost(): BuiltinSimulatorHost {
  return (window as Window & { LCSimulatorHost?: BuiltinSimulatorHost })
    .LCSimulatorHost as BuiltinSimulatorHost
}
