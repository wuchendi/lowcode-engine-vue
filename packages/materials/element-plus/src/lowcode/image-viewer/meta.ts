import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (image); see https://element-plus.org/zh-CN/component/image.html
const meta = {
  componentName: 'ElImageViewer',
  title: '图片 ImageViewer',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/image.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'urlList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'urlList',
            'en-US': 'urlList',
          },
          tip: 'preview link list.',
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
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: 'preview backdrop z-index.',
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
        name: 'initialIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'initialIndex',
            'en-US': 'initialIndex',
          },
          tip: 'the initial preview image index, less than or equal to the length of url-list.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'infinite',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'infinite',
            'en-US': 'infinite',
          },
          tip: 'whether preview is infinite.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'hideOnClickModal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hideOnClickModal',
            'en-US': 'hideOnClickModal',
          },
          tip: 'whether user can emit close event when clicking backdrop.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: 'whether to append image itself to body. A nested parent element attribute transform should have this attribute set to true.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'zoomRate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zoomRate',
            'en-US': 'zoomRate',
          },
          tip: 'the zoom rate of the image viewer zoom event.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1.2,
      },
      {
        name: 'scale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'scale',
            'en-US': 'scale',
          },
          tip: 'the preview image scale.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'minScale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'minScale',
            'en-US': 'minScale',
          },
          tip: 'the min scale of the image viewer zoom event.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0.2,
      },
      {
        name: 'maxScale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxScale',
            'en-US': 'maxScale',
          },
          tip: 'the max scale of the image viewer zoom event.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 7,
      },
      {
        name: 'closeOnPressEscape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnPressEscape',
            'en-US': 'closeOnPressEscape',
          },
          tip: 'whether the image-viewer can be closed by pressing ESC.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showProgress',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showProgress',
            'en-US': 'showProgress',
          },
          tip: 'whether to display the preview image progress content',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'progress',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'progress',
            'en-US': 'progress',
          },
          tip: 'custom progress content (Priority is higher than show-progress prop)',
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
        name: 'toolbar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'toolbar',
            'en-US': 'toolbar',
          },
          tip: 'custom toolbar content',
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
        name: 'viewer-placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'viewer-placeholder',
            'en-US': 'viewer-placeholder',
          },
          tip: "custom placeholder content when the image hasn't loaded yet.",
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
        name: 'viewer-error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'viewer-error',
            'en-US': 'viewer-error',
          },
          tip: 'custom image load failed content.',
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
          name: 'onClose',
          description:
            'trigger when clicking on close button or when hide-on-click-modal enabled clicking on backdrop.',
          template:
            "onClose(...args, extParams) {\n  // trigger when clicking on close button or when hide-on-click-modal enabled clicking on backdrop.\n  console.log('onClose', ...args)\n}",
        },
        {
          name: 'onError',
          description: 'same as native error.',
          template:
            "onError(...args, extParams) {\n  // same as native error.\n  console.log('onError', ...args)\n}",
        },
        {
          name: 'onSwitch',
          description: 'trigger when switching images.',
          template:
            "onSwitch(...args, extParams) {\n  // trigger when switching images.\n  console.log('onSwitch', ...args)\n}",
        },
        {
          name: 'onRotate',
          description: 'trigger when rotating images.',
          template:
            "onRotate(...args, extParams) {\n  // trigger when rotating images.\n  console.log('onRotate', ...args)\n}",
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
      title: '图片 ImageViewer',
      screenshot: './screenshots/image-viewer.webp',
      schema: {
        componentName: 'ElImageViewer',
        props: {},
        children: '图片',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
