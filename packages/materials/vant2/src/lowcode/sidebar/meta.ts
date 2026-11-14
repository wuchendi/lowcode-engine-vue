import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (sidebar); see https://vant-ui.github.io/vant/v2/#/zh-CN/sidebar
const meta = {
  componentName: 'VanSidebar',
  title: '侧边导航',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/sidebar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前导航项的索引',
            'en-US': 'v-model',
          },
          tip: '当前导航项的索引',
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
        defaultValue: '0',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '切换导航项时触发',
          template:
            "onChange(extParams) {\n  // 切换导航项时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '侧边导航',
      screenshot: './screenshots/sidebar.webp',
      schema: {
        componentName: 'VanSidebar',
        children: [
          {
            componentName: 'VanSidebarItem',
            props: {
              title: '标签一',
            },
          },
          {
            componentName: 'VanSidebarItem',
            props: {
              title: '标签二',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
