import { afterEach, describe, expect, it, vi } from 'vitest'
import VueRouter from 'vue-router'
import { createSimulatorRenderer } from '../../src/simulator'
import { createStubDocument, createStubHost } from '../helpers/stub-host'

const win = window as any

function setup() {
  const docA = createStubDocument({ id: 'docA', fileName: 'a' })
  const docB = createStubDocument({ id: 'docB', fileName: 'b' })
  const host = createStubHost({
    documents: [docA, docB],
    currentDocument: docA,
  })
  const simulator = createSimulatorRenderer(host)
  return { host, simulator, router: simulator.router as any, docA, docB }
}

describe('simulator router (S-05 / S-06)', () => {
  const disposers: Array<() => void> = []

  afterEach(() => {
    for (const fn of disposers.splice(0)) fn()
    vi.restoreAllMocks()
  })

  it('registers the navigation guard exactly once across autorun re-runs', () => {
    const { host, simulator, router, docA, docB } = setup()
    disposers.push(() => simulator.dispose())
    const docC = createStubDocument({ id: 'docC', fileName: 'c' })

    host.project.documents = [docA]
    host.runAutorun()
    host.project.documents = [docA, docC]
    host.runAutorun()
    host.project.documents = [docA, docB, docC]
    host.runAutorun()

    expect(router.beforeHooks.length).toBe(1)
  })

  it('aborts unmatched navigation without touching UI-library globals', async () => {
    const { simulator, router } = setup()
    disposers.push(() => simulator.dispose())
    const throwing = () => {
      throw new Error('UI-library global accessed')
    }
    Object.defineProperty(window, 'vant', {
      configurable: true,
      get: throwing,
    })
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

    const before = router.currentRoute.fullPath
    const errors: unknown[] = []
    router.push('/not-a-document', undefined, (err: unknown) => {
      errors.push(err)
    })
    await Promise.resolve()

    expect(errors).toHaveLength(1)
    expect(
      VueRouter.isNavigationFailure(
        errors[0] as Error,
        VueRouter.NavigationFailureType.aborted,
      ),
    ).toBe(true)
    expect(router.currentRoute.fullPath).toBe(before)
    expect(warn).toHaveBeenCalledWith('编辑态不允许路由跳转')
  })

  it('removed documents no longer resolve to a route', () => {
    const { host, simulator, router, docA } = setup()
    disposers.push(() => simulator.dispose())
    expect(router.resolve('/b').route.matched.length).toBe(1)

    host.project.documents = [docA]
    host.runAutorun()

    expect(router.resolve('/b').route.matched.length).toBe(0)
    expect(router.match('/b').matched.length).toBe(0)
    expect(
      router.getRoutes().some((r: { name?: string }) => r.name === 'docB'),
    ).toBe(false)
    expect(router.resolve('/a').route.matched.length).toBe(1)
  })

  it('re-adding a removed document id warns nothing and resolves to the live instance', () => {
    const { host, simulator, router, docA, docB } = setup()
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

    const matched = router.match('/b').matched
    expect(matched.length).toBe(1)
    const props = matched[0].props.default as () => {
      documentInstance: { document: unknown }
    }
    expect(props().documentInstance.document).toBe(docB2)
    expect(simulator.documentInstances.find((d) => d.id === 'docB')).toBe(
      props().documentInstance,
    )
  })
})
