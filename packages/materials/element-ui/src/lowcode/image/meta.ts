import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (image); see https://element.eleme.cn/#/zh-CN/component/image
const meta = {
  componentName: 'ElImage',
  title: '图片',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/image',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片源',
            'en-US': 'src',
          },
          tip: '图片源，同原生',
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
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 alt',
            'en-US': 'alt',
          },
          tip: '原生 alt',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'referrerPolicy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'referrerPolicy',
            'en-US': 'referrerPolicy',
          },
          tip: '原生 referrerPolicy',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'lazy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启懒加载',
            'en-US': 'lazy',
          },
          tip: '是否开启懒加载',
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
            'zh-CN': '开启懒加载后',
            'en-US': 'scrollContainer',
          },
          tip: '开启懒加载后，监听 scroll 事件的容器',
        },
        setter: 'StringSetter',
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
        setter: 'JsonSetter',
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
        defaultValue: 2000,
      },
      {
        name: 'initialIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片预览初始图片index',
            'en-US': 'initialIndex',
          },
          tip: '图片预览初始图片index',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片未加载的占位内容',
            'en-US': 'placeholder',
          },
          tip: '图片未加载的占位内容',
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
            'zh-CN': '加载失败的内容',
            'en-US': 'error',
          },
          tip: '加载失败的内容',
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
            "onLoad(extParams) {\n  // 图片加载成功触发\n  console.log('onLoad', extParams)\n}",
        },
        {
          name: 'onError',
          description: '图片加载失败触发',
          template:
            "onError(extParams) {\n  // 图片加载失败触发\n  console.log('onError', extParams)\n}",
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
