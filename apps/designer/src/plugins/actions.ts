import { Button, Message } from '@alifd/next'
import { project } from '@alilc/lowcode-engine'
import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import { createElement as h } from 'react'
import { VueVersionSwitch } from '@/components/vue-version-switch'
import { intl } from '@/locale'
import Logger from '@/utils/Logger'
import { saveSchema } from '@/utils/store'
import { vueVersion } from '@/version'

const save = async () => {
  await saveSchema()
  Message.success(intl('SavedLocally'))
}

const preview = async () => {
  await saveSchema()
  const url = new URL('preview.html', window.location.href)
  url.searchParams.set('vue', String(vueVersion))
  const page = project.currentDocument?.exportSchema(
    IPublicEnumTransformStage.Save,
  )?.fileName
  if (page) url.searchParams.set('page', page)
  window.open(url)
}

const savePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'saveSample',
    init() {
      const { skeleton, hotkey } = ctx

      skeleton.add({
        name: 'vueVersionSwitch',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'left' },
        content: h(VueVersionSwitch),
      })

      skeleton.add({
        name: 'saveSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: h(
          Button,
          {
            onClick: () => {
              save().catch((error) => Logger.error(error))
            },
          },
          intl('SaveLocally'),
        ),
      })

      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: h(
          Button,
          {
            onClick: () => {
              preview().catch((error) => Logger.error(error))
            },
          },
          intl('Preview'),
        ),
      })

      hotkey.bind('command+s', async (e) => {
        e.preventDefault()
        await save()
      })
    },
  }
}

savePlugin.pluginName = 'saveSample'

export default savePlugin
