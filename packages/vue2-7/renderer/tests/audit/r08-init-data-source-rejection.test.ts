import { afterEach, describe, expect, it, vi } from 'vitest'
import type Vue from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const schema = {
  componentName: 'Page',
  id: 'page',
  dataSource: {
    list: [
      {
        id: 'info',
        type: 'fetch',
        isInit: true,
        options: { uri: 'https://example.invalid/info', method: 'GET' },
        errorHandler: {
          type: 'JSFunction',
          value: 'function (err) { globalThis.__r08ErrorHandler(err); }',
        },
      },
    ],
  },
  children: [{ componentName: 'div', id: 'div', children: 'content' }],
}

const shouldFetchFalseSchema = {
  componentName: 'Page',
  id: 'page',
  dataSource: {
    list: [
      {
        id: 'info',
        type: 'fetch',
        isInit: true,
        options: { uri: 'https://example.invalid/info', method: 'GET' },
        shouldFetch: {
          type: 'JSFunction',
          value: 'function () { return false; }',
        },
      },
    ],
  },
  children: [{ componentName: 'div', id: 'div', children: 'content' }],
}

const macrotask = () => new Promise<void>((resolve) => setTimeout(resolve, 0))

type Scope = Record<string, any>

function findPageScope(vm: Vue): Scope | undefined {
  if (typeof (vm as unknown as Scope).reloadDataSource === 'function') {
    return vm as unknown as Scope
  }
  for (const child of vm.$children) {
    const found = findPageScope(child)
    if (found) return found
  }
  return undefined
}

function pageScopeOf(mounted: MountedRenderer | undefined): Scope {
  const scope = mounted && findPageScope(mounted.vm)
  if (!scope) throw new Error('page scope not found')
  return scope
}

async function captureUnhandledRejections(
  run: () => Promise<void>,
): Promise<unknown[]> {
  const originalListeners = process.listeners('unhandledRejection')
  const captured: unknown[] = []
  const recorder = (reason: unknown) => {
    captured.push(reason)
  }
  process.removeAllListeners('unhandledRejection')
  process.on('unhandledRejection', recorder)
  try {
    await run()
    for (let i = 0; i < 5; i++) await macrotask()
  } finally {
    process.off('unhandledRejection', recorder)
    for (const listener of originalListeners) {
      process.on('unhandledRejection', listener)
    }
  }
  return captured
}

describe('R-08 init data source rejection', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
    vi.unstubAllGlobals()
  })

  it('R-08: a failed init data source does not leak an unhandled rejection', async () => {
    const error = new Error('network down')
    const fetchStub = vi.fn(() => Promise.reject(error))
    const errorHandler = vi.fn()
    vi.stubGlobal('fetch', fetchStub)
    vi.stubGlobal('__r08ErrorHandler', errorHandler)

    const captured = await captureUnhandledRejections(async () => {
      mounted = await mountRenderer({ schema, components: { div: 'div' } })
    })

    expect(fetchStub).toHaveBeenCalled()
    expect(captured).toEqual([])

    const info = pageScopeOf(mounted).dataSourceMap.info
    expect(info.status).toBe('error')
    expect(info.error).toBe(error)
    expect(errorHandler).toHaveBeenCalledWith(error)
  })

  it('R-08: shouldFetch returning false skips the init fetch without errors', async () => {
    const fetchStub = vi.fn(() => Promise.reject(new Error('unexpected')))
    vi.stubGlobal('fetch', fetchStub)

    const captured = await captureUnhandledRejections(async () => {
      mounted = await mountRenderer({
        schema: shouldFetchFalseSchema,
        components: { div: 'div' },
      })
    })

    expect(fetchStub).not.toHaveBeenCalled()
    expect(captured).toEqual([])
    expect(pageScopeOf(mounted).dataSourceMap.info.status).not.toBe('error')
  })
})
