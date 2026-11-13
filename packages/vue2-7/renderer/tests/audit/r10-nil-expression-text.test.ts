import { afterEach, describe, expect, it } from 'vitest'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

const schemaWithText = (value: string) => ({
  componentName: 'Page',
  id: 'page',
  children: [
    {
      componentName: 'span',
      id: 'target',
      props: { className: 'target' },
      children: { type: 'JSExpression', value },
    },
  ],
})

describe('R-10 nil expression text', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('R-10: an undefined expression renders empty text', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('this.notDefined'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('')
  })

  it('R-10: a null expression renders empty text', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('null'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('')
  })

  it('R-10: a string expression renders as-is', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('"hello"'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('hello')
  })

  it('R-10: a number expression renders via String()', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('0'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('0')
  })

  it('R-10: an object expression renders as formatted JSON', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('({ a: [1] })'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe(
      JSON.stringify({ a: [1] }, null, 2),
    )
  })
})
