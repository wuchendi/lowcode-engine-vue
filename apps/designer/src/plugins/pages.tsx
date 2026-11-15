import { Button, Dialog, Icon, Input } from '@alifd/next'
import type {
  IPublicModelDocumentModel,
  IPublicModelPluginContext,
} from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import React, { useCallback, useEffect, useState } from 'react'
import { i18nTitle, intl } from '@/locale'
import { componentNameError, newComponentSchema } from '@/utils/components'
import { newPageSchema, pagePathError } from '@/utils/pages'

type Project = IPublicModelPluginContext['project']
type Kind = 'page' | 'component'

interface PageItem {
  id: string
  /** Route path of a page, name of a component. */
  name: string
  kind: Kind
}

function pageItems(project: Project): PageItem[] {
  return project.documents.map((doc: IPublicModelDocumentModel) => ({
    id: doc.id,
    name: doc.exportSchema(IPublicEnumTransformStage.Save)?.fileName ?? '',
    kind: doc.root?.componentName === 'Component' ? 'component' : 'page',
  }))
}

const KINDS = {
  page: {
    title: 'NewPage',
    initial: '/',
    placeholder: '/about',
    error: pagePathError,
    schema: newPageSchema,
  },
  component: {
    title: 'NewComponent',
    initial: '',
    placeholder: 'UserCard',
    error: componentNameError,
    schema: newComponentSchema,
  },
} as const

function AddDialog({
  kind,
  taken,
  onAdd,
  onClose,
}: {
  kind: Kind
  taken: string[]
  onAdd: (name: string) => void
  onClose: () => void
}) {
  const config = KINDS[kind]
  const [name, setName] = useState<string>(config.initial)
  const [touched, setTouched] = useState(false)
  const error = config.error(name.trim(), taken)
  const submit = () => {
    setTouched(true)
    if (!error) onAdd(name.trim())
  }
  return (
    <Dialog
      visible
      title={intl(config.title)}
      locale={{ ok: intl('Ok'), cancel: intl('Cancel') }}
      style={{ width: 400 }}
      onOk={submit}
      onClose={onClose}
      onCancel={onClose}
    >
      <Input
        autoFocus
        style={{ width: '100%' }}
        placeholder={config.placeholder}
        value={name}
        state={touched && error ? 'error' : undefined}
        onChange={(value) => setName(String(value))}
        onPressEnter={submit}
      />
      {touched && error && (
        <div style={{ marginTop: 6, color: '#d23c26', fontSize: 12 }}>
          {intl(error)}
        </div>
      )}
    </Dialog>
  )
}

const itemStyle = (active: boolean): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 8px',
  cursor: 'pointer',
  borderRadius: 4,
  ...(active ? { background: '#e8f2ff', color: '#0079f2' } : {}),
})

function PagesPane({ project }: { project: Project }) {
  const [items, setItems] = useState(() => pageItems(project))
  const [current, setCurrent] = useState(project.currentDocument?.id)
  const [adding, setAdding] = useState<Kind | null>(null)

  const sync = useCallback(() => {
    setItems(pageItems(project))
    setCurrent(project.currentDocument?.id)
  }, [project])

  useEffect(() => {
    const disposers = [
      project.onChangeDocument(sync),
      project.onRemoveDocument(sync),
    ]
    sync()
    return () => {
      for (const dispose of disposers) dispose()
    }
  }, [project, sync])

  const pages = items.filter((item) => item.kind === 'page')
  const components = items.filter((item) => item.kind === 'component')

  const remove = (item: PageItem) => {
    const isPage = item.kind === 'page'
    Dialog.confirm({
      title: intl(isPage ? 'DeletePage' : 'DeleteComponent'),
      content: isPage
        ? intl('DeletePageConfirm', { path: item.name })
        : intl('DeleteComponentConfirm', { name: item.name }),
      locale: { ok: intl('Ok'), cancel: intl('Cancel') },
      onOk: () => {
        const doc = project.getDocumentById(item.id)
        if (!doc) return
        if (doc.id === project.currentDocument?.id) {
          const next = pages.find((page) => page.id !== item.id)
          if (next) project.openDocument(next.id)
        }
        project.removeDocument(doc)
        // onRemoveDocument fires before the document leaves the list
        sync()
      },
    })
  }

  const group = (kind: Kind, list: PageItem[], removable: boolean) => (
    <>
      <Button
        type={kind === 'page' ? 'primary' : 'normal'}
        style={{ width: '100%', margin: '8px 0' }}
        className={`lowcode-pages-add-${kind}`}
        onClick={() => setAdding(kind)}
      >
        <Icon type="add" />
        {intl(KINDS[kind].title)}
      </Button>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {list.map((item) => (
          <li
            key={item.id}
            className={`lowcode-pages-item lowcode-pages-${kind}`}
            onClick={() => project.openDocument(item.id)}
            style={itemStyle(item.id === current)}
          >
            <span style={{ flex: 1, overflow: 'hidden' }}>{item.name}</span>
            {removable && (
              <Icon
                type="ashbin"
                size="small"
                title={intl(kind === 'page' ? 'DeletePage' : 'DeleteComponent')}
                className="lowcode-pages-remove"
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation()
                  remove(item)
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <div className="lowcode-pages-pane" style={{ padding: '4px 12px 12px' }}>
      {group('page', pages, pages.length > 1)}
      <div style={{ marginTop: 16, color: '#666', fontSize: 12 }}>
        {intl('LowCodeComponents')}
      </div>
      {group('component', components, true)}
      {adding && (
        <AddDialog
          kind={adding}
          taken={items.map((item) => item.name)}
          onClose={() => setAdding(null)}
          onAdd={(name) => {
            setAdding(null)
            project.openDocument(KINDS[adding].schema(name) as never)
          }}
        />
      )}
    </div>
  )
}

/** Left panel listing the project's pages and low-code components. */
const PagesPlugin = (ctx: IPublicModelPluginContext) => ({
  init() {
    const pane = ctx.skeleton.add({
      area: 'leftArea',
      type: 'PanelDock',
      name: 'pagesPane',
      content: () => <PagesPane project={ctx.project} />,
      props: {
        align: 'top',
        icon: 'kaiwenjianjia',
        description: i18nTitle('页面', 'Pages'),
      },
      panelProps: { width: '240px', title: i18nTitle('页面', 'Pages') },
    })
    pane?.disable?.()
    ctx.project.onSimulatorRendererReady(() => pane?.enable?.())
  },
})

PagesPlugin.pluginName = 'PagesPlugin'

export default PagesPlugin
