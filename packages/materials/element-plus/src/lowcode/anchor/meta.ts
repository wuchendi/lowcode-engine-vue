import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (anchor); see https://element-plus.org/zh-CN/component/anchor.html
const meta = {
  componentName: 'ElAnchor',
  title: '锚点',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/anchor.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'container',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'container',
            'en-US': 'container',
          },
          tip: 'Scroll container.',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: 'Set the offset of the anchor scroll.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'bound',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'bound',
            'en-US': 'bound',
          },
          tip: 'The offset of the element starting to trigger the anchor.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 15,
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'duration',
            'en-US': 'duration',
          },
          tip: 'Set the scroll duration of the container, in milliseconds.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'marker',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'marker',
            'en-US': 'marker',
          },
          tip: 'Whether to show the marker.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: 'Set Anchor type.',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'underline',
                value: 'underline',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'direction',
            'en-US': 'direction',
          },
          tip: 'Set Anchor direction.',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'vertical',
                value: 'vertical',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'vertical',
      },
      {
        name: 'selectScrollTop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'selectScrollTop',
            'en-US': 'selectScrollTop',
          },
          tip: 'Scroll whether link is selected at the top',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: 'step 改变时的回调',
          template:
            "onChange(...args, extParams) {\n  // step 改变时的回调\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onClick',
          description: '当用户点击链接时触发',
          template:
            "onClick(...args, extParams) {\n  // 当用户点击链接时触发\n  console.log('onClick', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '锚点',
      screenshot: './screenshots/anchor.webp',
      schema: {
        componentName: 'ElAnchor',
        props: {},
        children: '锚点',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
