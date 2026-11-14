import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (input-number); see https://element.eleme.cn/#/zh-CN/component/input-number
const meta = {
  componentName: 'ElInputNumber',
  title: '计数器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/input-number',
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
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置计数器允许的最小值',
            'en-US': 'min',
          },
          tip: '设置计数器允许的最小值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置计数器允许的最大值',
            'en-US': 'max',
          },
          tip: '设置计数器允许的最大值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'step',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '计数器步长',
            'en-US': 'step',
          },
          tip: '计数器步长',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'stepStrictly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'stepStrictly',
            'en-US': 'stepStrictly',
          },
          tip: '是否只能输入 step 的倍数',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'precision',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数值精度',
            'en-US': 'precision',
          },
          tip: '数值精度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '计数器尺寸',
            'en-US': 'size',
          },
          tip: '计数器尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用计数器',
            'en-US': 'disabled',
          },
          tip: '是否禁用计数器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'controls',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用控制按钮',
            'en-US': 'controls',
          },
          tip: '是否使用控制按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'controlsPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制按钮位置',
            'en-US': 'controlsPosition',
          },
          tip: '控制按钮位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'name',
          },
          tip: '原生属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框关联的label文字',
            'en-US': 'label',
          },
          tip: '输入框关联的label文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placeholder',
            'en-US': 'placeholder',
          },
          tip: '输入框默认 placeholder',
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
          description: '绑定值被改变时触发',
          template:
            "onChange(extParams) {\n  // 绑定值被改变时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '在组件 Input 失去焦点时触发',
          template:
            "onBlur(extParams) {\n  // 在组件 Input 失去焦点时触发\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '在组件 Input 获得焦点时触发',
          template:
            "onFocus(extParams) {\n  // 在组件 Input 获得焦点时触发\n  console.log('onFocus', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '计数器',
      screenshot: './screenshots/input-number.webp',
      schema: {
        componentName: 'ElInputNumber',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
