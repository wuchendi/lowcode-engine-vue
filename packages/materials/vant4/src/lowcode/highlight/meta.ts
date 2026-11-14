import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (highlight); see https://vant-ui.github.io/vant/#/zh-CN/highlight
const meta = {
  componentName: 'VanHighlight',
  title: '高亮文本',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/highlight',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoEscape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动转义',
            'en-US': 'autoEscape',
          },
          tip: '是否自动转义',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'caseSensitive',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否区分大小写',
            'en-US': 'caseSensitive',
          },
          tip: '是否区分大小写',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'highlightClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '高亮元素的类名',
            'en-US': 'highlightClass',
          },
          tip: '高亮元素的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'highlightTag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'highlightTag',
            'en-US': 'highlightTag',
          },
          tip: '高亮元素对应的 HTML 标签名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'span',
      },
      {
        name: 'keywords',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '期望高亮的文本',
            'en-US': 'keywords',
          },
          tip: '期望高亮的文本',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'sourceString',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '源文本',
            'en-US': 'sourceString',
          },
          tip: '源文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tag',
            'en-US': 'tag',
          },
          tip: '根节点对应的 HTML 标签名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'div',
      },
      {
        name: 'unhighlightClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '非高亮元素的类名',
            'en-US': 'unhighlightClass',
          },
          tip: '非高亮元素的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'unhighlightTag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'unhighlightTag',
            'en-US': 'unhighlightTag',
          },
          tip: '非高亮元素对应的 HTML 标签名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'span',
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
      title: '高亮文本',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanHighlight',
        props: {
          keywords: '',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
