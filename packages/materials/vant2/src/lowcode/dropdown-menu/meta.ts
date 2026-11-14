import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (dropdown-menu); see https://vant-ui.github.io/vant/v2/#/zh-CN/dropdown-menu
const meta = {
  componentName: 'VanDropdownMenu',
  title: '下拉菜单',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/dropdown-menu',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单标题和选项的选中态颜色',
            'en-US': 'activeColor',
          },
          tip: '菜单标题和选项的选中态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ee0a24',
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单展开方向',
            'en-US': 'direction',
          },
          tip: '菜单展开方向，可选值为up',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'down',
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单栏 z-index 层级',
            'en-US': 'zIndex',
          },
          tip: '菜单栏 z-index 层级',
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
        defaultValue: '10',
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'duration',
          },
          tip: '动画时长，单位秒',
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
        defaultValue: '0.2',
      },
      {
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示遮罩层',
            'en-US': 'overlay',
          },
          tip: '是否显示遮罩层',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeOnClickOverlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击遮罩层后关闭菜单',
            'en-US': 'closeOnClickOverlay',
          },
          tip: '是否在点击遮罩层后关闭菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeOnClickOutside',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击外部元素后关闭菜单',
            'en-US': 'closeOnClickOutside',
          },
          tip: '是否在点击外部元素后关闭菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
      title: '下拉菜单',
      screenshot: './screenshots/dropdown-menu.webp',
      schema: {
        componentName: 'VanDropdownMenu',
        children: [
          {
            componentName: 'VanDropdownItem',
            props: {
              title: '筛选',
              options: [
                {
                  text: '全部',
                  value: 0,
                },
                {
                  text: '新款',
                  value: 1,
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
