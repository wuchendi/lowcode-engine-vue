import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (switch); see https://element.eleme.cn/#/zh-CN/component/switch
const meta = {
  componentName: 'ElSwitch',
  title: '开关',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/switch',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值',
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
        ],
        supportVariable: true,
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
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'switch 的宽度',
            'en-US': 'width',
          },
          tip: 'switch 的宽度（像素）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 40,
      },
      {
        name: 'activeIconClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'activeIconClass',
            'en-US': 'activeIconClass',
          },
          tip: 'switch 打开时所显示图标的类名，设置此项会忽略 active-text',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inactiveIconClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inactiveIconClass',
            'en-US': 'inactiveIconClass',
          },
          tip: 'switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'activeText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'activeText',
            'en-US': 'activeText',
          },
          tip: 'switch 打开时的文字描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inactiveText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inactiveText',
            'en-US': 'inactiveText',
          },
          tip: 'switch 关闭时的文字描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'activeValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'switch 打开时的值',
            'en-US': 'activeValue',
          },
          tip: 'switch 打开时的值',
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
        ],
        supportVariable: true,
        defaultValue: 'true',
      },
      {
        name: 'inactiveValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'switch 关闭时的值',
            'en-US': 'inactiveValue',
          },
          tip: 'switch 关闭时的值',
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
        ],
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'switch 打开时的背景色',
            'en-US': 'activeColor',
          },
          tip: 'switch 打开时的背景色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#409EFF',
      },
      {
        name: 'inactiveColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'switch 关闭时的背景色',
            'en-US': 'inactiveColor',
          },
          tip: 'switch 关闭时的背景色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#C0CCDA',
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'switch 对应的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validateEvent',
            'en-US': 'validateEvent',
          },
          tip: '改变 switch 状态时是否触发表单的校验',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: 'switch 状态发生变化时的回调函数',
          template:
            "onChange(extParams) {\n  // switch 状态发生变化时的回调函数\n  console.log('onChange', extParams)\n}",
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
        componentName: 'ElSwitch',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
