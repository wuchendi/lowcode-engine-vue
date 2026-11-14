import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (badge); see https://antdv.com/components/badge-cn
const meta = {
  componentName: 'ABadge',
  title: '徽标数',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/badge-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义小圆点的颜色',
            'en-US': 'color',
          },
          tip: '自定义小圆点的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'count',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示的数字',
            'en-US': 'count',
          },
          tip: '展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏',
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
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不展示数字',
            'en-US': 'dot',
          },
          tip: '不展示数字，只有一个小红点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'numberStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置状态点的样式',
            'en-US': 'numberStyle',
          },
          tip: '设置状态点的样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置状态点的位置偏移',
            'en-US': 'offset',
          },
          tip: '设置状态点的位置偏移，格式为 [x, y]',
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
      },
      {
        name: 'overflowCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示封顶的数字值',
            'en-US': 'overflowCount',
          },
          tip: '展示封顶的数字值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 99,
      },
      {
        name: 'showZero',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当数值为 0 时',
            'en-US': 'showZero',
          },
          tip: '当数值为 0 时，是否展示 Badge',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置 Badge 为状态点',
            'en-US': 'status',
          },
          tip: '设置 Badge 为状态点',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'success',
                  value: 'success',
                },
                {
                  title: 'processing, ',
                  value: 'processing, ',
                },
                {
                  title: ', ',
                  value: ', ',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'text',
            'en-US': 'text',
          },
          tip: '在设置了 status 的前提下有效，设置状态点的文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'title',
            'en-US': 'title',
          },
          tip: '设置鼠标放在状态点上时显示的文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'count',
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
      title: '徽标数',
      screenshot: './screenshots/badge.webp',
      schema: {
        componentName: 'ABadge',
        props: {
          count: 5,
        },
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '消息',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
