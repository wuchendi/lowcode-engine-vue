import { afterEach, describe, expect, it, vi } from 'vitest'
import type {
  RequestMethod,
  RequestOptions,
} from '../../src/renderer/data-source/interface'
import {
  RequestError,
  Response as RequestResponse,
  request,
} from '../../src/renderer/data-source/request'

function options(overrides: Partial<RequestOptions> = {}): RequestOptions {
  return {
    uri: '/api',
    params: {},
    method: 'GET',
    isCors: false,
    timeout: 0,
    headers: {},
    ...overrides,
  }
}

function mockFetch(factory: () => globalThis.Response) {
  const fn = vi.fn(async (_url: string, _init?: RequestInit) => factory())
  vi.stubGlobal('fetch', fn)
  return fn
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('request error payload', () => {
  it.each([302, 400, 500])(
    'rejects status %i with RequestError carrying the parsed JSON body',
    async (status) => {
      mockFetch(
        () =>
          new globalThis.Response(JSON.stringify({ msg: 'bad' }), {
            status,
            statusText: 'Failed',
            headers: { 'Content-Type': 'application/json' },
          }),
      )
      const err = await request(options()).catch((e) => e)
      expect(err).toBeInstanceOf(RequestError)
      expect(err.code).toBe(status)
      expect(err.message).toBe('Failed')
      expect(err.data).toEqual({ msg: 'bad' })
    },
  )

  it('leaves data undefined when the error body is not JSON', async () => {
    mockFetch(
      () =>
        new globalThis.Response('not json', {
          status: 500,
          statusText: 'Server Error',
        }),
    )
    const err = await request(options()).catch((e) => e)
    expect(err).toBeInstanceOf(RequestError)
    expect(err.code).toBe(500)
    expect(err.message).toBe('Server Error')
    expect(err.data).toBeUndefined()
  })
})

describe('request 204 handling (S-03a)', () => {
  it.each<RequestMethod>(['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])(
    'resolves 204 for %s',
    async (method) => {
      mockFetch(() => new globalThis.Response(null, { status: 204 }))
      const res = await request(options({ method }))
      expect(res).toBeInstanceOf(RequestResponse)
      expect(res).toEqual(new RequestResponse(204, null))
    },
  )
})

describe('request JSON content type (S-03b)', () => {
  it.each<RequestMethod>(['POST', 'PUT'])(
    'sends JSON with Content-Type for %s when none is provided',
    async (method) => {
      const fetchFn = mockFetch(
        () => new globalThis.Response('{}', { status: 200 }),
      )
      await request(options({ method, params: { a: 1 } }))
      const init = fetchFn.mock.calls[0][1] as RequestInit
      expect(init.body).toBe('{"a":1}')
      expect(init.headers).toMatchObject({
        'Content-Type': 'application/json',
      })
    },
  )

  it('keeps a caller-provided content type untouched', async () => {
    const fetchFn = mockFetch(
      () => new globalThis.Response('{}', { status: 200 }),
    )
    await request(
      options({
        method: 'POST',
        params: { a: 1, b: 'x' },
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }),
    )
    const init = fetchFn.mock.calls[0][1] as RequestInit
    const headers = init.headers as Record<string, string>
    expect(headers['content-type']).toBe('application/x-www-form-urlencoded')
    expect(headers['Content-Type']).toBeUndefined()
    expect(init.body).toBe('a=1&b=x')
  })

  it('still removes the multipart/form-data header', async () => {
    const fetchFn = mockFetch(
      () => new globalThis.Response('{}', { status: 200 }),
    )
    await request(
      options({
        method: 'POST',
        params: { a: 1 },
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
    )
    const init = fetchFn.mock.calls[0][1] as RequestInit
    const headers = init.headers as Record<string, string>
    expect(Object.keys(headers).map((k) => k.toLowerCase())).not.toContain(
      'content-type',
    )
    expect(init.body).toBeInstanceOf(FormData)
  })
})

describe('request timeout cleanup (S-03c)', () => {
  it('clears the timer after a successful response', async () => {
    vi.useFakeTimers()
    mockFetch(() => new globalThis.Response('{}', { status: 200 }))
    await request(options({ timeout: 1000 }))
    expect(vi.getTimerCount()).toBe(0)
  })

  it('clears the timer after a failed response', async () => {
    vi.useFakeTimers()
    mockFetch(() => new globalThis.Response('x', { status: 500 }))
    await expect(request(options({ timeout: 1000 }))).rejects.toBeInstanceOf(
      RequestError,
    )
    expect(vi.getTimerCount()).toBe(0)
  })

  it('clears the timer when fetch rejects', async () => {
    vi.useFakeTimers()
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new TypeError('network')
      }),
    )
    await expect(request(options({ timeout: 1000 }))).rejects.toThrow('network')
    expect(vi.getTimerCount()).toBe(0)
  })
})
