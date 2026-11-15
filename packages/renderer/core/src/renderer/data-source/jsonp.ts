import { buildUrl, RequestError, Response } from './request'

export interface JsonpOptions {
  uri: string
  params?: Record<string, unknown>
  /** Milliseconds; none by default. */
  timeout?: number
  /** Query parameter naming the callback (`callback`). */
  jsonpCallback?: string
  /** Callback function name; unique per request by default. */
  jsonpCallbackFunction?: string
}

let counter = 0

/**
 * Loads a JSONP resource: a script calling `window[<callback>](data)`.
 * Resolves like the fetch handler (`{ code: 200, data }`).
 */
export function jsonp(options: JsonpOptions): Promise<Response> {
  const {
    uri,
    params = {},
    timeout,
    jsonpCallback = 'callback',
    jsonpCallbackFunction = `__lowcode_jsonp_${Date.now()}_${counter++}`,
  } = options
  const callbacks = window as unknown as Record<string, unknown>
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    let timer: ReturnType<typeof setTimeout> | undefined
    const cleanup = () => {
      clearTimeout(timer)
      script.remove()
      Reflect.deleteProperty(callbacks, jsonpCallbackFunction)
    }
    callbacks[jsonpCallbackFunction] = (data: unknown) => {
      cleanup()
      resolve(new Response(200, data))
    }
    script.onerror = () => {
      cleanup()
      reject(new RequestError(`JSONP request to ${uri} failed`, -1))
    }
    if (timeout) {
      timer = setTimeout(() => {
        cleanup()
        reject(new RequestError(`JSONP request to ${uri}: timeout`, -1))
      }, timeout)
    }
    script.src = buildUrl(uri, {
      ...params,
      [jsonpCallback]: jsonpCallbackFunction,
    })
    document.head.appendChild(script)
  })
}
