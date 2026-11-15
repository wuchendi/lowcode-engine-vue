import { describe, expect, it } from 'vitest'
import { getI18n } from '../../src/shared/i18n'

const messages = {
  'zh-CN': {
    hello: '你好，{name}',
    items: '{count, plural, =0 {没有项目} other {# 个项目}}',
  },
  'en-US': {
    hello: 'Hello, {name}',
    items: '{count, plural, =0 {no items} one {# item} other {# items}}',
    role: '{role, select, admin {Administrator} other {User}}',
  },
}

describe('getI18n', () => {
  it('fills the message values', () => {
    expect(getI18n('hello', { name: 'Ada' }, 'zh-CN', messages)).toBe(
      '你好，Ada',
    )
    expect(getI18n('hello', { name: 'Ada' }, 'en-US', messages)).toBe(
      'Hello, Ada',
    )
  })

  it('formats plurals and selects', () => {
    expect(getI18n('items', { count: 0 }, 'en-US', messages)).toBe('no items')
    expect(getI18n('items', { count: 1 }, 'en-US', messages)).toBe('1 item')
    expect(getI18n('items', { count: 1200 }, 'en-US', messages)).toBe(
      '1,200 items',
    )
    expect(getI18n('items', { count: 3 }, 'zh-CN', messages)).toBe('3 个项目')
    expect(getI18n('role', { role: 'admin' }, 'en-US', messages)).toBe(
      'Administrator',
    )
  })

  it('gives an empty string without a message', () => {
    expect(getI18n('missing', {}, 'en-US', messages)).toBe('')
    expect(getI18n('hello', {}, 'fr-FR', messages)).toBe('')
  })
})
