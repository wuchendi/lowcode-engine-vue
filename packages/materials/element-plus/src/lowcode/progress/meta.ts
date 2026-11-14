import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (progress); see https://element-plus.org/zh-CN/component/progress.html
const meta = {
  componentName: 'ElProgress',
  title: '进度条',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/progress.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'percentage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'percentage',
            'en-US': 'percentage',
          },
          tip: 'percentage',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: 'the type of progress bar',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'line',
                value: 'line',
              },
              {
                title: 'circle',
                value: 'circle',
              },
              {
                title: 'dashboard',
                value: 'dashboard',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'line',
      },
      {
        name: 'strokeWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'strokeWidth',
            'en-US': 'strokeWidth',
          },
          tip: 'the width of progress bar',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 6,
      },
      {
        name: 'textInside',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'textInside',
            'en-US': 'textInside',
          },
          tip: "whether to place the percentage inside progress bar, only works when type is 'line'",
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
            'zh-CN': 'status',
            'en-US': 'status',
          },
          tip: 'the current status of progress bar',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'exception',
                value: 'exception',
              },
              {
                title: 'warning',
                value: 'warning',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'indeterminate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'indeterminate',
            'en-US': 'indeterminate',
          },
          tip: 'set indeterminate progress',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'duration',
            'en-US': 'duration',
          },
          tip: 'control the animation duration of indeterminate progress or striped flow progress',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 3,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'color',
            'en-US': 'color',
          },
          tip: 'background color of progress bar. Overrides status prop',
        },
        setter: [
          {
            componentName: 'ColorSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'width',
            'en-US': 'width',
          },
          tip: 'the canvas width of circle progress bar',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 126,
      },
      {
        name: 'showText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showText',
            'en-US': 'showText',
          },
          tip: 'whether to show percentage',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'strokeLinecap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'strokeLinecap',
            'en-US': 'strokeLinecap',
          },
          tip: 'circle/dashboard type shape at the end path',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'butt',
                value: 'butt',
              },
              {
                title: 'round',
                value: 'round',
              },
              {
                title: 'square',
                value: 'square',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'round',
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'format',
            'en-US': 'format',
          },
          tip: 'custom text format',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'striped',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'striped',
            'en-US': 'striped',
          },
          tip: "stripe over the progress bar's color",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'stripedFlow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'stripedFlow',
            'en-US': 'stripedFlow',
          },
          tip: 'get the stripes to flow',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      title: '进度条',
      screenshot: './screenshots/progress.webp',
      schema: {
        componentName: 'ElProgress',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
