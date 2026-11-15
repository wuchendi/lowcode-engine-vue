/**
 * Conformance of the data sources: the renderer's and the runtime the code
 * generator writes into generated projects (`src/lowcode/index.js`) load the
 * same configuration against the same mocked `fetch`.
 */
import { getAdapter } from '@cdlab996/lowcode-vue-core'
import { afterEach, expect, it, vi } from 'vitest'
import * as Vue from 'vue'
import { runtimeSource } from '../../../../tools/code-generator/src/runtime'
import { toCode } from '../../../../tools/code-generator/src/value'
import { withGlobalDataHandler } from '../../src/shared/schema'
import { mountRenderer, settle } from '../helpers/mount-renderer'

const expr = (value: string) => ({ type: 'JSExpression', value })
const fn = (value: string) => ({ type: 'JSFunction', value })

const dataSource = {
  list: [
    {
      id: 'own',
      type: 'fetch',
      isInit: true,
      options: { uri: 'https://x/own', params: { q: 1 } },
      dataHandler: fn('function (res) { return res.data.url }'),
    },
    {
      id: 'global',
      type: 'fetch',
      isInit: true,
      options: { uri: 'https://x/global', method: 'POST', params: { p: 2 } },
    },
    {
      id: 'lazy',
      type: 'fetch',
      isInit: false,
      options: { uri: 'https://x/lazy' },
    },
    {
      id: 'empty',
      type: 'fetch',
      isInit: true,
      options: { uri: 'https://x/empty' },
      dataHandler: fn('function (res) { return res.data }'),
    },
    {
      id: 'bound',
      type: 'fetch',
      isInit: expr('this.flag'),
      options: { uri: expr('"https://x/bound?flag=" + this.flag') },
    },
    {
      id: 'skipped',
      type: 'fetch',
      isInit: true,
      shouldFetch: fn('function () { return false }'),
      options: { uri: 'https://x/skipped' },
    },
    {
      id: 'rewritten',
      type: 'fetch',
      isInit: true,
      willFetch: fn(
        'function (options) { return Object.assign({}, options, { params: { w: 1 } }) }',
      ),
      options: { uri: 'https://x/rewritten' },
    },
    {
      id: 'jsonp',
      type: 'jsonp',
      isInit: true,
      options: { uri: 'https://x/jsonp', params: { q: 'v' } },
    },
    {
      id: 'jsonpFixed',
      type: 'jsonp',
      isInit: true,
      options: {
        uri: 'https://x/jsonp-fixed',
        jsonpCallback: 'cb',
        jsonpCallbackFunction: 'conformanceJsonp',
      },
      dataHandler: fn('function (res) { return res.data.url }'),
    },
  ],
  dataHandler: fn('function (res) { return { global: res.data } }'),
}

const state = { flag: true }

function stubFetch() {
  const requests: string[] = []
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string, init: RequestInit) => {
      requests.push(`${init.method} ${url} ${init.body ?? ''}`)
      if (url.endsWith('/empty')) {
        return new Response(null, { status: 204 })
      }
      return new Response(JSON.stringify({ url }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }),
  )
  // JSONP: answer the scripts the page appends (jsdom does not load them)
  stopJsonp?.()
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (!(node instanceof HTMLScriptElement) || !node.src) continue
        const url = new URL(node.src)
        const callback =
          url.searchParams.get('callback') ?? url.searchParams.get('cb')!
        url.searchParams.delete('callback')
        url.searchParams.delete('cb')
        // The callback name varies per request: recorded without it
        requests.push(`JSONP ${url.href}`)
        ;(window as unknown as Record<string, (data: unknown) => void>)[
          callback
        ]({ url: url.href })
      }
    }
  })
  observer.observe(document, { childList: true, subtree: true })
  stopJsonp = () => observer.disconnect()
  return requests
}

let stopJsonp: (() => void) | undefined

/** The generated runtime, evaluated with this Vue. */
function generatedRuntime() {
  const code = runtimeSource
    .replace("import { reactive } from 'vue'", 'const { reactive } = Vue')
    .replace(
      "import { constants, locale, messages, utils } from './project'",
      'const { constants, locale, messages, utils } = project',
    )
    .replace(/^export /gm, '')
  return new Function(
    'Vue',
    'project',
    `${code}\nreturn { createPageContext, expression }`,
  )(Vue, { constants: {}, locale: 'zh-CN', messages: {}, utils: {} })
}

/** The data sources as the generated page passes them (see `pageScript`). */
function generatedConfig(expression: unknown) {
  const code = toCode(
    withGlobalDataHandler(dataSource.list, dataSource.dataHandler),
    {
      expression: (code) => `expression(function () {\n  return (${code})\n})`,
    },
  )
  return new Function('expression', `return ${code}`)(expression)
}

const snapshot = (map: Record<string, { data: unknown; status: string }>) =>
  Object.fromEntries(
    Object.entries(map).map(([id, item]) => [
      id,
      { data: item.data, status: String(item.status).toLowerCase() },
    ]),
  )

afterEach(() => {
  stopJsonp?.()
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

it('loads the data sources like the generated runtime', async () => {
  const rendererRequests = stubFetch()
  const rendered = await mountRenderer({
    schema: {
      componentName: 'Page',
      id: 'page',
      state,
      dataSource,
      children: [],
    },
  })
  await settle()
  await settle()
  const fromRenderer = snapshot(
    rendered.scope.dataSourceMap as Record<string, never>,
  )
  rendered.destroy()

  const generatedRequests = stubFetch()
  const { createPageContext, expression } = generatedRuntime()
  const context = createPageContext({ dataSource: generatedConfig(expression) })
  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = getAdapter().mount(
    Vue.defineComponent({
      mixins: [context.mixin],
      data: () => ({ ...state }),
      render: () => getAdapter().h('div'),
    } as never) as never,
    {},
    host,
  )
  await settle()
  await settle()
  const fromGenerated = snapshot(context.dataSourceMap)
  app.unmount()

  expect(generatedRequests.sort()).toEqual(rendererRequests.sort())
  expect(fromGenerated).toEqual(fromRenderer)
})
