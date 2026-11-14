import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (carousel); see https://antdv.com/components/carousel-cn
const meta = {
  componentName: 'ACarousel',
  title: '走马灯',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/carousel-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoplay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动切换',
            'en-US': 'autoplay',
          },
          tip: '是否自动切换',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dotPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板指示点位置',
            'en-US': 'dotPosition',
          },
          tip: '面板指示点位置，可选 top bottom left right',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'dots',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示面板指示点',
            'en-US': 'dots',
          },
          tip: '是否显示面板指示点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'dotsClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板指示点类名',
            'en-US': 'dotsClass',
          },
          tip: '面板指示点类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'slick-dots',
      },
      {
        name: 'easing',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画效果',
            'en-US': 'easing',
          },
          tip: '动画效果',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'linear',
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画效果函数',
            'en-US': 'effect',
          },
          tip: '动画效果函数',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'scrollx',
      },
      {
        name: 'afterChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '切换面板的回调',
            'en-US': 'afterChange',
          },
          tip: '切换面板的回调',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'beforeChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '切换面板的回调',
            'en-US': 'beforeChange',
          },
          tip: '切换面板的回调',
        },
        setter: 'FunctionSetter',
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
      title: '走马灯',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ACarousel',
        props: {},
        children: [],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
