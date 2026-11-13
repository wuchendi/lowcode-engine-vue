import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElCard: ComponentMetadata = {
  title: '卡片',
  group: '基础组件',
  category: 'Element 组件',
  priority: 1002,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/card',
  componentName: 'ElCard',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Card',
    destructuring: true,
  },

  configure: {
    props: [
      {
        name: 'header',
        title: {
          label: '标题',
          tip: '可以直接设置字符串，也可以通过插槽自定义',
        },
        setter: [
          {
            componentName: 'StringSetter',
            initialValue: '标题',
          },
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              title: '卡片标题插槽',
              params: ['slotProps'],
              value: [],
            },
          },
        ],
      },
      {
        name: 'shadow',
        title: '卡片阴影',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '总是显示',
                value: 'always',
              },
              {
                title: '鼠标悬浮时显示',
                value: 'hover',
              },
              {
                title: '从不显示',
                value: 'never',
              },
            ],
          },
          initialValue: 'always',
        },
      },
      {
        name: 'bodyStyle',
        title: 'body 样式',
        setter: {
          componentName: 'JsonSetter',
          initialValue: { padding: '20px' },
        },
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '卡片',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/card-1.png',
      schema: {
        componentName: 'ElCard',
        children: [],
        props: {
          header: '标题',
          shadow: 'always',
        },
      },
    },
  ],
}

export default ElCard
