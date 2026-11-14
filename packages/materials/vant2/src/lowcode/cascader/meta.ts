import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (cascader); see https://vant-ui.github.io/vant/v2/#/zh-CN/cascader
const meta = {
  componentName: 'VanCascader',
  title: '级联选择',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/cascader',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶部标题',
            'en-US': 'title',
          },
          tip: '顶部标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中项的值',
            'en-US': 'value',
          },
          tip: '选中项的值',
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
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选项数据源',
            'en-US': 'options',
          },
          tip: '可选项数据源',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未选中时的提示文案',
            'en-US': 'placeholder',
          },
          tip: '未选中时的提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中状态的高亮颜色',
            'en-US': 'activeColor',
          },
          tip: '选中状态的高亮颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ee0a24',
      },
      {
        name: 'closeable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示关闭图标',
            'en-US': 'closeable',
          },
          tip: '是否显示关闭图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showHeader',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示标题栏',
            'en-US': 'showHeader',
          },
          tip: '是否展示标题栏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'fieldNames',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fieldNames',
            'en-US': 'fieldNames',
          },
          tip: '自定义 options 结构中的字段',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'optionv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义选项文字',
            'en-US': 'optionv',
          },
          tip: '自定义选项文字',
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
          description: '选中项变化时触发',
          template:
            "onChange(extParams) {\n  // 选中项变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onFinish',
          description: '全部选项选择完成后触发',
          template:
            "onFinish(extParams) {\n  // 全部选项选择完成后触发\n  console.log('onFinish', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '点击关闭图标时触发',
          template:
            "onClose(extParams) {\n  // 点击关闭图标时触发\n  console.log('onClose', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '级联选择',
      screenshot: './screenshots/cascader.webp',
      schema: {
        componentName: 'VanCascader',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
