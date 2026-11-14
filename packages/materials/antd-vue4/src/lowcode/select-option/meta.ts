import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (select); see https://antdv.com/components/select-cn
const meta = {
  componentName: 'ASelectOption',
  title: '选择器 SelectOption',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/select-cn',
  devMode: 'proCode',
  configure: {
    props: [
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
        parentWhitelist: ['ASelect', 'ASelectOptGroup'],
      },
    },
  },
  snippets: [
    {
      title: '选择器 SelectOption',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ASelectOption',
        props: {
          value: 'option',
        },
        children: '选项',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
