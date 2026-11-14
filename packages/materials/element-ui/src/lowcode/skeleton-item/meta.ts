import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (skeleton); see https://element.eleme.cn/#/zh-CN/component/skeleton
const meta = {
  componentName: 'ElSkeletonItem',
  title: '骨架屏 SkeletonItem',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/skeleton',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'variant',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前显示的占位元素的样式',
            'en-US': 'variant',
          },
          tip: '当前显示的占位元素的样式',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'p',
                value: 'p',
              },
              {
                title: 'h1',
                value: 'h1',
              },
              {
                title: 'h3',
                value: 'h3',
              },
              {
                title: 'text',
                value: 'text',
              },
              {
                title: 'caption',
                value: 'caption',
              },
              {
                title: 'button',
                value: 'button',
              },
              {
                title: 'image',
                value: 'image',
              },
              {
                title: 'circle',
                value: 'circle',
              },
              {
                title: 'rect',
                value: 'rect',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'text',
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
        parentWhitelist: ['ElSkeleton'],
      },
    },
  },
  snippets: [
    {
      title: '骨架屏 SkeletonItem',
      screenshot: './screenshots/skeleton-item.webp',
      schema: {
        componentName: 'ElSkeletonItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
