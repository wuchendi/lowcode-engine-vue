import type {
  BuiltinSimulatorHost,
  BuiltinSimulatorRenderer,
  DocumentModel,
} from '@alilc/lowcode-designer'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import {
  AssetLoader,
  buildComponents,
  buildUtils,
  getSubComponent,
} from '@cdlab996/lowcode-utils2.7'
import { config } from '@cdlab996/lowcode-vue-renderer2.7'
import type { Component, Ref } from 'vue'
import Vue, {
  computed,
  markRaw,
  reactive,
  // createApp,
  ref,
  shallowRef,
} from 'vue'
import VueRouter from 'vue-router'
import { Leaf, Page, Slot } from './buildin-components'
import { getHost } from './host'
import type {
  ComponentInstance,
  DocumentInstance,
  MinxedComponent,
  SimulatorViewLayout,
  VueSimulatorRenderer,
} from './interface'
import { Renderer, SimulatorRendererView } from './simulator-view'
import type { CompRootHTMLElement } from './utils'
import {
  ComponentRecord,
  cursor,
  deepMerge,
  findDOMNodes,
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

  /** node id each instance is currently registered under */
  const instanceNodeIds = new WeakMap<ComponentInstance, string>()

  const checkInstanceAlive = (instance: ComponentInstance): boolean => {
    return !instance._isDestroyed
  }

  const setHostInstance = (
    docId: string,
    nodeId: string,
    instances: ComponentInstance[] | null,
  ) => {
    const instanceRecords = !instances
      ? null
      : instances.map((inst) => new ComponentRecord(docId, nodeId, inst._uid))
    host.setInstance(docId, nodeId, instanceRecords)
  }

  const getComponentInstance = (id: number) => {
    return vueInstanceMap.get(id)
  }

  const mountInstance = (id: string, instance: ComponentInstance) => {
    const docId = document.id
    if (instance == null) {
      let instances = instancesMap.get(id)
      if (instances) {
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

    const el = instance.$el as CompRootHTMLElement

    const origId = getCompRootData(el).nodeId
    if (origId && origId !== id) {
      // 另外一个节点的 instance 在此被复用了，需要从原来地方卸载
      unmountIntance(origId, instance)
    }

    if (!instanceNodeIds.has(instance)) {
      // register the cleanup once; the node id may change on reuse
      instance.$once('hook:destroyed', () => {
        const nodeId = instanceNodeIds.get(instance)
        if (nodeId) unmountIntance(nodeId, instance)
      })
    }
    instanceNodeIds.set(instance, id)

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
    vueInstanceMap.set(instance._uid, instance)
    instancesMap.set(id, instances)
    setHostInstance(docId, id, instances)
  }

  const unmountIntance = (id: string, instance: ComponentInstance) => {
    const instances = instancesMap.get(id)
    if (instances) {
      const i = instances.indexOf(instance)
      if (i > -1) {
        const [instance] = instances.splice(i, 1)
        vueInstanceMap.delete(instance._uid)
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
    unmountIntance,
    getComponentInstance,
    rerender: () => {
      timestamp.value = Date.now()
    },
  }) as DocumentInstance
}

function getWindowSearchObject() {
  const url = window.parent.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

export function createSimulatorRenderer(
  host: BuiltinSimulatorHost = getHost(),
) {
  const loader = new AssetLoader()
  const layout: Ref<SimulatorViewLayout> = shallowRef({})
  const device: Ref<string> = shallowRef('default')
  const locale: Ref<string | undefined> = shallowRef()
  const autoRender = shallowRef(host.autoRender)
  const designMode: Ref<string> = shallowRef('design')
  const libraryMap: Ref<Record<string, string>> = shallowRef({})
  const components: Ref<Record<string, Component>> = shallowRef({})
  const componentsMap: Ref<Record<string, MinxedComponent>> = shallowRef({})
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

  const simulator = reactive({
    config: markRaw(config),
    layout,
    device,
    designMode,
    libraryMap,
    components,
    autoRender,
    componentsMap,
    documentInstances,
    requestHandlersMap,
    isSimulatorRenderer: true,
  }) as VueSimulatorRenderer

  // simulator.app = markRaw(createApp(SimulatorRendererView, { simulator }));
  Vue.use(VueRouter)
  const router = new VueRouter()
  router.beforeEach((to, _from, next) => {
    if (!to.matched.length) {
      next(false)
      console.warn('编辑态不允许路由跳转')
    } else {
      Object.assign(to.query, getWindowSearchObject())
      next()
    }
  })
  simulator.router = router
  simulator.app = new Vue({
    router,
    render: (h) =>
      h(SimulatorRendererView, {
        props: {
          simulator,
        },
      }),
  })

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
    return null!
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
      return compInst ? findDOMNodes(compInst) : null
    }
    return null
  }

  simulator.getClientRects = (element) => getClientRects(element)
  simulator.setNativeSelection = (enable) => setNativeSelection(enable)
  simulator.setDraggingState = (state) => cursor.setDragging(state)
  simulator.setCopyState = (state) => cursor.setCopy(state)
  simulator.clearState = () => cursor.release()
  simulator.createComponent = () => null
  simulator.rerender = () => {
    for (const doc of documentInstances.value) doc.rerender()
  }
  simulator.dispose = () => {
    simulator.app.$destroy()
    for (const fn of disposeFunctions) fn()
  }
  simulator.getCurrentDocument = () => {
    const crr = host.project.currentDocument
    const docs = documentInstances.value
    return crr ? docs.find((doc) => doc.id === crr.id) : undefined
  }

  let running = false
  simulator.run = () => {
    if (running) return
    running = true
    const containerId = 'app'
    let container = document.getElementById(containerId)
    if (!container) {
      container = document.createElement('div')
      document.body.appendChild(container)
      container.id = containerId
    }
    document.documentElement.classList.add('engine-page')
    document.body.classList.add('engine-document')
    simulator.app.$mount(container)
    host.project.setRendererReady(
      simulator as unknown as BuiltinSimulatorRenderer,
    )
  }

  disposeFunctions.push(
    // The host is typed for React components; see VueSimulatorRenderer.
    host.connect(simulator as unknown as BuiltinSimulatorRenderer, () => {
      // sync layout config
      layout.value = host.project.get('config')?.layout ?? {}

      // todo: split with others, not all should recompute
      if (
        libraryMap.value !== host.libraryMap ||
        componentsMap.value !== host.designer.componentsMap
      ) {
        libraryMap.value = host.libraryMap || {}
        componentsMap.value = host.designer.componentsMap as Record<
          string,
          MinxedComponent
        >
        _buildComponents()
      }

      locale.value = host.locale

      // sync device
      device.value = host.device

      // sync designMode
      designMode.value = host.designMode

      // sync requestHandlersMap
      requestHandlersMap.value = host.requestHandlersMap
    }),
  )

  disposeFunctions.push(
    host.autorun(() => {
      const { router } = simulator
      const addDocumentRoute = (documentInstance: DocumentInstance) => {
        router.addRoute({
          name: documentInstance.id,
          path: documentInstance.path,
          component: Renderer,
          props: () => ({
            key: documentInstance.key,
            documentInstance,
            simulator,
          }),
        })
      }

      const liveIds = new Set(host.project.documents.map((doc) => doc.id))
      for (const id of [...documentInstanceMap.keys()]) {
        if (!liveIds.has(id)) documentInstanceMap.delete(id)
      }
      // vue-router 3 has no removeRoute: reset the matcher and re-add live routes
      const hasStaleRoute = router
        .getRoutes()
        .some((route) => !liveIds.has(route.name as string))
      if (hasStaleRoute) {
        // `matcher` is a vue-router 3 internal that its typings omit
        type WithMatcher = { matcher: unknown }
        ;(router as unknown as WithMatcher).matcher = (
          new VueRouter() as unknown as WithMatcher
        ).matcher
        for (const documentInstance of documentInstanceMap.values()) {
          addDocumentRoute(documentInstance)
        }
      }

      documentInstances.value = host.project.documents.map((doc) => {
        let documentInstance = documentInstanceMap.get(doc.id)
        if (!documentInstance) {
          documentInstance = createDocumentInstance(doc, context, host)
          documentInstanceMap.set(doc.id, documentInstance)
          addDocumentRoute(documentInstance)
        }
        return documentInstance
      })

      const inst = simulator.getCurrentDocument()
      if (inst && inst.id !== router.currentRoute.name) {
        router.replace({ name: inst.id })
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
