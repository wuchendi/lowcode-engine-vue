import type {
  IPublicApiProject,
  IPublicEnumTransformStage,
  IPublicTypeProjectSchema,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'

/** The part of the project API that page-level plugins read and write. */
export interface DocumentProject {
  exportSchema(stage: IPublicEnumTransformStage): {
    componentsTree: IPublicTypeRootSchema[]
  }
  importSchema(schema: Pick<IPublicTypeProjectSchema, 'componentsTree'>): void
}

/**
 * A project of the current page only, for plugins that edit
 * `componentsTree[0]` and import the whole project back.
 */
export function documentProject(project: IPublicApiProject): DocumentProject {
  return {
    exportSchema(stage) {
      const root = project.currentDocument?.exportSchema(stage)
      return { componentsTree: root ? [root] : [] }
    },
    importSchema(schema) {
      const [root] = schema.componentsTree
      if (!root) return
      project.currentDocument?.importSchema(root)
      project.simulatorHost?.renderer?.rerender()
    },
  }
}
