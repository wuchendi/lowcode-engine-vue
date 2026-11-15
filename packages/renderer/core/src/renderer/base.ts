import type { Node } from '@alilc/lowcode-designer'
import type {
  IPublicTypeNodeSchema,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import type { PropType } from 'vue'
import type { ComponentInstance, VueComponent } from '../adapter'
import type { BlockScope, I18nMessages } from '../shared'
import type { RequestHandlersMap } from './data-source'
import type { RuntimeScope } from './scope'

export const rendererProps = {
  __scope: {
    type: Object as PropType<BlockScope>,
    default: undefined,
  },
  __schema: {
    type: Object as PropType<IPublicTypeRootSchema>,
    required: true,
  },
  __designMode: {
    type: String as PropType<'live' | 'design'>,
    default: 'live',
  },
  __components: {
    type: Object as PropType<Record<string, VueComponent>>,
    required: true,
  },
  __locale: {
    type: String,
    default: undefined,
  },
  __messages: {
    type: Object as PropType<I18nMessages>,
    default: () => ({}),
  },
  __getNode: {
    type: Function as PropType<
      (id: string) => Node<IPublicTypeNodeSchema> | null
    >,
    required: true,
  },
  __triggerCompGetCtx: {
    type: Function as PropType<
      (
        schema: IPublicTypeNodeSchema,
        instance: ComponentInstance | null,
      ) => void
    >,
    required: true,
  },
  __requestHandlersMap: {
    type: Object as PropType<RequestHandlersMap>,
    default: undefined,
  },
  __onRuntimeScope: {
    type: Function as PropType<(scope: RuntimeScope) => void>,
    default: undefined,
  },
} as const

export interface RendererProps {
  __scope?: BlockScope
  __locale?: string
  __messages?: I18nMessages
  __designMode?: 'live' | 'design'
  __schema: IPublicTypeRootSchema
  __components: Record<string, VueComponent>
  __getNode: (id: string) => Node<IPublicTypeNodeSchema> | null
  __triggerCompGetCtx: (
    schema: IPublicTypeNodeSchema,
    instance: ComponentInstance | null,
  ) => void
  __requestHandlersMap?: RequestHandlersMap
  __onRuntimeScope?: (scope: RuntimeScope) => void
}

export type RendererComponent = {
  new (
    ...args: any[]
  ): {
    $props: RendererProps
  }
}

/** The root node a renderer renders and its scope. */
export interface LeafProps {
  comp?: VueComponent | null
  scope: RuntimeScope
  schema: IPublicTypeNodeSchema
}
