import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (mention); see https://element-plus.org/zh-CN/component/mention.html
const meta = {
  componentName: 'ElMention',
  title: '提及',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/mention.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'options',
            'en-US': 'options',
          },
          tip: 'mention options list',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'props',
            'en-US': 'props',
          },
          tip: 'configuration options',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prefix',
            'en-US': 'prefix',
          },
          tip: 'prefix character to trigger mentions. The string length must be exactly 1',
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
        name: 'split',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'split',
            'en-US': 'split',
          },
          tip: 'character to split mentions. The string length must be exactly 1',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: ' ',
      },
      {
        name: 'filterOption',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterOption',
            'en-US': 'filterOption',
          },
          tip: 'customize filter option logic',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placement',
            'en-US': 'placement',
          },
          tip: 'set popup placement',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'bottom',
                value: 'bottom',
              },
              {
                title: 'top',
                value: 'top',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showArrow',
            'en-US': 'showArrow',
          },
          tip: 'whether the dropdown panel has an arrow',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: 'offset of the dropdown panel',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'whole',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'whole',
            'en-US': 'whole',
          },
          tip: 'when backspace is pressed to delete, whether the mention content is deleted as a whole',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'checkIsWhole',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'checkIsWhole',
            'en-US': 'checkIsWhole',
          },
          tip: 'when backspace is pressed to delete, check if the mention is a whole',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loading',
            'en-US': 'loading',
          },
          tip: 'whether the dropdown panel of mentions is in a loading state',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: 'input value',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: 'custom class name for dropdown panel',
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
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperStyle',
            'en-US': 'popperStyle',
          },
          tip: 'custom style for dropdown panel',
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
        name: 'popperOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperOptions',
            'en-US': 'popperOptions',
          },
          tip: 'popper.js parameters',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标签内容',
            'en-US': 'label',
          },
          tip: '自定义标签内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉列表顶部的内容',
            'en-US': 'header',
          },
          tip: '下拉列表顶部的内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉列表底部的内容',
            'en-US': 'footer',
          },
          tip: '下拉列表底部的内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'inputslots',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inputslots',
            'en-US': 'inputslots',
          },
          tip: '—',
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
          name: 'onSearch',
          description: 'trigger when prefix hit',
          template:
            "onSearch(...args, extParams) {\n  // trigger when prefix hit\n  console.log('onSearch', ...args)\n}",
        },
        {
          name: 'onSelect',
          description: 'trigger when user select the option',
          template:
            "onSelect(...args, extParams) {\n  // trigger when user select the option\n  console.log('onSelect', ...args)\n}",
        },
        {
          name: 'onWholeRemove',
          description:
            'trigger when a whole mention is removed and whole is true or check-is-whole is true',
          template:
            "onWholeRemove(...args, extParams) {\n  // trigger when a whole mention is removed and whole is true or check-is-whole is true\n  console.log('onWholeRemove', ...args)\n}",
        },
        {
          name: 'onInput',
          description: '—',
          template:
            "onInput(extParams) {\n  // —\n  console.log('onInput', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '提及',
      screenshot: './screenshots/mention.webp',
      schema: {
        componentName: 'ElMention',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
