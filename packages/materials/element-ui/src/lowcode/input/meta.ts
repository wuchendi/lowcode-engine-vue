import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (input); see https://element.eleme.cn/#/zh-CN/component/input
const meta = {
  componentName: 'ElInput',
  title: '输入框',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/input',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'text',
      },
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
        ],
        supportVariable: true,
      },
      {
        name: 'maxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'maxlength',
          },
          tip: '原生属性，最大输入长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'minlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'minlength',
          },
          tip: '原生属性，最小输入长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'showWordLimit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示输入字数统计',
            'en-US': 'showWordLimit',
          },
          tip: '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框占位文本',
            'en-US': 'placeholder',
          },
          tip: '输入框占位文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可清空',
            'en-US': 'clearable',
          },
          tip: '是否可清空',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showPassword',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示切换密码图标',
            'en-US': 'showPassword',
          },
          tip: '是否显示切换密码图标',
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
            'zh-CN': '禁用',
            'en-US': 'disabled',
          },
          tip: '禁用',
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
            'zh-CN': '输入框尺寸',
            'en-US': 'size',
          },
          tip: '输入框尺寸，只在 type!="textarea" 时有效',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'prefixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框头部图标',
            'en-US': 'prefixIcon',
          },
          tip: '输入框头部图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尾部图标',
            'en-US': 'suffixIcon',
          },
          tip: '输入框尾部图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框行数',
            'en-US': 'rows',
          },
          tip: '输入框行数，只对 type="textarea" 有效',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 2,
      },
      {
        name: 'autosize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自适应内容高度',
            'en-US': 'autosize',
          },
          tip: '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'autocomplete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'autocomplete',
          },
          tip: '原生属性，自动补全',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'on',
                value: 'on',
              },
              {
                title: 'off',
                value: 'off',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'off',
      },
      {
        name: 'autoComplete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下个主版本弃用',
            'en-US': 'autoComplete',
          },
          tip: '下个主版本弃用',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'on',
                value: 'on',
              },
              {
                title: 'off',
                value: 'off',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'off',
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
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'readonly',
          },
          tip: '原生属性，是否只读',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'max',
          },
          tip: '原生属性，设置最大值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'min',
          },
          tip: '原生属性，设置最小值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'step',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'step',
          },
          tip: '原生属性，设置输入字段的合法数字间隔',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'resize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制是否能被用户缩放',
            'en-US': 'resize',
          },
          tip: '控制是否能被用户缩放',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'both',
                value: 'both',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'autofocus',
          },
          tip: '原生属性，自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'form',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'form',
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
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框的tabindex',
            'en-US': 'tabindex',
          },
          tip: '输入框的tabindex',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入时是否触发表单的校验',
            'en-US': 'validateEvent',
          },
          tip: '输入时是否触发表单的校验',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框头部内容',
            'en-US': 'prefix',
          },
          tip: '输入框头部内容，只对 type="text" 有效',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尾部内容',
            'en-US': 'suffix',
          },
          tip: '输入框尾部内容，只对 type="text" 有效',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'prepend',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框前置内容',
            'en-US': 'prepend',
          },
          tip: '输入框前置内容，只对 type="text" 有效',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'append',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框后置内容',
            'en-US': 'append',
          },
          tip: '输入框后置内容，只对 type="text" 有效',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onBlur',
          description: '在 Input 失去焦点时触发',
          template:
            "onBlur(extParams) {\n  // 在 Input 失去焦点时触发\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '在 Input 获得焦点时触发',
          template:
            "onFocus(extParams) {\n  // 在 Input 获得焦点时触发\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '仅在输入框失去焦点或用户按下回车时触发',
          template:
            "onChange(extParams) {\n  // 仅在输入框失去焦点或用户按下回车时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onInput',
          description: '在 Input 值改变时触发',
          template:
            "onInput(extParams) {\n  // 在 Input 值改变时触发\n  console.log('onInput', extParams)\n}",
        },
        {
          name: 'onClear',
          description: '在点击由 clearable 属性生成的清空按钮时触发',
          template:
            "onClear(extParams) {\n  // 在点击由 clearable 属性生成的清空按钮时触发\n  console.log('onClear', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '输入框',
      screenshot: './screenshots/input.webp',
      schema: {
        componentName: 'ElInput',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
