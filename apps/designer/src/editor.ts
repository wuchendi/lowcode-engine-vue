import { init, project } from '@alilc/lowcode-engine'
import { setupDesignerEnvironment } from '@cdlab996/lowcode-vue3/designer'
import registerPlugins from './plugins/registry'
import { runtime } from './version'
import './editor.less'

void (async () => {
  const preference = new Map()
  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [{ type: 'fetch' }],
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
      device,
      simulatorUrl: [runtime.simulator, runtime.simulatorCss],
    },
    preference,
  )
})()
