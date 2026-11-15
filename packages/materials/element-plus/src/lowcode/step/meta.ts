import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (steps); see https://element-plus.org/zh-CN/component/steps.html
const meta = {
  componentName: 'ElStep',
  title: '步骤条 Step',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/steps.html',
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
            'zh-CN': '描述文案',
            'en-US': 'description',
          },
          tip: '描述文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Step 组件的自定义图标',
            'en-US': 'icon',
          },
          tip: 'Step 组件的自定义图标。也支持 slot 方式写入',
        },
        setter: 'StringSetter',
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
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'wait',
                value: 'wait',
              },
              {
                title: 'process',
                value: 'process',
              },
              {
                title: 'finish',
                value: 'finish',
              },
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'success',
                value: 'success',
              },
            ],
          },
        },
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
