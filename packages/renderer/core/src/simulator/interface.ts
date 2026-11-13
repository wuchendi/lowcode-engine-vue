import type {
  BuiltinSimulatorRenderer,
  DocumentModel,
  Node,
} from '@alilc/lowcode-designer'
import type {
  IPublicTypeComponentSchema,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import type {
  ComponentInstance,
  MemoryRouter,
  MountedApp,
  VueComponent,
} from '../adapter'
import type { ComponentsMapItem, RendererConfig } from '../renderer'
import type { I18nMessages } from '../shared'

export type { ComponentInstance }

export interface SimulatorViewLayout {
  Component?: VueComponent
  componentName?: string
  props?: Record<string, unknown>
}

// The designer types `createComponent` and `getComponent` with React
// components; this simulator works with Vue components, so both members are
// redeclared with Vue types.
export interface VueSimulatorRenderer
  extends Omit<BuiltinSimulatorRenderer, 'createComponent' | 'getComponent'> {
  createComponent(schema: IPublicTypeComponentSchema): VueComponent | null
  getComponent(componentName: string): VueComponent | null
  app: MountedApp | null
  config: RendererConfig
  router: MemoryRouter
  layout: SimulatorViewLayout
  device: string
  locale: string | undefined
  designMode: string
  libraryMap: Record<string, string>
  components: Record<string, VueComponent>
  autoRender: boolean
  componentsMap: Record<string, ComponentsMapItem>
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
  mountInstance(id: string, instance: ComponentInstance | null): void
  unmountInstance(id: string, instance: ComponentInstance): void
  rerender(): void
  getNode(id: string): Node | null
}
