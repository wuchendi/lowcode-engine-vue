import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (popover); see https://element.eleme.cn/#/zh-CN/component/popover
const meta = {
  componentName: 'ElPopover',
  title: '弹出框',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/popover',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发方式',
            'en-US': 'trigger',
          },
          tip: '触发方式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'click',
                value: 'click',
              },
              {
                title: 'focus',
                value: 'focus',
              },
              {
                title: 'hover',
                value: 'hover',
              },
              {
                title: 'manual',
                value: 'manual',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'click',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示的内容',
            'en-US': 'content',
          },
          tip: '显示的内容，也可以通过 slot 传入 DOM',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '宽度',
            'en-US': 'width',
          },
          tip: '宽度',
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
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '出现位置',
            'en-US': 'placement',
          },
          tip: '出现位置',
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
        defaultValue: 'bottom',
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Popover 是否可用',
            'en-US': 'disabled',
          },
          tip: 'Popover 是否可用',
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
            'zh-CN': '状态是否可见',
            'en-US': 'v-model',
          },
          tip: '状态是否可见',
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
            'zh-CN': '出现位置的偏移量',
            'en-US': 'offset',
          },
          tip: '出现位置的偏移量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '定义渐变动画',
            'en-US': 'transition',
          },
          tip: '定义渐变动画',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'fade-in-linear',
      },
      {
        name: 'visibleArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'visibleArrow',
            'en-US': 'visibleArrow',
          },
          tip: '是否显示 Tooltip 箭头，更多参数可见Vue-popper',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'popperOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popper.js 的参数',
            'en-US': 'popperOptions',
          },
          tip: 'popper.js 的参数',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '为 popper 添加类名',
            'en-US': 'popperClass',
          },
          tip: '为 popper 添加类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'openDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'openDelay',
            'en-US': 'openDelay',
          },
          tip: '触发方式为 hover 时的显示延迟，单位为毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'closeDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeDelay',
            'en-US': 'closeDelay',
          },
          tip: '触发方式为 hover 时的隐藏延迟，单位为毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 200,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'Popover 组件的 tabindex',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'reference',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'reference',
            'en-US': 'reference',
          },
          tip: '触发 Popover 显示的 HTML 元素',
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
          name: 'onShow',
          description: '显示时触发',
          template:
            "onShow(extParams) {\n  // 显示时触发\n  console.log('onShow', extParams)\n}",
        },
        {
          name: 'onAfter-enter',
          description: '显示动画播放完毕后触发',
          template:
            "onAfterEnter(extParams) {\n  // 显示动画播放完毕后触发\n  console.log('onAfterEnter', extParams)\n}",
        },
        {
          name: 'onHide',
          description: '隐藏时触发',
          template:
            "onHide(extParams) {\n  // 隐藏时触发\n  console.log('onHide', extParams)\n}",
        },
        {
          name: 'onAfter-leave',
          description: '隐藏动画播放完毕后触发',
          template:
            "onAfterLeave(extParams) {\n  // 隐藏动画播放完毕后触发\n  console.log('onAfterLeave', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '弹出框',
      screenshot: './screenshots/popover.webp',
      schema: {
        componentName: 'ElPopover',
        props: {
          title: '标题',
          content: '内容',
          reference: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'ElButton',
                props: {},
                children: '弹出框',
              },
            ],
          },
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
