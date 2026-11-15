/**
 * Everything that differs between Vue 2.7 and Vue 3. The core only uses the
 * Composition API that both versions share and calls the adapter for the
 * rest; `@cdlab996/lowcode-vue2` and `@cdlab996/lowcode-vue3` install their
 * implementation with `setAdapter` before anything renders.
 */

/** A component of the running Vue version. */
export type VueComponent = object | ((...args: never[]) => unknown)

/** A vnode of the running Vue version. */
export type VNode = object

export type Slot = (...args: any[]) => VNode[]

export type Slots = Record<string, Slot | undefined>

const SCOPED = Symbol('scopedSlot')

/** Marks a slot that takes slot props (declared params). */
export function markScopedSlot<T extends Slot>(slot: T): T {
  ;(slot as T & { [SCOPED]?: boolean })[SCOPED] = true
  return slot
}

/** Whether a slot takes slot props (see `markScopedSlot`). */
export const isScopedSlot = (slot: Slot) =>
  !!(slot as Slot & { [SCOPED]?: boolean })[SCOPED]

/** A component public instance (`this` inside a component). */
export interface ComponentInstance {
  readonly $el: Node | null
  readonly $parent: ComponentInstance | null
  readonly $refs: Record<string, unknown>
  [key: string]: any
}

/** Navigation guard callback, `next` style. */
export type RouteGuard = (to: unknown, from: unknown, next: () => void) => void

export interface RouteRecordInput {
  name: string
  path: string
  component: VueComponent
  props: () => Record<string, unknown>
}

export interface MemoryRouter {
  /** The router object to give to the app. */
  readonly raw: object
  readonly currentRouteName: string | null | undefined
  /** Adds a route, replacing one with the same name. */
  addRoute(route: RouteRecordInput): void
  removeRoute(name: string): void
  getRouteNames(): string[]
  replace(name: string): void
  /**
   * Blocks navigation to unknown paths and adds `query()` to the query of
   * every navigation. Returns the unregister function.
   */
  guard(options: {
    query: () => Record<string, string>
    onBlocked: () => void
  }): () => void
}

export interface MountedApp {
  unmount(): void
}

export interface VueAdapter {
  readonly version: 2 | 3

  /**
   * Creates a vnode. `props` uses the flat Vue 3 shape (`onClick`, `class`,
   * `style`, `key`, `ref`, `v-xxx` directive keys); `slots` are slot
   * functions. For a native tag the slots are rendered as its children.
   */
  h(type: string | VueComponent, props?: object | null, slots?: Slots): VNode
  text(value: string): VNode

  /** Root container for renderers whose schema has no root element. */
  readonly Fragment: VueComponent
  /** Component rendering only the default slot (no element of its own). */
  readonly PassThrough: VueComponent

  /** Adds or replaces a key so that a reactive object notices it. */
  set(target: object, key: string, value: unknown): void
  /** Removes a key so that a reactive object notices it. */
  del(target: object, key: string): void

  /**
   * Makes a directive available to `v-<name>` props, wherever the renderer
   * is mounted (materials bring theirs: `directives` of a library).
   */
  registerDirective(name: string, directive: object): void

  isComponent(value: unknown): boolean
  /** Unwraps library-specific component forms (e.g. Vue 2 constructors). */
  normalizeComponent(component: VueComponent): VueComponent
  /** Wraps a native tag or functional component so it accepts slots. */
  wrapTag(tag: string | VueComponent): VueComponent
  /** `v-model` without argument: prop and event of the component. */
  modelOf(component: unknown): { prop: string; event: string }

  /** Props of a component vnode calling `callback` once it is unmounted. */
  unmountedHook(callback: () => void): Record<string, unknown>
  /** Writable `$refs` of an instance. */
  refsOf(instance: ComponentInstance): Record<string, unknown>
  /** Runs `callback` where Vue runs `created`: after setup, before mount. */
  onCreated(callback: () => void): void
  /** Registers route guards for the current component. */
  onRouteGuards(guards: {
    beforeRouteUpdate?: RouteGuard
    beforeRouteLeave?: RouteGuard
  }): void

  instanceId(instance: ComponentInstance): number
  isAlive(instance: ComponentInstance): boolean
  /** DOM nodes rendered by an instance, or null when it renders nothing. */
  domNodesOf(instance: ComponentInstance): (Element | Text)[] | null

  /** Mounts `root` with `props`; a router (simulator only) is installed. */
  mount(
    root: VueComponent,
    props: Record<string, unknown>,
    el: Element,
    router?: MemoryRouter,
  ): MountedApp
}

/**
 * Router support, needed by the designer simulator only. Kept apart so the
 * renderer bundle of preview pages does not include vue-router.
 */
export interface RouterAdapter {
  readonly RouterView: VueComponent
  createMemoryRouter(): MemoryRouter
}

let current: VueAdapter | null = null
let currentRouter: RouterAdapter | null = null

export function setAdapter(adapter: VueAdapter): void {
  current = adapter
}

export function setRouterAdapter(adapter: RouterAdapter): void {
  currentRouter = adapter
}

export function getRouterAdapter(): RouterAdapter {
  if (!currentRouter) {
    throw new Error(
      '[lowcode-vue] no router adapter installed: the simulator needs the full @cdlab996/lowcode-vue2 / @cdlab996/lowcode-vue3 entry',
    )
  }
  return currentRouter
}

export function getAdapter(): VueAdapter {
  if (!current) {
    throw new Error(
      '[lowcode-vue] no Vue adapter installed: import @cdlab996/lowcode-vue2 or @cdlab996/lowcode-vue3',
    )
  }
  return current
}
