import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (collapse); see https://1x.antdv.com/components/collapse-cn/
const meta = {
  componentName: 'ACollapse',
  title: '折叠面板',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/collapse-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: '当前激活 tab 面板的 key',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'defaultActiveKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始化选中面板的 key',
            'en-US': 'defaultActiveKey',
          },
          tip: '初始化选中面板的 key',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '带边框风格的折叠面板',
            'en-US': 'bordered',
          },
          tip: '带边框风格的折叠面板',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'accordion',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '手风琴模式',
            'en-US': 'accordion',
          },
          tip: '手风琴模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'expandIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义切换图标',
            'en-US': 'expandIcon',
          },
          tip: '自定义切换图标',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'expandIconPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置图标位置',
            'en-US': 'expandIconPosition',
          },
          tip: '设置图标位置： left, right',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'destroyInactivePanel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '销毁折叠隐藏的面板',
            'en-US': 'destroyInactivePanel',
          },
          tip: '销毁折叠隐藏的面板',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '切换面板的回调',
          template:
            "onChange(extParams) {\n  // 切换面板的回调\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '折叠面板',
      screenshot: './screenshots/collapse.webp',
      schema: {
        componentName: 'ACollapse',
        props: {},
        children: [
          {
            componentName: 'ACollapsePanel',
            props: {
              header: '面板一',
              key: '1',
            },
            children: '内容一',
          },
          {
            componentName: 'ACollapsePanel',
            props: {
              header: '面板二',
              key: '2',
            },
            children: '内容二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
