import type { Node, Prop } from '@alilc/lowcode-designer'
import type {
  IPublicTypeNodeData,
  IPublicTypeNodeSchema,
  IPublicTypeSlotSchema,
  JSFunction,
} from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import type { Ref } from 'vue'
import { computed, provide, reactive, toRaw } from 'vue'
import type {
  ComponentInstance,
  Slot,
  Slots,
  VNode,
  VueComponent,
} from '../adapter'
import { getAdapter, markScopedSlot } from '../adapter'
import type { RendererContext } from '../context'
import { getRendererContextKey, useRendererContext } from '../context'
import type { BlockScope, MaybeArray } from '../shared'
import {
  ensureArray,
  isFunction,
  isJSExpression,
  isJSFunction,
  isJSSlot,
  isNil,
  isObject,
  isString,
  parseExpression,
  parseSchema,
  parseSlotScope,
  toDisplayString,
} from '../shared'
import {
  isEventKey,
  isNodeData as isSchemaNodeData,
  modelOf,
  normalizeEventKey,
} from '../shared/schema'
import type { LeafProps, RendererProps } from './base'
import type { LeafState } from './leaf'
import { createLeafState, useLeafStore } from './leaf'
import { useRootScope, useScopeVersion } from './root-scope'
import type { RuntimeScope } from './scope'
import { mergeScope } from './scope'

export type { Slot, Slots }

export type SlotSchemaMap = {
  [x: string]: IPublicTypeSlotSchema | IPublicTypeNodeData[] | undefined
}

export type PropSchemaMap = {
  [x: string]: unknown
}

export const isNodeData = isSchemaNodeData as (
  val: unknown,
) => val is IPublicTypeNodeData | IPublicTypeNodeData[]

/** What a node renders with: its scope, designer node and component. */
interface NodeContext {
  scope: RuntimeScope
  node: Node | null
  comp: VueComponent | null
}

/**
 * Renders schema nodes as their component vnodes (no wrapper component), so
 * a component sees its children's vnodes and instances. A node's state is
 * read where its vnode is created: in design mode a change re-renders the
 * component rendering the node (its container).
 */
export function useLeaf(
  props: LeafProps,
  // The renderer passes what it provides: inject does not see it
  context: RendererContext = useRendererContext(),
  scopeVersion: Ref<number> = useScopeVersion(),
) {
  const adapter = getAdapter()
  const { getNode, designMode } = context
  const store = useLeafStore()

  const isDesignMode = designMode === 'design'

  /**
   * 获取节点的渲染状态：设计模式下由 store 订阅节点变更，否则直接由 schema 推导
   * @param schema - 节点 schema
   */
  const resolveState = (schema: IPublicTypeNodeSchema): LeafState => {
    const target = isDesignMode && schema.id ? getNode(schema.id) : null
    return target
      ? store.get(target)
      : createLeafState(schema, null, isDesignMode)
  }

  /** 当前节点的渲染状态，schema 被替换时重新推导 */
  const state = computed(() => resolveState(props.schema))

  /** Whether a designer node or one of its ancestors is locked. */
  const isLocked = (node: Node | null) => {
    for (let cur: Node | null = node; cur; cur = cur.parent as Node | null) {
      if (store.get(cur).locked) return true
    }
    return false
  }

  /**
   * Props reporting a node's instances to the simulator, one per vnode key:
   * stable functions (a new one would count as a prop change and re-render
   * the component). `ref` reports the instance, the unmounted hook its
   * removal once it is gone.
   */
  const instanceProps = new Map<
    string,
    { schema: IPublicTypeNodeSchema; props: Record<string, unknown> }
  >()
  const instancePropsOf = (key: string, schema: IPublicTypeNodeSchema) => {
    let entry = instanceProps.get(key)
    if (!entry) {
      const created = {
        schema,
        props: {
          ref: (inst: unknown) => {
            if (inst) {
              context.triggerCompGetCtx(
                created.schema,
                inst as ComponentInstance,
              )
            }
          },
          ...adapter.unmountedHook(() => {
            instanceProps.delete(key)
            context.triggerCompGetCtx(created.schema, null)
          }),
        },
      }
      instanceProps.set(key, created)
      entry = created
    }
    entry.schema = schema
    return entry.props
  }

  /**
   * 渲染节点 vnode，循环节点的每一项直接渲染为兄弟节点
   * @param schema - 节点 schema
   * @param blockScope - 节点块级作用域
   * @param comp - 节点渲染的组件，若不传入，则根据节点的 componentName 推断
   * @param parentScope - 节点所在的作用域（默认为渲染器作用域）
   */
  const renderComp = (
    schema: IPublicTypeNodeData,
    blockScope?: MaybeArray<BlockScope | undefined | null>,
    comp?: VueComponent,
    parentScope: RuntimeScope = props.scope,
  ): VNode | VNode[] | null => {
    const mergedScope = mergeScope(parentScope, blockScope)

    // 若 schema 不为 IPublicTypeNodeSchema，则直接渲染
    if (isString(schema)) {
      return adapter.text(schema as unknown as string)
    } else if (isJSExpression(schema)) {
      const result = parseExpression(schema, mergedScope)
      return adapter.text(toDisplayString(result))
    }

    const nodeSchema = schema as IPublicTypeNodeSchema

    // 若不传入 comp，则根据节点的 componentName 推断
    if (!comp) {
      // read at render time: the component map may be replaced
      comp = context.components[nodeSchema.componentName]
    }

    if (!comp) {
      return adapter.h('div', null, {
        default: () => [
          adapter.text(`component not found: ${nodeSchema.componentName}`),
        ],
      })
    }

    const target = isDesignMode && nodeSchema.id ? getNode(nodeSchema.id) : null
    const baseKey =
      target && nodeSchema.id
        ? store.keyOf(nodeSchema.id, target)
        : nodeSchema.id
    const state = resolveState(nodeSchema)
    const { hidden, condition, loop, loopArgs } = state
    if (hidden) return null
    if (
      typeof condition === 'boolean'
        ? !condition
        : !parseSchema(condition, mergedScope)
    )
      return null

    const nodeComp = comp
    const renderNode = (key: string | undefined, scope: RuntimeScope) => {
      // A scope change (new bindings) renders the node again
      void scopeVersion.value
      const ctx: NodeContext = { scope, node: target, comp: nodeComp }
      const extraProps =
        isDesignMode && key !== undefined
          ? instancePropsOf(key, nodeSchema)
          : undefined
      const slots = buildSlots(state.slots, ctx)
      return adapter.h(
        nodeComp,
        { ...buildProps(state.props, ctx, extraProps), key },
        // Passed slots make Vue update the component on every parent render
        Object.keys(slots).length ? slots : undefined,
      )
    }

    if (!loop) return renderNode(baseKey, mergedScope)

    const items = parseSchema(loop, mergedScope)
    if (!Array.isArray(items)) {
      !isNil(items) && console.warn('[vue-renderer]: loop must be array', items)
      return null
    }

    const offset = mergedScope.__loopRefOffset ?? 0
    const [itemKey, indexKey] = loopArgs
    return items.map((item, index) =>
      renderNode(
        `${baseKey}-${index}`,
        mergeScope(mergedScope, {
          [itemKey]: item,
          [indexKey]: index,
          __loopScope: true,
          __loopRefIndex: offset + index,
          __loopRefOffset: items.length * index,
        }),
      ),
    )
  }

  /**
   * 将单个属性 schema 转化成真实值
   *
   * @param schema - 属性 schema
   * @param scope - 当前作用域
   * @param prop - 属性对象，仅在 design 模式下有值
   */
  const buildProp = (
    schema: unknown,
    scope: RuntimeScope,
    prop?: Prop | null,
  ): unknown => {
    if (isJSExpression(schema) || isJSFunction(schema)) {
      // 处理表达式和函数
      return parseExpression(schema, scope)
    } else if (isJSSlot(schema)) {
      // 处理属性插槽
      let slotParams: string[]
      let slotSchema: IPublicTypeNodeData[] | IPublicTypeSlotSchema
      if (prop?.slotNode) {
        // design 模式，从 prop 中导出 schema
        slotSchema = prop.slotNode.export<IPublicTypeSlotSchema>(
          IPublicEnumTransformStage.Render,
        )
        slotParams = slotSchema.params ?? []
      } else {
        // live 模式，直接获取 schema 值
        slotSchema = ensureArray(schema.value)
        slotParams = schema.params ?? []
      }

      // 返回 slot 函数
      return (...args: unknown[]) => {
        const slotScope = parseSlotScope(args, slotParams)
        const vnodes: VNode[] = []
        ensureArray(slotSchema).forEach((item) => {
          vnodes.push(
            ...ensureArray(renderComp(item, slotScope, undefined, scope)),
          )
        })
        return vnodes
      }
    } else if (Array.isArray(schema)) {
      // 属性值为 array，递归处理属性的每一项
      return schema.map((item, idx) =>
        buildProp(item, scope, prop?.get(idx) as Prop | null),
      )
    } else if (schema && isObject(schema)) {
      // 属性值为 object，递归处理属性的每一项
      const res: Record<string, unknown> = {}
      Object.keys(schema).forEach((key) => {
        if (key.startsWith('__')) return
        const val = schema[key]
        const childProp = prop?.get(key) as Prop | null
        res[key] = buildProp(val, scope, childProp)
      })
      return res
    }

    return schema
  }

  /**
   * 构建 ref prop，将 string ref 其转化为 function
   *
   * @param schema - prop schema
   * @param scope - 当前作用域
   * @param prop - 属性对象，仅在 design 模式下有值
   */
  const buildRefProp = (
    schema: unknown,
    scope: RuntimeScope,
    prop?: Prop | null,
  ): unknown => {
    if (isString(schema)) {
      const field = schema as string
      let lastInst: unknown = null
      return (inst: unknown): void => {
        const refs = adapter.refsOf(scope)
        if (isNil(scope.__loopRefIndex)) {
          refs[field] = inst
          if (field in scope) {
            scope[field] = inst
          }
        } else {
          let target = refs[field] as unknown[]
          if (!Array.isArray(target)) {
            target = refs[field] = []
            if (field in scope) {
              target = scope[field] = target
            }
          } else if (field in scope) {
            const scopeTarget = scope[field]
            if (!Array.isArray(scopeTarget) || toRaw(scopeTarget) !== target) {
              target = scope[field] = target
            } else {
              target = scopeTarget
            }
          }
          if (isNil(inst)) {
            const idx = target.indexOf(lastInst)
            idx >= 0 && target.splice(idx, 1)
          } else {
            target[scope.__loopRefIndex!] = inst
          }
        }
        lastInst = inst
      }
    } else {
      const propValue = buildProp(schema, scope, prop)
      return isString(propValue)
        ? buildRefProp(propValue, scope, prop)
        : propValue
    }
  }

  /**
   * 处理属性 schema，主要处理的目标：
   * - ref 逻辑 (合并 ref function)
   * - 事件绑定逻辑 (重复注册的事件转化为数组)
   * - 双向绑定逻辑 (v-model)
   * @param target - 组件属性目标对象
   * @param key - 属性名
   * @param val - 属性值
   * @param comp - 节点的组件（v-model 的默认 model）
   */
  const processProp = (
    target: Record<string, unknown>,
    key: string,
    val: unknown,
    comp: VueComponent | null,
  ) => {
    const model = modelOf(key)
    if (key.startsWith('v-model')) {
      // 双向绑定逻辑
      if (!model) return target

      let valueProp: string
      let eventProp: string
      if (model.arg) {
        valueProp = model.arg
        eventProp = `onUpdate:${valueProp}`
      } else {
        const compModel = adapter.modelOf(comp)
        valueProp = compModel.prop
        eventProp = `on${compModel.event[0].toUpperCase()}${compModel.event.slice(1)}`
      }

      // 若值为表达式，则自定注册 onUpdate 事件，实现双向绑定
      if (isJSExpression(val)) {
        const updateEventFn: JSFunction = {
          type: 'JSFunction',
          value: `function ($event) {${val.value} = $event}`,
        }
        target[eventProp] =
          eventProp in target
            ? ensureArray(target[eventProp]).concat(updateEventFn)
            : updateEventFn
      }
      target[valueProp] = val
    } else if (isEventKey(key) && isJSFunction(val)) {
      // 事件绑定逻辑: onUpdateXxx => onUpdate:xxx
      key = normalizeEventKey(key)

      // 若事件名称重复，则自动转化为数组
      target[key] = key in target ? ensureArray(target[key]).concat(val) : val
    } else if (key === 'ref' && 'ref' in target) {
      // ref 合并逻辑
      const sourceRef = val
      const targetRef = target.ref
      if (isFunction(targetRef) && isFunction(sourceRef)) {
        target.ref = (...args: unknown[]) => {
          sourceRef(...args)
          targetRef(...args)
        }
      } else {
        target.ref = [targetRef, sourceRef].filter(isFunction).pop()
      }
    } else {
      target[key] = val
    }
  }

  /**
   * 构建属性，将整个属性 schema 转化为真实的属性值
   * @param propsSchema - 属性 schema
   * @param ctx - 节点的作用域、设计器节点和组件
   * @param extraProps - 运行时附加属性
   */
  const buildProps = (
    propsSchema: Record<string, unknown>,
    ctx: NodeContext,
    extraProps?: Record<string, unknown>,
  ): Record<string, unknown> => {
    // 属性预处理
    const processed: Record<string, unknown> = {}
    Object.keys(propsSchema).forEach((propKey) => {
      processProp(processed, propKey, propsSchema[propKey], ctx.comp)
    })

    // 将属性 schema 转化成真实的属性值
    const parsedProps: Record<string, unknown> = {}
    Object.keys(processed).forEach((propName) => {
      const schema = processed[propName]
      const prop = ctx.node?.getProp(propName) as Prop | null
      parsedProps[propName] =
        propName === 'ref'
          ? buildRefProp(schema, ctx.scope, prop)
          : buildProp(schema, ctx.scope, prop)
    })

    // 应用运行时附加的属性值
    if (extraProps) {
      Object.keys(extraProps).forEach((propKey) => {
        processProp(parsedProps, propKey, extraProps[propKey], ctx.comp)
      })
    }
    return parsedProps
  }

  /**
   * 装饰默认插槽，当插槽为空时，渲染插槽占位符，便于拖拽
   *
   * @param slot - 插槽渲染函数
   * @param node - 设计器节点
   */
  const decorateDefaultSlot = (slot: Slot, node: Node): Slot => {
    return (...args: unknown[]) => {
      const vnodes = slot(...args)
      if (!vnodes.length) {
        const locked = isLocked(node)
        const className = {
          'lc-container-locked': locked,
          'lc-container-placeholder': true,
        }
        const placeholder = locked
          ? '锁定元素及子元素无法编辑'
          : '拖拽组件或模板到这里'
        vnodes.push(
          adapter.h(
            'div',
            { class: className },
            { default: () => [adapter.text(placeholder)] },
          ),
        )
      }
      return vnodes
    }
  }

  /**
   * 构建所有插槽 schema，将 schema 构建成 slot 函数
   * @param slots - 插槽 schema
   * @param ctx - 节点的作用域、设计器节点和组件
   */
  const buildSlots = (slots: SlotSchemaMap, ctx: NodeContext): Slots => {
    const { node, scope } = ctx
    return Object.keys(slots).reduce(
      (prev, next) => {
        const slotSchema = slots[next]
        const isDefaultSlot = next === 'default'

        // 插槽数据为 null 或 undefined 时不渲染插槽
        if (isNil(slotSchema)) return prev

        // 默认插槽内容为空，且当前节点不是容器节点时，不渲染默认插槽
        if (
          isDefaultSlot &&
          !node?.isContainer() &&
          Array.isArray(slotSchema) &&
          slotSchema.length === 0
        )
          return prev

        let renderSlot: Slot

        if (Array.isArray(slotSchema)) {
          // 插槽为数组，则当前插槽不可拖拽编辑，直接渲染插槽内容
          renderSlot = () => {
            return slotSchema.flatMap((item) =>
              ensureArray(renderComp(item, null, undefined, scope)),
            )
          }
        } else if (slotSchema!.id) {
          // 存在 slot id，则当前插槽可拖拽编辑
          renderSlot = (...args: unknown[]) => {
            return ensureArray(
              renderComp(
                slotSchema!,
                parseSlotScope(args, slotSchema!.params ?? []),
                undefined,
                scope,
              ),
            )
          }
        } else {
          // 不存在 slot id，插槽不可拖拽编辑，直接渲染插槽内容
          renderSlot = (...args: unknown[]) => {
            const slotScope = parseSlotScope(args, slotSchema!.params ?? [])
            return ensureArray(slotSchema!.children).flatMap((item) =>
              ensureArray(renderComp(item, slotScope, undefined, scope)),
            )
          }
        }

        const params = Array.isArray(slotSchema) ? [] : slotSchema!.params
        if (params?.length) markScopedSlot(renderSlot)

        prev[next] =
          isDefaultSlot && isDesignMode && node?.isContainer()
            ? decorateDefaultSlot(renderSlot, node) // 当节点为容器节点，且为设计模式下，则装饰默认插槽
            : renderSlot

        return prev
      },
      {} as Record<string, Slot>,
    )
  }

  return {
    state,
    renderComp,
    buildProps,
    buildSlots,
  }
}

export function useRenderer(
  props: RendererProps,
  context: { attrs: Record<string, unknown> },
) {
  const { scope, bindings, ready, scopeVersion } = useRootScope(props, context)
  const leafProps: LeafProps = {
    comp: null,
    scope,
    get schema() {
      return props.__schema
    },
  }

  const contextKey = getRendererContextKey()

  const designModeRef = computed(() => props.__designMode ?? 'live')
  const componentsRef = computed(() => props.__components)

  const rendererContext = reactive({
    designMode: designModeRef,
    components: componentsRef,
    getNode: (id: string) => props.__getNode?.(id) ?? null,
    triggerCompGetCtx: computed(() => props.__triggerCompGetCtx),
  }) as unknown as RendererContext
  provide(contextKey, rendererContext)

  return {
    scope,
    bindings,
    ready,
    scopeVersion,
    designModeRef,
    componentsRef,
    ...useLeaf(leafProps, rendererContext, scopeVersion),
  }
}
