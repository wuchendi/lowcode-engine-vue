import { afterEach, describe, expect, it } from 'vitest'
import Vue, { nextTick } from 'vue'
import type { MountedRenderer } from '../helpers/mount-renderer'
import { mountRenderer } from '../helpers/mount-renderer'

type Listener = (info: {
  key: string
  prop: { path: string[] }
  newValue: unknown
  oldValue?: unknown
}) => void

// Sequence the designer emits when a variable-bound prop is switched back to
// a plain setter: the prop is unset, then set again.
describe('design mode prop unset and then set again', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    mounted?.destroy()
    mounted = undefined
  })

  it('keeps reacting to the prop afterwards', async () => {
    const calls: string[] = []
    Vue.directive('probe', {
      bind: (_el, binding) => {
        calls.push(`bind:${binding.value}`)
      },
      update: (_el, binding) => {
        calls.push(`update:${binding.oldValue}->${binding.value}`)
      },
      unbind: () => {
        calls.push('unbind')
      },
    })

    const expression = { type: 'JSExpression', value: 'this.flag', mock: false }
    const listeners: Listener[] = []
    const nodeSchema = {
      componentName: 'span',
      id: 'target',
      props: { id: 'target-el', 'v-probe': expression },
      children: 'text',
    }
    const node = {
      isLocked: false,
      export: () => nodeSchema,
      getProp: () => null,
      getPropValue: () => undefined,
      isContainer: () => false,
      onChildrenChange: () => () => {},
      onPropChange: (listener: Listener) => {
        listeners.push(listener)
        return () => {}
      },
    }
    mounted = await mountRenderer({
      schema: {
        componentName: 'Page',
        id: 'page',
        state: { flag: true },
        children: [nodeSchema],
      },
      components: { span: 'span' },
      designMode: 'design',
      getNode: ((id: string) => (id === 'target' ? node : null)) as never,
    })
    const emit = (key: string, newValue: unknown, oldValue?: unknown) => {
      for (const listener of listeners) {
        listener({ key, prop: { path: [key] }, newValue, oldValue })
      }
    }
    expect(calls).toEqual(['bind:true'])
    calls.length = 0

    // The directive must stay bound across the unset: some directives (for
    // example Element UI's v-loading) break when unbound and bound again on
    // the same element.
    emit('___loopArgs___', [])
    emit('v-probe', undefined, expression)
    await nextTick()
    emit('_unsafe_MixedSetter_v-probe_select', 'BoolSetter')
    emit('v-probe', true)
    await nextTick()
    expect(calls).not.toContain('unbind')
    expect(calls.filter((call) => call.startsWith('bind'))).toEqual([])

    emit('v-probe', false, true)
    await nextTick()
    expect(calls.at(-1)).toBe('update:true->false')

    emit('v-probe', true, false)
    await nextTick()
    expect(calls.at(-1)).toBe('update:false->true')
  })
})
