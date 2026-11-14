import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (anchor); see https://element-plus.org/zh-CN/component/anchor.html
const meta = {
  componentName: 'ElAnchorLink',
  title: '锚点 AnchorLink',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/anchor.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '链接的文本内容',
            'en-US': 'title',
          },
          tip: '链接的文本内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'href',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '链接的地址',
            'en-US': 'href',
          },
          tip: '链接的地址。',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'sub-link',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子链接的槽位',
            'en-US': 'sub-link',
          },
          tip: '子链接的槽位',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['ElAnchor'],
      },
    },
  },
  snippets: [
    {
      title: '锚点 AnchorLink',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElAnchorLink',
        props: {},
        children: '锚点',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
