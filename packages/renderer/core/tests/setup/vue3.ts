import { setAdapter, setRouterAdapter } from '@cdlab996/lowcode-vue-core'
import { vue3Adapter } from '../../../vue3/src/adapter'
import { vue3RouterAdapter } from '../../../vue3/src/router'

setAdapter(vue3Adapter)
setRouterAdapter(vue3RouterAdapter)
