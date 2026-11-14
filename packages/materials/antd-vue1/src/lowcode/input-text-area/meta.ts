import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (input); see https://1x.antdv.com/components/input-cn/
const meta = {
  componentName: 'AInputTextArea',
  title: '输入框 TextArea',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/input-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autosize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自适应内容高度',
            'en-US': 'autosize',
          },
          tip: '自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框默认内容',
            'en-US': 'defaultValue',
          },
          tip: '输入框默认内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框内容',
            'en-US': 'v-model',
          },
          tip: '输入框内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可以点击清除图标删除内容',
            'en-US': 'allowClear',
          },
          tip: '可以点击清除图标删除内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onPressEnter',
          description: '按下回车的回调',
          template:
            "onPressEnter(extParams) {\n  // 按下回车的回调\n  console.log('onPressEnter', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '输入框 TextArea',
      screenshot: './screenshots/input-text-area.webp',
      schema: {
        componentName: 'AInputTextArea',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
