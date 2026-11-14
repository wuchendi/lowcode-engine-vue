import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (image-preview); see https://vant-ui.github.io/vant/#/zh-CN/image-preview
const meta = {
  componentName: 'VanImagePreview',
  title: '图片预览',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/image-preview',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示图片预览',
            'en-US': 'v-model:show',
          },
          tip: '是否展示图片预览',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'images',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '需要预览的图片 URL 数组',
            'en-US': 'images',
          },
          tip: '需要预览的图片 URL 数组',
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
        name: 'startPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片预览起始位置索引',
            'en-US': 'startPosition',
          },
          tip: '图片预览起始位置索引',
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
        name: 'swipeDuration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'swipeDuration',
          },
          tip: '动画时长，单位为 ms',
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
        defaultValue: '300',
      },
      {
        name: 'showIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示页码',
            'en-US': 'showIndex',
          },
          tip: '是否显示页码',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showIndicators',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示轮播指示器',
            'en-US': 'showIndicators',
          },
          tip: '是否显示轮播指示器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启循环播放',
            'en-US': 'loop',
          },
          tip: '是否开启循环播放',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'doubleScale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用双击缩放手势',
            'en-US': 'doubleScale',
          },
          tip: '是否启用双击缩放手势，禁用后，点击时会立即关闭图片预览',
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
            'zh-CN': '关闭前的回调函数',
            'en-US': 'beforeClose',
          },
          tip: '关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
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
        name: 'closeOnPopstate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在页面回退时自动关闭',
            'en-US': 'closeOnPopstate',
          },
          tip: '是否在页面回退时自动关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeOnClickImage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击图片后关闭图片预览',
            'en-US': 'closeOnClickImage',
          },
          tip: '是否在点击图片后关闭图片预览',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeOnClickOverlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnClickOverlay',
            'en-US': 'closeOnClickOverlay',
          },
          tip: '是否在点击遮罩层后关闭图片预览',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启纵向手势滑动',
            'en-US': 'vertical',
          },
          tip: '是否开启纵向手势滑动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'className',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义类名',
            'en-US': 'className',
          },
          tip: '自定义类名',
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
        name: 'maxZoom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '手势缩放时',
            'en-US': 'maxZoom',
          },
          tip: '手势缩放时，最大缩放比例',
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
        defaultValue: '3',
      },
      {
        name: 'minZoom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '手势缩放时',
            'en-US': 'minZoom',
          },
          tip: '手势缩放时，最小缩放比例',
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
        name: 'closeable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示关闭图标',
            'en-US': 'closeable',
          },
          tip: '是否显示关闭图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭图标名称或图片链接',
            'en-US': 'closeIcon',
          },
          tip: '关闭图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'clear',
      },
      {
        name: 'closeIconPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭图标位置',
            'en-US': 'closeIconPosition',
          },
          tip: '关闭图标位置，可选值为 top-leftbottom-left bottom-right',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'top-left',
                value: 'top-left',
              },
              {
                title: 'bottom-left',
                value: 'bottom-left',
              },
              {
                title: 'bottom-right',
                value: 'bottom-right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'top-right',
      },
      {
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画类名',
            'en-US': 'transition',
          },
          tip: '动画类名，等价于 transition 的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-fade',
      },
      {
        name: 'overlayClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义遮罩层类名',
            'en-US': 'overlayClass',
          },
          tip: '自定义遮罩层类名',
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
        name: 'overlayStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义遮罩层样式',
            'en-US': 'overlayStyle',
          },
          tip: '自定义遮罩层样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'teleport',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'teleport',
          },
          tip: '指定挂载的节点，等同于 Teleport 组件的 to 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'index',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义页码内容',
            'en-US': 'index',
          },
          tip: '自定义页码内容',
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
        name: 'cover',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cover',
            'en-US': 'cover',
          },
          tip: '自定义覆盖在图片预览上方的内容',
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
        name: 'image',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图片内容',
            'en-US': 'image',
          },
          tip: '自定义图片内容',
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
          description: '关闭时触发',
          template:
            "onClose(extParams) {\n  // 关闭时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: '关闭且且动画结束后触发',
          template:
            "onClosed(extParams) {\n  // 关闭且且动画结束后触发\n  console.log('onClosed', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '切换当前图片时触发',
          template:
            "onChange(extParams) {\n  // 切换当前图片时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onScale',
          description: '缩放当前图片时触发',
          template:
            "onScale(extParams) {\n  // 缩放当前图片时触发\n  console.log('onScale', extParams)\n}",
        },
        {
          name: 'onLongPress',
          description: '长按当前图片时触发',
          template:
            "onLongPress(extParams) {\n  // 长按当前图片时触发\n  console.log('onLongPress', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isModal: true,
    },
  },
  snippets: [
    {
      title: '图片预览',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanImagePreview',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
