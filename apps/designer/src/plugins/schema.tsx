import PluginSchema from '@alilc/lowcode-plugin-schema/es/editor'
import { enUS, zhCN } from '@alilc/lowcode-plugin-schema/es/locale'
import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import React from 'react'
import { documentProject } from '@/utils/document-project'

/**
 * The official schema pane, showing and saving the current page: the plugin
 * itself shows the first page and saves it as the only page of the project.
 */
const SchemaPlugin = (ctx: IPublicModelPluginContext) => ({
  init() {
    const { intl } = ctx.common.utils.createIntl({
      'en-US': enUS,
      'zh-CN': zhCN,
    })
    const pluginContext = Object.create(ctx, {
      project: { value: documentProject(ctx.project) },
      intl: { value: intl },
    }) as IPublicModelPluginContext
    ctx.skeleton.add({
      area: 'leftArea',
      // The pane reloads the schema when the panel of this name opens
      name: 'LowcodePluginAliLowcodePluginSchema',
      type: 'PanelDock',
      props: { align: 'bottom', icon: 'ellipsis', description: 'Schema' },
      panelProps: { width: 'calc(100% - 50px)' },
      content: () => (
        <PluginSchema pluginContext={pluginContext} showProjectSchema={false} />
      ),
    })
  },
})

SchemaPlugin.pluginName = 'LowcodePluginAliLowcodePluginSchema'

export default SchemaPlugin
