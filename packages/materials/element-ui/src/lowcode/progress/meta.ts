import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (progress); see https://element.eleme.cn/#/zh-CN/component/progress
const meta = {
  componentName: 'ElProgress',
  title: '进度条',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/progress',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'percentage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '**百分比',
            'en-US': 'percentage',
          },
          tip: '**百分比（必填）**',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条类型',
            'en-US': 'type',
          },
          tip: '进度条类型',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'line',
                value: 'line',
              },
              {
                title: 'circle',
                value: 'circle',
              },
              {
                title: 'dashboard',
                value: 'dashboard',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'line',
      },
      {
        name: 'strokeWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条的宽度',
            'en-US': 'strokeWidth',
          },
          tip: '进度条的宽度，单位 px',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 6,
      },
      {
        name: 'textInside',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条显示文字内置在进度条内',
            'en-US': 'textInside',
          },
          tip: '进度条显示文字内置在进度条内（只在 type=line 时可用）',
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
            'zh-CN': '进度条当前状态',
            'en-US': 'status',
          },
          tip: '进度条当前状态',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'exception',
                value: 'exception',
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
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条背景色',
            'en-US': 'color',
          },
          tip: '进度条背景色（会覆盖 status 状态颜色）',
        },
        setter: [
          {
            componentName: 'ColorSetter',
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
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '环形进度条画布宽度',
            'en-US': 'width',
          },
          tip: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 126,
      },
      {
        name: 'showText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示进度条文字内容',
            'en-US': 'showText',
          },
          tip: '是否显示进度条文字内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'strokeLinecap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'strokeLinecap',
            'en-US': 'strokeLinecap',
          },
          tip: 'circle/dashboard 类型路径两端的形状',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'butt',
                value: 'butt',
              },
              {
                title: 'round',
                value: 'round',
              },
              {
                title: 'square',
                value: 'square',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'round',
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定进度条文字内容',
            'en-US': 'format',
          },
          tip: '指定进度条文字内容',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'defineBackColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定进度条底色',
            'en-US': 'defineBackColor',
          },
          tip: '指定进度条底色（支持 hex 格式）',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定进度条字体颜色',
            'en-US': 'textColor',
          },
          tip: '指定进度条字体颜色（支持 hex 格式）',
        },
        setter: 'ColorSetter',
        supportVariable: true,
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
      title: '进度条',
      screenshot: './screenshots/progress.webp',
      schema: {
        componentName: 'ElProgress',
        props: {
          percentage: 0,
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
