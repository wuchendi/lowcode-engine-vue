import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (input-number); see https://element-plus.org/zh-CN/component/input-number.html
const meta = {
  componentName: 'ElInputNumber',
  title: '数字输入框',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/input-number.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中项绑定值',
            'en-US': 'v-model',
          },
          tip: '选中项绑定值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
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
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'readonly',
            'en-US': 'readonly',
          },
          tip: 'same as readonly in native input',
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
            'zh-CN': '是否禁用状态',
            'en-US': 'disabled',
          },
          tip: '是否禁用状态',
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
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: '等价于原生 input name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'same as aria-label in native input',
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
          tip: '等价于原生 input placeholder 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'id',
            'en-US': 'id',
          },
          tip: '等价于原生 input id 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'valueOnClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'valueOnClear',
            'en-US': 'valueOnClear',
          },
          tip: 'value should be set when input box is cleared',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'min',
                  value: 'min',
                },
                {
                  title: 'max',
                  value: 'max',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否触发表单验证',
            'en-US': 'validateEvent',
          },
          tip: '是否触发表单验证',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'inputmode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inputmode',
            'en-US': 'inputmode',
          },
          tip: 'same as inputmode in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'align',
            'en-US': 'align',
          },
          tip: 'alignment for the inner input text',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'center',
      },
      {
        name: 'disabledScientific',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabledScientific',
            'en-US': 'disabledScientific',
          },
          tip: "disables input of scientific notation (e.g. 'e')",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'same as tabindex in native input',
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
        defaultValue: '0',
      },
      {
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'formatter',
            'en-US': 'formatter',
          },
          tip: 'specifies the format of the value presented in the input',
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
        name: 'parser',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'parser',
            'en-US': 'parser',
          },
          tip: 'specifies the value extracted from the formatted input',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '绑定值被改变时触发',
          template:
            "onChange(...args, extParams) {\n  // 绑定值被改变时触发\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: '在组件 Input 失去焦点时触发',
          template:
            "onBlur(...args, extParams) {\n  // 在组件 Input 失去焦点时触发\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: '在组件 Input 获得焦点时触发',
          template:
            "onFocus(...args, extParams) {\n  // 在组件 Input 获得焦点时触发\n  console.log('onFocus', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '数字输入框',
      screenshot: './screenshots/input-number.webp',
      schema: {
        componentName: 'ElInputNumber',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
