import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (avatar); see https://antdv.com/components/avatar-cn
const meta = {
  componentName: 'AAvatarGroup',
  title: '头像 AvatarGroup',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/avatar-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'maxCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示的最大头像个数',
            'en-US': 'maxCount',
          },
          tip: '显示的最大头像个数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'maxPopoverPlacement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多余头像气泡弹出位置',
            'en-US': 'maxPopoverPlacement',
          },
          tip: '多余头像气泡弹出位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'maxPopoverTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxPopoverTrigger',
            'en-US': 'maxPopoverTrigger',
          },
          tip: '设置多余头像 Popover 的触发方式',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'maxStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多余头像样式',
            'en-US': 'maxStyle',
          },
          tip: '多余头像样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头像的大小',
            'en-US': 'size',
          },
          tip: '设置头像的大小',
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
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头像的形状',
            'en-US': 'shape',
          },
          tip: '设置头像的形状',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'circle',
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
      title: '头像 AvatarGroup',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AAvatarGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
