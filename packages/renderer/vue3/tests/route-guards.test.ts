import { Renderer } from '@cdlab996/lowcode-vue-core'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { App } from 'vue'
import { createApp, defineComponent, h, nextTick, ref } from 'vue'
import { createMemoryHistory, createRouter, RouterView } from 'vue-router'
import { buildTestComponents } from '../../core/tests/helpers/mount-renderer'

type Calls = { calls: unknown[][]; block: boolean }
const g = globalThis as unknown as { __lc: Calls }

function guardFn(name: string) {
  return {
    type: 'JSFunction',
    value: `function (to, from, next) {
      window.__lc.calls.push(['${name}', to.fullPath, from.fullPath, this.title]);
      if (window.__lc.block) { next(false); } else { next(); }
    }`,
  }
}

const pageSchema = {
  componentName: 'Page',
  id: 'route-page',
  state: { title: 'routed' },
  lifeCycles: {
    beforeRouteUpdate: guardFn('update'),
    beforeRouteLeave: guardFn('leave'),
  },
}

describe('route guards (vue-router 4)', () => {
  let app: App | undefined
  const show = ref(true)

  beforeEach(() => {
    g.__lc = { calls: [], block: false }
    show.value = true
  })

  afterEach(() => {
    app?.unmount()
    app = undefined
  })

  async function setup() {
    const RouteComp = defineComponent({
      setup: () => () =>
        h('div', [
          show.value
            ? h(Renderer as never, {
                schema: pageSchema,
                components: buildTestComponents({}),
              })
            : null,
        ]),
    })
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/item/:id', component: RouteComp },
        { path: '/other', component: { render: () => h('span', 'other') } },
      ],
    })
    app = createApp({ render: () => h(RouterView) })
    app.use(router)
    app.mount(document.createElement('div'))
    await router.push('/item/1')
    await nextTick()
    return router
  }

  it('calls beforeRouteUpdate on param change with the page scope', async () => {
    const router = await setup()
    await router.push('/item/2')
    expect(g.__lc.calls).toEqual([['update', '/item/2', '/item/1', 'routed']])
    expect(router.currentRoute.value.fullPath).toBe('/item/2')
  })

  it('calls beforeRouteLeave when navigating away and can block it', async () => {
    const router = await setup()
    g.__lc.block = true
    await router.push('/other')
    expect(g.__lc.calls).toEqual([['leave', '/other', '/item/1', 'routed']])
    expect(router.currentRoute.value.fullPath).toBe('/item/1')

    g.__lc.block = false
    await router.push('/other')
    expect(router.currentRoute.value.fullPath).toBe('/other')
  })

  it('unregisters guards when the page unmounts', async () => {
    const router = await setup()
    show.value = false
    await nextTick()
    await router.push('/item/2')
    await router.push('/other')
    expect(g.__lc.calls).toEqual([])
    expect(router.currentRoute.value.fullPath).toBe('/other')
  })
})
