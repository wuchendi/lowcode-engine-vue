import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import { name, version } from '../package.json'
import { IconQuestion } from './icon'

interface Options {
  /**
   * Link address, default is 'https://lowcode-engine.cn/index'
   */
  href?: string
  /**
   * Link target, default is '_blank'
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | string
}

const PluginManual = (
  ctx: IPublicModelPluginContext,
  options: Options = {},
) => {
  return {
    init() {
      const { href = 'https://lowcode-engine.cn/index', target = '_blank' } =
        options

      ctx.skeleton.add({
        area: 'leftArea',
        name: 'manualPane',
        type: 'PanelDock',
        props: {
          align: 'bottom',
          icon: IconQuestion,
          description: { type: 'i18n', 'zh-CN': '如何使用', 'en-US': 'Help' },
          onClick() {
            window.open(href, target)?.focus()
          },
        },
      })
    },
  }
}

PluginManual.pluginName = 'PluginManual'
PluginManual.meta = {
  preferenceDeclaration: {
    title: 'PluginManual Plugin Parameter Definition',
    properties: [
      {
        key: 'href',
        type: 'string',
        description: 'Link address',
      },
      {
        key: 'target',
        type: 'string',
        description: 'Link target',
      },
    ],
  },
}

export default PluginManual

console.log(
  `%c ${name} %c v`.concat(version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
)
