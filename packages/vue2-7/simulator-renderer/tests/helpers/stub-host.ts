import type { BuiltinSimulatorHost } from '@alilc/lowcode-designer'
import { vi } from 'vitest'

export interface StubDocumentOptions {
  id: string
  fileName: string
  schema?: unknown
}

export function createStubDocument({
  id,
  fileName,
  schema,
}: StubDocumentOptions) {
  return {
    id,
    fileName,
    export: vi.fn(() => schema ?? { componentName: 'Page', id: 'page' }),
    getNode: vi.fn(),
  }
}

export type StubDocument = ReturnType<typeof createStubDocument>

export interface StubHostOptions {
  documents?: StubDocument[]
  currentDocument?: StubDocument | null
  locale?: string
}

export function createStubHost(options: StubHostOptions = {}) {
  const autoruns: Array<() => void> = []
  const host = {
    autoRender: true,
    libraryMap: {},
    locale: options.locale ?? 'zh-CN',
    device: 'default',
    designMode: 'design',
    requestHandlersMap: {},
    designer: { componentsMap: {} },
    project: {
      documents: options.documents ?? [],
      currentDocument: options.currentDocument ?? null,
      get: (key: string) => (key === 'config' ? { layout: {} } : undefined),
      setRendererReady: vi.fn(),
    },
    setInstance: vi.fn(),
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
    componentsConsumer: { consume: vi.fn() },
    injectionConsumer: { consume: vi.fn() },
  }
  return host as typeof host & BuiltinSimulatorHost
}
