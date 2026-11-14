import DataSourcePane from '@alilc/lowcode-plugin-datasource-pane/lib/pane'
import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import React, { useEffect, useMemo, useState } from 'react'
import { i18nTitle } from '@/locale'
import { documentProject } from '@/utils/document-project'

function CurrentPageDataSource({ ctx }: { ctx: IPublicModelPluginContext }) {
  const { project } = ctx
  const [docId, setDocId] = useState(project.currentDocument?.id)
  useEffect(
    () => project.onChangeDocument((doc) => setDocId(doc.id)),
    [project],
  )
  const scoped = useMemo(() => documentProject(project), [project])
  return (
    <DataSourcePane
      key={docId}
      event={ctx.event as never}
      project={scoped as never}
      logger={ctx.logger as never}
      setters={ctx.setters as never}
      dataSourceTypes={
        ctx.preference.getPreferenceValue('dataSourceTypes') as never
      }
      importPlugins={
        ctx.preference.getPreferenceValue('importPlugins') as never
      }
    />
  )
}

/**
 * The official data source pane, editing the current page: the plugin itself
 * reads and writes the first page and imports the whole project.
 */
const DataSourcePlugin = (ctx: IPublicModelPluginContext) => ({
  init() {
    const dock = ctx.skeleton.add({
      area: 'leftArea',
      name: 'dataSourcePane',
      type: 'PanelDock',
      props: {
        icon: 'shujuyuan',
        description: i18nTitle('数据源', 'Data sources'),
      },
      panelProps: { width: '300px' },
      content: () => <CurrentPageDataSource ctx={ctx} />,
    })
    dock?.disable?.()
    ctx.project.onSimulatorRendererReady(() => dock?.enable?.())
  },
})

DataSourcePlugin.pluginName = 'DataSourcePane'
DataSourcePlugin.meta = {
  preferenceDeclaration: {
    title: 'DataSourcePane plugin preferences',
    properties: [
      {
        key: 'dataSourceTypes',
        type: 'array',
        description: 'Data source types',
      },
      { key: 'importPlugins', type: 'array', description: 'Import plugins' },
    ],
  },
}

export default DataSourcePlugin
