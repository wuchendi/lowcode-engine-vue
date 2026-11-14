import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (picker-group); see https://vant-ui.github.io/vant/#/zh-CN/picker-group
const meta = {
  componentName: 'VanPickerGroup',
  title: '选择器组',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/picker-group',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:active-tab',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置当前选中的标签',
            'en-US': 'v-model:active-tab',
          },
          tip: '设置当前选中的标签',
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
        name: 'tabs',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置标签页的标题',
            'en-US': 'tabs',
          },
          tip: '设置标签页的标题',
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
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶部栏标题',
            'en-US': 'title',
          },
          tip: '顶部栏标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showToolbar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示顶部栏',
            'en-US': 'showToolbar',
          },
          tip: '是否显示顶部栏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'nextStepText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下一步按钮的文字',
            'en-US': 'nextStepText',
          },
          tip: '下一步按钮的文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'confirmButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮的文字',
            'en-US': 'confirmButtonText',
          },
          tip: '确认按钮的文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'cancelButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮的文字',
            'en-US': 'cancelButtonText',
          },
          tip: '取消按钮的文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'toolbar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义整个顶部栏的内容',
            'en-US': 'toolbar',
          },
          tip: '自定义整个顶部栏的内容',
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
        name: 'confirm',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义确认按钮内容',
            'en-US': 'confirm',
          },
          tip: '自定义确认按钮内容',
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
        name: 'cancel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义取消按钮内容',
            'en-US': 'cancel',
          },
          tip: '自定义取消按钮内容',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '选择器组',
      screenshot: './screenshots/picker-group.webp',
      schema: {
        componentName: 'VanPickerGroup',
        props: {
          title: '选择器组',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
