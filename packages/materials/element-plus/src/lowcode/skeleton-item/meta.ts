import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (skeleton); see https://element-plus.org/zh-CN/component/skeleton.html
const meta = {
  componentName: 'ElSkeletonItem',
  title: '骨架屏 SkeletonItem',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/skeleton.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'variant',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'variant',
            'en-US': 'variant',
          },
          tip: '当前渲染 skeleton 类型',
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
                title: 'text',
                value: 'text',
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
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElSkeletonItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
