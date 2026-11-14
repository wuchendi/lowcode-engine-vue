import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (select); see https://element.eleme.cn/#/zh-CN/component/select
const meta = {
  componentName: 'ElOptionGroup',
  title: '选择器 OptionGroup',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/select',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分组的组名',
            'en-US': 'label',
          },
          tip: '分组的组名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: '是否将该分组下所有选项置为禁用',
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
    component: {},
  },
  snippets: [
    {
      title: '选择器 OptionGroup',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElOptionGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
