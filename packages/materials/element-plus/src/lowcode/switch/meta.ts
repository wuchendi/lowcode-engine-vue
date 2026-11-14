import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (switch); see https://element-plus.org/zh-CN/component/switch.html
const meta = {
  componentName: 'ElSwitch',
  title: '开关',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/switch.html',
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
          tip: '绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型',
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
            'zh-CN': '是否显示加载中',
            'en-US': 'loading',
          },
          tip: '是否显示加载中',
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
            'zh-CN': 'switch 的大小',
            'en-US': 'size',
          },
          tip: 'switch 的大小',
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
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'switch 的宽度',
            'en-US': 'width',
          },
          tip: 'switch 的宽度',
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
        name: 'inlinePrompt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '无论图标或文本是否显示在点内',
            'en-US': 'inlinePrompt',
          },
          tip: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'activeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'activeIcon',
            'en-US': 'activeIcon',
          },
          tip: 'switch 状态为 on 时所显示图标，设置此项会忽略 active-text',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inactiveIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inactiveIcon',
            'en-US': 'inactiveIcon',
          },
          tip: 'switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'activeActionIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'activeActionIcon',
            'en-US': 'activeActionIcon',
          },
          tip: 'component of the icon displayed in action when in on state',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inactiveActionIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inactiveActionIcon',
            'en-US': 'inactiveActionIcon',
          },
          tip: 'component of the icon displayed in action when in off state',
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
          tip: 'switch 的状态为 off 时的文字描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'activeValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'activeValue',
            'en-US': 'activeValue',
          },
          tip: 'switch 状态为 on 时的值',
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
            'zh-CN': 'inactiveValue',
            'en-US': 'inactiveValue',
          },
          tip: 'switch的状态为 off 时的值',
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
        name: 'beforeChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'beforeChange',
            'en-US': 'beforeChange',
          },
          tip: 'switch 状态改变前的钩子，返回 false 或者返回 Promise 且被 reject 则停止切换',
        },
        setter: [
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
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'input 的 id',
            'en-US': 'id',
          },
          tip: 'input 的 id',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'input 的 tabindex',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: 'triggers when value changes',
          template:
            "onChange(...args, extParams) {\n  // triggers when value changes\n  console.log('onChange', ...args)\n}",
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
