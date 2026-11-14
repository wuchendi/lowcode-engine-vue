import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (carousel); see https://element-plus.org/zh-CN/component/carousel.html
const meta = {
  componentName: 'ElCarouselItem',
  title: '走马灯 CarouselItem',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/carousel.html',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
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
        children: '走马灯',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
