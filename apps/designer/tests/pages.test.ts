import { describe, expect, it } from 'vitest'
import { findPage, newPageSchema, pagePathError } from '../src/utils/pages'

describe('pagePathError', () => {
  it('names the message of the error', () => {
    expect(pagePathError('about', [])).toBe('PagePathInvalid')
    expect(pagePathError('/', ['/'])).toBe('PagePathTaken')
  })

  it('accepts a new route path', () => {
    expect(pagePathError('/about', ['/'])).toBeNull()
    expect(pagePathError('/user/list', ['/'])).toBeNull()
  })

  it('rejects malformed paths', () => {
    expect(pagePathError('', [])).toBeTruthy()
    expect(pagePathError('about', [])).toBeTruthy()
    expect(pagePathError('/about us', [])).toBeTruthy()
    expect(pagePathError('/about/', [])).toBeTruthy()
  })

  it('rejects a path another page has', () => {
    expect(pagePathError('/about', ['/', '/about'])).toBeTruthy()
  })
})

describe('newPageSchema', () => {
  it('is an empty page at the path', () => {
    expect(newPageSchema('/about')).toEqual({
      componentName: 'Page',
      fileName: '/about',
      props: {},
      title: '',
      children: [],
    })
  })
})

describe('findPage', () => {
  const tree = [
    { componentName: 'Page', fileName: '/' },
    { componentName: 'Page', fileName: '/about' },
  ]

  it('finds the page of a path', () => {
    expect(findPage(tree, '/about')).toBe(tree[1])
  })

  it('falls back to the first page', () => {
    expect(findPage(tree, null)).toBe(tree[0])
    expect(findPage(tree, '/missing')).toBe(tree[0])
  })
})
