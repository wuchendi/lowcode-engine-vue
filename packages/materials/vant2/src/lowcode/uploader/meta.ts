import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (uploader); see https://vant-ui.github.io/vant/v2/#/zh-CN/uploader
const meta = {
  componentName: 'VanUploader',
  title: '文件上传',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/uploader',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '已上传的文件列表',
            'en-US': 'v-model',
          },
          tip: '已上传的文件列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'accept',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '允许上传的文件类型',
            'en-US': 'accept',
          },
          tip: '允许上传的文件类型，详细说明',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标识符',
            'en-US': 'name',
          },
          tip: '标识符，可以在回调函数的第二项参数中获取',
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
        name: 'previewSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预览图和上传区域的尺寸',
            'en-US': 'previewSize',
          },
          tip: '预览图和上传区域的尺寸，默认单位为 px',
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
        defaultValue: '80px',
      },
      {
        name: 'previewImage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在上传完成后展示预览图',
            'en-US': 'previewImage',
          },
          tip: '是否在上传完成后展示预览图',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'previewFullImage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'previewFullImage',
            'en-US': 'previewFullImage',
          },
          tip: '是否在点击预览图后展示全屏图片预览',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'previewOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '全屏图片预览的配置项',
            'en-US': 'previewOptions',
          },
          tip: '全屏图片预览的配置项，可选值见 ImagePreview',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启图片多选',
            'en-US': 'multiple',
          },
          tip: '是否开启图片多选，部分安卓机型不支持',
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
            'zh-CN': '是否禁用文件上传',
            'en-US': 'disabled',
          },
          tip: '是否禁用文件上传',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否将上传区域设置为只读状态',
            'en-US': 'readonly',
          },
          tip: '是否将上传区域设置为只读状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'deletable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示删除按钮',
            'en-US': 'deletable',
          },
          tip: '是否展示删除按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showUpload',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示上传区域',
            'en-US': 'showUpload',
          },
          tip: '是否展示上传区域',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'lazyLoad',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启图片懒加载',
            'en-US': 'lazyLoad',
          },
          tip: '是否开启图片懒加载，须配合 Lazyload 组件使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'capture',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片选取模式',
            'en-US': 'capture',
          },
          tip: '图片选取模式，可选值为 camera (直接调起摄像头)',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'afterRead',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件读取完成后的回调函数',
            'en-US': 'afterRead',
          },
          tip: '文件读取完成后的回调函数',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'beforeRead',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件读取前的回调函数',
            'en-US': 'beforeRead',
          },
          tip: '文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'beforeDelete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件删除前的回调函数',
            'en-US': 'beforeDelete',
          },
          tip: '文件删除前的回调函数，返回 false 可终止文件读取，支持返回 Promise',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'maxSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件大小限制',
            'en-US': 'maxSize',
          },
          tip: '文件大小限制，单位为 byte',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
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
        name: 'maxCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件上传数量限制',
            'en-US': 'maxCount',
          },
          tip: '文件上传数量限制',
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
        name: 'resultType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件读取结果类型',
            'en-US': 'resultType',
          },
          tip: '文件读取结果类型，可选值为 file text',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'file',
                value: 'file',
              },
              {
                title: 'text',
                value: 'text',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'dataUrl',
      },
      {
        name: 'uploadText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传区域文字提示',
            'en-US': 'uploadText',
          },
          tip: '上传区域文字提示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'imageFit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预览图裁剪模式',
            'en-US': 'imageFit',
          },
          tip: '预览图裁剪模式，可选值见 Image 组件',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'cover',
      },
      {
        name: 'uploadIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传区域图标名称或图片链接',
            'en-US': 'uploadIcon',
          },
          tip: '上传区域图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'photograph',
      },
      {
        name: 'preview-coverv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'preview-coverv',
            'en-US': 'preview-coverv',
          },
          tip: '自定义覆盖在预览区域上方的内容',
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
          name: 'onOversize',
          description: '文件大小超过限制时触发',
          template:
            "onOversize(extParams) {\n  // 文件大小超过限制时触发\n  console.log('onOversize', extParams)\n}",
        },
        {
          name: 'onClick-upload',
          description: '点击上传区域时触发',
          template:
            "onClickUpload(extParams) {\n  // 点击上传区域时触发\n  console.log('onClickUpload', extParams)\n}",
        },
        {
          name: 'onClick-preview',
          description: '点击预览图时触发',
          template:
            "onClickPreview(extParams) {\n  // 点击预览图时触发\n  console.log('onClickPreview', extParams)\n}",
        },
        {
          name: 'onClose-preview',
          description: '关闭全屏图片预览时触发',
          template:
            "onClosePreview(extParams) {\n  // 关闭全屏图片预览时触发\n  console.log('onClosePreview', extParams)\n}",
        },
        {
          name: 'onDelete',
          description: '删除文件预览时触发',
          template:
            "onDelete(extParams) {\n  // 删除文件预览时触发\n  console.log('onDelete', extParams)\n}",
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
      title: '文件上传',
      screenshot: './screenshots/uploader.webp',
      schema: {
        componentName: 'VanUploader',
        props: {},
        children: '文件上传',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
