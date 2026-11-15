import type {
  IPublicTypePackage,
  IPublicTypeProjectSchema,
} from '@alilc/lowcode-types'
import type { VueVersion } from '@/version'

/** What the designer saves: the project schema and the packages it uses. */
export interface ProjectRecord {
  schema: IPublicTypeProjectSchema
  packages: IPublicTypePackage[]
  /** `assets.json` URLs of the materials added to the project. */
  materials?: string[]
}

const isStringList = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string')

/**
 * Where the designer keeps the project of one Vue version. The designer and
 * the preview use the localStorage one (`utils/store.ts`); a backend
 * implements the same methods.
 */
export interface ProjectStorage {
  load(): Promise<ProjectRecord | undefined>
  save(record: ProjectRecord): Promise<void>
  /** Forgets the saved project (the designer then starts from the sample). */
  clear(): Promise<void>
}

type KeyValueStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

/** The project in `storage` (localStorage), under keys per Vue version. */
export function createLocalProjectStorage(
  storage: KeyValueStorage,
  vue: VueVersion,
): ProjectStorage {
  const schemaKey = `projectSchema:vue${vue}`
  const packagesKey = `packages:vue${vue}`
  const materialsKey = `materials:vue${vue}`
  return {
    async load() {
      const schema = storage.getItem(schemaKey)
      if (!schema) return undefined
      const materials = storage.getItem(materialsKey)
      return {
        schema: JSON.parse(schema),
        packages: JSON.parse(storage.getItem(packagesKey) ?? '[]'),
        ...(materials ? { materials: JSON.parse(materials) } : {}),
      }
    },
    async save(record) {
      storage.setItem(schemaKey, JSON.stringify(record.schema))
      storage.setItem(packagesKey, JSON.stringify(record.packages))
      if (record.materials?.length) {
        storage.setItem(materialsKey, JSON.stringify(record.materials))
      } else {
        storage.removeItem(materialsKey)
      }
    },
    async clear() {
      storage.removeItem(schemaKey)
      storage.removeItem(packagesKey)
      storage.removeItem(materialsKey)
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
    !Array.isArray(file.packages) ||
    (file.materials !== undefined && !isStringList(file.materials))
  ) {
    throw new ProjectFileError('invalid')
  }
  if (file.vue !== vue) {
    throw new ProjectFileError('otherVue', Number(file.vue))
  }
  return {
    schema,
    packages: file.packages as IPublicTypePackage[],
    ...(file.materials ? { materials: file.materials as string[] } : {}),
  }
}
