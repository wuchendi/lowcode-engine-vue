import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import enUS from './en-US.json'
import zhCN from './zh-CN.json'

export type Intl = (
  key: keyof typeof zhCN,
  params?: Record<string, unknown>,
) => string

/** Messages of the plugin in the engine locale. */
export function createIntl(ctx: IPublicModelPluginContext): Intl {
  return ctx.common.utils.createIntl({ 'en-US': enUS, 'zh-CN': zhCN }).intl
}
