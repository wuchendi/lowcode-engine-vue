import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (rate); see https://element-plus.org/zh-CN/component/rate.html
const meta = {
  componentName: 'ElRate',
  title: '评分',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/rate.html',
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
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大分值',
            'en-US': 'max',
          },
          tip: '最大分值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 5,
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为只读',
            'en-US': 'disabled',
          },
          tip: '是否为只读',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'allowHalf',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许半选',
            'en-US': 'allowHalf',
          },
          tip: '是否允许半选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'lowThreshold',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '低分和中等分数的界限值',
            'en-US': 'lowThreshold',
          },
          tip: '低分和中等分数的界限值，值本身被划分在低分中',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 2,
      },
      {
        name: 'highThreshold',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '高分和中等分数的界限值',
            'en-US': 'highThreshold',
          },
          tip: '高分和中等分数的界限值，值本身被划分在高分中',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 4,
      },
      {
        name: 'colors',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon 的颜色',
            'en-US': 'colors',
          },
          tip: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
        },
        setter: [
          {
            componentName: 'ColorSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'voidColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未选中 icon 的颜色',
            'en-US': 'voidColor',
          },
          tip: '未选中 icon 的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#c6d1de',
      },
      {
        name: 'disabledVoidColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabledVoidColor',
            'en-US': 'disabledVoidColor',
          },
          tip: '只读时未选中 icon 的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#eff2f7',
      },
      {
        name: 'icons',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标组件若传入数组',
            'en-US': 'icons',
          },
          tip: '图标组件若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名',
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
        name: 'voidIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未被选中的图标组件',
            'en-US': 'voidIcon',
          },
          tip: '未被选中的图标组件',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Star',
      },
      {
        name: 'disabledVoidIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用状态的未选择图标',
            'en-US': 'disabledVoidIcon',
          },
          tip: '禁用状态的未选择图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'StarFilled',
      },
      {
        name: 'showText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示辅助文字',
            'en-US': 'showText',
          },
          tip: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showScore',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示当前分数',
            'en-US': 'showScore',
          },
          tip: '是否显示当前分数， show-score 和 show-text 不能同时为真',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '辅助文字的颜色',
            'en-US': 'textColor',
          },
          tip: '辅助文字的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'texts',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '辅助文字数组',
            'en-US': 'texts',
          },
          tip: '辅助文字数组',
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
        name: 'scoreTemplate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分数显示模板',
            'en-US': 'scoreTemplate',
          },
          tip: '分数显示模板',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'clearable',
            'en-US': 'clearable',
          },
          tip: 'whether value can be reset to 0',
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
            'zh-CN': '原生 id 属性',
            'en-US': 'id',
          },
          tip: '原生 id 属性',
        },
        setter: 'StringSetter',
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
          tip: 'same as aria-label in Rate',
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
          description: '分值改变时触发',
          template:
            "onChange(...args, extParams) {\n  // 分值改变时触发\n  console.log('onChange', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '评分',
      screenshot: './screenshots/rate.webp',
      schema: {
        componentName: 'ElRate',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
