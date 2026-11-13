import type {
  MemoryRouter,
  RouteRecordInput,
  RouterAdapter,
  VueComponent,
} from '@cdlab996/lowcode-vue-core'
import Vue from 'vue'
import type { Component } from 'vue/types/options'
import VueRouter, { RouterView } from 'vue-router'

function createMemoryRouter(): MemoryRouter {
  Vue.use(VueRouter)
  const routes = new Map<string, RouteRecordInput>()
  const router = new VueRouter({ mode: 'abstract' })
  const toConfig = (route: RouteRecordInput) => ({
    name: route.name,
    path: route.path,
    component: route.component as Component,
    props: route.props,
  })
  // vue-router 3 cannot remove a route: rebuild the matcher instead
  type WithMatcher = { matcher: unknown }
  const rebuild = () => {
    ;(router as unknown as WithMatcher).matcher = (
      new VueRouter({ mode: 'abstract' }) as unknown as WithMatcher
    ).matcher
    for (const route of routes.values()) router.addRoute(toConfig(route))
  }
  return {
    raw: router,
    get currentRouteName() {
      return router.currentRoute.name
    },
    addRoute(route) {
      const replaced = routes.has(route.name)
      routes.set(route.name, route)
      if (replaced) rebuild()
      else router.addRoute(toConfig(route))
    },
    removeRoute(name) {
      if (routes.delete(name)) rebuild()
    },
    getRouteNames: () => [...routes.keys()],
    replace(name) {
      router.replace({ name }).catch(() => {})
    },
    guard({ query, onBlocked }) {
      return router.beforeEach((to, _from, next) => {
        if (!to.matched.length) {
          next(false)
          onBlocked()
        } else {
          Object.assign(to.query, query())
          next()
        }
      })
    },
  }
}

export const vue2RouterAdapter: RouterAdapter = {
  RouterView: RouterView as unknown as VueComponent,
  createMemoryRouter,
}
