import { setAdapter, setRouterAdapter } from '@cdlab996/lowcode-vue-core'
import Vue from 'vue'
import { vue2Adapter } from '../../../vue2/src/adapter'
import { vue2RouterAdapter } from '../../../vue2/src/router'

Vue.config.productionTip = false
Vue.config.devtools = false
setAdapter(vue2Adapter)
setRouterAdapter(vue2RouterAdapter)
