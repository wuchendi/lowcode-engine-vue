import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (cascader); see https://element.eleme.cn/#/zh-CN/component/cascader
const meta = {
  componentName: 'ElCascader',
  title: '级联选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/cascader',
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
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选项数据源',
            'en-US': 'options',
          },
          tip: '可选项数据源，键名可通过 Props 属性配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配置选项',
            'en-US': 'props',
          },
          tip: '配置选项，具体见下表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '尺寸',
            'en-US': 'size',
          },
          tip: '尺寸',
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
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持清空选项',
            'en-US': 'clearable',
          },
          tip: '是否支持清空选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showAllLevels',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showAllLevels',
            'en-US': 'showAllLevels',
          },
          tip: '输入框中是否显示选中值的完整路径',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'collapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多选模式下是否折叠Tag',
            'en-US': 'collapseTags',
          },
          tip: '多选模式下是否折叠Tag',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'separator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项分隔符',
            'en-US': 'separator',
          },
          tip: '选项分隔符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可搜索选项',
            'en-US': 'filterable',
          },
          tip: '是否可搜索选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'filterMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义搜索逻辑',
            'en-US': 'filterMethod',
          },
          tip: '自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'debounce',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索关键词输入的去抖延迟',
            'en-US': 'debounce',
          },
          tip: '搜索关键词输入的去抖延迟，毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'beforeFilter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '筛选之前的钩子',
            'en-US': 'beforeFilter',
          },
          tip: '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义浮层类名',
            'en-US': 'popperClass',
          },
          tip: '自定义浮层类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '无匹配选项时的内容',
            'en-US': 'empty',
          },
          tip: '无匹配选项时的内容',
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
          description: '当选中节点变化时触发',
          template:
            "onChange(extParams) {\n  // 当选中节点变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onExpand-change',
          description: '当展开节点发生变化时触发',
          template:
            "onExpandChange(extParams) {\n  // 当展开节点发生变化时触发\n  console.log('onExpandChange', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '当失去焦点时触发',
          template:
            "onBlur(extParams) {\n  // 当失去焦点时触发\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '当获得焦点时触发',
          template:
            "onFocus(extParams) {\n  // 当获得焦点时触发\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onVisible-change',
          description: '下拉框出现/隐藏时触发',
          template:
            "onVisibleChange(extParams) {\n  // 下拉框出现/隐藏时触发\n  console.log('onVisibleChange', extParams)\n}",
        },
        {
          name: 'onRemove-tag',
          description: '在多选模式下，移除Tag时触发',
          template:
            "onRemoveTag(extParams) {\n  // 在多选模式下，移除Tag时触发\n  console.log('onRemoveTag', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '级联选择器',
      screenshot: './screenshots/cascader.webp',
      schema: {
        componentName: 'ElCascader',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
