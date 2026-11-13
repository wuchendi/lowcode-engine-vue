import type { Node } from '@alilc/lowcode-designer'
import type {
  IPublicTypeNodeSchema,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import type { Component, ComponentPublicInstance, PropType } from 'vue'
import { computed, defineComponent, h } from 'vue'
import config from './config'
import type { RendererComponent } from './core'
import type { RequestHandlersMap } from './data-source'
import { RENDERER_COMPS } from './renderers'
import type { BlockScope, I18nMessages } from './utils'

interface RendererProps {
  scope?: BlockScope
  schema: IPublicTypeRootSchema
  components: Record<string, Component>
  designMode?: 'live' | 'design'
  device?: string
  locale?: string
  messages?: I18nMessages
  getNode?: (id: string) => Node<IPublicTypeNodeSchema> | null
  onCompGetCtx?: (
    schema: IPublicTypeNodeSchema,
    ref: ComponentPublicInstance,
  ) => void
  requestHandlersMap?: RequestHandlersMap
}

// A page-level renderer component is tagged with `__renderer__`.
type RendererCandidate = (Component | RendererComponent) & {
  __renderer__?: boolean
}

const rendererProps = {
  scope: {
    type: Object as PropType<BlockScope>,
    default: undefined,
  },
  schema: {
    type: Object as PropType<IPublicTypeRootSchema>,
    required: true,
  },
  components: {
    type: Object as PropType<Record<string, Component>>,
    required: true,
  },
  /** 设计模式，可选值：live、design */
  designMode: {
    type: String as PropType<'live' | 'design'>,
    default: 'live',
  },
  /** 设备信息 */
  device: {
    type: String,
    default: undefined,
  },
  /** 语言 */
  locale: {
    type: String,
    default: undefined,
  },
  messages: {
    type: Object as PropType<I18nMessages>,
    default: () => ({}),
  },
  getNode: {
    type: Function as PropType<
      (id: string) => Node<IPublicTypeNodeSchema> | null
    >,
    default: undefined,
  },
  /** 组件获取 ref 时触发的钩子 */
  onCompGetCtx: {
    type: Function as PropType<
      (schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void
    >,
    default: undefined,
  },
  requestHandlersMap: {
    type: Object as PropType<RequestHandlersMap>,
    default: undefined,
  },
}

const Renderer = defineComponent({
  name: 'LowCodeRenderer',
  props: rendererProps,
  setup(props) {
    const triggerCompGetCtx = (
      schema: IPublicTypeNodeSchema,
      val: ComponentPublicInstance,
    ) => {
      val && props.onCompGetCtx?.(schema, val)
    }

    const getNode = (id: string) => props.getNode?.(id) ?? null
    for (const prop in props.components) {
      const comp = props.components[prop] as Component & {
        extendOptions?: Component
      }
      if (typeof comp === 'function' && comp.extendOptions) {
        props.components[prop] = comp.extendOptions
      }
    }
    const componentsRef = computed(() => ({
      ...config.getRenderers(),
      ...props.components,
    }))

    const renderContent = () => {
      const { value: components } = componentsRef
      const { schema, scope, locale, messages, designMode } = props
      if (!schema) return null

      const { componentName } = schema!
      let Comp: RendererCandidate | undefined =
        components[componentName] || components[`${componentName}Renderer`]
      if (Comp && !Comp.__renderer__) {
        Comp = RENDERER_COMPS[`${componentName}Renderer`]
      }

      return Comp
        ? h(Comp as Component, {
            key: schema.__ctx
              ? `${schema.__ctx.lceKey}_${schema.__ctx.idx || '0'}`
              : schema.id,
            props: {
              __scope: scope,
              __schema: schema,
              __locale: locale,
              __messages: messages,
              __components: components,
              __designMode: designMode,
              __getNode: getNode,
              __triggerCompGetCtx: triggerCompGetCtx,
              __requestHandlersMap: props.requestHandlersMap,
            },
          })
        : null
    }

    return () => {
      const { device, locale } = props
      const configProvider = config.getConfigProvider()
      return configProvider
        ? h(configProvider, { props: { device, locale } }, [renderContent()])
        : renderContent()
    }
  },
}) as new (
  ...args: any[]
) => { $props: RendererProps }

export type { BlockScope, I18nMessages, RendererProps }
export { Renderer }
