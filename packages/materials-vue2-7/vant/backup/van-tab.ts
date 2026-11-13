import type { ComponentMetadata } from '@alilc/lowcode-types'

const meta: ComponentMetadata = {
  category: 'Vant 组件',
  componentName: 'van-tab',
  docUrl: 'https://vant-contrib.gitee.io/vant/v2/#/zh-CN/tab',
  npm: {
    package: 'vant',
    version: '2.12.53',
    exportName: 'Tab',
    destructuring: true,
  },

  props: [
    {
      name: 'title',
      description: '标题',
      propType: 'string',
    },
    {
      name: 'disabled',
      description: '是否禁用',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'dot',
      description: '显示小红点',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'badge',
      description: '徽标的内容',
      propType: 'string',
    },
    {
      name: 'name',
      title: {
        label: '标签名称',
        tip: '标签名称，作为匹配的标识符',
      },
      propType: 'string',
    },
    {
      name: 'url',
      title: {
        label: '链接地址',
        tip: '点击后跳转的链接地址',
      },
      propType: 'string',
    },
    {
      name: 'to',
      title: {
        label: '路由对象',
        tip: '击后跳转的目标路由对象，同 vue-router 的 to 属性',
      },
      propType: 'string',
    },
    {
      name: 'replace',
      title: {
        label: '跳转时替换',
        tip: '是否在跳转时替换当前页面历史',
      },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: {
    supports: {
      events: ['onClick'],
      loop: true,
      condition: true,
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
}

export default meta
