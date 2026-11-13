import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { isLifecycleKey } from '../../src/renderer/root-scope/lifecycle'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

type Calls = { calls: unknown[][]; block: boolean }
const g = globalThis as unknown as { __lc: Calls }

function fn(body: string) {
  return { type: 'JSFunction', value: `function () { ${body} }` }
}

function guardFn(name: string) {
  return {
    type: 'JSFunction',
    value: `function (to, from, next) {
      window.__lc.calls.push(['${name}', to.fullPath, from.fullPath, this.title]);
      if (window.__lc.block) { next(false); } else { next(); }
    }`,
  }
}

beforeEach(() => {
  g.__lc = { calls: [], block: false }
})

describe('root scope lifecycle names', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('runs beforeCreate/created during setup with the page scope as this', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'lc-page',
        state: { title: 'hello' },
        methods: {
          greet: fn('return this.title + " world";'),
        },
        lifeCycles: {
          beforeCreate: fn(
            "window.__lc.calls.push(['beforeCreate', typeof this.$options]);",
          ),
          created: fn(
            "window.__lc.calls.push(['created', this.title, this.greet(), typeof this.reloadDataSource]);",
          ),
          mounted: fn("window.__lc.calls.push(['mounted']);"),
        },
      },
    })

    expect(g.__lc.calls).toEqual([
      ['beforeCreate', 'object'],
      ['created', 'hello', 'hello world', 'function'],
      ['mounted'],
    ])
  })

  it('runs beforeDestroy/destroyed when the page is destroyed', async () => {
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'lc-page',
        state: { title: 'hello' },
        lifeCycles: {
          beforeDestroy: fn(
            "window.__lc.calls.push(['beforeDestroy', this.title]);",
          ),
          destroyed: fn("window.__lc.calls.push(['destroyed']);"),
        },
      },
    })
    expect(g.__lc.calls).toEqual([])

    mounted.destroy()
    mounted = undefined
    expect(g.__lc.calls).toEqual([['beforeDestroy', 'hello'], ['destroyed']])
  })

  it('reports all supported names as lifecycle keys', () => {
    for (const key of [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeDestroy',
      'destroyed',
      'beforeUnmount',
      'unmounted',
      'componentDidMount',
    ]) {
      expect(isLifecycleKey(key)).toBe(true)
    }
    expect(isLifecycleKey('notAHook')).toBe(false)
  })
})
