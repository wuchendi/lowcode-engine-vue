import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSimulatorRenderer } from '../../src/simulator/simulator'
import { settle } from '../helpers/mount-renderer'
import { createStubDocument, createStubHost } from './stub-host'

const win = window as any

/** The raw router of either vue-router 3 or 4. */
type RawRouter = {
  push(path: string): Promise<unknown>
  resolve(path: string): { matched?: unknown[]; route?: { matched: unknown[] } }
  currentRoute: { fullPath: string } | { value: { fullPath: string } }
}

function setup() {
  const docA = createStubDocument({ id: 'docA', fileName: 'a' })
  const docB = createStubDocument({ id: 'docB', fileName: 'b' })
  const host = createStubHost({
    documents: [docA, docB],
    currentDocument: docA,
  })
  const simulator = createSimulatorRenderer(host)
  const raw = simulator.router.raw as RawRouter
  const matched = (path: string) => {
    const resolved = raw.resolve(path)
    return (resolved.route?.matched ?? resolved.matched ?? []) as Array<{
      props: { default: () => { documentInstance: { document: unknown } } }
    }>
  }
  const fullPath = () =>
    'value' in raw.currentRoute
      ? raw.currentRoute.value.fullPath
      : raw.currentRoute.fullPath
  return { host, simulator, raw, matched, fullPath, docA, docB }
}

describe('simulator router', () => {
  const disposers: Array<() => void> = []

  afterEach(() => {
    for (const fn of disposers.splice(0)) fn()
    vi.restoreAllMocks()
  })

  it('blocks unknown paths once per navigation across autorun re-runs', async () => {
    const { host, simulator, raw, docA, docB } = setup()
    disposers.push(() => simulator.dispose())
    const docC = createStubDocument({ id: 'docC', fileName: 'c' })
    host.project.documents = [docA]
    host.runAutorun()
    host.project.documents = [docA, docC]
    host.runAutorun()
    host.project.documents = [docA, docB, docC]
    host.runAutorun()

    // Let the initial navigation to the current document finish
    await settle()
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    await raw.push('/not-a-document').catch(() => {})
    expect(
      warn.mock.calls.filter(([m]) => m === '编辑态不允许路由跳转'),
    ).toHaveLength(1)
  })

  it('aborts unmatched navigation without touching UI-library globals', async () => {
    const { simulator, raw, fullPath } = setup()
    disposers.push(() => simulator.dispose())
    const throwing = () => {
      throw new Error('UI-library global accessed')
    }
    Object.defineProperty(window, 'vant', { configurable: true, get: throwing })
    Object.defineProperty(window, 'ELEMENT', {
      configurable: true,
      get: throwing,
    })
    disposers.push(() => {
      Reflect.deleteProperty(win, 'vant')
      Reflect.deleteProperty(win, 'ELEMENT')
    })
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})

    await settle()
    const before = fullPath()
    await raw.push('/not-a-document').catch(() => {})
    expect(fullPath()).toBe(before)
    expect(warn).toHaveBeenCalledWith('编辑态不允许路由跳转')
  })

  it('removed documents no longer resolve to a route', () => {
    const { host, simulator, matched, docA } = setup()
    disposers.push(() => simulator.dispose())
    expect(matched('/b')).toHaveLength(1)

    host.project.documents = [docA]
    host.runAutorun()

    expect(matched('/b')).toHaveLength(0)
    expect(simulator.router.getRouteNames()).not.toContain('docB')
    expect(matched('/a')).toHaveLength(1)
  })

  it('re-adding a removed document id warns nothing and resolves to the live instance', () => {
    const { host, simulator, matched, docA, docB } = setup()
    disposers.push(() => simulator.dispose())
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})

    host.project.documents = [docA]
    host.runAutorun()
    const docB2 = createStubDocument({ id: docB.id, fileName: 'b' })
    host.project.documents = [docA, docB2]
    host.runAutorun()

    const messages = warn.mock.calls.map((args) => args.join(' '))
    expect(messages.some((m) => m.includes('Duplicate named routes'))).toBe(
      false,
    )
    const routes = matched('/b')
    expect(routes).toHaveLength(1)
    const { documentInstance } = routes[0].props.default()
    expect(documentInstance.document).toBe(docB2)
    expect(simulator.documentInstances.find((d) => d.id === 'docB')).toBe(
      documentInstance,
    )
  })
})
