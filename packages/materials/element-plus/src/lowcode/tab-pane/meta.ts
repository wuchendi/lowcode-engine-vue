import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tabs); see https://element-plus.org/zh-CN/component/tabs.html
const meta = {
  componentName: 'ElTabPane',
  title: '标签页 TabPane',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/tabs.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项卡标题',
            'en-US': 'label',
          },
          tip: '选项卡标题',
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
        defaultValue: false,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: '与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是tab面板的序列号，如第一个 tab 是 0',
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
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签是否可关闭',
            'en-US': 'closable',
          },
          tip: '标签是否可关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'lazy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签是否延迟渲染',
            'en-US': 'lazy',
          },
          tip: '标签是否延迟渲染',
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
        parentWhitelist: ['ElTabs'],
      },
    },
  },
  snippets: [
    {
      title: '标签页 TabPane',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElTabPane',
        props: {
          label: '标签',
          name: 'tab',
        },
        children: '内容',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
