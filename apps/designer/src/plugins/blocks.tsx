import { Dialog, Icon, Input, Message } from '@alifd/next'
import type {
  IPublicModelNode,
  IPublicModelPluginContext,
  IPublicTypeNodeSchema,
} from '@alilc/lowcode-types'
import {
  IPublicEnumDragObjectType,
  IPublicEnumTransformStage,
} from '@alilc/lowcode-types'
import React, { useEffect, useRef, useState } from 'react'
import { i18nTitle, intl } from '@/locale'
import type { Block } from '@/utils/blocks'
import { createBlockStore } from '@/utils/blocks'
import { storageKey } from '@/version'

const store = createBlockStore(window.localStorage, storageKey('blocks'))
const listeners = new Set<() => void>()
const changed = () => {
  for (const listener of listeners) listener()
}

const BlockIcon = (
  <svg viewBox="0 0 1024 1024" width="14" height="14" fill="currentColor">
    <path d="M128 128h320v320H128zm448 0h320v320H576zM128 576h320v320H128zm448 0h320v320H576z" />
  </svg>
)

/** Asks for a name and saves the node as a block. */
function saveAsBlock(node: IPublicModelNode) {
  let name = node.title ? String(node.title) : node.componentName
  const dialog = Dialog.show({
    v2: true,
    title: intl('SaveAsBlock'),
    width: 400,
    locale: { ok: intl('Ok'), cancel: intl('Cancel') },
    content: (
      <Input
        autoFocus
        style={{ width: '100%' }}
        defaultValue={name}
        placeholder={intl('BlockName')}
        onChange={(value) => {
          name = String(value)
        }}
      />
    ),
    onOk: () => {
      if (!name.trim()) {
        Message.error(intl('BlockNameRequired'))
        return false
      }
      store.save(
        name.trim(),
        node.exportSchema(
          IPublicEnumTransformStage.Save,
        ) as IPublicTypeNodeSchema,
      )
      changed()
      Message.success(intl('BlockSaved'))
      dialog.hide()
      return true
    },
  })
}

/** Inserts a copy after the selected node, or at the end of the page. */
function insertBlock(ctx: IPublicModelPluginContext, block: Block) {
  const doc = ctx.project.currentDocument
  const root = doc?.root
  if (!doc || !root) return
  const selected = doc.selection.getNodes()[0]
  const parent = selected && !selected.isRootNode ? selected.parent : root
  const at =
    selected && !selected.isRootNode && selected.index !== undefined
      ? selected.index + 1
      : undefined
  const inserted = doc.insertNode(parent ?? root, block.schema, at, true)
  if (inserted) doc.selection.select(inserted.id)
}

function BlocksPane({ ctx }: { ctx: IPublicModelPluginContext }) {
  const [blocks, setBlocks] = useState(store.list)
  const list = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const refresh = () => setBlocks(store.list())
    listeners.add(refresh)
    return () => {
      listeners.delete(refresh)
    }
  }, [])

  // Dragging a block drops a copy of its nodes into the canvas
  useEffect(() => {
    const shell = list.current
    const dragon = ctx.canvas.dragon
    if (!shell || !dragon) return
    dragon.from(shell, (event: MouseEvent) => {
      const item = (event.target as Element).closest<HTMLElement>(
        '[data-block-id]',
      )
      const block = store.list().find((b) => b.id === item?.dataset.blockId)
      return block
        ? { type: IPublicEnumDragObjectType.NodeData, data: block.schema }
        : null
    })
  }, [ctx])

  const remove = (block: Block) => {
    Dialog.confirm({
      v2: true,
      title: intl('DeleteBlock'),
      content: intl('DeleteBlockConfirm', { name: block.name }),
      locale: { ok: intl('Ok'), cancel: intl('Cancel') },
      onOk: () => {
        store.remove(block.id)
        changed()
      },
    })
  }

  return (
    <div className="lowcode-blocks-pane" style={{ padding: 12 }}>
      {blocks.length === 0 && (
        <div style={{ color: '#999', fontSize: 12 }}>{intl('NoBlocks')}</div>
      )}
      <ul ref={list} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {blocks.map((block) => (
          <li
            key={block.id}
            data-block-id={block.id}
            className="lowcode-blocks-item"
            title={intl('BlockItemTip')}
            onClick={() => insertBlock(ctx, block)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 8px',
              marginBottom: 6,
              border: '1px solid #e6e6e6',
              borderRadius: 4,
              cursor: 'grab',
              userSelect: 'none',
            }}
          >
            {BlockIcon}
            <span style={{ flex: 1, overflow: 'hidden' }}>{block.name}</span>
            <Icon
              type="ashbin"
              size="small"
              title={intl('DeleteBlock')}
              className="lowcode-blocks-remove"
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation()
                remove(block)
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Reusable node trees: saved from the node toolbar, inserted from a panel. */
const BlocksPlugin = (ctx: IPublicModelPluginContext) => ({
  init() {
    ctx.material.addBuiltinComponentAction({
      name: 'saveAsBlock',
      content: {
        icon: BlockIcon,
        title: i18nTitle('保存为区块', 'Save as block'),
        action: saveAsBlock,
      },
      condition: (node: IPublicModelNode) => !node.isRootNode,
      important: true,
    })
    const pane = ctx.skeleton.add({
      area: 'leftArea',
      type: 'PanelDock',
      name: 'blocksPane',
      content: () => <BlocksPane ctx={ctx} />,
      props: {
        align: 'top',
        icon: BlockIcon,
        description: i18nTitle('区块', 'Blocks'),
      },
      panelProps: { width: '240px', title: i18nTitle('区块', 'Blocks') },
    })
    pane?.disable?.()
    ctx.project.onSimulatorRendererReady(() => pane?.enable?.())
  },
})

BlocksPlugin.pluginName = 'BlocksPlugin'

export default BlocksPlugin
