import type {
  ComponentInstance,
  Slots,
  VueAdapter,
  VueComponent,
} from '@cdlab996/lowcode-vue-core'
import type {
  Component,
  ComponentInternalInstance,
  ComponentPublicInstance,
  DirectiveArguments,
  Plugin,
  VNode,
} from 'vue'
import {
  createApp,
  createTextVNode,
  h as createVNode,
  defineComponent,
  Fragment,
  getCurrentInstance,
  isVNode,
  onBeforeMount,
  onBeforeUnmount,
  resolveDirective,
  withDirectives,
} from 'vue'

/** Instance seen through vue-router 4 / 5 (types only; no vue-router import). */
interface RouteRecordLike {
  instances: Record<string, unknown>
}
interface RouteLike {
  matched: RouteRecordLike[]
}
interface RouterLike {
  beforeEach(
    guard: (to: RouteLike, from: RouteLike, next: () => void) => void,
  ): () => void
}

function findPageRecord(
  matched: RouteRecordLike[],
  instance: ComponentPublicInstance | null,
) {
  for (let cur = instance; cur; cur = cur.$parent) {
    const record = matched.find((r) => r.instances.default === cur)
    if (record) return record
  }
}

const DIRECTIVE = /^v-([\w-]+)(?::(\w+))?((?:\.\w+)*)$/

function slotChildren(slots?: Slots): VNode[] {
  if (!slots) return []
  const { default: defaultSlot, ...named } = slots
  return [defaultSlot, ...Object.values(named)].flatMap((slot) =>
    slot ? (slot() as VNode[]) || [] : [],
  )
}

/** Splits `v-name:arg.mod` keys off the props as directive arguments. */
function extractDirectives(props: Record<string, unknown>) {
  const directives: DirectiveArguments = []
  const rest: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(props)) {
    const match = key.match(DIRECTIVE)
    if (!match) {
      rest[key] = value
      continue
    }
    const directive = resolveDirective(match[1])
    if (!directive) continue
    const modifiers = Object.fromEntries(
      (match[3] || '')
        .split('.')
        .filter(Boolean)
        .map((m) => [m, true]),
    )
    directives.push([directive, value, match[2], modifiers])
  }
  return { directives, rest }
}

function h(
  type: string | VueComponent,
  props?: object | null,
  slots?: Slots,
): VNode {
  const { directives, rest } = extractDirectives(
    (props ?? {}) as Record<string, unknown>,
  )
  let vnode: VNode
  if (type === Fragment) {
    vnode = createVNode(
      Fragment,
      { key: rest.key as string },
      slotChildren(slots),
    )
  } else if (typeof type === 'string') {
    // Native elements have no slot outlets: every slot becomes children
    vnode = createVNode(type, rest, slotChildren(slots))
  } else {
    vnode = createVNode(type as Component, rest, slots as never)
  }
  return directives.length ? withDirectives(vnode, directives) : vnode
}

function wrapTag(tag: string | VueComponent): VueComponent {
  return defineComponent({
    inheritAttrs: false,
    setup(_props, { attrs, slots }) {
      return () =>
        createVNode(
          tag as Component,
          { ...attrs },
          slotChildren(slots as Slots),
        )
    },
  })
}

const PassThrough = defineComponent({
  name: 'PassThrough',
  setup(_props, { slots }) {
    return () => slots.default?.({})
  },
})

function internal(instance: ComponentInstance): ComponentInternalInstance {
  return (instance as unknown as ComponentPublicInstance).$
}

// DOM lookup for multi-root (fragment) components: walk the rendered tree.
function isUsableNode(node: unknown): node is Element | Text {
  if (!node || typeof node !== 'object' || !('nodeType' in node)) return false
  const { nodeType } = node as Node
  if (nodeType === 1) return true
  return nodeType === 3 && !!(node as Text).nodeValue
}

function collectFromVNode(vnode: VNode, target: (Element | Text)[]): void {
  if (vnode.component) {
    collectFromVNode(vnode.component.subTree, target)
  } else if (vnode.type === Fragment && Array.isArray(vnode.children)) {
    for (const child of vnode.children) {
      if (isVNode(child)) collectFromVNode(child, target)
    }
  } else if (isUsableNode(vnode.el)) {
    target.push(vnode.el)
  }
}

export const vue3Adapter: VueAdapter = {
  version: 3,
  h,
  text: (value) => createTextVNode(value),
  Fragment: Fragment as unknown as VueComponent,
  PassThrough,
  set: (target, key, value) => {
    ;(target as Record<string, unknown>)[key] = value
  },
  del: (target, key) => {
    delete (target as Record<string, unknown>)[key]
  },
  isComponent: (value) =>
    typeof value === 'function' ||
    (!!value &&
      typeof value === 'object' &&
      ('render' in value || 'setup' in value || 'template' in value)),
  normalizeComponent: (component) => component,
  wrapTag,
  modelOf: () => ({ prop: 'modelValue', event: 'update:modelValue' }),
  unmountedHook: (callback) => ({ onVnodeUnmounted: callback }),
  refsOf(instance) {
    // A fresh instance shares a frozen empty object; give it its own
    const inst = internal(instance) as { refs: Record<string, unknown> }
    if (Object.isFrozen(inst.refs)) inst.refs = {}
    return inst.refs
  },
  onCreated: (callback) => onBeforeMount(callback),
  onRouteGuards(guards) {
    // `$router.beforeEach` on the route record rendering this page, like the
    // Vue 2 adapter (vue-router's composition guards would import vue-router)
    const proxy = getCurrentInstance()?.proxy ?? null
    const router = (proxy as unknown as { $router?: RouterLike } | null)
      ?.$router
    if (!proxy || !router) return
    const unregister = router.beforeEach((to, from, next) => {
      const record = findPageRecord(from.matched, proxy)
      const callback =
        record &&
        (to.matched.includes(record)
          ? guards.beforeRouteUpdate
          : guards.beforeRouteLeave)
      if (callback) callback.call(proxy, to, from, next)
      else next()
    })
    onBeforeUnmount(unregister)
  },
  instanceId: (instance) => internal(instance).uid,
  isAlive: (instance) => !internal(instance).isUnmounted,
  domNodesOf(instance) {
    const nodes: (Element | Text)[] = []
    collectFromVNode(internal(instance).subTree, nodes)
    return nodes.length ? nodes : null
  },
  mount(root, props, el, router) {
    const app = createApp(root as Component, props)
    if (router) app.use(router.raw as Plugin)
    app.mount(el)
    return { unmount: () => app.unmount() }
  },
}
