import { Button, Icon, Input, Message } from '@alifd/next'
import type {
  IPublicApiMaterial,
  IPublicModelPluginContext,
} from '@alilc/lowcode-types'
import React, { useState } from 'react'
import { i18nTitle, intl } from '@/locale'
import { fetchMaterialAssets, MaterialError } from '@/utils/materials'

/** `assets.json` URLs of the materials added to the project (saved with it). */
let urls: string[] = []

export const projectMaterials = () => urls

function setMaterials(next: string[]) {
  urls = next
}

/** Loads a material into the designer (components pane and canvas). */
export async function loadMaterial(material: IPublicApiMaterial, url: string) {
  const assets = await fetchMaterialAssets(url)
  await material.loadIncrementalAssets(assets)
}

/**
 * Loads the materials a saved project uses; one that fails is reported and
 * kept in the list.
 */
export async function restoreMaterials(
  material: IPublicApiMaterial,
  saved: string[] = [],
) {
  setMaterials(saved)
  for (const url of saved) {
    try {
      await loadMaterial(material, url)
    } catch (error) {
      console.error(error)
      Message.error(intl('MaterialLoadFailed', { url }))
    }
  }
}

const MaterialIcon = (
  <svg viewBox="0 0 1024 1024" width="14" height="14" fill="currentColor">
    <path d="M512 64 128 256v512l384 192 384-192V256L512 64zm0 72 304 152-304 152-304-152 304-152zM192 340l288 144v384L192 724V340zm352 528V484l288-144v384L544 868z" />
  </svg>
)

function MaterialsPane({ ctx }: { ctx: IPublicModelPluginContext }) {
  const [list, setList] = useState(projectMaterials)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const refresh = () => setList([...projectMaterials()])

  const add = async () => {
    const next = url.trim()
    if (!next) return
    if (projectMaterials().includes(next)) {
      Message.warning(intl('MaterialAdded'))
      return
    }
    setLoading(true)
    try {
      await loadMaterial(ctx.material, next)
      setMaterials([...projectMaterials(), next])
      setUrl('')
      refresh()
      Message.success(intl('MaterialLoaded'))
    } catch (error) {
      Message.error(
        error instanceof MaterialError && error.reason === 'invalid'
          ? intl('MaterialInvalid')
          : intl('MaterialLoadFailed', { url: next }),
      )
    } finally {
      setLoading(false)
    }
  }

  const remove = (item: string) => {
    setMaterials(projectMaterials().filter((u) => u !== item))
    refresh()
    // The engine keeps loaded components until the designer reloads
    Message.notice(intl('MaterialRemoved'))
  }

  return (
    <div className="lowcode-materials-pane" style={{ padding: 12 }}>
      <p style={{ margin: '0 0 8px', color: '#666', fontSize: 12 }}>
        {intl('MaterialsHint')}
      </p>
      <Input
        style={{ width: '100%' }}
        placeholder="https://…/assets.json"
        value={url}
        onChange={(value) => setUrl(String(value))}
        onPressEnter={() => void add()}
      />
      <Button
        type="primary"
        style={{ width: '100%', margin: '8px 0 12px' }}
        loading={loading}
        onClick={() => void add()}
      >
        {intl('AddMaterial')}
      </Button>
      {list.length === 0 ? (
        <p style={{ color: '#999', fontSize: 12 }}>{intl('NoMaterials')}</p>
      ) : (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {list.map((item) => (
            <li
              key={item}
              title={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 0',
                fontSize: 12,
              }}
            >
              {MaterialIcon}
              <span
                style={{
                  flex: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
              </span>
              <Icon
                type="ashbin"
                size="small"
                title={intl('RemoveMaterial')}
                style={{ cursor: 'pointer' }}
                onClick={() => remove(item)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Left panel adding materials by the URL of their assets.json. */
const MaterialsPlugin = (ctx: IPublicModelPluginContext) => ({
  init() {
    const pane = ctx.skeleton.add({
      area: 'leftArea',
      type: 'PanelDock',
      name: 'materialsPane',
      content: () => <MaterialsPane ctx={ctx} />,
      props: {
        align: 'top',
        icon: MaterialIcon,
        description: i18nTitle('物料', 'Materials'),
      },
      panelProps: { width: '280px', title: i18nTitle('物料', 'Materials') },
    })
    pane?.disable?.()
    ctx.project.onSimulatorRendererReady(() => pane?.enable?.())
  },
})

MaterialsPlugin.pluginName = 'MaterialsPlugin'

export default MaterialsPlugin
