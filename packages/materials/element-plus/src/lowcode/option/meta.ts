import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (select); see https://element-plus.org/zh-CN/component/select.html
const meta = {
  componentName: 'ElOption',
  title: '选择器 Option',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/select.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项的值',
            'en-US': 'value',
          },
          tip: '选项的值',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项的标签',
            'en-US': 'label',
          },
          tip: '选项的标签，若不设置则默认与value相同',
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
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用该选项',
            'en-US': 'disabled',
          },
          tip: '是否禁用该选项',
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
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['ElSelect', 'ElOptionGroup'],
      },
    },
  },
  snippets: [
    {
      title: '选择器 Option',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElOption',
        props: {
          label: '选项',
          value: 'option',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
