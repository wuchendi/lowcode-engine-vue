import { generateComponentList } from '@/utils/material'

let components: any = []
const requirePlugin = require.context('/', false, /.+\.(ts|json)$/)
requirePlugin.keys().forEach((fileName) => {
  if (fileName == './index.ts') return
  let componentConfig = requirePlugin(fileName)
  const com = componentConfig.default || componentConfig // 兼容 import export 和 require module.export 两种规范
  components.push(com)
})

const componentList = generateComponentList(components)

export default {
  version: '0.0.1',
  components,
  componentList,
}
