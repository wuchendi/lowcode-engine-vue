import type {
  InterpretDataSourceConfig,
  IPublicTypeJSFunction,
} from '@alilc/lowcode-types'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createDataSourceManager } from '../../src/renderer/data-source'
import { DataSourceStatus } from '../../src/renderer/data-source/interface'

const fn = (value: string): IPublicTypeJSFunction => ({
  type: 'JSFunction',
  value,
})

const setup = (
  config: Partial<InterpretDataSourceConfig>,
  handlers?: Parameters<typeof createDataSourceManager>[2],
) => {
  const scope: Record<string, unknown> = {}
  const manager = createDataSourceManager(
    {
      list: [
        {
          id: 'info',
          options: { uri: '/api/info', method: 'GET', params: { a: 1 } },
          ...config,
        } as InterpretDataSourceConfig,
      ],
    },
    scope as never,
    handlers,
  )
  return { scope, manager, item: manager.dataSourceMap.info }
}

const okFetch = (body: unknown) =>
  vi.fn(() =>
    Promise.resolve(
      new Response(JSON.stringify(body), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
    ),
  )

describe('data source manager', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('calls the custom handler registered for the item type with parsed options', async () => {
    const handler = vi.fn((_options: unknown) =>
      Promise.resolve({ data: 'custom' }),
    )
    const { item, scope } = setup({ type: 'mtop' }, { mtop: handler })

    await expect(item.load()).resolves.toBe('custom')
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler.mock.calls[0][0]).toMatchObject({
      uri: '/api/info',
      method: 'GET',
      params: { a: 1 },
    })
    expect(item.status).toBe(DataSourceStatus.Loaded)
    expect(scope.info).toBe('custom')
  })

  it('passes the handler result to dataHandler unchanged', async () => {
    const raw = { payload: 42 }
    const { item } = setup(
      { type: 'custom', dataHandler: fn('function (res) { return res; }') },
      { custom: () => Promise.resolve(raw) },
    )
    await expect(item.load()).resolves.toBe(raw)
  })

  it.each(['fetch', undefined])(
    'uses the built-in request for type %s',
    async (type) => {
      const fetchStub = okFetch({ ok: true })
      vi.stubGlobal('fetch', fetchStub)
      const { item } = setup({ type })

      await expect(item.load()).resolves.toEqual({ ok: true })
      expect(fetchStub).toHaveBeenCalledTimes(1)
      expect(String((fetchStub.mock.calls[0] as unknown[])[0])).toContain(
        '/api/info?a=1',
      )
    },
  )

  it('lets a user-provided fetch handler override the built-in', async () => {
    const fetchStub = okFetch({ ok: true })
    vi.stubGlobal('fetch', fetchStub)
    const handler = vi.fn(() => Promise.resolve({ data: 'override' }))
    const { item } = setup({ type: 'fetch' }, { fetch: handler })

    await expect(item.load()).resolves.toBe('override')
    expect(handler).toHaveBeenCalledTimes(1)
    expect(fetchStub).not.toHaveBeenCalled()
  })

  it('records an error and rejects for an unknown type without a handler', async () => {
    const errorHandler = vi.fn()
    const { item, scope } = setup({
      type: 'mtop',
      errorHandler: fn('function (err) { this.onError(err); }'),
    })
    scope.onError = errorHandler

    await expect(item.load()).rejects.toThrow(
      'unsupported data source type: mtop',
    )
    expect(item.status).toBe(DataSourceStatus.Error)
    expect(item.error).toBeInstanceOf(Error)
    expect(errorHandler).toHaveBeenCalledWith(item.error)
  })

  it('skips the request without error when shouldFetch returns false', async () => {
    const handler = vi.fn(() => Promise.resolve({ data: 'x' }))
    const errorHandler = vi.fn()
    const { item, scope } = setup(
      {
        type: 'custom',
        shouldFetch: fn('function () { return false; }'),
        errorHandler: fn('function (err) { this.onError(err); }'),
      },
      { custom: handler },
    )
    scope.onError = errorHandler

    await expect(item.load()).resolves.toBeUndefined()
    expect(handler).not.toHaveBeenCalled()
    expect(item.status).toBe(DataSourceStatus.Initial)
    expect(item.error).toBeUndefined()
    expect(errorHandler).not.toHaveBeenCalled()
  })

  it('records handler rejections in error, status and errorHandler', async () => {
    const failure = new Error('boom')
    const errorHandler = vi.fn()
    const { item, scope } = setup(
      {
        type: 'custom',
        errorHandler: fn('function (err) { this.onError(err); }'),
      },
      { custom: () => Promise.reject(failure) },
    )
    scope.onError = errorHandler

    await expect(item.load()).rejects.toBe(failure)
    expect(item.status).toBe(DataSourceStatus.Error)
    expect(item.error).toBe(failure)
    expect(errorHandler).toHaveBeenCalledWith(failure)
  })

  it('keeps reloadDataSource returning all isInit loads', async () => {
    const { manager } = setup(
      { type: 'custom', isInit: true },
      { custom: () => Promise.resolve({ data: 'init' }) },
    )
    await expect(manager.reloadDataSource()).resolves.toEqual(['init'])
  })
})
