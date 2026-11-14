import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (image); see https://element-plus.org/zh-CN/component/image.html
const meta = {
  componentName: 'ElImage',
  title: '图片',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/image.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片源地址',
            'en-US': 'src',
          },
          tip: '图片源地址，同原生属性一致',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'fit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确定图片如何适应容器框',
            'en-US': 'fit',
          },
          tip: '确定图片如何适应容器框，同原生 object-fit',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'fill',
                value: 'fill',
              },
              {
                title: 'contain',
                value: 'contain',
              },
              {
                title: 'cover',
                value: 'cover',
              },
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'scale-down',
                value: 'scale-down',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'hideOnClickModal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hideOnClickModal',
            'en-US': 'hideOnClickModal',
          },
          tip: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loading',
            'en-US': 'loading',
          },
          tip: 'Indicates how the browser should load the image, same as native.',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'eager',
                value: 'eager',
              },
              {
                title: 'lazy',
                value: 'lazy',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'lazy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用懒加载',
            'en-US': 'lazy',
          },
          tip: '是否使用懒加载',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'scrollContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开启懒加载功能后',
            'en-US': 'scrollContainer',
          },
          tip: '开启懒加载功能后，监听 scroll 事件的容器默认情况下，开启懒加载功能后，监听 scroll 事件的容器',
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
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性 alt',
            'en-US': 'alt',
          },
          tip: '原生属性 alt',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'referrerpolicy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'referrerpolicy',
            'en-US': 'referrerpolicy',
          },
          tip: '原生属性 referrerPolicy。',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'crossorigin',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'crossorigin',
            'en-US': 'crossorigin',
          },
          tip: '原生属性 crossorigin',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'anonymous',
                value: 'anonymous',
              },
              {
                title: 'use-credentials',
                value: 'use-credentials',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'previewSrcList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开启图片预览功能',
            'en-US': 'previewSrcList',
          },
          tip: '开启图片预览功能',
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
          tip: '设置图片预览的 z-index',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'initialIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始预览图像索引',
            'en-US': 'initialIndex',
          },
          tip: '初始预览图像索引，小于 url-list 的长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'closeOnPressEscape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnPressEscape',
            'en-US': 'closeOnPressEscape',
          },
          tip: '是否可以通过按下 ESC 关闭 Image Viewer',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'previewTeleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'previewTeleported',
            'en-US': 'previewTeleported',
          },
          tip: 'image-viewer 是否插入至 body 元素上。嵌套的父元素属性会发生修改时应该将此属性设置为 true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'infinite',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以无限循环预览',
            'en-US': 'infinite',
          },
          tip: '是否可以无限循环预览',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'zoomRate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图像查看器缩放事件的缩放速率',
            'en-US': 'zoomRate',
          },
          tip: '图像查看器缩放事件的缩放速率。',
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
        name: 'showProgress',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showProgress',
            'en-US': 'showProgress',
          },
          tip: 'whether to display the preview image progress content.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当图像尚未加载时',
            'en-US': 'placeholder',
          },
          tip: '当图像尚未加载时，自定义的占位符内容',
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
        name: 'error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图像加载失败的内容',
            'en-US': 'error',
          },
          tip: '自定义图像加载失败的内容',
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
        name: 'viewer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当图像预览时自定义内容',
            'en-US': 'viewer',
          },
          tip: '当图像预览时自定义内容',
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
        name: 'imageviewerslots',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'imageviewerslots',
            'en-US': 'imageviewerslots',
          },
          tip: 'when you allow big image preview, image viewer slots all can be used, except default.',
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
          name: 'onLoad',
          description: '图片加载成功触发',
          template:
            "onLoad(...args, extParams) {\n  // 图片加载成功触发\n  console.log('onLoad', ...args)\n}",
        },
        {
          name: 'onError',
          description: '图片加载失败触发',
          template:
            "onError(...args, extParams) {\n  // 图片加载失败触发\n  console.log('onError', ...args)\n}",
        },
        {
          name: 'onSwitch',
          description: '切换图像时触发。',
          template:
            "onSwitch(...args, extParams) {\n  // 切换图像时触发。\n  console.log('onSwitch', ...args)\n}",
        },
        {
          name: 'onClose',
          description:
            '当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发',
          template:
            "onClose(...args, extParams) {\n  // 当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发\n  console.log('onClose', ...args)\n}",
        },
        {
          name: 'onShow',
          description: '当 Viewer 显示时触发',
          template:
            "onShow(...args, extParams) {\n  // 当 Viewer 显示时触发\n  console.log('onShow', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '图片',
      screenshot: './screenshots/image.webp',
      schema: {
        componentName: 'ElImage',
        props: {
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            width: '100px',
            height: '100px',
          },
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
