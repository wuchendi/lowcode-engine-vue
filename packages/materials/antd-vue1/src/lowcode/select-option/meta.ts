import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (select); see https://1x.antdv.com/components/select-cn/
const meta = {
  componentName: 'ASelectOption',
  title: '选择器 Option',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/select-cn/',
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
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中该 Option 后',
            'en-US': 'title',
          },
          tip: '选中该 Option 后，Select 的 title',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认根据此属性值进行筛选',
            'en-US': 'value',
          },
          tip: '默认根据此属性值进行筛选',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
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
        parentWhitelist: ['ASelect', 'ASelectOptGroup'],
      },
    },
  },
  snippets: [
    {
      title: '选择器 Option',
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
