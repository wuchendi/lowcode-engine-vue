import { Select } from '@alifd/next'
import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import { createElement as h } from 'react'
import { intl } from '@/locale'
import { DEFAULT_LOCALE, LOCALES } from '@/utils/locales'

const STORAGE_KEY = 'canvasLocale'

/** Locale of the canvas (the project messages it shows), kept across reloads. */
export const canvasLocale = () =>
  window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LOCALE

/** Switches the locale of the canvas, independently of the designer's. */
const CanvasLocalePlugin = (ctx: IPublicModelPluginContext) => ({
  init() {
    const { project, skeleton } = ctx
    const apply = (locale: string) =>
      project.simulatorHost?.set('locale', locale)
    project.onSimulatorHostReady(() => apply(canvasLocale()))

    skeleton.add({
      area: 'topArea',
      type: 'Widget',
      name: 'canvasLocale',
      props: { align: 'center' },
      content: h(Select, {
        className: 'lowcode-canvas-locale',
        'aria-label': intl('CanvasLocale'),
        title: intl('CanvasLocale'),
        style: { width: 96, marginLeft: 12 },
        dataSource: LOCALES,
        defaultValue: canvasLocale(),
        onChange: (value: unknown) => {
          const locale = String(value)
          window.localStorage.setItem(STORAGE_KEY, locale)
          apply(locale)
        },
      }),
    })
  },
})

CanvasLocalePlugin.pluginName = 'CanvasLocalePlugin'

export default CanvasLocalePlugin
