import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (collapse); see https://element-plus.org/zh-CN/component/collapse.html
const meta = {
  componentName: 'ElCollapse',
  title: '折叠面板',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/collapse.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前活动面板',
            'en-US': 'v-model',
          },
          tip: '当前活动面板，在手风琴模式下其类型是string，在其他模式下是array',
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
        name: 'accordion',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否手风琴模式',
            'en-US': 'accordion',
          },
          tip: '是否手风琴模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'expandIconPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandIconPosition',
            'en-US': 'expandIconPosition',
          },
          tip: 'set expand icon position',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'beforeCollapse',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'beforeCollapse',
            'en-US': 'beforeCollapse',
          },
          tip: 'before-collapse hook before the collapse state changes. If false is returned or a Promise is returned and then is rejected, will stop collapsing',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description:
            '切换当前活动面板，在手风琴模式下其类型是string，在其他模式下是array',
          template:
            "onChange(...args, extParams) {\n  // 切换当前活动面板，在手风琴模式下其类型是string，在其他模式下是array\n  console.log('onChange', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '折叠面板',
      screenshot: './screenshots/collapse.webp',
      schema: {
        componentName: 'ElCollapse',
        props: {},
        children: [
          {
            componentName: 'ElCollapseItem',
            props: {
              title: '面板一',
              name: '1',
            },
            children: '内容一',
          },
          {
            componentName: 'ElCollapseItem',
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
