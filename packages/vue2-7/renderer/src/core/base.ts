import type { Node } from '@alilc/lowcode-designer'
import type {
  IPublicTypeNodeSchema,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import type { Component, ComponentPublicInstance, PropType } from 'vue'
import type { VNodeRef } from 'vue/types/vnode'
import type { RequestHandlersMap } from '../data-source'
import type { BlockScope, I18nMessages, RuntimeScope } from '../utils'

export declare type VNodeProps = {
  key?: string | number | symbol
  ref?: VNodeRef
  ref_for?: boolean
  ref_key?: string
  // onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];
  // onVnodeMounted?: VNodeMountHook | VNodeMountHook[];
  // onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];
  // onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];
  // onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];
  // onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];
}

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
    type: Object as PropType<Record<string, Component>>,
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
      (schema: IPublicTypeNodeSchema, ref: ComponentPublicInstance) => void
    >,
    required: true,
  },
  __requestHandlersMap: {
    type: Object as PropType<RequestHandlersMap>,
    default: undefined,
  },
} as const

export interface RendererProps {
  __scope?: BlockScope
  __locale?: string
  __messages?: I18nMessages
  __designMode?: 'live' | 'design'
  __schema: IPublicTypeRootSchema
  __components: Record<string, Component>
  __getNode: (id: string) => Node<IPublicTypeNodeSchema> | null
  __triggerCompGetCtx: (
    schema: IPublicTypeNodeSchema,
    ref: ComponentPublicInstance,
  ) => void
  __requestHandlersMap?: RequestHandlersMap
}

export const baseRendererPropKeys = Object.keys(
  rendererProps,
) as (keyof RendererProps)[]

export type RendererComponent = {
  new (
    ...args: any[]
  ): {
    $props: VNodeProps & RendererProps
  }
}

export const leafProps = {
  comp: {
    type: Object as PropType<Component | null>,
    default: undefined,
  },
  scope: {
    type: Object as PropType<RuntimeScope>,
    default: () => ({}),
  },
  schema: {
    type: Object as PropType<IPublicTypeNodeSchema>,
    default: () => ({}),
  },
} as const

export interface LeafProps {
  comp?: Component | null
  scope: RuntimeScope
  schema: IPublicTypeNodeSchema
}

export const leafPropKeys = Object.keys(rendererProps) as (keyof LeafProps)[]

export type LeafComponent = {
  new (
    ...args: any[]
  ): {
    $props: VNodeProps & LeafProps
  }
}
