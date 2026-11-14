import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (affix); see https://element-plus.org/zh-CN/component/affix.html
const meta = {
  componentName: 'ElAffix',
  title: '固钉',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/affix.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: 'offset distance',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'position',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'position',
            'en-US': 'position',
          },
          tip: 'position of affix',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'target',
            'en-US': 'target',
          },
          tip: 'target container (CSS selector)',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: 'z-index of affix',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 100,
      },
      {
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: 'whether affix element is teleported, if true it will be teleported to where append-to sets',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'appendTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendTo',
            'en-US': 'appendTo',
          },
          tip: 'which element the affix element appends to',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'body',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: 'triggers when fixed state changed',
          template:
            "onChange(...args, extParams) {\n  // triggers when fixed state changed\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onScroll',
          description: 'triggers when scrolling',
          template:
            "onScroll(...args, extParams) {\n  // triggers when scrolling\n  console.log('onScroll', ...args)\n}",
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
      title: '固钉',
      screenshot: './screenshots/affix.webp',
      schema: {
        componentName: 'ElAffix',
        children: [
          {
            componentName: 'ElButton',
            props: {},
            children: '固钉',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
