import type {
  ComponentInstance,
  RouteGuard,
  Slots,
  VueAdapter,
  VueComponent,
} from '@cdlab996/lowcode-vue-core'
import Vue, {
  h as createElement,
  defineComponent,
  del,
  getCurrentInstance,
  onBeforeUnmount,
  set,
} from 'vue'
import type { Component } from 'vue/types/options'
import type { VNode } from 'vue/types/vnode'
import type VueRouter from 'vue-router'
import type { Route, RouteRecord } from 'vue-router'
import { getComponentOption, toVNodeData } from './vnode-data'

/** Vue 2 internals the public typings omit. */
type Vue2Instance = ComponentInstance & {
  readonly _uid: number
  readonly _isDestroyed: boolean
  $options: { created?: Array<() => void> }
}

function slotChildren(slots?: Slots): VNode[] {
  if (!slots) return []
  const { default: defaultSlot, ...named } = slots
  return [defaultSlot, ...Object.values(named)].flatMap((slot) =>
    slot ? (slot() as VNode[]) || [] : [],
  )
}

function h(
  type: string | VueComponent,
  props?: object | null,
  slots?: Slots,
): VNode {
  const data = (props ?? {}) as Record<string, unknown>
  if (typeof type === 'string') {
    // Native elements have no slot outlets: every slot becomes children
    return createElement(type, toVNodeData(type, data), slotChildren(slots))
  }
  return createElement(
    type as Component,
    toVNodeData(type, data, slots as Record<string, never>),
  )
}

/** Renders a native tag or functional component; slots become children. */
function wrapTag(tag: string | VueComponent): VueComponent {
  return defineComponent({
    setup(_props, { attrs, listeners, slots }) {
      return () =>
        createElement(
          tag as Component,
          // Copy attrs: Vue removes the keys it extracts as props
          { attrs: { ...attrs }, on: listeners },
          slotChildren(slots as Slots),
        )
    },
  })
}

const Fragment = defineComponent({
  name: 'Fragment',
  setup(_props, { slots }) {
    return () => createElement('div', slots.default?.())
  },
})

const PassThrough = {
  name: 'PassThrough',
  functional: true,
  render(_h: unknown, ctx: { scopedSlots: Slots }) {
    return ctx.scopedSlots.default?.({}) ?? []
  },
}

function findPageRecord(matched: RouteRecord[], vm: Vue | null) {
  for (let cur = vm; cur; cur = cur.$parent) {
    const record = matched.find((r) => r.instances.default === cur)
    if (record) return record
  }
}

/**
 * Components rendered by a Leaf see their parent component, not the Leaf, in
 * `$parent` and `$children` (Element UI's Steps, Carousel and Tabs use them).
 * The provide chain is unchanged: `_provided` is inherited before
 * `beforeCreate`.
 */
Vue.mixin({
  beforeCreate(this: Vue) {
    const leaf = this.$parent
    if (leaf?.$options.name !== 'Leaf' || this.$options.name === 'Leaf') return
    let child: Vue = leaf
    let parent = leaf.$parent
    while (parent?.$options.name === 'Leaf') {
      child = parent
      parent = parent.$parent
    }
    if (!parent) return
    ;(this as { $parent: Vue }).$parent = parent
    // the component takes the place of its Leaf among the parent's children
    const index = parent.$children.indexOf(child)
    if (index >= 0) parent.$children.splice(index, 1, this)
    else parent.$children.push(this)
  },
})

export const vue2Adapter: VueAdapter = {
  version: 2,
  h,
  text: (value) => (Vue.prototype as { _v(text: string): VNode })._v(value),
  Fragment,
  PassThrough,
  set: (target, key, value) => {
    set(target, key, value)
  },
  del: (target, key) => del(target, key),
  isComponent: (value) =>
    typeof value === 'function' ||
    (!!value &&
      typeof value === 'object' &&
      ('render' in value || 'setup' in value || 'template' in value)),
  normalizeComponent: (component) =>
    (component as { extendOptions?: VueComponent }).extendOptions ?? component,
  wrapTag,
  modelOf(component) {
    const model = getComponentOption(component, 'model') as
      | { prop?: string; event?: string }
      | undefined
    return { prop: model?.prop ?? 'value', event: model?.event ?? 'input' }
  },
  refsOf: (instance) => instance.$refs,
  onCreated(callback) {
    // Setup bindings reach the instance only after setup returns; Vue 2 then
    // calls `created`. Queue on this instance's own hook list.
    const vm = getCurrentInstance()!.proxy as unknown as Vue2Instance
    vm.$options.created = [...(vm.$options.created ?? []), callback]
  },
  onRouteGuards(guards) {
    const vm = getCurrentInstance()?.proxy as unknown as Vue
    const router = vm?.$router
    if (!router) return
    const unregister = router.beforeEach((to, from, next) => {
      const record = findPageRecord(from.matched, vm)
      const callback: RouteGuard | undefined =
        record &&
        (to.matched.includes(record)
          ? guards.beforeRouteUpdate
          : guards.beforeRouteLeave)
      if (callback) callback.call(vm, to as Route, from as Route, next)
      else next()
    })
    onBeforeUnmount(unregister)
  },
  instanceId: (instance) => (instance as Vue2Instance)._uid,
  isAlive: (instance) => !(instance as Vue2Instance)._isDestroyed,
  domNodesOf(instance) {
    const el = instance.$el as Element | Text | Comment | null
    // A Vue 2 component has one root; a comment root renders nothing
    if (!el || el.nodeType === 8 || (el.nodeType === 3 && !el.nodeValue)) {
      return null
    }
    return [el as Element | Text]
  },
  mount(root, props, el, router) {
    const vm = new Vue({
      router: router?.raw as VueRouter | undefined,
      render: (create) => create(root as Component, { props }),
    }).$mount(el)
    return { unmount: () => vm.$destroy() }
  },
}
