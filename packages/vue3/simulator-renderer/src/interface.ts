import type {
  IPublicTypeComponentSchema as ComponentSchema,
  IPublicModelDocumentModel as IDocumentModel,
  IPublicModelNode as INode,
  IPublicTypeSimulatorRenderer,
  IPublicTypeNodeInstance as NodeInstance,
  IPublicTypeNpmInfo as NpmInfo,
  IPublicTypeRootSchema as RootSchema,
} from '@alilc/lowcode-types'
import type { DesignMode } from '@cdlab996/lowcode-hooks'
import type { Config, I18nMessages } from '@cdlab996/lowcode-vue-renderer'
import type { App, Component, ComponentPublicInstance } from 'vue'
import type { Router } from 'vue-router'

export type MixedComponent = NpmInfo | Component | ComponentSchema

export type ComponentInstance = ComponentPublicInstance

export interface ComponentRecord {
  did: string
  nid: string
  cid: number
}

export interface SimulatorViewLayout {
  Component?: Component
  componentName?: string
  props?: Record<string, unknown>
}

export interface DocumentInstance {
  readonly id: string
  readonly key: string
  readonly path: string
  readonly scope: Record<string, unknown>
  readonly document: IDocumentModel
  readonly instancesMap: Map<string, ComponentInstance[]>
  readonly schema: RootSchema
  readonly messages: I18nMessages
  readonly appHelper: Record<string, unknown>
  getComponentInstance(id: number): ComponentInstance | null
  mountInstance(
    id: string,
    instance: ComponentInstance | HTMLElement,
  ): (() => void) | void
  unmountInstance(id: string, instance: ComponentInstance): void
  rerender(): void
  getNode(id: string): INode | null
}

export interface VueSimulatorRenderer
  extends IPublicTypeSimulatorRenderer<ComponentInstance, ComponentRecord> {
  app: App
  config: Config
  router: Router
  layout: SimulatorViewLayout
  device: string
  locale: string
  designMode: DesignMode
  libraryMap: Record<string, string>
  thisRequiredInJSE: boolean
  autoRender: boolean
  componentsMap: Record<string, MixedComponent>
  disableCompMock: boolean | string[]
  documentInstances: DocumentInstance[]
  requestHandlersMap: Record<string, CallableFunction>
  dispose(): void
  getCurrentDocument(): DocumentInstance | null
  getClosestNodeInstance(
    from: ComponentRecord | Element,
    nodeId?: string,
  ): NodeInstance<ComponentRecord> | null
}
