import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import enUS from './en-US.json'
import zhCN from './zh-CN.json'

type MessageKey = keyof typeof zhCN

let translate = (key: MessageKey) => zhCN[key]

/** Reads the messages in the engine locale; called by the plugin's init. */
export function setupIntl(ctx: IPublicModelPluginContext) {
  translate = ctx.common.utils.createIntl({ 'en-US': enUS, 'zh-CN': zhCN })
    .intl as typeof translate
}

export const intl = (key: MessageKey) => translate(key)
