import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (mentions); see https://1x.antdv.com/components/mentions-cn/
const meta = {
  componentName: 'AMentions',
  title: '提及',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/mentions-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获得焦点',
            'en-US': 'autoFocus',
          },
          tip: '自动获得焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认值',
            'en-US': 'defaultValue',
          },
          tip: '默认值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterOption',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义过滤逻辑',
            'en-US': 'filterOption',
          },
          tip: '自定义过滤逻辑',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'notFoundContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当下拉列表为空时显示的内容',
            'en-US': 'notFoundContent',
          },
          tip: '当下拉列表为空时显示的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Not Found',
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出层展示位置',
            'en-US': 'placement',
          },
          tip: '弹出层展示位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置触发关键字',
            'en-US': 'prefix',
          },
          tip: '设置触发关键字',
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
        name: 'split',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置选中项前后分隔符',
            'en-US': 'split',
          },
          tip: '设置选中项前后分隔符',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: ' ',
      },
      {
        name: 'validateSearch',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义触发验证逻辑',
            'en-US': 'validateSearch',
          },
          tip: '自定义触发验证逻辑',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置值',
            'en-US': 'v-model',
          },
          tip: '设置值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'getPopupContainer',
            'en-US': 'getPopupContainer',
          },
          tip: '指定建议框挂载的 HTML 节点',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onBlur',
          description: '失去焦点的时回调',
          template:
            "onBlur(extParams) {\n  // 失去焦点的时回调\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '值改变时触发',
          template:
            "onChange(extParams) {\n  // 值改变时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '获得焦点时回调',
          template:
            "onFocus(extParams) {\n  // 获得焦点时回调\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onSearch',
          description: '文本框值变化时回调',
          template:
            "onSearch(extParams) {\n  // 文本框值变化时回调\n  console.log('onSearch', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '选择选项时触发',
          template:
            "onSelect(extParams) {\n  // 选择选项时触发\n  console.log('onSelect', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '提及',
      screenshot: './screenshots/mentions.webp',
      schema: {
        componentName: 'AMentions',
        props: {
          style: {
            width: '200px',
          },
          options: [
            {
              value: 'a',
              label: '选项一',
            },
            {
              value: 'b',
              label: '选项二',
            },
          ],
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
