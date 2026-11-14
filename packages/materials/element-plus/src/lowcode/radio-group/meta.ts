import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (radio); see https://element-plus.org/zh-CN/component/radio.html
const meta = {
  componentName: 'ElRadioGroup',
  title: '单选框 RadioGroup',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/radio.html',
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
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '单选框按钮或边框按钮的大小',
            'en-US': 'size',
          },
          tip: '单选框按钮或边框按钮的大小',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
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
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'textColor',
            'en-US': 'textColor',
          },
          tip: '按钮形式的 Radio 激活时的文本颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ffffff',
      },
      {
        name: 'fill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fill',
            'en-US': 'fill',
          },
          tip: '按钮形式的 Radio 激活时的填充色和边框色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '#409eff',
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'same as aria-label in RadioGroup',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 name 属性',
            'en-US': 'name',
          },
          tip: '原生 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 id 属性',
            'en-US': 'id',
          },
          tip: '原生 id 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'options',
            'en-US': 'options',
          },
          tip: 'data of the options, the key of value and label and disabled can be customize by props',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'props',
            'en-US': 'props',
          },
          tip: 'configuration options',
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
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: "component type to render options (e.g. 'button')",
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'radio',
                value: 'radio',
              },
              {
                title: 'button',
                value: 'button',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'radio',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '绑定值变化时触发的事件',
          template:
            "onChange(...args, extParams) {\n  // 绑定值变化时触发的事件\n  console.log('onChange', ...args)\n}",
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
      title: '单选框 RadioGroup',
      screenshot: './screenshots/radio-group.webp',
      schema: {
        componentName: 'ElRadioGroup',
        props: {
          modelValue: 'a',
        },
        children: [
          {
            componentName: 'ElRadio',
            props: {
              label: 'a',
            },
            children: '选项一',
          },
          {
            componentName: 'ElRadio',
            props: {
              label: 'b',
            },
            children: '选项二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
