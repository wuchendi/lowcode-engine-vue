import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (circle); see https://vant-ui.github.io/vant/#/zh-CN/circle
const meta = {
  componentName: 'VanCircle',
  title: '环形进度条',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/circle',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:current-rate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前进度',
            'en-US': 'v-model:current-rate',
          },
          tip: '当前进度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'rate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '目标进度',
            'en-US': 'rate',
          },
          tip: '目标进度',
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
        defaultValue: '100',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '圆环直径',
            'en-US': 'size',
          },
          tip: '圆环直径，默认单位为 px',
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
        defaultValue: '100px',
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条颜色',
            'en-US': 'color',
          },
          tip: '进度条颜色，传入对象格式可以定义渐变色',
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
        defaultValue: '#1989fa',
      },
      {
        name: 'layerColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '轨道颜色',
            'en-US': 'layerColor',
          },
          tip: '轨道颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'white',
      },
      {
        name: 'fill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '填充颜色',
            'en-US': 'fill',
          },
          tip: '填充颜色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'none',
      },
      {
        name: 'speed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画速度',
            'en-US': 'speed',
          },
          tip: '动画速度（单位为 rate/s）',
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
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文字',
            'en-US': 'text',
          },
          tip: '文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'strokeWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条宽度',
            'en-US': 'strokeWidth',
          },
          tip: '进度条宽度',
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
        defaultValue: '40',
      },
      {
        name: 'strokeLinecap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条端点的形状',
            'en-US': 'strokeLinecap',
          },
          tip: '进度条端点的形状，可选值为 square butt',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'square',
                value: 'square',
              },
              {
                title: 'butt',
                value: 'butt',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'round',
      },
      {
        name: 'clockwise',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否顺时针增加',
            'en-US': 'clockwise',
          },
          tip: '是否顺时针增加',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'startPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度起始位置',
            'en-US': 'startPosition',
          },
          tip: '进度起始位置，可选值为 left、right、bottom',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'top',
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
      title: '环形进度条',
      screenshot: './screenshots/circle.webp',
      schema: {
        componentName: 'VanCircle',
        props: {
          text: '环形进度条',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
