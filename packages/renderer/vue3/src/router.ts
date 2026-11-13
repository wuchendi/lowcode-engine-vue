import type {
  MemoryRouter,
  RouterAdapter,
  VueComponent,
} from '@cdlab996/lowcode-vue-core'
import type { Component } from 'vue'
import { createMemoryHistory, createRouter, RouterView } from 'vue-router'

function createMemoryRouter(): MemoryRouter {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
  })
  return {
    raw: router,
    get currentRouteName() {
      return router.currentRoute.value.name as string | null | undefined
    },
    addRoute(route) {
      // A route with the same name is replaced
      router.addRoute({
        name: route.name,
        path: route.path,
        component: route.component as Component,
        props: route.props,
      })
    },
    removeRoute: (name) => router.removeRoute(name),
    getRouteNames: () => router.getRoutes().map((route) => String(route.name)),
    replace(name) {
      router.replace({ name }).catch(() => {})
    },
    guard({ query, onBlocked }) {
      return router.beforeEach((to, from) => {
        if (!to.matched.length) {
          // The initial navigation to `/` is no user navigation: no warning
          if (from.matched.length) onBlocked()
          return false
        }
        const extra = query()
        if (Object.keys(extra).some((key) => to.query[key] !== extra[key])) {
          return { ...to, query: { ...to.query, ...extra } }
        }
        return true
      })
    },
  }
}

export const vue3RouterAdapter: RouterAdapter = {
  RouterView: RouterView as unknown as VueComponent,
  createMemoryRouter,
}
