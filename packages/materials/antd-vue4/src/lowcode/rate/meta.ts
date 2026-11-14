import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (rate); see https://antdv.com/components/rate-cn
const meta = {
  componentName: 'ARate',
  title: '评分',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/rate-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许再次点击后清除',
            'en-US': 'allowClear',
          },
          tip: '是否允许再次点击后清除',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'allowHalf',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许半选',
            'en-US': 'allowHalf',
          },
          tip: '是否允许半选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
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
        name: 'character',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义字符',
            'en-US': 'character',
          },
          tip: '自定义字符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'count',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'star 总数',
            'en-US': 'count',
          },
          tip: 'star 总数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 5,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '只读',
            'en-US': 'disabled',
          },
          tip: '只读，无法进行交互',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tooltips',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义每项的提示信息',
            'en-US': 'tooltips',
          },
          tip: '自定义每项的提示信息',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前数',
            'en-US': 'v-model:value',
          },
          tip: '当前数，受控值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onBlur',
          description: '失去焦点时的回调',
          template:
            "onBlur(extParams) {\n  // 失去焦点时的回调\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '选择时的回调',
          template:
            "onChange(extParams) {\n  // 选择时的回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '获取焦点时的回调',
          template:
            "onFocus(extParams) {\n  // 获取焦点时的回调\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onHoverChange',
          description: '鼠标经过时数值变化的回调',
          template:
            "onHoverChange(extParams) {\n  // 鼠标经过时数值变化的回调\n  console.log('onHoverChange', extParams)\n}",
        },
        {
          name: 'onKeydown',
          description: '按键回调',
          template:
            "onKeydown(extParams) {\n  // 按键回调\n  console.log('onKeydown', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '评分',
      screenshot: './screenshots/rate.webp',
      schema: {
        componentName: 'ARate',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
