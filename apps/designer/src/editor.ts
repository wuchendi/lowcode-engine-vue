import { init, project } from '@alilc/lowcode-engine'
import { setupDesignerEnvironment } from '@cdlab996/lowcode-vue3/designer'
import { loadMonaco } from './monaco'
import registerPlugins from './plugins/registry'
import { runtime } from './version'
import './editor.less'

void (async () => {
  const preference = new Map()
  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [{ type: 'fetch' }],
  })

  const monaco = loadMonaco()
  await registerPlugins()

  const client = new URLSearchParams(window.location.search).get('client')
  const device = client === 'pc' ? 'default' : 'mobile'

  setupDesignerEnvironment(project, { vue: runtime.vue })

  // Before any code editor can mount; without it the editors load their own
  await monaco.catch((error) => console.error('Monaco failed to load', error))

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
