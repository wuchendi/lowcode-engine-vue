import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (upload); see https://antdv.com/components/upload-cn
const meta = {
  componentName: 'AUpload',
  title: '上传',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/upload-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'accept',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '接受上传的文件类型',
            'en-US': 'accept',
          },
          tip: '接受上传的文件类型, 详见 input accept Attribute',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'action',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传的地址',
            'en-US': 'action',
          },
          tip: '上传的地址',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'beforeUpload',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传文件之前的钩子',
            'en-US': 'beforeUpload',
          },
          tip: '上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。',
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
        name: 'customRequest',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '通过覆盖默认的上传行为',
            'en-US': 'customRequest',
          },
          tip: '通过覆盖默认的上传行为，可以自定义自己的上传实现',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'data',
            'en-US': 'data',
          },
          tip: '上传所需参数或返回上传参数的方法',
        },
        setter: [
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
        name: 'directory',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '支持上传文件夹',
            'en-US': 'directory',
          },
          tip: '支持上传文件夹（caniuse）',
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
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'downloadIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义下载 icon',
            'en-US': 'downloadIcon',
          },
          tip: '自定义下载 icon',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'fileList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '已经上传的文件列表',
            'en-US': 'fileList',
          },
          tip: '已经上传的文件列表（受控）',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'headers',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置上传的请求头部',
            'en-US': 'headers',
          },
          tip: '设置上传的请求头部，IE10 以上有效',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'iconRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义显示 icon',
            'en-US': 'iconRender',
          },
          tip: '自定义显示 icon',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'isImageUrl',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义缩略图是否使用 &lt',
            'en-US': 'isImageUrl',
          },
          tip: '自定义缩略图是否使用 &lt;img /> 标签进行显示',
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
        name: 'itemRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义上传列表项',
            'en-US': 'itemRender',
          },
          tip: '自定义上传列表项',
        },
        setter: [
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
        name: 'listType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传列表的内建样式',
            'en-US': 'listType',
          },
          tip: '上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'text',
      },
      {
        name: 'maxCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '限制上传数量',
            'en-US': 'maxCount',
          },
          tip: '限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'method',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'method',
            'en-US': 'method',
          },
          tip: '上传请求的 http method',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'post',
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持多选文件',
            'en-US': 'multiple',
          },
          tip: '是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '发到后台的文件参数名',
            'en-US': 'name',
          },
          tip: '发到后台的文件参数名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'file',
      },
      {
        name: 'openFileDialogOnClick',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击打开文件对话框',
            'en-US': 'openFileDialogOnClick',
          },
          tip: '点击打开文件对话框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'previewFile',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义文件预览逻辑',
            'en-US': 'previewFile',
          },
          tip: '自定义文件预览逻辑',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'previewIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义预览 icon',
            'en-US': 'previewIcon',
          },
          tip: '自定义预览 icon',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'progress',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义进度条样式',
            'en-US': 'progress',
          },
          tip: '自定义进度条样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'removeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义删除 icon',
            'en-US': 'removeIcon',
          },
          tip: '自定义删除 icon',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'showUploadList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showUploadList',
            'en-US': 'showUploadList',
          },
          tip: '是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 showDownloadIcon',
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
        defaultValue: true,
      },
      {
        name: 'supportServerRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '服务端渲染时需要打开这个',
            'en-US': 'supportServerRender',
          },
          tip: '服务端渲染时需要打开这个',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'withCredentials',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'withCredentials',
            'en-US': 'withCredentials',
          },
          tip: '上传请求时是否携带 cookie',
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
          name: 'onChange',
          description: '上传文件改变时的状态，详见 change',
          template:
            "onChange(extParams) {\n  // 上传文件改变时的状态，详见 change\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onDownload',
          description:
            '点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。',
          template:
            "onDownload(extParams) {\n  // 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。\n  console.log('onDownload', extParams)\n}",
        },
        {
          name: 'onDrop',
          description: '当文件被拖入上传区域时执行的回调功能',
          template:
            "onDrop(extParams) {\n  // 当文件被拖入上传区域时执行的回调功能\n  console.log('onDrop', extParams)\n}",
        },
        {
          name: 'onPreview',
          description: '点击文件链接或预览图标时的回调',
          template:
            "onPreview(extParams) {\n  // 点击文件链接或预览图标时的回调\n  console.log('onPreview', extParams)\n}",
        },
        {
          name: 'onReject',
          description: '拖拽文件不符合 accept 类型时的回调',
          template:
            "onReject(extParams) {\n  // 拖拽文件不符合 accept 类型时的回调\n  console.log('onReject', extParams)\n}",
        },
        {
          name: 'onRemove',
          description:
            '点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除',
          template:
            "onRemove(extParams) {\n  // 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除\n  console.log('onRemove', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '上传',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AUpload',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
