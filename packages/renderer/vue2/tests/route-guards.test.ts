import { Renderer } from '@cdlab996/lowcode-vue-core'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { Component } from 'vue'
import Vue, { nextTick } from 'vue'
import VueRouter from 'vue-router'
import { buildTestComponents } from '../../core/tests/helpers/mount-renderer'

Vue.use(VueRouter)

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

describe('route guards (vue-router 3)', () => {
  let root: Vue | undefined

  afterEach(() => {
    root?.$destroy()
    ;(root?.$el as HTMLElement | undefined)?.remove()
    root = undefined
  })

  const pageSchema = {
    componentName: 'Page',
    id: 'route-page',
    state: { title: 'routed' },
    lifeCycles: {
      beforeRouteUpdate: guardFn('update'),
      beforeRouteLeave: guardFn('leave'),
    },
  }

  async function setup() {
    const RouteComp = Vue.extend({
      data: () => ({ show: true }),
      render(h) {
        return h('div', [
          this.show
            ? h(Renderer as Component, {
                props: {
                  schema: pageSchema,
                  components: buildTestComponents({}),
                },
              })
            : null,
        ])
      },
    })
    const router = new VueRouter({
      mode: 'abstract',
      routes: [
        { path: '/item/:id', component: RouteComp },
        { path: '/other', component: { render: (h) => h('span', 'other') } },
      ],
    })
    const target = document.createElement('div')
    document.body.appendChild(target)
    root = new Vue({ router, render: (h) => h('router-view') }).$mount(target)
    await router.push('/item/1')
    await nextTick()
    return { router, RouteComp }
  }

  function routeVm(): Vue & { show: boolean } {
    return (root as Vue).$children[0] as Vue & { show: boolean }
  }

  it('calls beforeRouteUpdate on param change with the page scope', async () => {
    const { router } = await setup()
    await router.push('/item/2')
    expect(g.__lc.calls).toEqual([['update', '/item/2', '/item/1', 'routed']])
    expect(router.currentRoute.fullPath).toBe('/item/2')
  })

  it('calls beforeRouteLeave when navigating away and can block it', async () => {
    const { router } = await setup()

    g.__lc.block = true
    await router.push('/other').catch(() => {})
    expect(g.__lc.calls).toEqual([['leave', '/other', '/item/1', 'routed']])
    expect(router.currentRoute.fullPath).toBe('/item/1')

    g.__lc.block = false
    await router.push('/other')
    expect(router.currentRoute.fullPath).toBe('/other')
    expect(g.__lc.calls).toHaveLength(2)
  })

  it('unregisters guards when the page unmounts', async () => {
    const { router } = await setup()
    routeVm().show = false
    await nextTick()

    await router.push('/item/2')
    await router.push('/other')
    expect(g.__lc.calls).toEqual([])
    expect(router.currentRoute.fullPath).toBe('/other')
  })

  it('does not mutate the route component constructor options', async () => {
    const { router, RouteComp } = await setup()
    await router.push('/item/2')
    const opts = (RouteComp as typeof RouteComp & { options: object })
      .options as Record<string, unknown>
    expect(opts.beforeRouteLeave).toBeUndefined()
    expect(opts.beforeRouteUpdate).toBeUndefined()
  })
})
