import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (tooltip); see https://element.eleme.cn/#/zh-CN/component/tooltip
const meta = {
  componentName: 'ElTooltip',
  title: '文字提示',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/tooltip',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认提供的主题',
            'en-US': 'effect',
          },
          tip: '默认提供的主题',
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
          tip: '显示的内容，也可以通过 slot#content 传入 DOM',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 的出现位置',
            'en-US': 'placement',
          },
          tip: 'Tooltip 的出现位置',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 是否可用',
            'en-US': 'disabled',
          },
          tip: 'Tooltip 是否可用',
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
        defaultValue: 'el-fade-in-linear',
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
        name: 'openDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '延迟出现',
            'en-US': 'openDelay',
          },
          tip: '延迟出现，单位毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'manual',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '手动控制模式',
            'en-US': 'manual',
          },
          tip: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: '为 Tooltip 的 popper 添加类名',
        },
        setter: 'StringSetter',
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
        name: 'hideAfter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hideAfter',
            'en-US': 'hideAfter',
          },
          tip: 'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏',
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
          tip: 'Tooltip 组件的 tabindex',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
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
