import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (drawer); see https://element-plus.org/zh-CN/component/drawer.html
const meta = {
  componentName: 'ElDrawer',
  title: '抽屉',
  group: 'Element 组件',
  category: '反馈组件',
  docUrl: 'https://element-plus.org/zh-CN/component/drawer.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: 'Should Drawer be displayed',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'appendToBody',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendToBody',
            'en-US': 'appendToBody',
          },
          tip: 'Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to **true**',
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
          tip: 'which element the Drawer appends to. Will override append-to-body',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'body',
      },
      {
        name: 'lockScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'lockScroll',
            'en-US': 'lockScroll',
          },
          tip: 'whether scroll of body is disabled while Drawer is displayed',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'beforeClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'beforeClose',
            'en-US': 'beforeClose',
          },
          tip: 'If set, closing procedure will be halted',
        },
        setter: [
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
        name: 'closeOnClickModal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnClickModal',
            'en-US': 'closeOnClickModal',
          },
          tip: 'whether the Drawer can be closed by clicking the mask',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeOnPressEscape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnPressEscape',
            'en-US': 'closeOnPressEscape',
          },
          tip: 'Indicates whether Drawer can be closed by pressing ESC',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'openDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'openDelay',
            'en-US': 'openDelay',
          },
          tip: 'Time(milliseconds) before open',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'closeDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeDelay',
            'en-US': 'closeDelay',
          },
          tip: 'Time(milliseconds) before close',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'destroyOnClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'destroyOnClose',
            'en-US': 'destroyOnClose',
          },
          tip: 'Indicates whether children should be destroyed after Drawer closed',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'modal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'modal',
            'en-US': 'modal',
          },
          tip: 'Should show shadowing layer',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'modalPenetrable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'modalPenetrable',
            'en-US': 'modalPenetrable',
          },
          tip: 'whether the mask is penetrable. The modal attribute must be false.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'direction',
            'en-US': 'direction',
          },
          tip: "Drawer's opening direction",
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'rtl',
                value: 'rtl',
              },
              {
                title: 'ltr',
                value: 'ltr',
              },
              {
                title: 'ttb',
                value: 'ttb',
              },
              {
                title: 'btt',
                value: 'btt',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'rtl',
      },
      {
        name: 'resizable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'resizable',
            'en-US': 'resizable',
          },
          tip: 'whether to enable resizing for Drawer. The object form ^(2.14.8) allows more fine-grained control',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showClose',
            'en-US': 'showClose',
          },
          tip: 'Should show close button at the top right of Drawer',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: "Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is number type, it describes the size by unit of pixels; when size is string type, it should be used with x% notation, other wise it will be interpreted to pixel unit",
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
        defaultValue: '30%',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'title',
            'en-US': 'title',
          },
          tip: "Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form",
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'withHeader',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'withHeader',
            'en-US': 'withHeader',
          },
          tip: "Flag that controls the header section's existence, default to true, when withHeader set to false, both title attribute and title slot won't work",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'modalClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'modalClass',
            'en-US': 'modalClass',
          },
          tip: 'Extra class names for shadowing layer',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'headerClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerClass',
            'en-US': 'headerClass',
          },
          tip: 'custom class names for header wrapper',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'bodyClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'bodyClass',
            'en-US': 'bodyClass',
          },
          tip: 'custom class names for body wrapper',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'footerClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'footerClass',
            'en-US': 'footerClass',
          },
          tip: 'custom class names for footer wrapper',
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
          tip: 'set z-index',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'headerAriaLevel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerAriaLevel',
            'en-US': 'headerAriaLevel',
          },
          tip: "header's aria-level attribute",
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '2',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isModal: true,
    },
  },
  snippets: [
    {
      title: '抽屉',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDrawer',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
