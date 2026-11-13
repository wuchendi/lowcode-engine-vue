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

describe('nil expression text', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('an undefined expression renders empty text', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('this.notDefined'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('')
  })

  it('a null expression renders empty text', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('null'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('')
  })

  it('a string expression renders as-is', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('"hello"'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('hello')
  })

  it('a number expression renders via String()', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('0'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe('0')
  })

  it('an object expression renders as formatted JSON', async () => {
    mounted = await mountRenderer({
      schema: schemaWithText('({ a: [1] })'),
      components: { span: 'span' },
    })
    expect(mounted.el.querySelector('.target')?.textContent).toBe(
      JSON.stringify({ a: [1] }, null, 2),
    )
  })
})
