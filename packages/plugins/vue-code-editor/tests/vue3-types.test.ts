import { describe, expect, it } from 'vitest'
import { readVue3Types } from '../build/vue3-types'

describe('readVue3Types', () => {
  const libs = readVue3Types()
  const entries = libs.filter((lib) => lib.path.endsWith('/index.d.ts'))
  const byName = new Map(
    entries.map((lib) => [
      lib.path.replace(/^file:\/\/\/node_modules\/|\/index\.d\.ts$/g, ''),
      lib.content,
    ]),
  )

  it('reads the typings of the installed Vue 3 and vue-router 4', () => {
    expect([...byName.keys()].sort()).toEqual([
      '@vue/reactivity',
      '@vue/runtime-core',
      '@vue/runtime-dom',
      '@vue/shared',
      'vue',
      'vue-router',
    ])
    expect(byName.get('@vue/reactivity')).toMatch(/export declare function ref/)
    // APIs of Vue 3.3+ the old snapshot lacked
    expect(byName.get('@vue/runtime-core')).toMatch(/defineModel/)
    expect(byName.get('@vue/runtime-core')).toMatch(/useTemplateRef/)
    expect(byName.get('vue-router')).toMatch(/createRouter/)
  })

  it('includes the declaration chunks the typings import', () => {
    // vue-router 4.6 declares RouterHistory in a `router-<hash>.d.mts` chunk
    const chunk = libs.find((lib) =>
      /^file:\/\/\/node_modules\/vue-router\/router-[\w-]+\.d\.mts$/.test(
        lib.path,
      ),
    )
    expect(chunk?.content).toMatch(/interface RouterHistory/)
  })
})
