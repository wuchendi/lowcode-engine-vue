import { common } from '@alilc/lowcode-engine'
import enUS from './en-US.json'
import zhCN from './zh-CN.json'

export type MessageKey = keyof typeof zhCN

const instance = common.utils.createIntl({ 'en-US': enUS, 'zh-CN': zhCN })

/** Text of `key` in the designer locale. */
export const intl = (key: MessageKey, params?: Record<string, unknown>) =>
  instance.intl(key, params) as string

/** Engine title in both languages (`{ type: 'i18n', ... }`). */
export const i18nTitle = (zh: string, en: string) =>
  ({ type: 'i18n', 'zh-CN': zh, 'en-US': en }) as const
