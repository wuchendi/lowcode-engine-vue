import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (transfer); see https://element-plus.org/zh-CN/component/transfer.html
const meta = {
  componentName: 'ElTransfer',
  title: '穿梭框',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/transfer.html',
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
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Transfer 的数据源',
            'en-US': 'data',
          },
          tip: 'Transfer 的数据源',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'filterable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可搜索',
            'en-US': 'filterable',
          },
          tip: '是否可搜索',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'filterPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索框占位符',
            'en-US': 'filterPlaceholder',
          },
          tip: '搜索框占位符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义搜索方法',
            'en-US': 'filterMethod',
          },
          tip: '自定义搜索方法',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'targetOrder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧列表元素的排序策略',
            'en-US': 'targetOrder',
          },
          tip: '右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'original',
                value: 'original',
              },
              {
                title: 'push',
                value: 'push',
              },
              {
                title: 'unshift',
                value: 'unshift',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'original',
      },
      {
        name: 'titles',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义列表标题',
            'en-US': 'titles',
          },
          tip: '自定义列表标题',
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
        name: 'buttonTexts',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义按钮文案',
            'en-US': 'buttonTexts',
          },
          tip: '自定义按钮文案',
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
        name: 'renderContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义数据项渲染函数',
            'en-US': 'renderContent',
          },
          tip: '自定义数据项渲染函数',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表顶部勾选状态文案',
            'en-US': 'format',
          },
          tip: '列表顶部勾选状态文案',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数据源的字段别名',
            'en-US': 'props',
          },
          tip: '数据源的字段别名',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'leftDefaultChecked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'leftDefaultChecked',
            'en-US': 'leftDefaultChecked',
          },
          tip: '初始状态下左侧列表的已勾选项的 key 数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'rightDefaultChecked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rightDefaultChecked',
            'en-US': 'rightDefaultChecked',
          },
          tip: '初始状态下右侧列表的已勾选项的 key 数组',
        },
        setter: 'JsonSetter',
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
        name: 'virtualScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtualScroll',
            'en-US': 'virtualScroll',
          },
          tip: 'whether to enable virtual scrolling',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'itemSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'itemSize',
            'en-US': 'itemSize',
          },
          tip: 'item height for virtual scrolling',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 30,
      },
      {
        name: 'left-footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧列表底部的内容',
            'en-US': 'left-footer',
          },
          tip: '左侧列表底部的内容',
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
        name: 'right-footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧列表底部的内容',
            'en-US': 'right-footer',
          },
          tip: '右侧列表底部的内容',
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
        name: 'left-empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'left-empty',
            'en-US': 'left-empty',
          },
          tip: 'content when left panel is empty or when no data matches the filter',
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
        name: 'right-empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'right-empty',
            'en-US': 'right-empty',
          },
          tip: 'content when right panel is empty or when no data matches the filter',
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
          name: 'onChange',
          description: '右侧列表元素变化时触发',
          template:
            "onChange(...args, extParams) {\n  // 右侧列表元素变化时触发\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onLeftCheckChange',
          description: '左侧列表元素被用户选中 / 取消选中时触发',
          template:
            "onLeftCheckChange(...args, extParams) {\n  // 左侧列表元素被用户选中 / 取消选中时触发\n  console.log('onLeftCheckChange', ...args)\n}",
        },
        {
          name: 'onRightCheckChange',
          description: '右侧列表元素被用户选中 / 取消选中时触发',
          template:
            "onRightCheckChange(...args, extParams) {\n  // 右侧列表元素被用户选中 / 取消选中时触发\n  console.log('onRightCheckChange', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '穿梭框',
      screenshot: './screenshots/transfer.webp',
      schema: {
        componentName: 'ElTransfer',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
