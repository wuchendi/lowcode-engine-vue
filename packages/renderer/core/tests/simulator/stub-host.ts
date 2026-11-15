import type {
  BuiltinSimulatorHost,
  DocumentModel,
} from '@alilc/lowcode-designer'
import type { Mock } from 'vitest'
import { vi } from 'vitest'

export interface StubDocumentOptions {
  id: string
  fileName: string
  schema?: unknown
}

export interface StubDocument {
  id: string
  fileName: string
  export: Mock<() => unknown>
  getNode: Mock<(id: string) => unknown>
}

/** A document with the members the simulator reads. */
export function createStubDocument({
  id,
  fileName,
  schema,
}: StubDocumentOptions): StubDocument & DocumentModel {
  const doc: StubDocument = {
    id,
    fileName,
    export: vi.fn(() => schema ?? { componentName: 'Page', id: 'page' }),
    getNode: vi.fn<(id: string) => unknown>(),
  }
  return doc as StubDocument & DocumentModel
}

export interface StubHostOptions {
  documents?: StubDocument[]
  currentDocument?: StubDocument | null
  locale?: string
}

export function createStubHost(options: StubHostOptions = {}) {
  const autoruns: Array<() => void> = []
  const host = {
    autoRender: true,
    libraryMap: {} as Record<string, string>,
    locale: options.locale ?? 'zh-CN',
    device: 'default',
    designMode: 'design',
    requestHandlersMap: {},
    designer: { componentsMap: {} as Record<string, object> },
    project: {
      documents: options.documents ?? [],
      currentDocument: options.currentDocument ?? null,
      get: (key: string) => (key === 'config' ? { layout: {} } : undefined),
      setRendererReady: vi.fn<(renderer: unknown) => void>(),
    },
    setInstance: vi.fn<(...args: unknown[]) => void>(),
    connect: vi.fn((_simulator: unknown, fn: () => void) => {
      fn()
      return () => {}
    }),
    autorun: vi.fn((fn: () => void) => {
      autoruns.push(fn)
      fn()
      return () => {
        const i = autoruns.indexOf(fn)
        if (i > -1) autoruns.splice(i, 1)
      }
    }),
    runAutorun: () => {
      for (const fn of [...autoruns]) fn()
    },
    componentsConsumer: {
      consume: vi.fn<(fn: (data: never) => void) => void>(),
    },
    injectionConsumer: {
      consume: vi.fn<(fn: (data: never) => void) => void>(),
    },
    // The project messages (`project.i18n`)
    i18nConsumer: {
      consume: vi.fn<(fn: (data: never) => void) => void>(),
    },
  }
  return host as typeof host & BuiltinSimulatorHost
}
