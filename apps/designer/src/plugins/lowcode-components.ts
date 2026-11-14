import type {
  IPublicModelDocumentModel,
  IPublicModelNode,
  IPublicModelPluginContext,
  IPublicTypeAssetsJson,
} from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import { intl } from '@/locale'
import { componentDescription } from '@/utils/components'

const isComponentDocument = (doc: IPublicModelDocumentModel) =>
  doc.root?.componentName === 'Component'

/**
 * Registers every Component document of the project as a low-code component
 * of the components pane, and refreshes it when the document changes.
 */
const LowCodeComponentsPlugin = (ctx: IPublicModelPluginContext) => ({
  init() {
    const { project, material } = ctx

    const register = () => {
      const components = project.documents
        .filter(isComponentDocument)
        .map((doc) => {
          const root = doc.exportSchema(IPublicEnumTransformStage.Save)
          const description = componentDescription(
            root as never,
            intl('LowCodeComponents'),
          )
          return {
            ...description,
            configure: {
              ...description.configure,
              component: {
                ...description.configure.component,
                // Not inside its own document
                nestingRule: {
                  parentWhitelist: (parent: IPublicModelNode) =>
                    parent?.document?.id !== doc.id,
                },
              },
            },
          }
        })
      if (components.length > 0) {
        material.loadIncrementalAssets({
          version: '',
          components,
        } as unknown as IPublicTypeAssetsJson)
      }
    }

    let timer: ReturnType<typeof setTimeout> | undefined
    const registerLater = () => {
      clearTimeout(timer)
      timer = setTimeout(register, 500)
    }
    const watched = new Set<string>()
    const watch = (doc: IPublicModelDocumentModel) => {
      if (watched.has(doc.id) || !isComponentDocument(doc)) return
      watched.add(doc.id)
      doc.history.onChangeState(registerLater)
      doc.onImportSchema(registerLater)
    }

    project.onSimulatorRendererReady(() => {
      for (const doc of project.documents) watch(doc)
      register()
    })
    project.onChangeDocument((doc) => {
      watch(doc)
      register()
    })
  },
})

LowCodeComponentsPlugin.pluginName = 'LowCodeComponentsPlugin'

export default LowCodeComponentsPlugin
