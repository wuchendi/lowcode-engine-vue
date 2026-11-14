import { describe, expect, it } from 'vitest'
import { createBlockStore, withoutIds } from '../src/utils/blocks'

function memoryStorage() {
  const items = new Map<string, string>()
  return {
    getItem: (key: string) => items.get(key) ?? null,
    setItem: (key: string, value: string) => void items.set(key, value),
  }
}

const button = {
  componentName: 'VanButton',
  id: 'node_1',
  props: {
    text: 'ok',
    icon: {
      type: 'JSSlot',
      value: [{ componentName: 'span', id: 'node_2', props: {} }],
    },
  },
  children: [{ componentName: 'span', id: 'node_3' }],
}

describe('withoutIds', () => {
  it('drops the node ids, slots included', () => {
    expect(withoutIds(button)).toEqual({
      componentName: 'VanButton',
      props: {
        text: 'ok',
        icon: { type: 'JSSlot', value: [{ componentName: 'span', props: {} }] },
      },
      children: [{ componentName: 'span' }],
    })
  })
})

describe('createBlockStore', () => {
  it('saves, lists and removes blocks', () => {
    const storage = memoryStorage()
    const store = createBlockStore(storage, 'blocks')
    const saved = store.save('Primary button', button)
    expect(saved.schema).toEqual(withoutIds(button))
    store.save('Second', { componentName: 'div' })
    expect(store.list().map((block) => block.name)).toEqual([
      'Primary button',
      'Second',
    ])
    // persisted
    expect(createBlockStore(storage, 'blocks').list()).toHaveLength(2)
    store.remove(saved.id)
    expect(store.list().map((block) => block.name)).toEqual(['Second'])
  })

  it('starts empty and ignores unreadable data', () => {
    const storage = memoryStorage()
    expect(createBlockStore(storage, 'blocks').list()).toEqual([])
    storage.setItem('blocks', '{not json')
    expect(createBlockStore(storage, 'blocks').list()).toEqual([])
  })
})
