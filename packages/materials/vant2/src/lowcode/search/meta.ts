import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (search); see https://vant-ui.github.io/vant/v2/#/zh-CN/search
const meta = {
  componentName: 'VanSearch',
  title: '搜索',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/search',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索框左侧文本',
            'en-US': 'label',
          },
          tip: '搜索框左侧文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索框形状',
            'en-US': 'shape',
          },
          tip: '搜索框形状，可选值为 round',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'square',
      },
      {
        name: 'background',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索框外部背景色',
            'en-US': 'background',
          },
          tip: '搜索框外部背景色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '#f2f2f2',
      },
      {
        name: 'maxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入的最大字符数',
            'en-US': 'maxlength',
          },
          tip: '输入的最大字符数',
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
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '占位提示文字',
            'en-US': 'placeholder',
          },
          tip: '占位提示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用清除图标',
            'en-US': 'clearable',
          },
          tip: '是否启用清除图标，点击清除图标后会清空输入框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'clearTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示清除图标的时机',
            'en-US': 'clearTrigger',
          },
          tip: '显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'focus',
      },
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动聚焦',
            'en-US': 'autofocus',
          },
          tip: '是否自动聚焦，iOS 系统不支持该属性',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showAction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在搜索框右侧显示取消按钮',
            'en-US': 'showAction',
          },
          tip: '是否在搜索框右侧显示取消按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'actionText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮文字',
            'en-US': 'actionText',
          },
          tip: '取消按钮文字',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用输入框',
            'en-US': 'disabled',
          },
          tip: '是否禁用输入框',
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
            'zh-CN': '是否将输入框设为只读',
            'en-US': 'readonly',
          },
          tip: '是否将输入框设为只读',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'inputAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框内容对齐方式',
            'en-US': 'inputAlign',
          },
          tip: '输入框内容对齐方式，可选值为 center right',
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
        name: 'leftIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框左侧图标名称或图片链接',
            'en-US': 'leftIcon',
          },
          tip: '输入框左侧图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'search',
      },
      {
        name: 'rightIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框右侧图标名称或图片链接',
            'en-US': 'rightIcon',
          },
          tip: '输入框右侧图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'left',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义左侧内容',
            'en-US': 'left',
          },
          tip: '自定义左侧内容（搜索框外）',
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
        name: 'action',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧内容',
            'en-US': 'action',
          },
          tip: '自定义右侧内容（搜索框外），设置show-action属性后展示',
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
        name: 'left-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义左侧图标',
            'en-US': 'left-icon',
          },
          tip: '自定义左侧图标（搜索框内）',
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
        name: 'right-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧图标',
            'en-US': 'right-icon',
          },
          tip: '自定义右侧图标（搜索框内）',
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
          name: 'onSearch',
          description: '确定搜索时触发',
          template:
            "onSearch(extParams) {\n  // 确定搜索时触发\n  console.log('onSearch', extParams)\n}",
        },
        {
          name: 'onInput',
          description: '输入框内容变化时触发',
          template:
            "onInput(extParams) {\n  // 输入框内容变化时触发\n  console.log('onInput', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '输入框获得焦点时触发',
          template:
            "onFocus(extParams) {\n  // 输入框获得焦点时触发\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '输入框失去焦点时触发',
          template:
            "onBlur(extParams) {\n  // 输入框失去焦点时触发\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onClear',
          description: '点击清除按钮后触发',
          template:
            "onClear(extParams) {\n  // 点击清除按钮后触发\n  console.log('onClear', extParams)\n}",
        },
        {
          name: 'onCancel',
          description: '点击取消按钮时触发',
          template:
            "onCancel(extParams) {\n  // 点击取消按钮时触发\n  console.log('onCancel', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '搜索',
      screenshot: './screenshots/search.webp',
      schema: {
        componentName: 'VanSearch',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
