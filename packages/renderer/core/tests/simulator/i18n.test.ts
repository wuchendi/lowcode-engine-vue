import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { createSimulatorRenderer } from '../../src/simulator/simulator'
import { createStubDocument, createStubHost } from './stub-host'

describe('project messages in the canvas', () => {
  it('come from the host i18n consumer (project.i18n)', async () => {
    const doc = createStubDocument({ id: 'doc', fileName: 'index' })
    const host = createStubHost({ documents: [doc], currentDocument: doc })
    const simulator = createSimulatorRenderer(host)
    const consume = host.i18nConsumer.consume.mock.calls[0]?.[0] as
      | ((data: unknown) => void)
      | undefined
    expect(consume).toBeTypeOf('function')
    consume!({ 'en-US': { hello: 'Hello' }, 'zh-CN': { hello: '你好' } })
    await nextTick()
    expect(simulator.documentInstances[0].messages).toEqual({
      'en-US': { hello: 'Hello' },
      'zh-CN': { hello: '你好' },
    })
    simulator.dispose()
  })
})
