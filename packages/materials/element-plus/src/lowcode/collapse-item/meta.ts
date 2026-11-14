import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (collapse); see https://element-plus.org/zh-CN/component/collapse.html
const meta = {
  componentName: 'ElCollapseItem',
  title: '折叠面板 CollapseItem',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/collapse.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '唯一标志符',
            'en-US': 'name',
          },
          tip: '唯一标志符',
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
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板标题',
            'en-US': 'title',
          },
          tip: '面板标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: 'icon of the collapse item',
        },
        setter: 'CIconSetter',
        supportVariable: true,
        defaultValue: 'ArrowRight',
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['ElCollapse'],
      },
    },
  },
  snippets: [
    {
      title: '折叠面板 CollapseItem',
      screenshot: './screenshots/collapse-item.webp',
      schema: {
        componentName: 'ElCollapseItem',
        props: {},
        children: '折叠面板',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
