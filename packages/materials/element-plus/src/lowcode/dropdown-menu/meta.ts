import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (dropdown); see https://element-plus.org/zh-CN/component/dropdown.html
const meta = {
  componentName: 'ElDropdownMenu',
  title: '下拉菜单 DropdownMenu',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/dropdown.html',
  devMode: 'proCode',
  configure: {
    props: [],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Slot'],
      },
    },
  },
  snippets: [
    {
      title: '下拉菜单 DropdownMenu',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDropdownMenu',
        children: [
          {
            componentName: 'ElDropdownItem',
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
