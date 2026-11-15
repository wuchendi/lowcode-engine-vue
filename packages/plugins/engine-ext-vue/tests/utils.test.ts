import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import { describe, expect, it } from 'vitest'
import {
  currentRoot,
  isPlainObject,
  rootMethods,
  rootState,
} from '../src/utils'

const root = {
  componentName: 'Page',
  state: { count: 1 },
  methods: { submit: { type: 'JSFunction', value: 'function () {}' } },
  meta: { setupBindings: { state: { list: [] }, methods: ['load', 'submit'] } },
} as unknown as IPublicTypeRootSchema

describe('root bindings', () => {
  it('merges the state of the schema and of setup()', () => {
    expect(rootState(root)).toEqual({ count: 1, list: [] })
  })

  it('lists the methods of the schema and of setup() once', () => {
    expect(rootMethods(root)).toEqual(['submit', 'load'])
  })

  it('reads nothing from a missing root', () => {
    expect(rootState(undefined)).toEqual({})
    expect(rootMethods(undefined)).toEqual([])
  })
})

describe('isPlainObject', () => {
  it('accepts object literals only', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject(Object.create(null))).toBe(true)
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject(new Date())).toBe(false)
    expect(isPlainObject(null)).toBe(false)
  })
})

describe('currentRoot', () => {
  const first = { componentName: 'Page', fileName: '/' }
  const second = { componentName: 'Page', fileName: '/about' }
  const exportSchema = () => ({ componentsTree: [first, second] })

  it('is the document being edited, not the first of the project', () => {
    const project = {
      currentDocument: { exportSchema: () => second },
      exportSchema,
    }
    expect(currentRoot(project as never)).toBe(second)
  })

  it('falls back to the first root without a current document', () => {
    expect(currentRoot({ currentDocument: null, exportSchema } as never)).toBe(
      first,
    )
  })
})
