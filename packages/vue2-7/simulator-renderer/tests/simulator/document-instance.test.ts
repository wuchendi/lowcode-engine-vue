import type { DocumentModel } from '@alilc/lowcode-designer'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import type { MountedRenderer } from '../../../renderer/tests/helpers/mount-renderer'
import { mountRenderer } from '../../../renderer/tests/helpers/mount-renderer'
import type { ComponentInstance, DocumentInstance } from '../../src/interface'
import { createDocumentInstance } from '../../src/simulator'
import { createStubDocument, createStubHost } from '../helpers/stub-host'

const Item = defineComponent({
  name: 'Item',
  render: () => h('span', 'item'),
})

type VueInternals = ComponentInstance & {
  _uid: number
  _events: Record<string, unknown[] | undefined>
}

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

async function mountLoop(docInst: DocumentInstance) {
  return mountRenderer({
    schema: {
      componentName: 'Page',
      id: 'page',
      children: [{ componentName: 'Item', id: 'item', loop: [1, 2, 3] }],
    },
    components: { Item },
    designMode: 'design',
    onCompGetCtx: (schema, inst) =>
      docInst.mountInstance(schema.id as string, inst as ComponentInstance),
  })
}

function lastItemRecords(host: ReturnType<typeof createStubHost>) {
  const calls = host.setInstance.mock.calls.filter(
    (call: unknown[]) => call[1] === 'item',
  )
  return calls[calls.length - 1]?.[2] as unknown[] | null
}

describe('createDocumentInstance', () => {
  let mounted: MountedRenderer | undefined

  afterEach(() => {
    vi.restoreAllMocks()
    mounted?.destroy()
    mounted = undefined
  })

  it('keeps every instance of a looped node registered', async () => {
    const { host, docInst } = setup()
    mounted = await mountLoop(docInst)
    await mounted.flush()

    const instances = docInst.instancesMap.get('item') as VueInternals[]
    expect(instances).toHaveLength(3)
    expect(new Set(instances).size).toBe(3)
    for (const inst of instances) {
      expect(docInst.getComponentInstance(inst._uid)).toBe(inst)
    }
    expect(lastItemRecords(host)).toHaveLength(3)
  })

  it('removes destroyed instances', async () => {
    const { host, docInst } = setup()
    mounted = await mountLoop(docInst)
    await mounted.flush()

    const [first, ...rest] = docInst.instancesMap.get('item') as VueInternals[]
    first.$destroy()

    expect(docInst.instancesMap.get('item')).toEqual(rest)
    expect(docInst.getComponentInstance(first._uid)).toBeUndefined()
    expect(lastItemRecords(host)).toHaveLength(2)

    docInst.mountInstance('item', null)
    expect(docInst.instancesMap.get('item')).toEqual(rest)

    for (const inst of rest) inst.$destroy()
    docInst.mountInstance('item', null)
    expect(docInst.instancesMap.has('item')).toBe(false)
    expect(lastItemRecords(host)).toBeNull()
    for (const inst of rest) {
      expect(docInst.getComponentInstance(inst._uid)).toBeUndefined()
    }
  })

  it('registers the destroy hook only once per instance', async () => {
    const { docInst } = setup()
    mounted = await mountLoop(docInst)
    await mounted.flush()

    const [inst] = docInst.instancesMap.get('item') as VueInternals[]
    docInst.mountInstance('item', inst)
    docInst.mountInstance('item', inst)
    expect(inst._events['hook:destroyed']).toHaveLength(1)
    expect(inst.$options.destroyed ?? []).toHaveLength(0)
  })

  it('S-07: rerender() refreshes the exported schema', () => {
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
