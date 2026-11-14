import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (switch); see https://1x.antdv.com/components/switch-cn/
const meta = {
  componentName: 'ASwitch',
  title: '开关',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/switch-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '组件自动获取焦点',
            'en-US': 'autoFocus',
          },
          tip: '组件自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前是否选中',
            'en-US': 'v-model',
          },
          tip: '指定当前是否选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'checkedChildren',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中时的内容',
            'en-US': 'checkedChildren',
          },
          tip: '选中时的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultChecked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始是否选中',
            'en-US': 'defaultChecked',
          },
          tip: '初始是否选中',
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
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载中的开关',
            'en-US': 'loading',
          },
          tip: '加载中的开关',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开关大小',
            'en-US': 'size',
          },
          tip: '开关大小，可选值：default small',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'unCheckedChildren',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '非选中时的内容',
            'en-US': 'unCheckedChildren',
          },
          tip: '非选中时的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '变化时回调函数',
          template:
            "onChange(extParams) {\n  // 变化时回调函数\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onClick',
          description: '点击时回调函数',
          template:
            "onClick(extParams) {\n  // 点击时回调函数\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '开关',
      screenshot: './screenshots/switch.webp',
      schema: {
        componentName: 'ASwitch',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
