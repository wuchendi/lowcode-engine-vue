import { plugins } from '@alilc/lowcode-engine'
import type { IPublicModelPluginContext } from '@alilc/lowcode-types'

/**
 * More plugins can be found here
 *
 * https://github.com/cdLab996/lowcode-engine-demo-vue?tab=readme-ov-file#-credits
 */

import ComponentsPane from '@alilc/lowcode-plugin-components-pane'
import Inject from '@alilc/lowcode-plugin-inject'
import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop'
import SimulatorResizer from '@alilc/lowcode-plugin-simulator-select'
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo'
import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en'
import CodeGenerator from '@cdlab996/lowcode-plugin-code-generator'
import DirectiveLoading from '@cdlab996/lowcode-plugin-directive-loading'
import ManualPlugin from '@cdlab996/lowcode-plugin-manual'
import PluginSetDocUrlProp from '@cdlab996/lowcode-plugin-set-doc-url'
import CodeEditor from '@cdlab996/lowcode-plugin-vue-code-editor'
import { i18nTitle } from '@/locale'
import { vueVersion } from '@/version'
import { Logo } from '../components/logo/logo'
// setters
import SetterPlugin from '../setters/index'
import Actions from './actions'
import BlocksPlugin from './blocks'
import DataSourcePanePlugin from './datasource'
import ResourceInit from './init'
import LowCodeComponentsPlugin from './lowcode-components'
import PagesPlugin from './pages'
import SchemaPlugin from './schema'

export default async function registerPlugins() {
  // Inject：支持调试功能
  await plugins.register(Inject)

  // 高级设置面板中设置 ref-id（实现：https://lowcode-engine.cn/site/docs/api/material#%E7%A4%BA%E4%BE%8B-8）
  await plugins.register(SetRefPropPlugin)

  // 高级面板中设置 v-loading 指令
  await plugins.register(DirectiveLoading)

  // 支持给每个组件注入 docUrl
  await plugins.register(PluginSetDocUrlProp)

  // 加载默认的资产包、schema
  await plugins.register(ResourceInit)

  // 注册 logo 和组件面板
  const builtinPluginRegistry = (ctx: IPublicModelPluginContext) => {
    return {
      name: 'builtin-plugin-registry',
      init() {
        const { skeleton, project } = ctx
        skeleton.add({
          area: 'topArea',
          type: 'Widget',
          name: 'logo',
          content: Logo,
          contentProps: {
            logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
            href: 'https://lowcode-engine.cn',
          },
          props: {
            align: 'left',
          },
        })

        const componentsPane = skeleton.add({
          area: 'leftArea',
          type: 'PanelDock',
          name: 'componentsPane',
          content: ComponentsPane,
          props: {
            align: 'top',
            icon: 'zujianku',
            description: i18nTitle('组件库', 'Components'),
          },
        })
        componentsPane?.disable?.()
        project.onSimulatorRendererReady(() => {
          componentsPane?.enable?.()
        })
      },
    }
  }
  builtinPluginRegistry.pluginName = 'builtinPluginRegistry'
  await plugins.register(builtinPluginRegistry)

  // 页面管理：新建、切换、删除页面
  await plugins.register(PagesPlugin)

  // 组件文档注册为低代码组件
  await plugins.register(LowCodeComponentsPlugin)

  // 区块：保存节点树，再从面板插入
  await plugins.register(BlocksPlugin)

  // 注册数据源面板
  await plugins.register(DataSourcePanePlugin)

  // 注册源码面板
  await plugins.register(CodeEditor, { vue: vueVersion })

  // 注册 Schema 面板
  await plugins.register(SchemaPlugin)

  // 注册 使用手册
  await plugins.register(ManualPlugin, {
    href: 'https://github.com/cdLab996/lowcode-engine-demo-vue',
  })

  // 画布切换
  await plugins.register(SimulatorResizer)

  // 注册回退/前进
  await plugins.register(UndoRedoPlugin)

  // 出码：生成 Vue 项目
  await plugins.register(CodeGenerator, { vue: vueVersion })

  // 中英文切换
  await plugins.register(ZhEnPlugin)

  // 注册操作按钮（保存、预览）
  await plugins.register(Actions)

  // 注册 Setter
  await plugins.register(SetterPlugin)
}
