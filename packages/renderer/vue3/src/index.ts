import { vue3RouterAdapter } from './router'
import { setRouterAdapter } from './runtime'

setRouterAdapter(vue3RouterAdapter)

export * from '@cdlab996/lowcode-vue-core'
export { vue3Adapter } from './runtime'
export { vue3RouterAdapter }
