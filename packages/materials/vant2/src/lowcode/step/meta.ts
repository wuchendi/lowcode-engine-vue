import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (steps); see https://vant-ui.github.io/vant/v2/#/zh-CN/steps
const meta = {
  componentName: 'VanStep',
  title: '步骤条 Step',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/steps',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'active-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义激活状态图标',
            'en-US': 'active-icon',
          },
          tip: '自定义激活状态图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'inactive-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义未激活状态图标',
            'en-US': 'inactive-icon',
          },
          tip: '自定义未激活状态图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'finish-iconv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'finish-iconv',
            'en-US': 'finish-iconv',
          },
          tip: '自定义已完成步骤对应的底部图标，优先级高于 inactive-icon',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['VanSteps'],
      },
    },
  },
  snippets: [
    {
      title: '步骤条 Step',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanStep',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
