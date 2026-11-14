import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (scrollbar); see https://element-plus.org/zh-CN/component/scrollbar.html
const meta = {
  componentName: 'ElScrollbar',
  title: '滚动条',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/scrollbar.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'height',
            'en-US': 'height',
          },
          tip: 'height of scrollbar',
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
        name: 'maxHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxHeight',
            'en-US': 'maxHeight',
          },
          tip: 'max height of scrollbar',
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
        name: 'native',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'native',
            'en-US': 'native',
          },
          tip: 'whether to use the native scrollbar style',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'wrapStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'wrapStyle',
            'en-US': 'wrapStyle',
          },
          tip: 'style of wrap container',
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
        name: 'wrapClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'wrapClass',
            'en-US': 'wrapClass',
          },
          tip: 'class of wrap container',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'viewStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'viewStyle',
            'en-US': 'viewStyle',
          },
          tip: 'style of view',
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
        name: 'viewClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'viewClass',
            'en-US': 'viewClass',
          },
          tip: 'class of view',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'noresize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'noresize',
            'en-US': 'noresize',
          },
          tip: 'do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tag',
            'en-US': 'tag',
          },
          tip: 'element tag of the view',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'div',
      },
      {
        name: 'always',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'always',
            'en-US': 'always',
          },
          tip: 'always show scrollbar',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'mask',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'mask',
            'en-US': 'mask',
          },
          tip: 'Gradient masks: true for all edges, a direction for one edge, and false to disable',
        },
        setter: [
          {
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
                {
                  title: 'left',
                  value: 'left',
                },
                {
                  title: 'right',
                  value: 'right',
                },
              ],
            },
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'minSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'minSize',
            'en-US': 'minSize',
          },
          tip: 'minimum size of scrollbar',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 20,
      },
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'id',
            'en-US': 'id',
          },
          tip: 'id of view',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'role',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'role',
            'en-US': 'role',
          },
          tip: 'role of view',
        },
        setter: 'StringSetter',
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
          tip: 'aria-label of view',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'ariaOrientation',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaOrientation',
            'en-US': 'ariaOrientation',
          },
          tip: 'aria-orientation of view',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'tabindex of wrap container',
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
        name: 'distance',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'distance',
            'en-US': 'distance',
          },
          tip: 'trigger end-reached event distance(px)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onScroll',
          description: '当触发滚动事件时，返回滚动的距离',
          template:
            "onScroll(...args, extParams) {\n  // 当触发滚动事件时，返回滚动的距离\n  console.log('onScroll', ...args)\n}",
        },
        {
          name: 'onEndReached',
          description: 'triggers when the end of a scroll is triggered',
          template:
            "onEndReached(...args, extParams) {\n  // triggers when the end of a scroll is triggered\n  console.log('onEndReached', ...args)\n}",
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
      title: '滚动条',
      screenshot: './screenshots/scrollbar.webp',
      schema: {
        componentName: 'ElScrollbar',
        props: {},
        children: '滚动条',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
