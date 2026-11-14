import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (descriptions); see https://antdv.com/components/descriptions-cn
const meta = {
  componentName: 'ADescriptions',
  title: '描述列表',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/descriptions-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示边框',
            'en-US': 'bordered',
          },
          tip: '是否展示边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'colon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'colon',
            'en-US': 'colon',
          },
          tip: '配置 Descriptions.Item 的 colon 的默认值',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'column',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'column',
            'en-US': 'column',
          },
          tip: '一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 3,
      },
      {
        name: 'contentStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义内容样式',
            'en-US': 'contentStyle',
          },
          tip: '自定义内容样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述列表的操作区域',
            'en-US': 'extra',
          },
          tip: '描述列表的操作区域，显示在右上方',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标签样式',
            'en-US': 'labelStyle',
          },
          tip: '自定义标签样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'layout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述布局',
            'en-US': 'layout',
          },
          tip: '描述布局',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置列表的大小',
            'en-US': 'size',
          },
          tip: '设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效）',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述列表的标题',
            'en-US': 'title',
          },
          tip: '描述列表的标题，显示在最顶部',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '描述列表',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ADescriptions',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
