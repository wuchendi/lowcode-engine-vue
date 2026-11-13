import { setAdapter } from '@cdlab996/lowcode-vue-core/runtime'
import { vue2Adapter } from './adapter'

setAdapter(vue2Adapter)

export * from '@cdlab996/lowcode-vue-core/runtime'
export { vue2Adapter }
