import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const schema = {
  componentName: 'Page',
  id: 'root-scope-page',
  state: { title: 'hello' },
  methods: {
    greet: {
      type: 'JSFunction',
      value: 'function greet() { return this.title + " world"; }',
    },
  },
  dataSource: {
    list: [
      {
        id: 'info',
        type: 'fetch',
        isInit: false,
        options: { uri: 'https://example.invalid/info', method: 'GET' },
      },
    ],
  },
  children: [
    {
      componentName: 'div',
      id: 'state',
      children: { type: 'JSExpression', value: 'this.title' },
    },
    {
      componentName: 'div',
      id: 'method',
      children: { type: 'JSExpression', value: 'this.greet()' },
    },
  ],
}

type Scope = Record<string, any>

describe('useRootScope', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('exposes state, methods and data source on the page scope', async () => {
    mounted = await mountRenderer({ schema, components: { div: 'div' } })

    expect(mounted.el.textContent).toContain('hello')
    expect(mounted.el.textContent).toContain('hello world')

    const scope = mounted.scope
    expect(scope.title).toBe('hello')
    expect(typeof scope.greet).toBe('function')
    expect(typeof scope.reloadDataSource).toBe('function')
    expect(Object.keys(scope.dataSourceMap)).toEqual(['info'])
    expect(scope.info).toBeUndefined()
    expect('info' in scope).toBe(true)
  })
})
