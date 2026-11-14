import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (carousel); see https://element.eleme.cn/#/zh-CN/component/carousel
const meta = {
  componentName: 'ElCarouselItem',
  title: '走马灯 CarouselItem',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/carousel',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '幻灯片的名字',
            'en-US': 'name',
          },
          tip: '幻灯片的名字，可用作 setActiveItem 的参数',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '该幻灯片所对应指示器的文本',
            'en-US': 'label',
          },
          tip: '该幻灯片所对应指示器的文本',
        },
        setter: 'StringSetter',
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
    component: {
      nestingRule: {
        parentWhitelist: ['ElCarousel'],
      },
    },
  },
  snippets: [
    {
      title: '走马灯 CarouselItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElCarouselItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
