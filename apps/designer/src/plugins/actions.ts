import { Button, Dialog, Message } from '@alifd/next'
import { project } from '@alilc/lowcode-engine'
import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import { createElement as h } from 'react'
import { VueVersionSwitch } from '@/components/vue-version-switch'
import { intl } from '@/locale'
import Logger from '@/utils/Logger'
import type { ProjectRecord } from '@/utils/project-storage'
import {
  ProjectFileError,
  parseProjectFile,
  serializeProject,
} from '@/utils/project-storage'
import { currentProject, projectStorage, saveProject } from '@/utils/store'
import { vueVersion } from '@/version'
import { canvasLocale } from './canvas-locale'

const save = async () => {
  await saveProject()
  Message.success(intl('SavedLocally'))
}

const preview = async () => {
  await saveProject()
  const url = new URL('preview.html', window.location.href)
  url.searchParams.set('vue', String(vueVersion))
  const page = project.currentDocument?.exportSchema(
    IPublicEnumTransformStage.Save,
  )?.fileName
  if (page) url.searchParams.set('page', page)
  url.searchParams.set('locale', canvasLocale())
  window.open(url)
}

/** Downloads the project as a JSON file. */
const exportProject = async () => {
  const text = serializeProject(await currentProject(), vueVersion)
  const url = URL.createObjectURL(
    new Blob([text], { type: 'application/json' }),
  )
  const link = document.createElement('a')
  link.href = url
  link.download = `lowcode-project-vue${vueVersion}.json`
  link.click()
  setTimeout(() => URL.revokeObjectURL(url))
}

/** Replaces the project with an exported one, then reloads the designer. */
const importProject = async (file: File) => {
  let record: ProjectRecord
  try {
    record = parseProjectFile(await file.text(), vueVersion)
  } catch (error) {
    if (!(error instanceof ProjectFileError)) throw error
    Message.error(
      error.reason === 'otherVue'
        ? intl('ProjectForOtherVue', { version: error.vue })
        : intl('InvalidProjectFile'),
    )
    return
  }
  Dialog.confirm({
    title: intl('ImportProject'),
    content: intl('ImportProjectConfirm'),
    locale: { ok: intl('Ok'), cancel: intl('Cancel') },
    onOk: async () => {
      await projectStorage.save(record)
      window.location.reload()
    },
  })
}

const chooseProjectFile = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.json,application/json'
  input.onchange = () => {
    const file = input.files?.[0]
    if (file) importProject(file).catch((error) => Logger.error(error))
  }
  input.click()
}

/** Forgets the saved project and starts again from the sample. */
const resetProject = () => {
  Dialog.confirm({
    title: intl('Reset'),
    content: intl('ResetConfirm', { version: vueVersion === 2 ? '2.7' : '3' }),
    locale: { ok: intl('Ok'), cancel: intl('Cancel') },
    onOk: async () => {
      await projectStorage.clear()
      window.location.reload()
    },
  })
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
        name: 'exportProject',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: h(
          Button,
          {
            onClick: () => {
              exportProject().catch((error) => Logger.error(error))
            },
          },
          intl('ExportProject'),
        ),
      })

      skeleton.add({
        name: 'importProject',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: h(
          Button,
          { onClick: chooseProjectFile },
          intl('ImportProject'),
        ),
      })

      skeleton.add({
        name: 'resetProject',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: h(Button, { onClick: resetProject }, intl('Reset')),
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

      // `mod`: ⌘ on macOS, Ctrl elsewhere (`command` is ⌘ only)
      hotkey.bind('mod+s', async (e) => {
        e.preventDefault()
        await save()
      })
    },
  }
}

savePlugin.pluginName = 'saveSample'

export default savePlugin
