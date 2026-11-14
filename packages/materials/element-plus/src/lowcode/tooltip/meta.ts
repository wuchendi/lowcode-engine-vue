import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tooltip); see https://element-plus.org/zh-CN/component/tooltip.html
const meta = {
  componentName: 'ElTooltip',
  title: '文字提示',
  group: 'Element 组件',
  category: '反馈组件',
  docUrl: 'https://element-plus.org/zh-CN/component/tooltip.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'appendTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendTo',
            'en-US': 'appendTo',
          },
          tip: '指示 Tooltip 的内容将附加在哪一个网页元素上',
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
          tip: 'Tooltip 主题，内置了 dark / light 两种',
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
        defaultValue: 'dark',
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示的内容',
            'en-US': 'content',
          },
          tip: '显示的内容，也可被 slot#content 覆盖',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rawContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rawContent',
            'en-US': 'rawContent',
          },
          tip: 'content 中的内容是否作为 HTML 字符串处理',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placement',
            'en-US': 'placement',
          },
          tip: 'Tooltip 组件出现的位置',
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
        name: 'fallbackPlacements',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fallbackPlacements',
            'en-US': 'fallbackPlacements',
          },
          tip: 'Tooltip 可用的 positions 请查看popper.js 文档',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'v-model:visible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 组件可见性',
            'en-US': 'v-model:visible',
          },
          tip: 'Tooltip 组件可见性',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 组件是否禁用',
            'en-US': 'disabled',
          },
          tip: 'Tooltip 组件是否禁用',
        },
        setter: 'BoolSetter',
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
          tip: 'Tooltip 出现位置的偏移量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 12,
      },
      {
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画名称',
            'en-US': 'transition',
          },
          tip: '动画名称',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popper.js 参数',
            'en-US': 'popperOptions',
          },
          tip: 'popper.js 参数',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'arrowOffset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'arrowOffset',
            'en-US': 'arrowOffset',
          },
          tip: 'Controls the offset (padding) of the tooltip’s arrow relative to the popper.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 5,
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
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showArrow',
            'en-US': 'showArrow',
          },
          tip: 'tooltip 的内容是否有箭头',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: '为 Tooltip 的 popper 添加自定义类名',
        },
        setter: 'StringSetter',
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
          tip: '为 Tooltip 的 popper 添加自定义样式',
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
        name: 'enterable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'enterable',
            'en-US': 'enterable',
          },
          tip: '鼠标是否可进入到 tooltip 中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用 teleport',
            'en-US': 'teleported',
          },
          tip: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '提示框的触发方式',
            'en-US': 'trigger',
          },
          tip: '提示框的触发方式（用于显示），在受控模式下无效。',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'hover',
                  value: 'hover',
                },
                {
                  title: 'click',
                  value: 'click',
                },
                {
                  title: 'focus',
                  value: 'focus',
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
        name: 'virtualTriggering',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用来标识虚拟触发是否被启用',
            'en-US': 'virtualTriggering',
          },
          tip: '用来标识虚拟触发是否被启用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'virtualRef',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标识虚拟触发时的触发元素',
            'en-US': 'virtualRef',
          },
          tip: '标识虚拟触发时的触发元素',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'triggerKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'triggerKeys',
            'en-US': 'triggerKeys',
          },
          tip: '当通过鼠标点击使触发元素获得焦点时，可以定义一组键盘按键代码，通过键盘控制提示框的显示，在受控模式下无效。',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: '当tooltip未激活且 persistent 为 false 时，tooltip将被销毁。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'Same as aria-label',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'focusOnTarget',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'focusOnTarget',
            'en-US': 'focusOnTarget',
          },
          tip: 'When triggering tooltips through hover, whether to focus the trigger element, which improves accessibility',
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
          name: 'onBeforeShow',
          description:
            'Triggers before tooltip is shown. Passes trigger reason as argument.',
          template:
            "onBeforeShow(...args, extParams) {\n  // Triggers before tooltip is shown. Passes trigger reason as argument.\n  console.log('onBeforeShow', ...args)\n}",
        },
        {
          name: 'onShow',
          description:
            'Triggers when tooltip is shown. Passes trigger reason as argument.',
          template:
            "onShow(...args, extParams) {\n  // Triggers when tooltip is shown. Passes trigger reason as argument.\n  console.log('onShow', ...args)\n}",
        },
        {
          name: 'onBeforeHide',
          description:
            'Triggers before tooltip is hidden. Passes trigger reason as argument.',
          template:
            "onBeforeHide(...args, extParams) {\n  // Triggers before tooltip is hidden. Passes trigger reason as argument.\n  console.log('onBeforeHide', ...args)\n}",
        },
        {
          name: 'onHide',
          description:
            'Triggers when tooltip is hidden. Passes trigger reason as argument.',
          template:
            "onHide(...args, extParams) {\n  // Triggers when tooltip is hidden. Passes trigger reason as argument.\n  console.log('onHide', ...args)\n}",
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
      title: '文字提示',
      screenshot: './screenshots/tooltip.webp',
      schema: {
        componentName: 'ElTooltip',
        props: {
          title: '标题',
          content: '内容',
        },
        children: [
          {
            componentName: 'ElButton',
            props: {},
            children: '文字提示',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
