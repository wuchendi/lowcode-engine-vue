import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (text-ellipsis); see https://vant-ui.github.io/vant/#/zh-CN/text-ellipsis
const meta = {
  componentName: 'VanTextEllipsis',
  title: '文本省略',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/text-ellipsis',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'rows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示的行数',
            'en-US': 'rows',
          },
          tip: '展示的行数',
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
        defaultValue: '1',
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '需要展示的文本',
            'en-US': 'content',
          },
          tip: '需要展示的文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'expandText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展开操作的文案',
            'en-US': 'expandText',
          },
          tip: '展开操作的文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'collapseText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '收起操作的文案',
            'en-US': 'collapseText',
          },
          tip: '收起操作的文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'dots',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '省略号的文本内容',
            'en-US': 'dots',
          },
          tip: '省略号的文本内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '...',
      },
      {
        name: 'position',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '省略位置',
            'en-US': 'position',
          },
          tip: '省略位置，可选值为 start middle',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'start',
                value: 'start',
              },
              {
                title: 'middle',
                value: 'middle',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'end',
      },
      {
        name: 'actionv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义操作',
            'en-US': 'actionv',
          },
          tip: '自定义操作',
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
      events: [
        {
          name: 'onClickAction',
          description: '点击展开/收起时触发',
          template:
            "onClickAction(extParams) {\n  // 点击展开/收起时触发\n  console.log('onClickAction', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '文本省略',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanTextEllipsis',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
