// TODO: 后期处理类型问题并优化
// @ts-nocheck

import type { ComponentMetadata } from '@alilc/lowcode-types'

let components = []

// 批量导入物料
const requirePlugin = require.context('/', false, /.+\.ts$/)
requirePlugin.keys().forEach((fileName) => {
  if (fileName == './index.ts') return
  let componentConfig = requirePlugin(fileName)
  const com = componentConfig.default || componentConfig // 兼容 import export 和 require module.export 两种规范
  components.push(com)
})

// 生成 componentList
function generateComponentList(components: ComponentMetadata[]) {
  const componentList = [
    {
      title: '常用',
      icon: '',
      children: [],
    },
    {
      title: '容器',
      icon: '',
      children: [],
    },
    {
      title: '导航',
      icon: '',
      children: [],
    },
    {
      title: '内容',
      icon: '',
      children: [],
    },
    {
      title: '反馈',
      icon: '',
      children: [],
    },
  ]

  const groupMap = {
    原子组件: true,
  }
  const compGroup = {}

  components.forEach((comp) => {
    const category = comp.category || '其他'
    if (comp.group && !compGroup[comp.componentName]) {
      compGroup[comp.componentName] = comp.group
    }
    if (comp.group && !groupMap[comp.group]) {
      groupMap[comp.group] = true
    }
    let target = componentList.find((item) => item.title === category)
    if (!target) {
      target = {
        title: category,
        icon: '',
        children: [],
      }
      componentList.push(target)
    }

    if (comp.snippets && comp.snippets.length) {
      target.children.push({
        componentName: comp.componentName,
        title: comp.title || comp.componentName,
        sort: {
          category: target.title,
          group: compGroup[comp.componentName] || '基础组件',
          priority: comp.priority || 0,
        },
        icon: '',
        package: comp.npm.package,
        snippets: comp.snippets || [],
      })
    }
  })

  return componentList
}

const componentList = generateComponentList(components)

export default {
  version: '0.0.1',
  components,
  componentList,
}
