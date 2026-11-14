import type { Node, Prop } from '@alilc/lowcode-designer'
import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import type { InjectionKey } from 'vue'
import {
  defineComponent,
  inject,
  onUnmounted,
  provide,
  shallowReactive,
} from 'vue'
import type { ComponentInstance } from '../adapter'
import { getAdapter } from '../adapter'
import { useRendererContext } from '../context'
import { ensureArray, isJSSlot, isNil } from '../shared'
import { loopArgsOf, splitNodeSchema } from '../shared/schema'
import { leafProps } from './base'
import { useScopeVersion } from './root-scope'
import type { PropSchemaMap, SlotSchemaMap } from './use'
import { useLeaf } from './use'

/**
 * Render state of a node: component props/slots plus the structural
 * directives (loop, condition, designer hidden/locked flags).
 */
export interface LeafState {
  props: PropSchemaMap
  slots: SlotSchemaMap
  loop: unknown
  loopArgs: [string, string]
  condition: unknown
  hidden: boolean
  locked: boolean
}

/**
 * Splits a node schema into component props and slots (`splitNodeSchema`,
 * shared with the code generator). In design mode the named slots come
 * from the designer's slot nodes.
 */
function splitSchema(schema: IPublicTypeNodeSchema, node?: Node | null) {
  const split = splitNodeSchema(schema)
  const slots: SlotSchemaMap = { default: split.children as never }
  for (const [key, slot] of Object.entries(split.slots)) {
    slots[key] = {
      componentName: 'Slot',
      params: slot.params,
      children: slot.children,
    } as never
  }
  if (node) {
    for (const [key, value] of Object.entries(schema.props ?? {})) {
      const prop = isJSSlot(value) ? node.getProp(key) : null
      if (prop?.slotNode) {
        slots[key] = prop.slotNode.export(IPublicEnumTransformStage.Render)
      }
    }
  }
  return { props: split.props as PropSchemaMap, slots }
}

export function createLeafState(
  schema: IPublicTypeNodeSchema,
  node: Node | null,
  isDesignMode: boolean,
): LeafState {
  return {
    ...splitSchema(schema, node),
    loop: schema.loop,
    loopArgs: loopArgsOf(schema),
    condition: schema.condition ?? true,
    hidden: isDesignMode ? (schema.hidden ?? false) : false,
    locked: node?.isLocked ?? false,
  }
}

const DESIGNER_KEYS = [
  '___isLocked___',
  '___hidden___',
  '___condition___',
  '___loop___',
  '___loopArgs___',
]

interface PropChangeInfo {
  key?: string | number
  prop?: Prop
  newValue: unknown
  oldValue: unknown
}

function set(target: object, key: string, value: unknown) {
  getAdapter().set(target, key, value)
}

function del(target: object, key: string) {
  getAdapter().del(target, key)
}

function setProp(state: LeafState, key: string, value: unknown) {
  const name = key === 'className' ? 'class' : key
  if (key in state.slots) del(state.slots, key)
  // An unset prop keeps its key with an undefined value. Removing the key
  // would unbind a directive that the designer sets again right after (it
  // unsets a variable-bound prop before writing the plain value).
  set(state.props, name, value)
}

function setSlot(state: LeafState, key: string, value: unknown) {
  if (key in state.props) del(state.props, key)
  if (isNil(value)) del(state.slots, key)
  else set(state.slots, key, value)
}

/**
 * Applies a designer prop change to the leaf state. Designer-internal keys
 * update the structural state only and never reach component props.
 */
function reducePropChange(state: LeafState, node: Node, info: PropChangeInfo) {
  const { prop, newValue, oldValue } = info
  const key = info.key as string
  const path: string[] = prop?.path ?? []
  const rootKey = path[0]

  if (path.length !== 1) {
    if (rootKey === '___loopArgs___') {
      const loopArgs: [string, string] = [...state.loopArgs]
      loopArgs[Number(key)] = newValue as string
      state.loopArgs = loopArgs
    } else if (rootKey && !DESIGNER_KEYS.includes(rootKey)) {
      setProp(state, rootKey, node.getPropValue(rootKey))
    }
    return
  }
  if (!key) return

  if (key === '___isLocked___') {
    state.locked = !!newValue
  } else if (key === '___hidden___') {
    state.hidden = !!newValue
  } else if (key === '___condition___') {
    state.condition = newValue
  } else if (key === '___loop___') {
    state.loop = newValue
  } else if (key === '___loopArgs___') {
    const loopArgs: [string, string] = [...state.loopArgs]
    ensureArray(newValue as string[]).forEach((v, i) => {
      loopArgs[i] = v
    })
    state.loopArgs = loopArgs
  } else if (key === 'children') {
    del(state.props, key)
    setSlot(
      state,
      'default',
      isJSSlot(newValue)
        ? prop?.slotNode?.export(IPublicEnumTransformStage.Render)
        : isNil(newValue)
          ? undefined
          : ensureArray(newValue),
    )
  } else if (isJSSlot(newValue)) {
    setSlot(
      state,
      key,
      prop?.slotNode?.export(IPublicEnumTransformStage.Render),
    )
  } else if (isNil(newValue) && isJSSlot(oldValue)) {
    setSlot(state, key, undefined)
  } else {
    setProp(state, key, newValue)
  }
}

export interface LeafStore {
  /** Reactive state of a designer node, subscribed to its changes. */
  get(node: Node): LeafState
  /**
   * Vnode key for the leaf of a node. The designer can replace a node object
   * while keeping its id; the key then changes so the leaf is re-created and
   * follows the new node instead of the stale one.
   */
  keyOf(id: string, node: Node): string
  dispose(): void
}

function createLeafStore(): LeafStore {
  const states = new Map<Node, LeafState>()
  const disposers: Array<CallableFunction | undefined> = []
  const generations = new Map<string, { node: Node; generation: number }>()

  return {
    get(node) {
      const cached = states.get(node)
      if (cached) return cached

      const initial = createLeafState(
        node.export(IPublicEnumTransformStage.Render),
        node,
        true,
      )
      const state = shallowReactive({
        ...initial,
        props: shallowReactive(initial.props),
        slots: shallowReactive(initial.slots),
      })
      states.set(node, state)
      disposers.push(
        node.onChildrenChange(() => {
          const schema = node.export(IPublicEnumTransformStage.Render)
          set(state.slots, 'default', ensureArray(schema.children))
        }),
        node.onPropChange((info) => reducePropChange(state, node, info)),
      )
      return state
    },
    keyOf(id, node) {
      const entry = generations.get(id)
      if (!entry) {
        generations.set(id, { node, generation: 0 })
        return id
      }
      if (entry.node !== node) {
        states.delete(entry.node)
        entry.node = node
        entry.generation += 1
      }
      return entry.generation ? `${id}:${entry.generation}` : id
    },
    dispose() {
      for (const dispose of disposers) dispose?.()
      disposers.length = 0
      states.clear()
      generations.clear()
    },
  }
}

const LEAF_STORE: InjectionKey<LeafStore> = Symbol('LEAF_STORE')

/**
 * Returns the leaf store of the enclosing renderer, creating (and owning)
 * one when there is none.
 */
export function useLeafStore(): LeafStore {
  const existing = inject(LEAF_STORE, null)
  if (existing) return existing
  const store = createLeafStore()
  provide(LEAF_STORE, store)
  onUnmounted(() => store.dispose())
  return store
}

/**
 * Leaf component shared by live and design mode. Renders one component
 * instance; loop and condition are resolved by the parent `renderComp`.
 */
export const Leaf = defineComponent({
  name: 'Leaf',
  props: leafProps,
  setup(props) {
    const { triggerCompGetCtx, designMode } = useRendererContext()
    const { state, buildProps, buildSlots } = useLeaf(props)

    const adapter = getAdapter()
    const scopeVersion = useScopeVersion()
    const isDesignMode = designMode === 'design'
    const extraProps = isDesignMode
      ? {
          ref: (inst: ComponentInstance | null) =>
            inst && triggerCompGetCtx(props.schema, inst),
        }
      : undefined

    // Lets the simulator drop the instances of this node once they are gone
    if (isDesignMode) onUnmounted(() => triggerCompGetCtx(props.schema, null))

    return () => {
      void scopeVersion.value
      const { comp } = props
      if (!comp) {
        return adapter.h('div', null, {
          default: () => [adapter.text('component not found')],
        })
      }
      const { props: compProps, slots } = state.value
      return adapter.h(
        comp,
        buildProps(compProps, null, extraProps),
        buildSlots(slots),
      )
    }
  },
})

/** Option marking the Leaf component (Vue 2 reads it through `$options`). */
export const LEAF_MARKER = '__lowcodeLeaf'
;(Leaf as Record<string, unknown>)[LEAF_MARKER] = true
