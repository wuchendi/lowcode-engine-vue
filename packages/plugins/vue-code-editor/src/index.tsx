import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import React from 'react'
import type { VueVersion } from './components/JsEditor/types'
import icon from './icon'
import { setupIntl } from './locale'
import { CodeEditorPane } from './pane'
import 'uno.css'
import './style.css'

export interface VueCodeEditorOptions {
  /** Vue version of the renderer; selects the editor's type declarations. Default 3. */
  vue?: VueVersion
}

const plugin = (
  ctx: IPublicModelPluginContext,
  options: VueCodeEditorOptions = {},
) => {
  const { project, skeleton, event, material } = ctx
  return {
    // 插件对外暴露的数据和方法
    exports: () => ({}),
    // 插件的初始化函数，在引擎初始化之后会立刻调用
    async init() {
      setupIntl(ctx)
      const schemaDock = skeleton.add({
        area: 'leftArea',
        name: 'codeEditor',
        type: 'PanelDock',
        props: {
          icon,
          description: { type: 'i18n', 'zh-CN': '源码面板', 'en-US': 'Source' },
        },
        panelProps: {
          width: '500px',
          title: { type: 'i18n', 'zh-CN': '源码面板', 'en-US': 'Source' },
        },
        content: (
          <CodeEditorPane
            material={material}
            project={project}
            skeleton={skeleton}
            event={event}
            vue={options.vue ?? 3}
          />
        ),
      })

      if (schemaDock) {
        schemaDock.disable()
        project.onSimulatorRendererReady(() => {
          schemaDock.enable()
        })
      }
    },
  }
}

plugin.pluginName = 'vueCodeEditor'
plugin.meta = {
  preferenceDeclaration: {
    title: 'Vue code editor options',
    properties: [
      {
        key: 'vue',
        type: 'number',
        description: 'Vue version of the renderer (2 or 3)',
      },
    ],
  },
}

export default plugin
