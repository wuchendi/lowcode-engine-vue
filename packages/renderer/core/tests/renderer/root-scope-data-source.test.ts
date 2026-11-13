import { afterEach, describe, expect, it, vi } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const macrotask = () => new Promise<void>((resolve) => setTimeout(resolve, 0))

function pageSchema(source: Record<string, unknown>) {
  return {
    componentName: 'Page',
    id: 'page',
    dataSource: { list: [{ id: 'x', isInit: true, ...source }] },
    children: [
      {
        componentName: 'div',
        id: 'out',
        children: { type: 'JSExpression', value: 'String(this.x)' },
      },
    ],
  }
}

async function settle(mounted: MountedRenderer) {
  for (let i = 0; i < 5; i++) await macrotask()
  await mounted.flush()
}

describe('useRootDataSource request handlers', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    vi.unstubAllGlobals()
  })

  it('dispatches a custom type to the requestHandlersMap prop', async () => {
    const fetchStub = vi.fn()
    vi.stubGlobal('fetch', fetchStub)
    const custom = vi.fn(async () => ({ data: 42 }))

    mounted = await mountRenderer({
      schema: pageSchema({ type: 'custom', options: { uri: 'custom://x' } }),
      components: { div: 'div' },
      requestHandlersMap: { custom },
    })
    await settle(mounted)

    expect(custom).toHaveBeenCalledTimes(1)
    expect(custom.mock.calls[0][0]).toMatchObject({ uri: 'custom://x' })
    expect(fetchStub).not.toHaveBeenCalled()
    expect(mounted.el.textContent).toBe('42')
  })

  it.each([
    ['omitted', {}],
    ['fetch', { type: 'fetch' }],
  ])('uses global fetch when type is %s', async (_, typeField) => {
    const fetchStub = vi.fn(
      async () =>
        new Response(JSON.stringify(7), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
    )
    vi.stubGlobal('fetch', fetchStub)
    const custom = vi.fn(async () => ({ data: 42 }))

    mounted = await mountRenderer({
      schema: pageSchema({
        ...typeField,
        options: { uri: 'https://example.invalid/x', method: 'GET' },
      }),
      components: { div: 'div' },
      requestHandlersMap: { custom },
    })
    await settle(mounted)

    expect(fetchStub).toHaveBeenCalledTimes(1)
    expect(custom).not.toHaveBeenCalled()
    expect(mounted.el.textContent).toBe('7')
  })
})
