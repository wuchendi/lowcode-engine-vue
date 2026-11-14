/**
 * `src/lowcode/index.js` of generated projects: the page context (data
 * sources, utils, constants, i18n). Data source requests follow the
 * renderer's fetch handler.
 */
export const runtimeSource = `import { reactive } from 'vue'
import { constants, locale, messages, utils } from './project'

function serializeParams(obj) {
  const result = []
  for (const key of Object.keys(obj)) {
    const value = obj[key]
    if (value === null || value === undefined || value === '') continue
    result.push(
      key +
        '=' +
        encodeURIComponent(
          typeof value === 'object' ? JSON.stringify(value) : String(value),
        ),
    )
  }
  return result.join('&')
}

function buildUrl(uri, params) {
  const query = params ? serializeParams(params) : ''
  if (!query) return uri
  return uri + (uri.indexOf('?') > 0 ? '&' : '?') + query
}

function findHeader(headers, name) {
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === name) return [headers[key], key]
  }
  return []
}

function requestBody(contentType, data) {
  if (contentType.includes('application/json')) return JSON.stringify(data)
  if (contentType.includes('application/x-www-form-urlencoded')) {
    return serializeParams(data)
  }
  if (contentType.includes('multipart/form-data')) {
    const form = new FormData()
    for (const key of Object.keys(data)) {
      const value = data[key]
      form.append(key, value instanceof Blob ? value : String(value))
    }
    return form
  }
  return data
}

/** Data source \`fetch\` requests: resolves to \`{ code, data }\`. */
export async function request(options) {
  const { uri, method = 'GET', timeout, params = {}, headers = {} } = options
  const responseType = options.responseType || 'json'
  const requestHeaders = { Accept: 'application/json', ...headers }
  const init = { method, headers: requestHeaders }
  let url = uri
  if (method === 'GET' || method === 'DELETE' || method === 'OPTIONS') {
    url = buildUrl(uri, params)
  } else {
    const [contentType, key] = findHeader(requestHeaders, 'content-type')
    if (contentType === undefined) {
      requestHeaders['Content-Type'] = 'application/json'
    }
    init.body = requestBody(contentType || 'application/json', params)
    if (contentType === 'multipart/form-data' && key) {
      requestHeaders[key] = undefined
    }
  }
  let timer
  if (timeout) {
    const controller = new AbortController()
    init.signal = controller.signal
    timer = setTimeout(() => controller.abort(), timeout)
  }
  try {
    const response = await fetch(url, init)
    if (response.ok) {
      // No content: no body to read
      if (response.status === 204) return { code: 204, data: null }
      return { code: response.status, data: await response[responseType]() }
    }
    const error = new Error(response.statusText)
    error.code = response.status
    try {
      error.data = await response.json()
    } catch {
      error.data = undefined
    }
    throw error
  } finally {
    clearTimeout(timer)
  }
}

/** Marks a schema expression: evaluated with the component instance. */
export function expression(fn) {
  fn.isExpression = true
  return fn
}

function resolve(value, vm) {
  if (typeof value === 'function') {
    return value.isExpression ? value.call(vm) : value
  }
  if (Array.isArray(value)) return value.map((item) => resolve(item, vm))
  if (value && typeof value === 'object') {
    const result = {}
    for (const key of Object.keys(value)) result[key] = resolve(value[key], vm)
    return result
  }
  return value
}

/** \`i18n(key, params)\`: the message of the current locale, \`{name}\` replaced. */
export function i18n(key, params = {}) {
  const message = (messages[locale] || {})[key] ?? key
  return String(message).replace(/\\{(\\w+)\\}/g, (match, name) =>
    name in params ? String(params[name]) : match,
  )
}

function createItem(config, getVm) {
  const call = (fn, fallback, ...args) =>
    typeof fn === 'function' ? fn.apply(getVm(), args) : fallback
  const item = reactive({
    data: undefined,
    error: undefined,
    status: 'init',
    loading: false,
    async load(inputParams, otherOptions = {}) {
      const vm = getVm()
      const { headers: inputHeaders, assignToScope = true, ...inputOptions } =
        otherOptions
      try {
        if (config.type && config.type !== 'fetch') {
          throw new Error('unsupported data source type: ' + config.type)
        }
        if (call(resolve(config.shouldFetch, vm), true) === false) return undefined
        const { params, headers, ...options } = resolve(config.options || {}, vm)
        item.status = 'loading'
        item.loading = true
        const mergedParams =
          inputParams && params && typeof inputParams === 'object' && typeof params === 'object'
            ? { ...params, ...inputParams }
            : (inputParams ?? params)
        const requestOptions = {
          ...options,
          ...inputOptions,
          headers: { ...headers, ...inputHeaders },
          params: mergedParams,
        }
        const res = await request(call(config.willFetch, requestOptions, requestOptions))
        const data = call(config.dataHandler, res.data, res)
        item.data = data
        item.status = 'loaded'
        if (data !== undefined && assignToScope && vm) vm[config.id] = data
        return data
      } catch (error) {
        item.status = 'error'
        item.error = error
        call(config.errorHandler, undefined, error)
        throw error
      } finally {
        item.loading = false
      }
    },
  })
  return item
}

/**
 * Context of a page: \`this.dataSourceMap\`, \`this.reloadDataSource()\`,
 * \`this.utils\`, \`this.constants\` and \`this.i18n()\` through \`mixin\`; data
 * sources with \`isInit\` load when the page is mounted.
 */
export function createPageContext({ dataSource = [] } = {}) {
  let vm = null
  const getVm = () => vm
  const dataSourceMap = {}
  for (const config of dataSource) dataSourceMap[config.id] = createItem(config, getVm)
  const reloadDataSource = () =>
    Promise.all(
      dataSource
        .filter((config) => resolve(config.isInit, vm))
        .map((config) => dataSourceMap[config.id].load()),
    )
  const mixin = {
    data() {
      const data = {}
      for (const id of Object.keys(dataSourceMap)) {
        if (!(id in this)) data[id] = undefined
      }
      return data
    },
    computed: {
      dataSourceMap: () => dataSourceMap,
      utils: () => utils,
      constants: () => constants,
    },
    methods: { i18n, reloadDataSource },
    beforeCreate() {
      vm = this
    },
    mounted() {
      reloadDataSource().catch(() => {})
    },
  }
  return { dataSourceMap, reloadDataSource, utils, constants, i18n, mixin }
}
`
