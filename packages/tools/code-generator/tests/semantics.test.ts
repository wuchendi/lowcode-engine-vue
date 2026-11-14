import { describe, expect, it } from 'vitest'
import { compileTemplate, parse } from 'vue/compiler-sfc'
import { generateProject } from '../src'
import { packages } from './fixtures'

/** The generated page of one root schema. */
async function page(root: Record<string, unknown>) {
  const { files } = await generateProject(
    {
      version: '1.0.0',
      componentsMap: [],
      componentsTree: [
        { componentName: 'Page', fileName: 'index', props: {}, ...root },
      ],
    } as never,
    { vue: 3, packages },
  )
  return files['src/pages/index.vue']
}

function templateErrors(source: string) {
  const { descriptor } = parse(source, { filename: 'page.vue' })
  return compileTemplate({
    source: descriptor.template?.content ?? '',
    filename: 'page.vue',
    id: 'page',
  }).errors.map(String)
}

const button = (props: Record<string, unknown>, children?: unknown) => ({
  componentName: 'VanButton',
  props,
  ...(children === undefined ? {} : { children }),
})

describe('schema semantics shared with the renderer', () => {
  it('lets a children prop override the node children', async () => {
    const code = await page({
      children: [button({ children: 'from prop' }, 'from node')],
    })
    expect(code).toContain('from prop')
    expect(code).not.toContain('from node')
  })

  it('listens to update:xxx for onUpdateXxx handlers', async () => {
    const handler = { type: 'JSFunction', value: 'function (v) {}' }
    const code = await page({
      children: [
        button({ onUpdateShow: handler, 'onUpdate:loading': handler }),
      ],
    })
    expect(code).toContain('@update:show=')
    expect(code).toContain('@update:loading=')
    expect(code).not.toContain('@updateShow')
  })

  it('passes a literal v-model value as a prop', async () => {
    const code = await page({
      children: [
        button({
          'v-model:loading': true,
          'v-model:text': 'ok',
          'v-model:show': { type: 'JSExpression', value: 'this.visible' },
        }),
      ],
    })
    expect(code).toContain(':loading="true"')
    expect(code).toContain('text="ok"')
    expect(code).toContain('v-model:show="visible"')
    expect(templateErrors(code)).toEqual([])
  })

  it('leaves out a slot without content', async () => {
    const code = await page({
      children: [button({ icon: { type: 'JSSlot' } })],
    })
    expect(code).not.toContain('#icon')
  })

  it('applies the global data handler to data sources without their own', async () => {
    const own = { type: 'JSFunction', value: 'function (res) { return 1 }' }
    const global = {
      type: 'JSFunction',
      value: 'function (res) { return res.data.list }',
    }
    const code = await page({
      dataSource: {
        list: [
          { id: 'a', type: 'fetch', options: { uri: 'https://x/a' } },
          {
            id: 'b',
            type: 'fetch',
            options: { uri: 'https://x/b' },
            dataHandler: own,
          },
        ],
        dataHandler: global,
      },
    })
    const handlers = [...code.matchAll(/dataHandler: (function[^}]*\})/g)].map(
      (m) => m[1],
    )
    expect(handlers).toEqual([
      'function (res) { return res.data.list }',
      'function (res) { return 1 }',
    ])
  })
})
