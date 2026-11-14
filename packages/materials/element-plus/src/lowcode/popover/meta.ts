import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (popover); see https://element-plus.org/zh-CN/component/popover.html
const meta = {
  componentName: 'ElPopover',
  title: '弹出框',
  group: 'Element 组件',
  category: '反馈组件',
  docUrl: 'https://element-plus.org/zh-CN/component/popover.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popover 触发方式',
            'en-US': 'trigger',
          },
          tip: 'popover 触发方式，在受控模式下无效。',
        },
        setter: [
          {
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
                  title: 'contextmenu',
                  value: 'contextmenu',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'triggerKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'triggerKeys',
            'en-US': 'triggerKeys',
          },
          tip: 'When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of popover through the keyboard, not valid in controlled mode',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 主题',
            'en-US': 'effect',
          },
          tip: 'Tooltip 主题，Element Plus 内置了 dark / light 两种主题',
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
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示的内容',
            'en-US': 'content',
          },
          tip: '显示的内容，也可以通过写入默认 slot 修改显示内容',
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
        defaultValue: '150',
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
        name: 'v-model:visible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Popover 是否显示',
            'en-US': 'v-model:visible',
          },
          tip: 'Popover 是否显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '浮层偏移量',
            'en-US': 'offset',
          },
          tip: '浮层偏移量, Popover 是在 Tooltip,基础上开发的， Popover的 offset 是 undefined, 但Tooltip 的 offset 是12',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '定义渐变动画',
            'en-US': 'transition',
          },
          tip: '定义渐变动画，默认是 el-fade-in-linear',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showArrow',
            'en-US': 'showArrow',
          },
          tip: '是否显示 Tooltip 箭头，欲了解更多信息，请参考 ElPopper',
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
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '为 popper 自定义样式',
            'en-US': 'popperStyle',
          },
          tip: '为 popper 自定义样式',
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
        name: 'showAfter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '延迟显示时间',
            'en-US': 'showAfter',
          },
          tip: '延迟显示时间（以毫秒为单位），在受控模式下无效。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'hideAfter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '消失延迟时间',
            'en-US': 'hideAfter',
          },
          tip: '消失延迟时间（以毫秒为单位），在受控模式下无效。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 200,
      },
      {
        name: 'autoClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏提示框的超时时间',
            'en-US': 'autoClose',
          },
          tip: '隐藏提示框的超时时间（以毫秒为单位），在受控模式下无效。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
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
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: '是否将 popover 的下拉列表插入至 body 元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'appendTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendTo',
            'en-US': 'appendTo',
          },
          tip: 'which element the popover CONTENT appends to',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'body',
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'virtualTriggering',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用虚拟触发器',
            'en-US': 'virtualTriggering',
          },
          tip: '是否启用虚拟触发器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'virtualRef',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtualRef',
            'en-US': 'virtualRef',
          },
          tip: '代表 tooltip 所要附加的参照元素',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'reference',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发弹出框的 HTML 元素',
            'en-US': 'reference',
          },
          tip: '触发弹出框的 HTML 元素，只接受单个根元素。',
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
            "onShow(...args, extParams) {\n  // 显示时触发\n  console.log('onShow', ...args)\n}",
        },
        {
          name: 'onBeforeEnter',
          description: '显示动画播放前触发',
          template:
            "onBeforeEnter(...args, extParams) {\n  // 显示动画播放前触发\n  console.log('onBeforeEnter', ...args)\n}",
        },
        {
          name: 'onAfterEnter',
          description: '显示动画播放完毕后触发',
          template:
            "onAfterEnter(...args, extParams) {\n  // 显示动画播放完毕后触发\n  console.log('onAfterEnter', ...args)\n}",
        },
        {
          name: 'onHide',
          description: '隐藏时触发',
          template:
            "onHide(...args, extParams) {\n  // 隐藏时触发\n  console.log('onHide', ...args)\n}",
        },
        {
          name: 'onBeforeLeave',
          description: '隐藏动画播放前触发',
          template:
            "onBeforeLeave(...args, extParams) {\n  // 隐藏动画播放前触发\n  console.log('onBeforeLeave', ...args)\n}",
        },
        {
          name: 'onAfterLeave',
          description: '隐藏动画播放完毕后触发',
          template:
            "onAfterLeave(...args, extParams) {\n  // 隐藏动画播放完毕后触发\n  console.log('onAfterLeave', ...args)\n}",
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
