import { common } from '@alilc/lowcode-engine'
import enUS from './en-US.json'
import zhCN from './zh-CN.json'

export type MessageKey = keyof typeof zhCN

const instance = common?.utils?.createIntl?.({ 'en-US': enUS, 'zh-CN': zhCN })

/** Text of `key` in the engine locale (Chinese without the engine). */
export function intl(key: MessageKey, params: Record<string, unknown> = {}) {
  if (instance) return instance.intl(key, params)
  return zhCN[key].replace(/\{(\w+)\}/g, (_, name) => String(params[name]))
}

/** Whether the engine shows English. */
export const isEnglish = () => instance?.getLocale() === 'en-US'
