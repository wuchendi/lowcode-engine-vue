import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (input-otp); see https://element-plus.org/zh-CN/component/input-otp.html
const meta = {
  componentName: 'ElInputOtp',
  title: '一次性密码输入框 beta',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/input-otp.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: 'The value of the OTP fields. Since numbers must not have leading zeros, modelValue is allowed to be a number only during initialization.',
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
        name: 'length',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'length',
            'en-US': 'length',
          },
          tip: 'The OTP fields length',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 6,
      },
      {
        name: 'validator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validator',
            'en-US': 'validator',
          },
          tip: 'Custom validator function',
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
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'inputmode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inputmode',
            'en-US': 'inputmode',
          },
          tip: 'Native inputmode attribute',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: 'The type of the OTP fields',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'outlined',
                value: 'outlined',
              },
              {
                title: 'filled',
                value: 'filled',
              },
              {
                title: 'underlined',
                value: 'underlined',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'outlined',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'The size of the OTP fields',
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
      },
      {
        name: 'mask',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'mask',
            'en-US': 'mask',
          },
          tip: 'Whether to enable password mode',
        },
        setter: 'BoolSetter',
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
          tip: 'Whether the OTP fields are disabled',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'separator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'separator',
            'en-US': 'separator',
          },
          tip: 'The separator between OTP fields',
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
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validateEvent',
            'en-US': 'validateEvent',
          },
          tip: 'Whether to trigger form validation',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'readonly',
            'en-US': 'readonly',
          },
          tip: 'Same as readonly in native input',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'id',
            'en-US': 'id',
          },
          tip: 'Native id attribute',
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
          tip: 'Native aria-label attribute',
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
          description: '当输入框失去焦点后且值发生变化时触发',
          template:
            "onChange(...args, extParams) {\n  // 当输入框失去焦点后且值发生变化时触发\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onFinish',
          description: '当所有字段都已填写时触发',
          template:
            "onFinish(...args, extParams) {\n  // 当所有字段都已填写时触发\n  console.log('onFinish', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: '输入框获得焦点时触发',
          template:
            "onFocus(...args, extParams) {\n  // 输入框获得焦点时触发\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: '输入框失去焦点时触发',
          template:
            "onBlur(...args, extParams) {\n  // 输入框失去焦点时触发\n  console.log('onBlur', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '一次性密码输入框 beta',
      screenshot: './screenshots/input-otp.webp',
      schema: {
        componentName: 'ElInputOtp',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
