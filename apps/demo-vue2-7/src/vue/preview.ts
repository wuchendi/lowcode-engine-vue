import type {
  Asset,
  IPublicTypeComponentMap,
  IPublicTypePackage,
  IPublicTypeProjectSchema,
} from '@alilc/lowcode-types'
import { AssetLoader, buildComponents } from '@cdlab996/lowcode-utils2.7'
import VueRenderer from '@cdlab996/lowcode-vue-renderer2.7'
// import { h, createApp, toRaw, Suspense } from 'vue'
import type { Component } from 'vue'
import Vue, { defineComponent, h, onMounted, reactive, toRaw } from 'vue'
import VueRouter from 'vue-router'

// import { getPackgesToLocalStorage, getProjectSchemaToLocalStorage } from '../utils/store'

const init = async () => {
  // const packages = getPackgesToLocalStorage()
  // const projectSchema = getProjectSchemaToLocalStorage()
  const packages = JSON.parse(
    window.localStorage.getItem('packages') || '[]',
  ) as IPublicTypePackage[]
  const projectSchema = JSON.parse(
    window.localStorage.getItem('projectSchema') || '{}',
  ) as IPublicTypeProjectSchema
  const { componentsMap: componentsMapArray = [], componentsTree = [] } =
    projectSchema

  const componentsMap: { [key: string]: IPublicTypeComponentMap } = {}
  componentsMapArray.forEach((component) => {
    if (component.componentName) {
      componentsMap[component.componentName] = component
    }
  })

  const libraryMap: Record<string, string> = {}
  const libraryAsset: Asset = []
  // TODO?: renderUrls is deprecated
  // @ts-expect-error
  packages.forEach(({ package: _package, library, urls, renderUrls }) => {
    if (_package) {
      libraryMap[_package] = library
    }
    if (renderUrls) {
      libraryAsset.push(renderUrls)
    } else if (urls) {
      libraryAsset.push(urls)
    }
  })
  await new AssetLoader().load(libraryAsset)
  const components = await buildComponents(libraryMap, componentsMap)

  return { schema: componentsTree[0], components }
}

const Preview = defineComponent({
  setup() {
    const data = reactive<any>({
      schema: null,
      components: null,
    })

    onMounted(async () => {
      const loadData = await init()
      // @ts-expect-error
      window.Vue.prototype.$ELEMENT = { size: 'small', zIndex: 2000 }
      Object.assign(data, loadData)
    })

    return () => {
      const { schema, components } = data
      if (!schema || !components) {
        return h('div')
      }
      return h('div', { class: 'lowcode-plugin-sample-preview' }, [
        h(VueRenderer as Component, {
          class: 'lowcode-plugin-sample-preview-content',
          props: {
            schema: toRaw(schema),
            components: toRaw(components),
          },
        }),
      ])
    }
  },
})

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Preview,
    },
  ],
})

const app = new Vue({
  router,
  render: (h) => h('router-view'),
  mounted() {
    if (location.search === '') {
      this.setPageStyle(this.getHashParam('client'))
    } else {
      this.setPageStyle(this.getQueryParam('client'))
    }
  },
  methods: {
    getHashParam(paramName: string) {
      const hashString = location.hash
      const hashParams = new URLSearchParams(hashString.slice(3))
      return hashParams.get(paramName)
    },
    getQueryParam(paramName: string) {
      const queryParams = new URLSearchParams(location.search)
      return queryParams.get(paramName)
    },
    setPageStyle(clientType: string | null) {
      document.body.classList.add(
        clientType === 'h5' ? 'h5-client' : 'other-client',
      )
    },
  },
})

Vue.use(VueRouter)

app.$mount('#lce-container')
