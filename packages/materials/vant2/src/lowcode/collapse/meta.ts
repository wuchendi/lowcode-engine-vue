import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (collapse); see https://vant-ui.github.io/vant/v2/#/zh-CN/collapse
const meta = {
  componentName: 'VanCollapse',
  title: '折叠面板',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/collapse',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前展开面板的 name',
            'en-US': 'v-model',
          },
          tip: '当前展开面板的 name',
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
      },
      {
        name: 'accordion',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启手风琴模式',
            'en-US': 'accordion',
          },
          tip: '是否开启手风琴模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示外边框',
            'en-US': 'border',
          },
          tip: '是否显示外边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '切换面板时触发',
          template:
            "onChange(extParams) {\n  // 切换面板时触发\n  console.log('onChange', extParams)\n}",
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
        componentName: 'VanCollapse',
        props: {
          value: [],
        },
        children: [
          {
            componentName: 'VanCollapseItem',
            props: {
              title: '面板一',
              name: '1',
            },
            children: '内容一',
          },
          {
            componentName: 'VanCollapseItem',
            props: {
              title: '面板二',
              name: '2',
            },
            children: '内容二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
