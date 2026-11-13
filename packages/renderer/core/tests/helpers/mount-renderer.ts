import type { IPublicTypeNpmInfo } from '@alilc/lowcode-types'
import type {
  RendererProps,
  RuntimeScope,
  Slots,
  VueComponent,
} from '@cdlab996/lowcode-vue-core'
import {
  buildComponents,
  getAdapter,
  Renderer,
} from '@cdlab996/lowcode-vue-core'
import { defineComponent, nextTick, reactive } from 'vue'

/**
 * Component map for tests: a string value is a native tag name
 * (e.g. `{ Button: 'button' }`), anything else is a Vue component.
 */
export type TestComponentsMap = Record<string, string | VueComponent>

export function buildTestComponents(
  componentsMap: TestComponentsMap,
): Record<string, VueComponent> {
  const map: Record<string, IPublicTypeNpmInfo | VueComponent> = {}
  for (const [name, value] of Object.entries(componentsMap)) {
    map[name] =
      typeof value === 'string'
        ? ({ package: value, componentName: value } as IPublicTypeNpmInfo)
        : value
  }
  return buildComponents({}, map)
}

/** `h` of the running Vue version (flat props, slot functions). */
export function h(
  type: string | VueComponent,
  props?: Record<string, unknown> | null,
  slots?: Slots,
) {
  return getAdapter().h(type, props, slots)
}

/**
 * A test component that works on both Vue versions: `render` receives the
 * props, slots, attrs and emit of the instance.
 */
export function testComponent(options: {
  name?: string
  props?: string[]
  model?: { prop: string; event: string }
  render: (ctx: {
    props: Record<string, any>
    slots: Slots
    attrs: Record<string, unknown>
    emit: (event: string, ...args: unknown[]) => void
  }) => object | null
}): VueComponent {
  return defineComponent({
    name: options.name,
    props: options.props ?? [],
    model: options.model,
    setup(props, { slots, attrs, emit }) {
      return () =>
        options.render({
          props: props as Record<string, any>,
          slots: slots as Slots,
          attrs: attrs as Record<string, unknown>,
          emit: emit as (event: string, ...args: unknown[]) => void,
        })
    },
  } as never) as VueComponent
}

export interface MountRendererOptions
  extends Omit<RendererProps, 'schema' | 'components'> {
  schema: RendererProps['schema'] | Record<string, unknown>
  components?: TestComponentsMap
}

export interface MountedRenderer {
  /** Root element rendered by the renderer. */
  readonly el: HTMLElement
  /** Runtime scope (`this`) of the rendered schema. */
  readonly scope: RuntimeScope
  html: () => string
  flush: () => Promise<void>
  destroy: () => void
}

/**
 * Mounts `Renderer` into a fresh element attached to `document.body`. Live
 * mode is the default; pass `designMode: 'design'` for design mode.
 */
export async function mountRenderer(
  options: MountRendererOptions,
): Promise<MountedRenderer> {
  const { components = {}, onRuntimeScope, ...props } = options
  const container = document.createElement('div')
  const host = document.createElement('div')
  container.appendChild(host)
  document.body.appendChild(container)

  let scope: RuntimeScope | undefined
  const app = getAdapter().mount(
    Renderer as VueComponent,
    {
      ...props,
      components: buildTestComponents(components),
      onRuntimeScope: (s: RuntimeScope) => {
        scope = s
        onRuntimeScope?.(s)
      },
    },
    host,
  )
  await nextTick()

  // Vue 2 replaces the host element, Vue 3 renders inside it
  const root = () =>
    (container.firstElementChild === host
      ? host.firstElementChild
      : container.firstElementChild) as HTMLElement

  return {
    get el() {
      return root()
    },
    get scope() {
      if (!scope) throw new Error('the renderer created no runtime scope')
      return scope
    },
    html: () => root()?.outerHTML ?? '',
    flush: () => nextTick(),
    destroy: () => {
      app.unmount()
      container.remove()
    },
  }
}

/** Flushes pending promises and the next render. */
export async function settle(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 0))
  await nextTick()
}

export interface MountedParent<T> {
  /** Reactive props of the renderer; assign to update them. */
  state: T
  el: () => HTMLElement
  destroy: () => void
}

/**
 * Mounts a parent that renders `Renderer` with the props in a reactive
 * `state`, so tests can change props after mount. Every key a test changes
 * must be present in `initial` (Vue 2 reactivity).
 */
export function mountWithState<T extends Record<string, unknown>>(
  initial: T,
  components: TestComponentsMap = { div: 'div' },
): MountedParent<T> {
  const container = document.createElement('div')
  const host = document.createElement('div')
  container.appendChild(host)
  document.body.appendChild(container)
  const state = reactive({ ...initial }) as T
  const built = buildTestComponents(components)
  const Parent = defineComponent({
    setup() {
      return () =>
        getAdapter().h(Renderer as VueComponent, {
          ...state,
          components: built,
        })
    },
  })
  const app = getAdapter().mount(Parent as VueComponent, {}, host)
  const root = () =>
    (container.firstElementChild === host
      ? host.firstElementChild
      : container.firstElementChild) as HTMLElement
  return {
    state,
    el: root,
    destroy: () => {
      app.unmount()
      container.remove()
    },
  }
}

/** Mounts a root component whose render function is `render`. */
export async function mountRender(render: () => object | null) {
  const container = document.createElement('div')
  const host = document.createElement('div')
  container.appendChild(host)
  document.body.appendChild(container)
  const app = getAdapter().mount(testComponent({ render }), {}, host)
  await nextTick()
  const el = (
    container.firstElementChild === host
      ? host.firstElementChild
      : container.firstElementChild
  ) as HTMLElement
  return {
    el,
    destroy: () => {
      app.unmount()
      container.remove()
    },
  }
}
