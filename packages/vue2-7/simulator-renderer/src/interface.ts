import type {
  BuiltinSimulatorRenderer,
  DocumentModel,
  Node,
} from '@alilc/lowcode-designer'
import type {
  IPublicTypeComponentSchema,
  IPublicTypeNpmInfo,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import type { Config, I18nMessages } from '@cdlab996/lowcode-vue-renderer2.7'
import type Vue from 'vue'
import type { Component, ComponentPublicInstance } from 'vue'
import type Router from 'vue-router'

export type MinxedComponent =
  | IPublicTypeNpmInfo
  | Component
  | IPublicTypeComponentSchema

/**
 * A Vue 2 component instance. `_uid` and `_isDestroyed` are Vue 2 internals
 * that the public typings omit; the simulator uses them to identify and
 * track instances.
 */
export type ComponentInstance = ComponentPublicInstance & {
  readonly _uid: number
  readonly _isDestroyed: boolean
}

export interface SimulatorViewLayout {
  Component?: Component
  componentName?: string
  props?: Record<string, unknown>
}

// The designer types `createComponent` and `getComponent` with React
// components; this simulator works with Vue components, so both members are
// redeclared with Vue types.
export interface VueSimulatorRenderer
  extends Omit<BuiltinSimulatorRenderer, 'createComponent' | 'getComponent'> {
  createComponent(schema: IPublicTypeComponentSchema): Component | null
  getComponent(componentName: string): Component | null
  app: Vue
  config: Config
  router: Router
  layout: SimulatorViewLayout
  device: string
  locale: string
  designMode: 'design'
  libraryMap: Record<string, string>
  components: Record<string, Component>
  autoRender: boolean
  componentsMap: Record<string, MinxedComponent>
  documentInstances: DocumentInstance[]
  requestHandlersMap: Record<string, CallableFunction>
  dispose(): void
  rerender(): void
  getCurrentDocument(): DocumentInstance | undefined
}

export interface DocumentInstance {
  readonly id: string
  readonly key: string
  readonly path: string
  readonly scope: Record<string, unknown>
  readonly document: DocumentModel
  readonly instancesMap: Map<string, ComponentInstance[]>
  readonly schema: IPublicTypeRootSchema
  readonly messages: I18nMessages
  getComponentInstance(id: number): ComponentInstance | null
  mountInstance(id: string, instance: ComponentInstance): (() => void) | void
  unmountIntance(id: string, instance: ComponentInstance): void
  rerender(): void
  getNode(id: string): Node | null
}
