import { describe, expect, it } from 'vitest'
import { insertFunction } from '../src/components/JsEditor/insert'

const setupCode = `import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const text = ref('')

    return { text }
  },
})
`

describe('insertFunction', () => {
  it('adds a function to setup() and to its returned object', () => {
    const code = insertFunction(setupCode, {
      functionName: 'onClick',
      template: 'onClick(event, extParams) {\n  console.log(event)\n}',
    })
    expect(code).toContain(
      `    function onClick(event, extParams) {\n      console.log(event)\n    }\n\n    return { text, onClick }`,
    )
  })

  it('creates the function from its name and fills an empty returned object', () => {
    const code = insertFunction(
      'export default defineComponent({\n  setup() {\n    return {}\n  },\n})\n',
      { functionName: 'save' },
    )
    expect(code).toContain('    function save() {}\n\n    return { save }')
  })

  it('keeps async handlers async and does not return a name twice', () => {
    const once = insertFunction(setupCode, {
      functionName: 'load',
      template: 'async load() {}',
    })
    expect(once).toContain('async function load() {}')
    const twice = insertFunction(once, { functionName: 'load' })
    expect(twice.match(/return \{[^}]*\}/)?.[0]).toBe('return { text, load }')
  })

  it('adds a method to the Options API methods', () => {
    const code = insertFunction(
      'export default defineComponent({\n  methods: {\n    a() {},\n  },\n})\n',
      { functionName: 'b' },
    )
    expect(code).toMatch(/methods: \{\n {4}a\(\) \{\},\n {4}b\(\) \{\n {4}\}/)
  })
})
