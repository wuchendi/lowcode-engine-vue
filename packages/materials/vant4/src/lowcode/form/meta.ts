import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (form); see https://vant-ui.github.io/vant/#/zh-CN/form
const meta = {
  componentName: 'VanForm',
  title: '表单',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/form',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单项 label 宽度',
            'en-US': 'labelWidth',
          },
          tip: '表单项 label 宽度，默认单位为px',
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
        defaultValue: '6.2em',
      },
      {
        name: 'labelAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单项 label 对齐方式',
            'en-US': 'labelAlign',
          },
          tip: '表单项 label 对齐方式，可选值为 center right top',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'top',
                value: 'top',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'inputAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框对齐方式',
            'en-US': 'inputAlign',
          },
          tip: '输入框对齐方式，可选值为 center right',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
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
        defaultValue: 'left',
      },
      {
        name: 'errorMessageAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '错误提示文案对齐方式',
            'en-US': 'errorMessageAlign',
          },
          tip: '错误提示文案对齐方式，可选值为 center right',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
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
        defaultValue: 'left',
      },
      {
        name: 'validateTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单校验触发时机',
            'en-US': 'validateTrigger',
          },
          tip: '表单校验触发时机，可选值为 onChange、onSubmit，支持通过数组同时设置多个值，具体用法见下方表格',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'onChange',
                  value: 'onChange',
                },
                {
                  title: 'onSubmit',
                  value: 'onSubmit',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'onBlur',
      },
      {
        name: 'colon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'colon',
            'en-US': 'colon',
          },
          tip: '是否在 label 后面添加冒号',
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
            'zh-CN': '是否禁用表单中的所有输入框',
            'en-US': 'disabled',
          },
          tip: '是否禁用表单中的所有输入框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'readonly',
            'en-US': 'readonly',
          },
          tip: '是否将表单中的所有输入框设置为只读状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'required',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示表单必填星号',
            'en-US': 'required',
          },
          tip: '是否显示表单必填星号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'validateFirst',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validateFirst',
            'en-US': 'validateFirst',
          },
          tip: '是否在某一项校验不通过时停止校验',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'scrollToError',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'scrollToError',
            'en-US': 'scrollToError',
          },
          tip: '是否在提交表单且校验不通过时滚动至错误的表单项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'scrollToErrorPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动至错误的表单项时的位置',
            'en-US': 'scrollToErrorPosition',
          },
          tip: '滚动至错误的表单项时的位置，可选值为 center | end | nearest | start',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'end',
                value: 'end',
              },
              {
                title: 'nearest',
                value: 'nearest',
              },
              {
                title: 'start',
                value: 'start',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'showError',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在校验不通过时标红输入框',
            'en-US': 'showError',
          },
          tip: '是否在校验不通过时标红输入框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showErrorMessage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showErrorMessage',
            'en-US': 'showErrorMessage',
          },
          tip: '是否在校验不通过时在输入框下方展示错误提示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'submitOnEnter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在按下回车键时提交表单',
            'en-US': 'submitOnEnter',
          },
          tip: '是否在按下回车键时提交表单',
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
          name: 'onSubmit',
          description: '提交表单且验证通过后触发',
          template:
            "onSubmit(extParams) {\n  // 提交表单且验证通过后触发\n  console.log('onSubmit', extParams)\n}",
        },
        {
          name: 'onFailed',
          description: '提交表单且验证不通过后触发',
          template:
            "onFailed(extParams) {\n  // 提交表单且验证不通过后触发\n  console.log('onFailed', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '表单',
      screenshot: './screenshots/form.webp',
      schema: {
        componentName: 'VanForm',
        children: [
          {
            componentName: 'VanField',
            props: {
              label: '名称',
              placeholder: '请输入',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
