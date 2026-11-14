import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (skeleton); see https://vant-ui.github.io/vant/#/zh-CN/skeleton
const meta = {
  componentName: 'VanSkeleton',
  title: '骨架屏',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/skeleton',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'row',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '段落占位图行数',
            'en-US': 'row',
          },
          tip: '段落占位图行数',
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
      {
        name: 'rowWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '段落占位图宽度',
            'en-US': 'rowWidth',
          },
          tip: '段落占位图宽度，可传数组来设置每一行的宽度',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '100%',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示标题占位图',
            'en-US': 'title',
          },
          tip: '是否显示标题占位图',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'avatar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示头像占位图',
            'en-US': 'avatar',
          },
          tip: '是否显示头像占位图',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示骨架屏',
            'en-US': 'loading',
          },
          tip: '是否显示骨架屏，传 false 时会展示子组件内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'animate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启动画',
            'en-US': 'animate',
          },
          tip: '是否开启动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'round',
            'en-US': 'round',
          },
          tip: '是否将标题和段落显示为圆角风格',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'titleWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题占位图宽度',
            'en-US': 'titleWidth',
          },
          tip: '标题占位图宽度',
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
        defaultValue: '40%',
      },
      {
        name: 'avatarSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '头像占位图大小',
            'en-US': 'avatarSize',
          },
          tip: '头像占位图大小',
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
        defaultValue: '32px',
      },
      {
        name: 'avatarShape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '头像占位图形状',
            'en-US': 'avatarShape',
          },
          tip: '头像占位图形状，可选值为 square',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'round',
      },
      {
        name: 'template',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义内容',
            'en-US': 'template',
          },
          tip: '自定义内容',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '骨架屏',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanSkeleton',
        props: {},
        children: '骨架屏',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
