import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (config-provider); see https://1x.antdv.com/components/config-provider-cn/
const meta = {
  componentName: 'AConfigProvider',
  title: '全局化配置',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://1x.antdv.com/components/config-provider-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoInsertSpaceInButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置为 false 时',
            'en-US': 'autoInsertSpaceInButton',
          },
          tip: '设置为 false 时，移除按钮中 2 个汉字之间的空格',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'csp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'csp',
            'en-US': 'csp',
          },
          tip: '设置 Content Security Policy 配置',
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
        name: 'renderEmpty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义组件空状态',
            'en-US': 'renderEmpty',
          },
          tip: '自定义组件空状态。参考 空状态',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出框',
            'en-US': 'getPopupContainer',
          },
          tip: '弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'locale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '语言包配置',
            'en-US': 'locale',
          },
          tip: '语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'pageHeader',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pageHeader',
            'en-US': 'pageHeader',
          },
          tip: '统一设置 pageHeader 的 ghost，参考 pageHeader',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'transformCellText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'transformCellText',
            'en-US': 'transformCellText',
          },
          tip: 'Table 数据渲染前可以再次改变，一般用户空数据的默认配置',
        },
        setter: [
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
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
    component: {},
  },
  snippets: [
    {
      title: '全局化配置',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AConfigProvider',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
