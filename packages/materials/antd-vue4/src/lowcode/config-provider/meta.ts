import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (config-provider); see https://antdv.com/components/config-provider-cn
const meta = {
  componentName: 'AConfigProvider',
  title: '全局化配置',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://antdv.com/components/config-provider-cn',
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
        name: 'componentSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置 antd 组件大小',
            'en-US': 'componentSize',
          },
          tip: '设置 antd 组件大小',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置文本展示方向',
            'en-US': 'direction',
          },
          tip: '设置文本展示方向。 示例',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'ltr',
      },
      {
        name: 'dropdownMatchSelectWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉菜单和选择器同宽',
            'en-US': 'dropdownMatchSelectWidth',
          },
          tip: '下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'form',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'form',
            'en-US': 'form',
          },
          tip: '设置 Form 组件的通用属性',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
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
        name: 'getTargetContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'getTargetContainer',
            'en-US': 'getTargetContainer',
          },
          tip: '配置 Affix、Anchor 滚动监听容器。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'input',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'input',
            'en-US': 'input',
          },
          tip: '设置 Input 组件的通用属性',
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
        name: 'prefixCls',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置统一样式前缀',
            'en-US': 'prefixCls',
          },
          tip: '设置统一样式前缀。注意：需要配合 less 变量 @ant-prefix 使用',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'ant',
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
        name: 'space',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'space',
            'en-US': 'space',
          },
          tip: '设置 Space 的 size，参考 Space',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
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
      {
        name: 'virtual',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtual',
            'en-US': 'virtual',
          },
          tip: '设置 false 时关闭虚拟滚动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'wave',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置水波纹特效',
            'en-US': 'wave',
          },
          tip: '设置水波纹特效',
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
