import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (upload); see https://element.eleme.cn/#/zh-CN/component/upload
const meta = {
  componentName: 'ElUpload',
  title: '上传',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/upload',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'action',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '必选参数',
            'en-US': 'action',
          },
          tip: '必选参数，上传的地址',
        },
        setter: 'StringSetter',
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
          tip: '设置上传的请求头部',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持多选文件',
            'en-US': 'multiple',
          },
          tip: '是否支持多选文件',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传时附带的额外参数',
            'en-US': 'data',
          },
          tip: '上传时附带的额外参数',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传的文件字段名',
            'en-US': 'name',
          },
          tip: '上传的文件字段名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'file',
      },
      {
        name: 'withCredentials',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'withCredentials',
            'en-US': 'withCredentials',
          },
          tip: '支持发送 cookie 凭证信息',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showFileList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示已上传文件列表',
            'en-US': 'showFileList',
          },
          tip: '是否显示已上传文件列表',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'drag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用拖拽上传',
            'en-US': 'drag',
          },
          tip: '是否启用拖拽上传',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'accept',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '接受上传的文件类型',
            'en-US': 'accept',
          },
          tip: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'onPreview',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onPreview',
            'en-US': 'onPreview',
          },
          tip: '点击文件列表中已上传的文件时的钩子',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onRemove',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件列表移除文件时的钩子',
            'en-US': 'onRemove',
          },
          tip: '文件列表移除文件时的钩子',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onSuccess',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件上传成功时的钩子',
            'en-US': 'onSuccess',
          },
          tip: '文件上传成功时的钩子',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onError',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件上传失败时的钩子',
            'en-US': 'onError',
          },
          tip: '文件上传失败时的钩子',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onProgress',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件上传时的钩子',
            'en-US': 'onProgress',
          },
          tip: '文件上传时的钩子',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件状态改变时的钩子',
            'en-US': 'onChange',
          },
          tip: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
        },
        setter: 'FunctionSetter',
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
          tip: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'beforeRemove',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '删除文件之前的钩子',
            'en-US': 'beforeRemove',
          },
          tip: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'listType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件列表的类型',
            'en-US': 'listType',
          },
          tip: '文件列表的类型',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'text',
                value: 'text',
              },
              {
                title: 'picture',
                value: 'picture',
              },
              {
                title: 'picture-card',
                value: 'picture-card',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'text',
      },
      {
        name: 'autoUpload',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在选取文件后立即进行上传',
            'en-US': 'autoUpload',
          },
          tip: '是否在选取文件后立即进行上传',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'fileList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '上传的文件列表',
            'en-US': 'fileList',
          },
          tip: "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'httpRequest',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '覆盖默认的上传行为',
            'en-US': 'httpRequest',
          },
          tip: '覆盖默认的上传行为，可以自定义上传的实现',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
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
        defaultValue: false,
      },
      {
        name: 'limit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大允许上传个数',
            'en-US': 'limit',
          },
          tip: '最大允许上传个数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'onExceed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文件超出个数限制时的钩子',
            'en-US': 'onExceed',
          },
          tip: '文件超出个数限制时的钩子',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发文件选择框的内容',
            'en-US': 'trigger',
          },
          tip: '触发文件选择框的内容',
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
        name: 'tip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '提示说明文字',
            'en-US': 'tip',
          },
          tip: '提示说明文字',
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
      events: [],
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
        componentName: 'ElUpload',
        props: {
          action: '#',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
