import type { IPublicTypeComponentSchema } from '@alilc/lowcode-types'
import type { VueComponent } from '@cdlab996/lowcode-vue-core'
import {
  buildComponents,
  componentSchemaOf,
  lowCodeComponent,
  Renderer,
} from '@cdlab996/lowcode-vue-core'
import { afterEach, describe, expect, it } from 'vitest'
import { h, mountRender } from '../helpers/mount-renderer'

const greeting = {
  componentName: 'Component',
  fileName: 'Greeting',
  id: 'greeting',
  lifeCycles: {
    initProps: {
      type: 'JSExpression',
      value: '({ name: { default: "world" } })',
    },
  },
  children: [
    {
      componentName: 'span',
      id: 'text',
      props: { class: 'greeting' },
      children: { type: 'JSExpression', value: '"hello " + this.name' },
    },
  ],
} as unknown as IPublicTypeComponentSchema

const page = {
  componentName: 'Page',
  id: 'page',
  children: [
    { componentName: 'Greeting', id: 'a', props: { name: 'vue' } },
    { componentName: 'Greeting', id: 'b' },
  ],
}

describe('componentSchemaOf', () => {
  it('ignores the componentsMap entries of exported schemas', () => {
    // exportSchema lists components without a package this way
    expect(
      componentSchemaOf({ devMode: 'lowCode', componentName: 'Component' }),
    ).toBeUndefined()
    expect(componentSchemaOf(greeting)).toBe(greeting)
    expect(componentSchemaOf({ componentsTree: [greeting] })).toBe(greeting)
  })
})

describe('low-code components at runtime', () => {
  const destroy: Array<() => void> = []
  afterEach(() => {
    for (const d of destroy.splice(0)) d()
  })

  it.each([
    ['a component root', greeting],
    ['a project schema (engine assets)', { componentsTree: [greeting] }],
  ])('renders %s from the component map', async (_name, entry) => {
    const components: Record<string, VueComponent> = {}
    Object.assign(
      components,
      buildComponents(
        {},
        {
          span: { package: 'span', componentName: 'span' },
          Greeting: entry as never,
        },
        (schema) => lowCodeComponent(schema, () => ({ components })),
      ),
    )
    const mounted = await mountRender(() =>
      h(Renderer, { schema: page, components }),
    )
    destroy.push(mounted.destroy)
    const root = mounted.el.parentElement ?? mounted.el
    expect(
      [...root.querySelectorAll('.greeting')].map((el) => el.textContent),
    ).toEqual(['hello vue', 'hello world'])
  })
})
