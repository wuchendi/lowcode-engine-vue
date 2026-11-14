/**
 * Conformance of the renderer and the code generator: every fixture node is
 * rendered by the renderer (live mode) and by the template the code
 * generator writes for it (compiled with the running Vue's SFC compiler),
 * with the same state, methods and stub components; the HTML (after the
 * same interactions) and the recorded method calls must match.
 */
import { realpathSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getAdapter } from '@cdlab996/lowcode-vue-core'
import { afterEach, describe, expect, it } from 'vitest'
import * as Vue from 'vue'
import { TemplateBuilder } from '../../../../tools/code-generator/src/template'
import type {
  MountedRenderer,
  TestComponentsMap,
} from '../helpers/mount-renderer'
import {
  buildTestComponents,
  h,
  mountRenderer,
  testComponent,
} from '../helpers/mount-renderer'

const isVue2 = Vue.version.startsWith('2.')
const vueVersion = isVue2 ? 2 : 3

/** The SFC compiler of the running Vue version. */
// By the real path: Vitest resolves a bare `vue` to the project's version
const vueDir = realpathSync(
  join(
    dirname(fileURLToPath(import.meta.url)),
    '../../../vue' + vueVersion,
    'node_modules/vue',
  ),
)
const compiler = createRequire(import.meta.url)(
  join(vueDir, 'compiler-sfc/index.js'),
)

/** Calls of the page methods, for both sides. */
const calls: unknown[][] = []
;(globalThis as { conformanceCalls?: unknown[][] }).conformanceCalls = calls

const stubs: TestComponentsMap = {
  div: 'div',
  span: 'span',
  XBox: testComponent({
    name: 'XBox',
    props: ['title'],
    render: ({ props, slots }) =>
      h('section', { class: 'x-box', 'data-title': props.title }, {
        default: () => [
          ...(slots.header ? (slots.header({ label: 'L' }) as object[]) : []),
          ...(slots.default ? (slots.default() as object[]) : []),
        ],
      } as never),
  }),
  XField: testComponent({
    name: 'XField',
    props: ['value', 'modelValue', 'show'],
    model: { prop: 'value', event: 'input' },
    render: ({ props, emit }) =>
      h('button', {
        class: 'x-field',
        'data-value': String(props[isVue2 ? 'value' : 'modelValue']),
        'data-show': String(props.show),
        onClick: () => {
          emit(isVue2 ? 'input' : 'update:modelValue', 'typed')
          emit('update:show', true)
        },
      }),
  }),
  XButton: testComponent({
    name: 'XButton',
    render: ({ emit, slots }) =>
      h('button', { class: 'x-button', onClick: () => emit('press', 'p1') }, {
        default: () => (slots.default ? slots.default() : []),
      } as never),
  }),
}

interface Fixture {
  name: string
  node: Record<string, unknown>
  state?: Record<string, unknown>
  methods?: Record<string, string>
  /** Elements clicked, in order, before comparing again. */
  click?: string[]
  /** Vue versions the fixture applies to. */
  vue?: (2 | 3)[]
}

const expr = (value: string) => ({ type: 'JSExpression', value })
const fn = (value: string) => ({ type: 'JSFunction', value })
const record =
  'function () { globalThis.conformanceCalls.push(Array.from(arguments)) }'

const fixtures: Fixture[] = [
  {
    name: 'text and expressions',
    node: { componentName: 'div', children: ['Hello', expr('this.name')] },
    state: { name: 'Ada' },
  },
  {
    name: 'conditions',
    node: {
      componentName: 'div',
      children: [
        { componentName: 'span', condition: true, children: 'shown' },
        { componentName: 'span', condition: false, children: 'hidden' },
        {
          componentName: 'span',
          condition: expr('this.flag'),
          children: 'flag',
        },
        {
          componentName: 'span',
          condition: expr('!this.flag'),
          children: 'not',
        },
      ],
    },
    state: { flag: true },
  },
  {
    name: 'loops with named arguments',
    node: {
      componentName: 'div',
      children: [
        {
          componentName: 'span',
          loop: expr('this.list'),
          loopArgs: ['row', 'i'],
          children: [expr('row.name'), expr('i')],
        },
      ],
    },
    state: { list: [{ name: 'a' }, { name: 'b' }] },
  },
  {
    name: 'a condition with a loop (evaluated outside the loop)',
    node: {
      componentName: 'div',
      children: [
        {
          componentName: 'span',
          condition: expr('this.flag'),
          loop: expr('this.list'),
          children: [expr('item')],
        },
      ],
    },
    state: { flag: false, list: [1, 2] },
  },
  {
    name: 'named slots with params and default children',
    node: {
      componentName: 'XBox',
      props: {
        title: 'T',
        header: {
          type: 'JSSlot',
          params: ['scope'],
          value: [{ componentName: 'span', children: [expr('scope.label')] }],
        },
        footer: { type: 'JSSlot' },
      },
      children: [{ componentName: 'span', children: 'body' }],
    },
  },
  {
    name: 'a children prop overriding the node children',
    node: {
      componentName: 'div',
      props: { children: 'from prop' },
      children: 'from node',
    },
  },
  {
    name: 'a children slot as the default slot',
    node: {
      componentName: 'XBox',
      props: {
        children: {
          type: 'JSSlot',
          value: [{ componentName: 'span', children: 'slot' }],
        },
      },
    },
  },
  {
    name: 'className, style and bound props',
    node: {
      componentName: 'XBox',
      props: {
        className: 'a b',
        style: { color: 'red' },
        title: expr('this.title'),
      },
    },
    state: { title: 'bound' },
  },
  {
    name: 'v-model with an expression and a literal',
    node: {
      componentName: 'div',
      children: [
        {
          componentName: 'XField',
          props: { 'v-model': expr('this.text') },
        },
        { componentName: 'XField', props: { 'v-model': 'literal' } },
        { componentName: 'span', children: [expr('this.text')] },
      ],
    },
    state: { text: 'initial' },
    click: ['.x-field'],
  },
  {
    name: 'v-model:show',
    node: {
      componentName: 'div',
      children: [
        {
          componentName: 'XField',
          props: { 'v-model:show': expr('this.open') },
        },
        { componentName: 'span', children: [expr('String(this.open)')] },
      ],
    },
    state: { open: false },
    click: ['.x-field'],
  },
  {
    name: 'onUpdateXxx handlers',
    node: {
      componentName: 'XField',
      props: {
        show: expr('this.open'),
        onUpdateShow: fn('function (value) { this.open = value }'),
      },
    },
    state: { open: false },
    click: ['.x-field'],
  },
  {
    name: 'events bound to methods with extra params',
    node: {
      componentName: 'XButton',
      props: {
        onPress: fn(
          'function(){return this.onPress.apply(this,Array.prototype.slice.call(arguments).concat([{ "k": 1 }])) }',
        ),
      },
      children: 'Go',
    },
    methods: { onPress: record },
    click: ['.x-button'],
  },
]

/**
 * HTML without comments and formatting whitespace, with sorted class names
 * (Vue 2 orders static and bound classes differently).
 */
const normalize = (html: string) =>
  html
    .replace(
      / class="([^"]*)"/g,
      (_, names: string) =>
        ` class="${names.split(/\s+/).filter(Boolean).sort().join(' ')}"`,
    )
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s+/g, ' ')
    .replace(/>\s/g, '>')
    .replace(/\s</g, '<')
    .trim()

function compileGenerated(template: string) {
  const { code, errors } = compiler.compileTemplate({
    source: template,
    filename: 'conformance.vue',
    id: 'conformance',
  })
  if (errors?.length) throw new Error(errors.map(String).join('\n'))
  if (isVue2) {
    return new Function(`${code}\nreturn { render, staticRenderFns }`)()
  }
  const body = code
    .replace(
      /^import \{([^}]*)\} from "vue"$/m,
      (_: string, names: string) =>
        `const {${names.replace(/ as /g, ': ')}} = Vue`,
    )
    .replace('export function render', 'function render')
  return { render: new Function('Vue', `${body}\nreturn render`)(Vue) }
}

/** Mounts the generated template of `fixture` with the same state and methods. */
function mountGenerated(fixture: Fixture) {
  const builder = new TemplateBuilder(
    { resolve: (componentName: string) => ({ tag: componentName }) } as never,
    vueVersion,
    (message) => {
      throw new Error(message)
    },
  )
  const template = `<div class="lc-page" style="height: 100%">\n${builder
    .children([fixture.node], 1)
    .join('\n')}\n</div>`
  const compiled = compileGenerated(template)
  const methods = Object.fromEntries(
    Object.entries(fixture.methods ?? {}).map(([name, code]) => [
      name,
      new Function(`return (${code})`)(),
    ]),
  )
  const components = buildTestComponents(stubs)
  const component = Vue.defineComponent({
    components,
    data: () => JSON.parse(JSON.stringify(fixture.state ?? {})),
    methods,
    ...compiled,
  } as never)
  const container = document.createElement('div')
  const host = document.createElement('div')
  container.appendChild(host)
  document.body.appendChild(container)
  const app = getAdapter().mount(component as never, {}, host)
  const root = () =>
    (container.firstElementChild === host
      ? host.firstElementChild
      : container.firstElementChild) as HTMLElement
  return {
    template,
    get el() {
      return root()
    },
    destroy: () => {
      app.unmount()
      container.remove()
    },
  }
}

describe(`renderer and code generator conformance (Vue ${vueVersion})`, () => {
  let cleanups: (() => void)[] = []

  afterEach(() => {
    for (const cleanup of cleanups) cleanup()
    cleanups = []
    calls.length = 0
  })

  for (const fixture of fixtures) {
    if (fixture.vue && !fixture.vue.includes(vueVersion)) continue
    it(fixture.name, async () => {
      const rendered: MountedRenderer = await mountRenderer({
        schema: {
          componentName: 'Page',
          id: 'page',
          state: fixture.state ?? {},
          methods: Object.fromEntries(
            Object.entries(fixture.methods ?? {}).map(([name, code]) => [
              name,
              fn(code),
            ]),
          ),
          children: [fixture.node],
        },
        components: stubs,
      })
      cleanups.push(rendered.destroy)
      const generated = mountGenerated(fixture)
      cleanups.push(generated.destroy)
      await Vue.nextTick()

      const html = () => [
        normalize(rendered.el.outerHTML),
        normalize(generated.el.outerHTML),
      ]
      const [before, generatedBefore] = html()
      expect(generatedBefore, generated.template).toBe(before)

      for (const selector of fixture.click ?? []) {
        const byRenderer: unknown[][] = []
        for (const el of [rendered.el, generated.el]) {
          const start = calls.length
          for (const target of el.querySelectorAll<HTMLElement>(selector)) {
            target.click()
          }
          await Vue.nextTick()
          byRenderer.push(calls.slice(start))
        }
        expect(byRenderer[1]).toEqual(byRenderer[0])
        const [after, generatedAfter] = html()
        expect(generatedAfter, generated.template).toBe(after)
      }
    })
  }
})
