import { vue2RouterAdapter } from './router'
import { setRouterAdapter } from './runtime'

setRouterAdapter(vue2RouterAdapter)

export * from '@cdlab996/lowcode-vue-core'
export { vue2Adapter } from './runtime'
export { vue2RouterAdapter }
