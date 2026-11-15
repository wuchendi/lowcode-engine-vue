import { injectAssets } from '@alilc/lowcode-plugin-inject'
import type {
  IPublicModelPluginContext,
  IPublicTypeAssetsJson,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'

import assetsVue2 from '@/assets/assets-vue2.json'
import assetsVue3 from '@/assets/assets-vue3.json'
import sampleMessages from '@/assets/i18n.json'
import schemaVue2 from '@/assets/schema-vue2.json'
import schemaVue3 from '@/assets/schema-vue3.json'
import { projectStorage } from '@/utils/store'
import { vueVersion } from '@/version'
import { restoreMaterials } from './materials'

const assets = vueVersion === 2 ? assetsVue2 : assetsVue3
const originSchema = vueVersion === 2 ? schemaVue2 : schemaVue3

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx

      const loadedAssets = (await injectAssets(assets)) as IPublicTypeAssetsJson
      // Before the project materials merge into the assets
      await material.setAssets(loadedAssets)

      const saved = await projectStorage.load()
      // The materials the project added, before its pages render
      await restoreMaterials(material, saved?.materials)
      const projectSchema = saved?.schema
      // The project messages (`this.i18n(key)`); the sample has its own
      project.setI18n(
        projectSchema ? (projectSchema.i18n ?? {}) : sampleMessages,
      )
      const roots = (
        projectSchema?.componentsTree.length
          ? projectSchema.componentsTree
          : [originSchema]
      ) as IPublicTypeRootSchema[]

      project.onSimulatorRendererReady(() => {
        // Every page and component is open; the first page is the current one
        const docs = roots.map((root) => project.openDocument(root))
        const first =
          docs[roots.findIndex((root) => root.componentName !== 'Component')]
        if (first) project.openDocument(first.id)
      })
    },
  }
}

editorInit.pluginName = 'editorInit'

export default editorInit
