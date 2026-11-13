import { init, project } from '@alilc/lowcode-engine'
import { setupHostEnvironment } from '@cdlab996/lowcode-utils2.7'

import registerPlugins from './plugins/registry'
import './editor.less'

const getUrlParam = (name: string): string | null => {
  if (!name) return null

  const searchParams = window.location.search
  if (!searchParams) return null

  const urlParams = new URLSearchParams(searchParams)
  return urlParams.get(name)
}

void (async () => {
  const preference = new Map()

  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
    ],
  })

  // 注册插件
  await registerPlugins()

  const client: string = getUrlParam('client') || 'h5'
  const client2deviceMap: Record<string, string> = {
    h5: 'mobile',
    pc: 'default',
  }

  const device: string = client2deviceMap[client] || 'default'
  setupHostEnvironment(project, '/js/vue.js')

  const options = {
    enableCondition: true,
    enableCanvasLock: true,
    supportVariableGlobally: true,
    device,
    simulatorUrl: [
      '/js/vue-simulator-renderer.js',
      '/js/vue-simulator-renderer.css',
    ],
    // simulatorUrl: [
    //   'https://unpkg.com/@cdlab996/lowcode-vue-simulator-renderer2.7@latest/dist/vue-simulator-renderer.js',
    //   'https://unpkg.com/@cdlab996/lowcode-vue-simulator-renderer2.7@latest/dist/vue-simulator-renderer.css',
    // ],
  }

  await init(document.getElementById('lce-container')!, options, preference)
})()
