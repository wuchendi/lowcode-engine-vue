import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (tree-select); see https://vant-ui.github.io/vant/v2/#/zh-CN/tree-select
const meta = {
  componentName: 'VanTreeSelect',
  title: '分类选择',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/tree-select',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'items',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分类显示所需的数据',
            'en-US': 'items',
          },
          tip: '分类显示所需的数据',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '高度',
            'en-US': 'height',
          },
          tip: '高度，默认单位为px',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '300',
      },
      {
        name: 'mainActiveIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧选中项的索引',
            'en-US': 'mainActiveIndex',
          },
          tip: '左侧选中项的索引',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '0',
      },
      {
        name: 'activeId',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧选中项的 id',
            'en-US': 'activeId',
          },
          tip: '右侧选中项的 id，支持传入数组',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '0',
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧项最大选中个数',
            'en-US': 'max',
          },
          tip: '右侧项最大选中个数',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'Infinity',
      },
      {
        name: 'selectedIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧栏选中状态的图标',
            'en-US': 'selectedIcon',
          },
          tip: '自定义右侧栏选中状态的图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'success',
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧区域内容',
            'en-US': 'content',
          },
          tip: '自定义右侧区域内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick-nav',
          description: '点击左侧导航时触发',
          template:
            "onClickNav(extParams) {\n  // 点击左侧导航时触发\n  console.log('onClickNav', extParams)\n}",
        },
        {
          name: 'onClick-item',
          description: '点击右侧选择项时触发',
          template:
            "onClickItem(extParams) {\n  // 点击右侧选择项时触发\n  console.log('onClickItem', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '分类选择',
      screenshot: './screenshots/tree-select.webp',
      schema: {
        componentName: 'VanTreeSelect',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
