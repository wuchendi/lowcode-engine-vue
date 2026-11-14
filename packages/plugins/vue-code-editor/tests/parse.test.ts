import { describe, expect, it } from 'vitest'
import { parseCode } from '../src/components/JsEditor/parse'

const parse = (code: string) => parseCode('id', code, { vue: 'Vue' })

describe('parseCode', () => {
  it('reads the Options API into state, methods and lifecycles', () => {
    const { state, methods, lifeCycles, setupBindings } = parse(`
      import { defineComponent } from 'vue'
      export default defineComponent({
        data: () => ({ text: 'outer', count: 1 }),
        methods: { testFunc() { return 1 } },
        mounted() {},
      })
    `)
    expect(state).toEqual({ text: 'outer', count: 1 })
    expect(Object.keys(methods)).toEqual(['testFunc'])
    expect(Object.keys(lifeCycles)).toEqual(['mounted'])
    expect(setupBindings).toEqual({ state: {}, methods: [] })
  })

  it('keeps an object emits out of methods', () => {
    const { methods, lifeCycles } = parse(`
      export default defineComponent({
        emits: { change: null },
        methods: { save() {} },
      })
    `)
    expect(Object.keys(methods)).toEqual(['save'])
    expect(lifeCycles).toHaveProperty('initEmits')
  })

  it('lists the bindings returned by setup()', () => {
    const { lifeCycles, setupBindings } = parse(`
      import { computed, defineComponent, reactive, ref } from 'vue'
      export default defineComponent({
        setup() {
          const text = ref('outer')
          const isShowDialog = ref(false)
          const info = reactive({ info: '', user: { username: '', age: -1 } })
          const double = computed(() => 2)
          function testFunc() {}
          const onClose = () => {}
          async function load() {}
          return { text, isShowDialog, info, double, testFunc, onClose, load, title: text }
        },
      })
    `)
    expect(lifeCycles).toHaveProperty('setup')
    expect(setupBindings).toEqual({
      state: {
        text: 'outer',
        isShowDialog: false,
        info: { info: '', user: { username: '', age: -1 } },
        double: null,
        title: 'outer',
      },
      methods: ['testFunc', 'onClose', 'load'],
    })
  })

  it('lists nothing when setup() does not return an object literal', () => {
    const { lifeCycles, setupBindings } = parse(`
      export default defineComponent({
        setup() {
          return () => null
        },
      })
    `)
    expect(lifeCycles).toHaveProperty('setup')
    expect(setupBindings).toEqual({ state: {}, methods: [] })
  })
})
