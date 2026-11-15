import { init, project } from '@alilc/lowcode-engine'
import { setupDesignerEnvironment } from '@cdlab996/lowcode-vue3/designer'
import registerPlugins from './plugins/registry'
import { runtime } from './version'
import './editor.less'

void (async () => {
  const preference = new Map()
  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [
      { type: 'fetch' },
      {
        type: 'jsonp',
        // The JSONP options of the renderer and the generated code
        schema: {
          type: 'object',
          properties: {
            options: {
              type: 'object',
              properties: {
                jsonpCallback: {
                  title: '回调参数名',
                  type: 'string',
                },
                jsonpCallbackFunction: {
                  title: '回调函数名',
                  type: 'string',
                },
              },
            },
          },
        },
      },
    ],
  })

  await registerPlugins()

  const client = new URLSearchParams(window.location.search).get('client')
  const device = client === 'pc' ? 'default' : 'mobile'

  setupDesignerEnvironment(project, { vue: runtime.vue })

  await init(
    document.getElementById('lce-container')!,
    {
      enableCondition: true,
      enableCanvasLock: true,
      supportVariableGlobally: true,
      // The engine's node menu (select, copy, paste, delete) on right click
      enableContextMenu: true,
      device,
      simulatorUrl: [runtime.simulator, runtime.simulatorCss],
    },
    preference,
  )
})()
