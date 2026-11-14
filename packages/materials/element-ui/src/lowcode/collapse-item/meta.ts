import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (collapse); see https://element.eleme.cn/#/zh-CN/component/collapse
const meta = {
  componentName: 'ElCollapseItem',
  title: '折叠面板 CollapseItem',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/collapse',
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
      nestingRule: {
        parentWhitelist: ['ElCollapse'],
      },
    },
  },
  snippets: [
    {
      title: '折叠面板 CollapseItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElCollapseItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
