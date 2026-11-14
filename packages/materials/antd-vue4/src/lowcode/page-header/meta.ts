import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (page-header); see https://antdv.com/components/page-header-cn
const meta = {
  componentName: 'APageHeader',
  title: '页头',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/page-header-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'avatar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题栏旁的头像',
            'en-US': 'avatar',
          },
          tip: '标题栏旁的头像',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'backIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 back icon',
            'en-US': 'backIcon',
          },
          tip: '自定义 back icon ，如果为 false 不渲染 back icon',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'breadcrumb',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面包屑的配置',
            'en-US': 'breadcrumb',
          },
          tip: '面包屑的配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '操作区',
            'en-US': 'extra',
          },
          tip: '操作区，位于 title 行的行尾',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'PageHeader 的页脚',
            'en-US': 'footer',
          },
          tip: 'PageHeader 的页脚，一般用于渲染 TabBar',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'ghost',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pageHeader 的类型',
            'en-US': 'ghost',
          },
          tip: 'pageHeader 的类型，将会改变背景颜色',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'subTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的二级标题文字',
            'en-US': 'subTitle',
          },
          tip: '自定义的二级标题文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tags',
            'en-US': 'tags',
          },
          tip: 'title 旁的 tag 列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标题文字',
            'en-US': 'title',
          },
          tip: '自定义标题文字',
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
          name: 'onBack',
          description: '返回按钮的点击事件',
          template:
            "onBack(extParams) {\n  // 返回按钮的点击事件\n  console.log('onBack', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '页头',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'APageHeader',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
