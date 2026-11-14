import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (avatar); see https://element-plus.org/zh-CN/component/avatar.html
const meta = {
  componentName: 'ElAvatarGroup',
  title: '头像 AvatarGroup',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/avatar.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制头像组中的头像大小',
            'en-US': 'size',
          },
          tip: '控制头像组中的头像大小',
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
                  title: 'default',
                  value: 'default',
                },
                {
                  title: 'small',
                  value: 'small',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制头像组中的头像形状',
            'en-US': 'shape',
          },
          tip: '控制头像组中的头像形状',
        },
        setter: {
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
        supportVariable: true,
      },
      {
        name: 'collapseAvatars',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否折叠头像',
            'en-US': 'collapseAvatars',
          },
          tip: '是否折叠头像',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'collapseAvatarsTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseAvatarsTooltip',
            'en-US': 'collapseAvatarsTooltip',
          },
          tip: '是否在鼠标悬停折叠头像的文字时显示所有折叠头像。若要使用此功能， collapse-avatars 必须为 true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'maxCollapseAvatars',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxCollapseAvatars',
            'en-US': 'maxCollapseAvatars',
          },
          tip: '需要显示的头像的最大数量若要使用此功能， collapse-avatars 必须为 true',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltip 主题',
            'en-US': 'effect',
          },
          tip: 'tooltip 主题，内置了 dark / light 两种',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltip 的位置',
            'en-US': 'placement',
          },
          tip: 'tooltip 的位置',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'top-start',
                value: 'top-start',
              },
              {
                title: 'top-end',
                value: 'top-end',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
              {
                title: 'bottom-start',
                value: 'bottom-start',
              },
              {
                title: 'bottom-end',
                value: 'bottom-end',
              },
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'left-start',
                value: 'left-start',
              },
              {
                title: 'left-end',
                value: 'left-end',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'right-start',
                value: 'right-start',
              },
              {
                title: 'right-end',
                value: 'right-end',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltip 的自定义类名',
            'en-US': 'popperClass',
          },
          tip: 'tooltip 的自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltip 的自定义样式',
            'en-US': 'popperStyle',
          },
          tip: 'tooltip 的自定义样式',
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
        name: 'collapseClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseClass',
            'en-US': 'collapseClass',
          },
          tip: 'collapse-avatar 的自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'collapseStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseStyle',
            'en-US': 'collapseStyle',
          },
          tip: 'collapse-avatar 的自定义样式',
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
        componentName: 'ElAvatarGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
