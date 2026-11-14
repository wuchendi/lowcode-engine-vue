import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (avatar); see https://1x.antdv.com/components/avatar-cn/
const meta = {
  componentName: 'AAvatar',
  title: '头像',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/avatar-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头像的图标类型',
            'en-US': 'icon',
          },
          tip: '设置头像的图标类型，可设为 Icon 的 type 或 VNode',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定头像的形状',
            'en-US': 'shape',
          },
          tip: '指定头像的形状',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'circle',
                  value: 'circle',
                },
                {
                  title: 'square',
                  value: 'square',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'circle',
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
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'large',
                  value: 'large',
                },
                {
                  title: 'small',
                  value: 'small',
                },
                {
                  title: 'default',
                  value: 'default',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片类头像的资源地址',
            'en-US': 'src',
          },
          tip: '图片类头像的资源地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'srcSet',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置图片类头像响应式资源地址',
            'en-US': 'srcSet',
          },
          tip: '设置图片类头像响应式资源地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图像无法显示时的替代文本',
            'en-US': 'alt',
          },
          tip: '图像无法显示时的替代文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'loadError',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片加载失败的事件',
            'en-US': 'loadError',
          },
          tip: '图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为',
        },
        setter: [
          {
            componentName: 'BoolSetter',
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
      title: '头像',
      screenshot: './screenshots/avatar.webp',
      schema: {
        componentName: 'AAvatar',
        children: 'U',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
