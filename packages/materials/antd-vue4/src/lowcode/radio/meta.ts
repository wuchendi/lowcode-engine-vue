import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (radio); see https://antdv.com/components/radio-cn
const meta = {
  componentName: 'ARadio',
  title: '单选框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/radio-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autofocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:checked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前是否选中',
            'en-US': 'v-model:checked',
          },
          tip: '指定当前是否选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用 Radio',
            'en-US': 'disabled',
          },
          tip: '禁用 Radio',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '根据 value 进行比较',
            'en-US': 'value',
          },
          tip: '根据 value 进行比较，判断是否选中',
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
    component: {},
  },
  snippets: [
    {
      title: '单选框',
      screenshot: './screenshots/radio.webp',
      schema: {
        componentName: 'ARadio',
        props: {},
        children: '单选框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
