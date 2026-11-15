import { afterEach, describe, expect, it } from 'vitest'
import { jsonp } from '../../src/renderer/data-source/jsonp'
import { RequestError } from '../../src/renderer/data-source/request'

/** Answers the JSONP scripts the page appends (jsdom does not load them). */
function answerScripts(answer: (url: URL, script: HTMLScriptElement) => void) {
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (node instanceof HTMLScriptElement && node.src) {
          answer(new URL(node.src), node)
        }
      }
    }
  })
  observer.observe(document, { childList: true, subtree: true })
  return () => observer.disconnect()
}

let stop: (() => void) | undefined
afterEach(() => stop?.())

const call = (name: string, data: unknown) =>
  (window as unknown as Record<string, (data: unknown) => void>)[name](data)

describe('jsonp', () => {
  it('passes the params and a callback name, resolves to the data', async () => {
    let requested: URL | undefined
    stop = answerScripts((url) => {
      requested = url
      call(url.searchParams.get('callback')!, { ok: 1 })
    })
    const res = await jsonp({
      uri: 'https://api.test/list?a=1',
      params: { b: 2 },
    })
    expect(res).toMatchObject({ code: 200, data: { ok: 1 } })
    expect(requested?.searchParams.get('a')).toBe('1')
    expect(requested?.searchParams.get('b')).toBe('2')
    // The callback and its script are removed
    const name = requested!.searchParams.get('callback')!
    expect(name in window).toBe(false)
    expect(document.querySelector(`script[src*="${name}"]`)).toBeNull()
  })

  it('takes a callback parameter and a fixed function name', async () => {
    stop = answerScripts((url) => {
      expect(url.searchParams.get('cb')).toBe('mockInfo')
      call('mockInfo', 'data')
    })
    const res = await jsonp({
      uri: 'https://api.test/info',
      jsonpCallback: 'cb',
      jsonpCallbackFunction: 'mockInfo',
    })
    expect(res).toMatchObject({ data: 'data' })
  })

  it('rejects when the script fails or times out', async () => {
    stop = answerScripts((url, script) => {
      if (url.pathname === '/broken') script.dispatchEvent(new Event('error'))
    })
    await expect(
      jsonp({ uri: 'https://api.test/broken' }),
    ).rejects.toBeInstanceOf(RequestError)
    await expect(
      jsonp({ uri: 'https://api.test/slow', timeout: 20 }),
    ).rejects.toThrow(/timeout/i)
  })
})
