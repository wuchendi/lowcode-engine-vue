import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (comment); see https://1x.antdv.com/components/comment-cn/
const meta = {
  componentName: 'AComment',
  title: '评论',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/comment-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'actions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'actions',
            'en-US': 'actions',
          },
          tip: '在评论内容下面呈现的操作项列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'author',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '要显示为注释作者的元素',
            'en-US': 'author',
          },
          tip: '要显示为注释作者的元素',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'avatar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'avatar',
            'en-US': 'avatar',
          },
          tip: '要显示为评论头像的元素 - 通常是 antd Avatar 或者 src',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '评论的主要内容',
            'en-US': 'content',
          },
          tip: '评论的主要内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'datetime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示时间描述',
            'en-US': 'datetime',
          },
          tip: '展示时间描述',
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
    component: {},
  },
  snippets: [
    {
      title: '评论',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AComment',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
