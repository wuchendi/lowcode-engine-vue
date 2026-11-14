import type {
  BuiltinSimulatorHost,
  BuiltinSimulatorRenderer,
  DocumentModel,
} from '@alilc/lowcode-designer'
import type { IPublicTypeComponentSchema } from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import type { Ref } from 'vue'
import {
  computed,
  defineComponent,
  markRaw,
  reactive,
  ref,
  shallowRef,
} from 'vue'
import type { VueComponent } from '../adapter'
import { getAdapter, getRouterAdapter } from '../adapter'
import type { ComponentsMapItem } from '../renderer'
import {
  buildComponents,
  buildUtils,
  declaredOptions,
  getSubComponent,
  Renderer,
  rendererConfig,
} from '../renderer'
import { AssetLoader } from '../shared'
import { Leaf, Page, Slot } from './builtin-components'
import { getHost } from './host'
import type {
  ComponentInstance,
  DocumentInstance,
  SimulatorViewLayout,
  VueSimulatorRenderer,
} from './interface'
import { DocumentView, SimulatorRendererView } from './simulator-view'
import type { CompRootHTMLElement } from './utils'
import {
  ComponentRecord,
  cursor,
  deepMerge,
  getClientRects,
  getClosestNodeInstance,
  getClosestNodeInstanceByComponent,
  getCompRootData,
  installNativeSelectionGuard,
  isComponentRecord,
  setCompRootData,
  setNativeSelection,
} from './utils'

const builtinComponents = { Slot, Leaf, Page }

export interface ProjectContext {
  i18n: Record<string, object>
  appHelper: {
    utils?: Record<string, unknown>
    constants?: Record<string, unknown>
    [x: string]: unknown
  }
}

export function createDocumentInstance(
  document: DocumentModel,
  context: ProjectContext,
  host: BuiltinSimulatorHost,
): DocumentInstance {
  /** 记录单个节点的组件实例列表 */
  const instancesMap = new Map<string, ComponentInstance[]>()
  /** 记录 vue 组件实例和组件 uid 的映射关系 */
  const vueInstanceMap = new Map<number, ComponentInstance>()

  const timestamp = ref(Date.now())

  const schema = computed(() => {
    // depend on timestamp so that rerender() re-exports the document
    void timestamp.value
    return (
      document.export(IPublicEnumTransformStage.Render) ?? {
        fileName: '/',
        componentName: 'Page',
      }
    )
  })

  const adapter = getAdapter()
  const checkInstanceAlive = (instance: ComponentInstance): boolean =>
    adapter.isAlive(instance)

  const setHostInstance = (
    docId: string,
    nodeId: string,
    instances: ComponentInstance[] | null,
  ) => {
    const instanceRecords = !instances
      ? null
      : instances.map(
          (inst) =>
            new ComponentRecord(docId, nodeId, adapter.instanceId(inst)),
        )
    host.setInstance(docId, nodeId, instanceRecords)
  }

  const getComponentInstance = (id: number) => {
    return vueInstanceMap.get(id)
  }

  const mountInstance = (id: string, instance: ComponentInstance | null) => {
    const docId = document.id
    if (instance == null) {
      let instances = instancesMap.get(id)
      if (instances) {
        for (const dead of instances.filter((i) => !checkInstanceAlive(i))) {
          vueInstanceMap.delete(adapter.instanceId(dead))
        }
        instances = instances.filter(checkInstanceAlive)
        if (instances.length > 0) {
          instancesMap.set(id, instances)
          setHostInstance(docId, id, instances)
        } else {
          instancesMap.delete(id)
          setHostInstance(docId, id, null)
        }
      }
      return
    }

    const el = instance.$el as CompRootHTMLElement | null
    if (!el) return

    const origId = getCompRootData(el).nodeId
    if (origId && origId !== id) {
      // An instance of another node is reused here: unregister it there
      unmountInstance(origId, instance)
    }

    setCompRootData(el, {
      nodeId: id,
      docId: docId,
      instance: instance,
    })
    let instances = instancesMap.get(id)
    if (instances) {
      const l = instances.length
      instances = instances.filter(checkInstanceAlive)
      let updated = instances.length !== l
      if (!instances.includes(instance)) {
        instances.push(instance)
        updated = true
      }
      if (!updated) return
    } else {
      instances = [instance]
    }
    vueInstanceMap.set(adapter.instanceId(instance), instance)
    instancesMap.set(id, instances)
    setHostInstance(docId, id, instances)
  }

  const unmountInstance = (id: string, instance: ComponentInstance) => {
    const instances = instancesMap.get(id)
    if (instances) {
      const i = instances.indexOf(instance)
      if (i > -1) {
        const [instance] = instances.splice(i, 1)
        vueInstanceMap.delete(adapter.instanceId(instance))
        setHostInstance(document.id, id, instances)
      }
    }
  }

  const getNode: DocumentInstance['getNode'] = (id) => {
    return id ? document.getNode(id) : null
  }

  return reactive({
    id: computed(() => document.id),
    path: computed(() => {
      const { fileName } = document
      return fileName.startsWith('/') ? fileName : `/${fileName}`
    }),
    key: computed(() => `${document.id}:${timestamp.value}`),
    scope: computed(() => {
      const _schema = schema.value

      const {
        utils: utilsInContext,
        constants: constantsInContext,
        ...otherHelpers
      } = context.appHelper

      return {
        utils: {
          ...utilsInContext,
          ...buildUtils(host.libraryMap, Reflect.get(_schema, 'utils') ?? []),
        },
        constants: {
          ...constantsInContext,
          ...Reflect.get(_schema, 'constants'),
        },
        ...otherHelpers,
      }
    }),
    schema: schema,
    document: computed(() => document),
    messages: computed(() =>
      deepMerge(context.i18n, Reflect.get(schema.value, 'i18n')),
    ),
    instancesMap: computed(() => instancesMap),
    getNode,
    mountInstance,
    unmountInstance,
    getComponentInstance,
    rerender: () => {
      timestamp.value = Date.now()
    },
  }) as DocumentInstance
}

/** Query parameters of the designer page, readable through `$route.query`. */
function getDesignerQuery(): Record<string, string> {
  const params = new URLSearchParams(window.parent.location.search)
  return Object.fromEntries(params.entries())
}

export function createSimulatorRenderer(
  host: BuiltinSimulatorHost = getHost(),
): VueSimulatorRenderer {
  const adapter = getAdapter()
  const loader = new AssetLoader()
  const layout: Ref<SimulatorViewLayout> = shallowRef({})
  const device: Ref<string> = shallowRef('default')
  const locale: Ref<string | undefined> = shallowRef()
  const autoRender = shallowRef(host.autoRender)
  const designMode: Ref<string> = shallowRef('design')
  const libraryMap: Ref<Record<string, string>> = shallowRef({})
  const components: Ref<Record<string, VueComponent>> = shallowRef({})
  const componentsMap: Ref<Record<string, ComponentsMapItem>> = shallowRef({})
  const requestHandlersMap: Ref<Record<string, CallableFunction>> = shallowRef(
    {},
  )
  const documentInstances: Ref<DocumentInstance[]> = shallowRef([])

  const context: ProjectContext = reactive({
    i18n: {},
    appHelper: {
      utils: {},
      constants: {},
    },
  })

  const disposeFunctions: Array<() => void> = []
  disposeFunctions.push(installNativeSelectionGuard())

  const documentInstanceMap = new Map<string, DocumentInstance>()

  function _buildComponents() {
    components.value = {
      ...builtinComponents,
      ...buildComponents(
        libraryMap.value,
        componentsMap.value,
        simulator.createComponent,
      ),
    }
  }

  const router = getRouterAdapter().createMemoryRouter()
  disposeFunctions.push(
    router.guard({
      query: getDesignerQuery,
      onBlocked: () => console.warn('编辑态不允许路由跳转'),
    }),
  )

  const simulator = reactive({
    config: markRaw(rendererConfig),
    router: markRaw(router),
    app: null,
    layout,
    device,
    locale,
    designMode,
    libraryMap,
    components,
    autoRender,
    componentsMap,
    documentInstances,
    requestHandlersMap,
    isSimulatorRenderer: true,
  }) as unknown as VueSimulatorRenderer

  simulator.getComponent = (componentName) => {
    const paths = componentName.split('.')
    const subs: string[] = []
    while (paths.length > 0) {
      const component = components.value[componentName]
      if (component) {
        return getSubComponent(component, subs)
      }
      const sub = paths.pop()
      if (!sub) break
      subs.unshift(sub)
      componentName = paths.join('.')
    }
    return null
  }

  simulator.getClosestNodeInstance = (el, specId) => {
    if (isComponentRecord(el)) {
      const { cid, did } = el
      const documentInstance = documentInstanceMap.get(did)
      const instance = documentInstance?.getComponentInstance(cid) ?? null
      return instance && getClosestNodeInstanceByComponent(instance, specId)
    }
    return getClosestNodeInstance(el as Element, specId)
  }

  simulator.findDOMNodes = (instance: ComponentRecord) => {
    if (instance) {
      const { did, cid } = instance
      const documentInstance = documentInstanceMap.get(did)
      const compInst = documentInstance?.getComponentInstance(cid)
      return compInst ? adapter.domNodesOf(compInst) : null
    }
    return null
  }

  simulator.getClientRects = (element) => getClientRects(element)
  simulator.setNativeSelection = (enable) => setNativeSelection(enable)
  simulator.setDraggingState = (state) => cursor.setDragging(state)
  simulator.setCopyState = (state) => cursor.setCopy(state)
  simulator.clearState = () => cursor.release()

  /**
   * A low-code component: renders its schema with the current components.
   * It declares the schema's props (so Vue 2 passes object values) and
   * forwards props, other attributes and listeners to the renderer, whose
   * schema component declares the props and emits.
   */
  simulator.createComponent = (schema: IPublicTypeComponentSchema) => {
    const { props: declared } = declaredOptions(schema)
    return markRaw(
      defineComponent({
        name: schema.fileName || schema.componentName,
        inheritAttrs: false,
        props: Object.keys(declared),
        setup(props, setupContext) {
          return () =>
            adapter.h(Renderer, {
              ...setupContext.attrs,
              ...listenersOf(setupContext),
              schema,
              components: components.value,
              designMode: 'live',
              device: device.value,
              locale: locale.value,
              messages: context.i18n,
              props: { ...props },
            })
        },
      }),
    )
  }

  // Incremental assets: the host loads a library, then refreshes the metas
  simulator.load = (asset) => loader.load(asset)
  simulator.loadAsyncLibrary = async (asyncLibraryMap) => {
    await loader.loadAsyncLibrary(asyncLibraryMap)
    _buildComponents()
  }

  simulator.rerender = () => {
    for (const doc of documentInstances.value) doc.rerender()
  }
  simulator.dispose = () => {
    simulator.app?.unmount()
    for (const fn of disposeFunctions) fn()
  }
  simulator.getCurrentDocument = () => {
    const crr = host.project.currentDocument
    const docs = documentInstances.value
    return crr ? docs.find((doc) => doc.id === crr.id) : undefined
  }

  simulator.run = () => {
    if (simulator.app) return
    const containerId = 'app'
    let container = document.getElementById(containerId)
    if (!container) {
      container = document.createElement('div')
      document.body.appendChild(container)
      container.id = containerId
    }
    document.documentElement.classList.add('engine-page')
    document.body.classList.add('engine-document')
    simulator.app = markRaw(
      adapter.mount(SimulatorRendererView, { simulator }, container, router),
    )
    host.project.setRendererReady(
      simulator as unknown as BuiltinSimulatorRenderer,
    )
  }

  disposeFunctions.push(
    // The host is typed for React components; see VueSimulatorRenderer.
    host.connect(simulator as unknown as BuiltinSimulatorRenderer, () => {
      layout.value = host.project.get('config')?.layout ?? {}

      if (
        libraryMap.value !== host.libraryMap ||
        componentsMap.value !== host.designer.componentsMap
      ) {
        libraryMap.value = host.libraryMap || {}
        componentsMap.value = host.designer.componentsMap as Record<
          string,
          ComponentsMapItem
        >
        _buildComponents()
      }

      locale.value = host.locale
      device.value = host.device
      designMode.value = host.designMode
      requestHandlersMap.value = host.requestHandlersMap
    }),
  )

  disposeFunctions.push(
    host.autorun(() => {
      const liveIds = new Set(host.project.documents.map((doc) => doc.id))
      for (const id of [...documentInstanceMap.keys()]) {
        if (!liveIds.has(id)) {
          documentInstanceMap.delete(id)
          router.removeRoute(id)
        }
      }

      documentInstances.value = host.project.documents.map((doc) => {
        let documentInstance = documentInstanceMap.get(doc.id)
        if (!documentInstance) {
          const created = createDocumentInstance(doc, context, host)
          documentInstance = created
          documentInstanceMap.set(doc.id, created)
          router.addRoute({
            name: created.id,
            path: created.path,
            component: DocumentView,
            props: () => ({ documentInstance: created, simulator }),
          })
        }
        return documentInstance
      })

      const inst = simulator.getCurrentDocument()
      if (inst && inst.id !== router.currentRouteName) {
        router.replace(inst.id)
      }
    }),
  )

  host.componentsConsumer.consume(async (componentsAsset) => {
    if (componentsAsset) {
      await loader.load(componentsAsset)
      _buildComponents()
    }
  })

  host.injectionConsumer.consume((data) => {
    if (data.appHelper) {
      const { utils, constants, ...others } = data.appHelper
      Object.assign(context.appHelper, {
        utils: Array.isArray(utils)
          ? buildUtils(host.libraryMap, utils)
          : (utils ?? {}),
        constants: constants ?? {},
        ...others,
      })
    }
    context.i18n = data.i18n ?? {}
  })

  return simulator
}

/** Listeners of a setup context as `onXxx` props (Vue 2 keeps them apart). */
function listenersOf(context: object): Record<string, unknown> {
  const listeners = ((context as { listeners?: unknown }).listeners ??
    {}) as Record<string, unknown>
  return Object.fromEntries(
    Object.entries(listeners).map(([name, handler]) => [
      `on${name[0].toUpperCase()}${name.slice(1)}`,
      handler,
    ]),
  )
}
