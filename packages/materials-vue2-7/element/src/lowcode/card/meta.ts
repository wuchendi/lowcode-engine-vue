import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '卡片',
  group: 'Element 组件',
  category: 'Others',
  priority: 1002,
  componentName: 'ElCard',

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
        name: 'body-style',
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
          default: {
            type: 'JSSlot',
            params: ['slotProps'],
            title: '卡片内容插槽',
          },
          shadow: 'always',
        },
      },
    },
  ],
}

export default meta
