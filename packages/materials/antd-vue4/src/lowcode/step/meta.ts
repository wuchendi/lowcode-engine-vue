import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (steps); see https://antdv.com/components/steps-cn
const meta = {
  componentName: 'AStep',
  title: '步骤条 Step',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/steps-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '步骤的详情描述',
            'en-US': 'description',
          },
          tip: '步骤的详情描述，可选',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用点击',
            'en-US': 'disabled',
          },
          tip: '禁用点击',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '步骤图标的类型',
            'en-US': 'icon',
          },
          tip: '步骤图标的类型，可选',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定状态',
            'en-US': 'status',
          },
          tip: '指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'wait',
      },
      {
        name: 'subTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子标题',
            'en-US': 'subTitle',
          },
          tip: '子标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
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
        parentWhitelist: ['ASteps'],
      },
    },
  },
  snippets: [
    {
      title: '步骤条 Step',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AStep',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
