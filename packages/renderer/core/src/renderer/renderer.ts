import type { Node } from '@alilc/lowcode-designer'
import type {
  IPublicTypeNodeSchema,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import type { ComponentInstance, VueComponent } from '../adapter'
import { getAdapter } from '../adapter'
import type { BlockScope, I18nMessages } from '../shared'
import type { RendererComponent } from './base'
import { rendererConfig } from './config'
import type { RequestHandlersMap } from './data-source'
import { RENDERER_COMPS } from './renderers'
import { listenersAsProps, schemaComponent } from './schema-component'
import type { RuntimeScope } from './scope'

export interface RendererProps {
  /** Extra scope variables (e.g. `utils`, `constants`). */
  scope?: BlockScope
  schema: IPublicTypeRootSchema
  components: Record<string, VueComponent>
  designMode?: 'live' | 'design'
  device?: string
  locale?: string
  messages?: I18nMessages
  /** Values of the props the schema declares with `initProps`. */
  props?: Record<string, unknown>
  getNode?: (id: string) => Node<IPublicTypeNodeSchema> | null
  onCompGetCtx?: (
    schema: IPublicTypeNodeSchema,
    instance: ComponentInstance | null,
  ) => void
  requestHandlersMap?: RequestHandlersMap
  /** Receives the runtime scope (`this`) of the rendered schema. */
  onRuntimeScope?: (scope: RuntimeScope) => void
}

// A container renderer component is tagged with `__renderer__`.
type RendererCandidate = VueComponent & { __renderer__?: boolean }

const props = {
  scope: { type: Object as PropType<BlockScope>, default: undefined },
  schema: { type: Object as PropType<IPublicTypeRootSchema>, required: true },
  components: {
    type: Object as PropType<Record<string, VueComponent>>,
    required: true,
  },
  designMode: {
    type: String as PropType<'live' | 'design'>,
    default: 'live',
  },
  device: { type: String, default: undefined },
  locale: { type: String, default: undefined },
  messages: { type: Object as PropType<I18nMessages>, default: () => ({}) },
  props: {
    type: Object as PropType<Record<string, unknown>>,
    default: undefined,
  },
  getNode: {
    type: Function as PropType<RendererProps['getNode']>,
    default: undefined,
  },
  onCompGetCtx: {
    type: Function as PropType<RendererProps['onCompGetCtx']>,
    default: undefined,
  },
  requestHandlersMap: {
    type: Object as PropType<RequestHandlersMap>,
    default: undefined,
  },
  onRuntimeScope: {
    type: Function as PropType<RendererProps['onRuntimeScope']>,
    default: undefined,
  },
}

/**
 * Renders a LowCode Engine container schema (Page, Block, Component) with
 * the given components.
 */
export const Renderer = defineComponent({
  name: 'LowCodeRenderer',
  // Attributes and listeners go to the schema's root component explicitly
  inheritAttrs: false,
  props,
  setup(rawProps, context) {
    const props = rawProps as unknown as RendererProps
    const adapter = getAdapter()

    const getNode = (id: string) => props.getNode?.(id) ?? null
    const triggerCompGetCtx = (
      schema: IPublicTypeNodeSchema,
      instance: ComponentInstance | null,
    ) => props.onCompGetCtx?.(schema, instance)

    const componentsRef = computed(() => {
      const components: Record<string, VueComponent> = {
        ...rendererConfig.getRenderers(),
      }
      for (const [name, comp] of Object.entries(props.components)) {
        components[name] = adapter.normalizeComponent(comp)
      }
      return components
    })

    const renderContent = () => {
      const components = componentsRef.value
      const { schema } = props
      if (!schema) return null

      const { componentName } = schema
      let Comp: RendererCandidate | undefined =
        components[componentName] || components[`${componentName}Renderer`]
      if (Comp && !Comp.__renderer__) {
        Comp = RENDERER_COMPS[`${componentName}Renderer`] as RendererCandidate
      }
      if (!Comp) return null

      return adapter.h(schemaComponent(Comp, schema), {
        ...context.attrs,
        ...listenersAsProps(context),
        ...props.props,
        key: schema.__ctx
          ? `${schema.__ctx.lceKey}_${schema.__ctx.idx || '0'}`
          : schema.id,
        __scope: props.scope,
        __schema: schema,
        __locale: props.locale,
        __messages: props.messages,
        __components: components,
        __designMode: props.designMode,
        __getNode: getNode,
        __triggerCompGetCtx: triggerCompGetCtx,
        __requestHandlersMap: props.requestHandlersMap,
        __onRuntimeScope: props.onRuntimeScope,
      })
    }

    return () => {
      const configProvider = rendererConfig.getConfigProvider()
      return configProvider
        ? adapter.h(
            configProvider,
            { device: props.device, locale: props.locale },
            { default: () => [renderContent()].filter(Boolean) as object[] },
          )
        : renderContent()
    }
  },
}) as unknown as RendererComponent & VueComponent
