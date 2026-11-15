import { describe, expect, it } from 'vitest'
import type { ProjectRecord } from '../src/utils/project-storage'
import {
  createLocalProjectStorage,
  ProjectFileError,
  parseProjectFile,
  serializeProject,
} from '../src/utils/project-storage'

function memoryStorage() {
  const items = new Map<string, string>()
  return {
    items,
    getItem: (key: string) => items.get(key) ?? null,
    setItem: (key: string, value: string) => void items.set(key, value),
    removeItem: (key: string) => void items.delete(key),
  }
}

const record: ProjectRecord = {
  schema: {
    version: '1.0.0',
    componentsMap: [],
    componentsTree: [
      { componentName: 'Page', fileName: 'index', props: {}, children: [] },
    ],
  },
  packages: [{ package: 'vant', version: '4.10.2', library: 'vant' }],
}

describe('createLocalProjectStorage', () => {
  it('loads nothing before the first save', async () => {
    const storage = createLocalProjectStorage(memoryStorage(), 3)
    expect(await storage.load()).toBeUndefined()
  })

  it('saves and loads the project of its Vue version', async () => {
    const backing = memoryStorage()
    await createLocalProjectStorage(backing, 3).save(record)
    expect(await createLocalProjectStorage(backing, 3).load()).toEqual(record)
    expect(await createLocalProjectStorage(backing, 2).load()).toBeUndefined()
    expect([...backing.items.keys()].sort()).toEqual([
      'packages:vue3',
      'projectSchema:vue3',
    ])
  })
})

describe('clearing the local project', () => {
  it('removes the project of its Vue version only', async () => {
    const backing = memoryStorage()
    await createLocalProjectStorage(backing, 2).save(record)
    await createLocalProjectStorage(backing, 3).save(record)
    await createLocalProjectStorage(backing, 3).clear()
    expect(await createLocalProjectStorage(backing, 3).load()).toBeUndefined()
    expect(await createLocalProjectStorage(backing, 2).load()).toEqual(record)
  })
})

describe('materials of a project', () => {
  const withMaterials: ProjectRecord = {
    ...record,
    materials: ['https://cdn.test/demo/assets.json'],
  }

  it('saves and loads them', async () => {
    const backing = memoryStorage()
    await createLocalProjectStorage(backing, 3).save(withMaterials)
    expect(await createLocalProjectStorage(backing, 3).load()).toEqual(
      withMaterials,
    )
    await createLocalProjectStorage(backing, 3).clear()
    expect(backing.items.size).toBe(0)
  })

  it('round-trips them through a project file', () => {
    expect(parseProjectFile(serializeProject(withMaterials, 3), 3)).toEqual(
      withMaterials,
    )
  })

  it('rejects a project file with invalid materials', () => {
    const text = JSON.stringify({
      ...JSON.parse(serializeProject(record, 3)),
      materials: [1],
    })
    expect(() => parseProjectFile(text, 3)).toThrow(ProjectFileError)
  })
})

describe('project files', () => {
  it('round-trips a project', () => {
    const text = serializeProject(record, 3)
    expect(JSON.parse(text)).toMatchObject({
      format: 'lowcode-engine-vue-project',
      version: 1,
      vue: 3,
    })
    expect(parseProjectFile(text, 3)).toEqual(record)
  })

  it('rejects other files', () => {
    for (const text of ['not json', '{}', '{"format":"other"}']) {
      expect(() => parseProjectFile(text, 3)).toThrow(ProjectFileError)
    }
    const noTree = JSON.stringify({
      format: 'lowcode-engine-vue-project',
      version: 1,
      vue: 3,
      schema: {},
      packages: [],
    })
    expect(() => parseProjectFile(noTree, 3)).toThrow(ProjectFileError)
  })

  it('rejects a project of the other Vue version', () => {
    const error = (() => {
      try {
        parseProjectFile(serializeProject(record, 2), 3)
      } catch (e) {
        return e
      }
    })()
    expect(error).toBeInstanceOf(ProjectFileError)
    expect(error).toMatchObject({ reason: 'otherVue', vue: 2 })
  })
})
