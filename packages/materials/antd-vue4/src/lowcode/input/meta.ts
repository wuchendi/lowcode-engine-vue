import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (input); see https://antdv.com/components/input-cn
const meta = {
  componentName: 'AInput',
  title: '输入框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/input-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'addonAfter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '带标签的 input',
            'en-US': 'addonAfter',
          },
          tip: '带标签的 input，设置后置标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'addonBefore',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '带标签的 input',
            'en-US': 'addonBefore',
          },
          tip: '带标签的 input，设置前置标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可以点击清除图标删除内容',
            'en-US': 'allowClear',
          },
          tip: '可以点击清除图标删除内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框',
            'en-US': 'bordered',
          },
          tip: '是否有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义清除图标',
            'en-US': 'clearIcon',
          },
          tip: '自定义清除图标 （allowClear 为 true 时生效）',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框默认内容',
            'en-US': 'defaultValue',
          },
          tip: '输入框默认内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用状态',
            'en-US': 'disabled',
          },
          tip: '是否禁用状态，默认为 false',
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
            'zh-CN': '输入框的 id',
            'en-US': 'id',
          },
          tip: '输入框的 id',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'maxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大长度',
            'en-US': 'maxlength',
          },
          tip: '最大长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '带有前缀图标的 input',
            'en-US': 'prefix',
          },
          tip: '带有前缀图标的 input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示字数',
            'en-US': 'showCount',
          },
          tip: '是否展示字数',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置校验状态',
            'en-US': 'status',
          },
          tip: '设置校验状态',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'warning',
                value: 'warning',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控件大小',
            'en-US': 'size',
          },
          tip: '控件大小。注：标准表单内的输入框大小限制为 middle。可选 large middle small',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '带有后缀图标的 input',
            'en-US': 'suffix',
          },
          tip: '带有后缀图标的 input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '声明 input 类型',
            'en-US': 'type',
          },
          tip: '声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用  代替 type="textarea")。',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'text',
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框内容',
            'en-US': 'v-model:value',
          },
          tip: '输入框内容',
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
          description: '输入框内容变化时的回调',
          template:
            "onChange(extParams) {\n  // 输入框内容变化时的回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onPressEnter',
          description: '按下回车的回调',
          template:
            "onPressEnter(extParams) {\n  // 按下回车的回调\n  console.log('onPressEnter', extParams)\n}",
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
        componentName: 'AInput',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
