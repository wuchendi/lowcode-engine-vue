import { setAdapter } from '@cdlab996/lowcode-vue-core/runtime'
import { vue3Adapter } from './adapter'

setAdapter(vue3Adapter)

export * from '@cdlab996/lowcode-vue-core/runtime'
export { vue3Adapter }
