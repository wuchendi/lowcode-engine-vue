import type {
  IPublicTypePackage,
  IPublicTypeProjectSchema,
} from '@alilc/lowcode-types'
import type { VueVersion } from '@/version'

/** What the designer saves: the project schema and the packages it uses. */
export interface ProjectRecord {
  schema: IPublicTypeProjectSchema
  packages: IPublicTypePackage[]
}

/**
 * Where the designer keeps the project of one Vue version. The designer and
 * the preview use the localStorage one (`utils/store.ts`); a backend
 * implements the same two methods.
 */
export interface ProjectStorage {
  load(): Promise<ProjectRecord | undefined>
  save(record: ProjectRecord): Promise<void>
}

type KeyValueStorage = Pick<Storage, 'getItem' | 'setItem'>

/** The project in `storage` (localStorage), under keys per Vue version. */
export function createLocalProjectStorage(
  storage: KeyValueStorage,
  vue: VueVersion,
): ProjectStorage {
  const schemaKey = `projectSchema:vue${vue}`
  const packagesKey = `packages:vue${vue}`
  return {
    async load() {
      const schema = storage.getItem(schemaKey)
      if (!schema) return undefined
      return {
        schema: JSON.parse(schema),
        packages: JSON.parse(storage.getItem(packagesKey) ?? '[]'),
      }
    },
    async save(record) {
      storage.setItem(schemaKey, JSON.stringify(record.schema))
      storage.setItem(packagesKey, JSON.stringify(record.packages))
    },
  }
}

const FORMAT = 'lowcode-engine-vue-project'
const VERSION = 1

/** Why a project file cannot be imported. */
export class ProjectFileError extends Error {
  constructor(
    readonly reason: 'invalid' | 'otherVue',
    /** The Vue version of the file, for `otherVue`. */
    readonly vue?: number,
  ) {
    super(
      reason === 'otherVue'
        ? `The project is for Vue ${vue}`
        : 'Not a project file',
    )
    this.name = 'ProjectFileError'
  }
}

/** The project file (JSON) of a project of the Vue version `vue`. */
export function serializeProject(record: ProjectRecord, vue: VueVersion) {
  return JSON.stringify(
    { format: FORMAT, version: VERSION, vue, ...record },
    null,
    2,
  )
}

/** The project of a file written by `serializeProject` for `vue`. */
export function parseProjectFile(text: string, vue: VueVersion): ProjectRecord {
  let file: Record<string, unknown>
  try {
    file = JSON.parse(text)
  } catch {
    throw new ProjectFileError('invalid')
  }
  const schema = file?.schema as IPublicTypeProjectSchema | undefined
  if (
    file?.format !== FORMAT ||
    file.version !== VERSION ||
    !Array.isArray(schema?.componentsTree) ||
    !Array.isArray(file.packages)
  ) {
    throw new ProjectFileError('invalid')
  }
  if (file.vue !== vue) {
    throw new ProjectFileError('otherVue', Number(file.vue))
  }
  return { schema, packages: file.packages as IPublicTypePackage[] }
}
