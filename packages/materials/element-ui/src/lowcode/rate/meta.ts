import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (rate); see https://element.eleme.cn/#/zh-CN/component/rate
const meta = {
  componentName: 'ElRate',
  title: '评分',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/rate',
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
        setter: 'JsonSetter',
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
        defaultValue: '#C6D1DE',
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
        defaultValue: '#EFF2F7',
      },
      {
        name: 'iconClasses',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon 的类名',
            'en-US': 'iconClasses',
          },
          tip: 'icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'voidIconClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未选中 icon 的类名',
            'en-US': 'voidIconClass',
          },
          tip: '未选中 icon 的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'el-icon-star-off',
      },
      {
        name: 'disabledVoidIconClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabledVoidIconClass',
            'en-US': 'disabledVoidIconClass',
          },
          tip: '只读时未选中 icon 的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'el-icon-star-on',
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
          tip: '是否显示当前分数，show-score 和 show-text 不能同时为真',
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
        defaultValue: '#1F2D3D',
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
        setter: 'JsonSetter',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '分值改变时触发',
          template:
            "onChange(extParams) {\n  // 分值改变时触发\n  console.log('onChange', extParams)\n}",
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
