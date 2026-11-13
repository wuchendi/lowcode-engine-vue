import type { DocumentModel } from '@alilc/lowcode-designer'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { getAdapter } from '../../src'
import type {
  ComponentInstance,
  DocumentInstance,
} from '../../src/simulator/interface'
import { createDocumentInstance } from '../../src/simulator/simulator'
import type { MountedParent } from '../helpers/mount-renderer'
import { mountWithState } from '../helpers/mount-renderer'
import { createStubDocument, createStubHost } from './stub-host'

const Item = defineComponent({
  name: 'Item',
  render: () => h('span', 'item'),
})

function setup() {
  const doc = createStubDocument({ id: 'doc', fileName: 'index' })
  const host = createStubHost({ documents: [doc], currentDocument: doc })
  const docInst = createDocumentInstance(
    doc as unknown as DocumentModel,
    { i18n: {}, appHelper: {} },
    host,
  )
  return { doc, host, docInst }
}

const loopSchema = (loop: number[]) => ({
  componentName: 'Page',
  id: 'page',
  children: [{ componentName: 'Item', id: 'item', loop }],
})

async function mountLoop(docInst: DocumentInstance) {
  const mounted = mountWithState(
    {
      schema: loopSchema([1, 2, 3]),
      designMode: 'design',
      onCompGetCtx: (schema: { id?: string }, inst: ComponentInstance | null) =>
        docInst.mountInstance(schema.id as string, inst),
    },
    { Item },
  )
  await nextTick()
  return mounted
}

const idOf = (inst: ComponentInstance) => getAdapter().instanceId(inst)

function lastItemRecords(host: ReturnType<typeof createStubHost>) {
  const calls = host.setInstance.mock.calls.filter(
    (call: unknown[]) => call[1] === 'item',
  )
  return calls[calls.length - 1]?.[2] as unknown[] | null
}

describe('createDocumentInstance', () => {
  let mounted: MountedParent<Record<string, unknown>> | undefined

  afterEach(() => {
    vi.restoreAllMocks()
    mounted?.destroy()
    mounted = undefined
  })

  it('keeps every instance of a looped node registered', async () => {
    const { host, docInst } = setup()
    mounted = await mountLoop(docInst)

    const instances = docInst.instancesMap.get('item') as ComponentInstance[]
    expect(instances).toHaveLength(3)
    expect(new Set(instances).size).toBe(3)
    for (const inst of instances) {
      expect(docInst.getComponentInstance(idOf(inst))).toBe(inst)
    }
    expect(lastItemRecords(host)).toHaveLength(3)
  })

  it('removes unmounted instances', async () => {
    const { host, docInst } = setup()
    mounted = await mountLoop(docInst)
    const [first, second, third] = docInst.instancesMap.get(
      'item',
    ) as ComponentInstance[]

    mounted.state.schema = loopSchema([1, 2])
    await nextTick()
    await nextTick()
    expect(docInst.instancesMap.get('item')).toEqual([first, second])
    expect(docInst.getComponentInstance(idOf(third))).toBeUndefined()
    expect(lastItemRecords(host)).toHaveLength(2)

    mounted.destroy()
    mounted = undefined
    expect(docInst.instancesMap.has('item')).toBe(false)
    expect(lastItemRecords(host)).toBeNull()
  })

  it('rerender() refreshes the exported schema', () => {
    const { doc, docInst } = setup()
    void docInst.schema
    const before = doc.export.mock.calls.length
    // make sure the timestamp actually changes within the same millisecond
    vi.spyOn(Date, 'now').mockReturnValue(Date.now() + 1000)
    docInst.rerender()
    void docInst.schema
    expect(doc.export.mock.calls.length).toBeGreaterThan(before)
  })
})
