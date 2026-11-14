import type { Prop } from '@alilc/lowcode-designer'
import type {
  IPublicTypeNodeData,
  IPublicTypeNodeSchema,
  IPublicTypeSlotSchema,
  JSFunction,
} from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import type { InjectionKey, Ref } from 'vue'
import { computed, inject, provide, reactive, ref, toRaw } from 'vue'
import type { Slot, Slots, VNode, VueComponent } from '../adapter'
import { getAdapter } from '../adapter'
import type { CurrentNode } from '../context'
import {
  getCurrentNodeKey,
  getRendererContextKey,
  useRendererContext,
} from '../context'
import type { BlockScope, MaybeArray } from '../shared'
import {
  camelize,
  ensureArray,
  isDOMText,
  isFunction,
  isJSExpression,
  isJSFunction,
  isJSSlot,
  isNil,
  isNodeSchema,
  isObject,
  isString,
  lowerFirst,
  parseExpression,
  parseSchema,
  parseSlotScope,
  toDisplayString,
} from '../shared'
import type { LeafProps, RendererProps } from './base'
import type { LeafState } from './leaf'
import { createLeafState, Leaf, useLeafStore } from './leaf'
import { useRootScope } from './root-scope'
import type { RuntimeScope } from './scope'
import { mergeScope } from './scope'

export type { Slot, Slots }

const currentNodeKey = getCurrentNodeKey()

export type SlotSchemaMap = {
  [x: string]: IPublicTypeSlotSchema | IPublicTypeNodeData[] | undefined
}

export type PropSchemaMap = {
  [x: string]: unknown
}

export function isNodeData(
  val: unknown,
): val is IPublicTypeNodeData | IPublicTypeNodeData[] {
  if (Array.isArray(val)) {
    return val.every((item) => isNodeData(item))
  }
  return isDOMText(val) || isNodeSchema(val) || isJSExpression(val)
}

const IS_LOCKED: InjectionKey<Ref<boolean>> = Symbol('IS_LOCKED')

export function useLocked(selfLocked: Ref<boolean>) {
  const parentLocked = inject(IS_LOCKED, null)

  const locked = computed({
    get: () => parentLocked?.value || selfLocked.value,
    set: (val) => (selfLocked.value = val),
  })

  provide(IS_LOCKED, locked)

  return locked
}

export function useLeaf(props: LeafProps) {
  const adapter = getAdapter()
  const context = useRendererContext()
  const { getNode, designMode } = context
  const store = useLeafStore()

  const node = props.schema.id ? getNode(props.schema.id) : null

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

  // 仅在设计模式下生效
  const locked = node
    ? useLocked(
        computed({
          get: () => state.value.locked,
          set: (val) => (state.value.locked = val),
        }),
      )
    : ref(false)

  provide(currentNodeKey, {
    mode: designMode,
    node: node,
    isDesignerEnv: isDesignMode,
  } as CurrentNode)

  /**
   * 渲染节点 vnode，循环节点的每一项直接渲染为兄弟节点
   * @param schema - 节点 schema
   * @param blockScope - 节点块级作用域
   * @param comp - 节点渲染的组件，若不传入，则根据节点的 componentName 推断
   */
  const renderComp = (
    schema: IPublicTypeNodeData,
    blockScope?: MaybeArray<BlockScope | undefined | null>,
    comp?: VueComponent,
  ): VNode | VNode[] | null => {
    const mergedScope = mergeScope(props.scope, blockScope)

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
    const { hidden, condition, loop, loopArgs } = resolveState(nodeSchema)
    if (hidden) return null
    if (
      typeof condition === 'boolean'
        ? !condition
        : !parseSchema(condition, mergedScope)
    )
      return null

    const renderLeaf = (key: string | undefined, scope: RuntimeScope) =>
      adapter.h(Leaf, { key, comp, scope, schema: nodeSchema })

    if (!loop) return renderLeaf(baseKey, mergedScope)

    const items = parseSchema(loop, mergedScope)
    if (!Array.isArray(items)) {
      !isNil(items) && console.warn('[vue-renderer]: loop must be array', items)
      return null
    }

    const offset = mergedScope.__loopRefOffset ?? 0
    const [itemKey, indexKey] = loopArgs
    return items.map((item, index) =>
      renderLeaf(
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
   * @param blockScope - 当前块级作用域
   * @param prop - 属性对象，仅在 design 模式下有值
   */
  const buildProp = (
    schema: unknown,
    scope: RuntimeScope,
    blockScope?: BlockScope | null,
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
          vnodes.push(...ensureArray(renderComp(item, [blockScope, slotScope])))
        })
        return vnodes
      }
    } else if (Array.isArray(schema)) {
      // 属性值为 array，递归处理属性的每一项
      return schema.map((item, idx) =>
        buildProp(item, scope, blockScope, prop?.get(idx) as Prop | null),
      )
    } else if (schema && isObject(schema)) {
      // 属性值为 object，递归处理属性的每一项
      const res: Record<string, unknown> = {}
      Object.keys(schema).forEach((key) => {
        if (key.startsWith('__')) return
        const val = schema[key]
        const childProp = prop?.get(key) as Prop | null
        res[key] = buildProp(val, scope, blockScope, childProp)
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
   * @param blockScope - 当前块级作用域
   * @param prop - 属性对象，仅在 design 模式下有值
   */
  const buildRefProp = (
    schema: unknown,
    scope: RuntimeScope,
    blockScope?: BlockScope | null,
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
      const propValue = buildProp(schema, scope, blockScope, prop)
      return isString(propValue)
        ? buildRefProp(propValue, scope, blockScope, prop)
        : propValue
    }
  }

  /**
   * 处理属性 schema，主要处理的目标：
   * - ref 逻辑 (合并 ref function)
   * - 事件绑定逻辑 (重复注册的事件转化为数组)
   * - 双向绑定逻辑 (v-model)
   * - 指令绑定逻辑 TODO
   * @param target - 组件属性目标对象
   * @param key - 属性名
   * @param val - 属性值
   */
  const processProp = (
    target: Record<string, unknown>,
    key: string,
    val: unknown,
  ) => {
    if (key.startsWith('v-model')) {
      // 双向绑定逻辑
      const matched = key.match(/v-model(?::(\w+))?$/)
      if (!matched) return target

      let valueProp: string
      let eventProp: string
      if (matched[1]) {
        valueProp = lowerFirst(camelize(matched[1]))
        eventProp = `onUpdate:${valueProp}`
      } else {
        const model = adapter.modelOf(props.comp)
        valueProp = model.prop
        eventProp = `on${model.event[0].toUpperCase()}${model.event.slice(1)}`
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
    } else if (key.match(/^on[A-Z]/) && isJSFunction(val)) {
      // 事件绑定逻辑

      // normalize: onUpdateXxx => onUpdate:xxx
      const matched = key.match(/onUpdate(?::?(\w+))$/)
      if (matched) {
        key = `onUpdate:${lowerFirst(camelize(matched[1]))}`
      }

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
   * @param blockScope - 当前块级作用域
   * @param extraProps - 运行时附加属性
   */
  const buildProps = (
    propsSchema: Record<string, unknown>,
    blockScope?: BlockScope | null,
    extraProps?: Record<string, unknown>,
  ): Record<string, unknown> => {
    // 属性预处理
    const processed: Record<string, unknown> = {}
    Object.keys(propsSchema).forEach((propKey) => {
      processProp(processed, propKey, propsSchema[propKey])
    })

    // 将属性 schema 转化成真实的属性值
    const parsedProps: Record<string, unknown> = {}
    const mergedScope = blockScope
      ? mergeScope(props.scope, blockScope)
      : props.scope
    Object.keys(processed).forEach((propName) => {
      const schema = processed[propName]
      parsedProps[propName] =
        propName === 'ref'
          ? buildRefProp(
              schema,
              mergedScope,
              blockScope,
              node?.getProp(propName) as Prop | null,
            )
          : buildProp(
              schema,
              mergedScope,
              blockScope,
              node?.getProp(propName) as Prop | null,
            )
    })

    // 应用运行时附加的属性值
    if (extraProps) {
      Object.keys(extraProps).forEach((propKey) => {
        processProp(parsedProps, propKey, extraProps[propKey])
      })
    }
    return parsedProps
  }

  /**
   * 装饰默认插槽，当插槽为空时，渲染插槽占位符，便于拖拽
   *
   * @param slot - 插槽渲染函数
   */
  const decorateDefaultSlot = (slot: Slot): Slot => {
    return (...args: unknown[]) => {
      const vnodes = slot(...args)
      if (!vnodes.length) {
        const isLocked = locked.value
        const className = {
          'lc-container-locked': isLocked,
          'lc-container-placeholder': true,
        }
        const placeholder = isLocked
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
   * @param blockScope - 插槽块级作用域
   */
  const buildSlots = (
    slots: SlotSchemaMap,
    blockScope?: BlockScope | null,
  ): Slots => {
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
              ensureArray(renderComp(item, blockScope)),
            )
          }
        } else if (slotSchema!.id) {
          // 存在 slot id，则当前插槽可拖拽编辑，渲染 Hoc
          renderSlot = (...args: unknown[]) => {
            return ensureArray(
              renderComp(slotSchema!, [
                blockScope,
                parseSlotScope(args, slotSchema!.params ?? []),
              ]),
            )
          }
        } else {
          // 不存在 slot id，插槽不可拖拽编辑，直接渲染插槽内容
          renderSlot = (...args: unknown[]) => {
            const slotScope = parseSlotScope(args, slotSchema!.params ?? [])
            return ensureArray(slotSchema!.children).flatMap((item) =>
              ensureArray(renderComp(item, [blockScope, slotScope])),
            )
          }
        }

        prev[next] =
          isDefaultSlot && isDesignMode && node?.isContainer()
            ? decorateDefaultSlot(renderSlot) // 当节点为容器节点，且为设计模式下，则装饰默认插槽
            : renderSlot

        return prev
      },
      {} as Record<string, Slot>,
    )
  }

  return {
    node,
    locked,
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

  provide(
    contextKey,
    reactive({
      designMode: designModeRef,
      components: componentsRef,
      getNode: (id: string) => props.__getNode?.(id) ?? null,
      triggerCompGetCtx: computed(() => props.__triggerCompGetCtx),
    }),
  )

  return {
    scope,
    bindings,
    ready,
    scopeVersion,
    designModeRef,
    componentsRef,
    ...useLeaf(leafProps),
  }
}
