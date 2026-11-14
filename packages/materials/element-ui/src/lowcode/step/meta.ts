import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (steps); see https://element.eleme.cn/#/zh-CN/component/steps
const meta = {
  componentName: 'ElStep',
  title: '步骤条 Step',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/steps',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述性文字',
            'en-US': 'description',
          },
          tip: '描述性文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标',
            'en-US': 'icon',
          },
          tip: '图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置当前步骤的状态',
            'en-US': 'status',
          },
          tip: '设置当前步骤的状态，不设置则根据 steps 确定状态',
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
    component: {
      nestingRule: {
        parentWhitelist: ['ElSteps'],
      },
    },
  },
  snippets: [
    {
      title: '步骤条 Step',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElStep',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
