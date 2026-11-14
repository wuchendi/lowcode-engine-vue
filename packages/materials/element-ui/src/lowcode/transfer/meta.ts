import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (transfer); see https://element.eleme.cn/#/zh-CN/component/transfer
const meta = {
  componentName: 'ElTransfer',
  title: '穿梭框',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/transfer',
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
        setter: 'FunctionSetter',
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
        setter: 'JsonSetter',
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
        setter: 'JsonSetter',
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
        setter: 'FunctionSetter',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '右侧列表元素变化时触发',
          template:
            "onChange(extParams) {\n  // 右侧列表元素变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onLeft-check-change',
          description: '左侧列表元素被用户选中 / 取消选中时触发',
          template:
            "onLeftCheckChange(extParams) {\n  // 左侧列表元素被用户选中 / 取消选中时触发\n  console.log('onLeftCheckChange', extParams)\n}",
        },
        {
          name: 'onRight-check-change',
          description: '右侧列表元素被用户选中 / 取消选中时触发',
          template:
            "onRightCheckChange(extParams) {\n  // 右侧列表元素被用户选中 / 取消选中时触发\n  console.log('onRightCheckChange', extParams)\n}",
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
