import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (upload); see https://element-plus.org/zh-CN/component/upload.html
const meta = {
  componentName: 'ElUpload',
  title: '上传',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/upload.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'action',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'action',
            'en-US': 'action',
          },
          tip: 'request URL.',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '#',
      },
      {
        name: 'headers',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headers',
            'en-US': 'headers',
          },
          tip: 'request headers.',
        },
        setter: 'JsonSetter',
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
          tip: 'set upload request method.',
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
            'zh-CN': 'multiple',
            'en-US': 'multiple',
          },
          tip: 'whether uploading multiple files is permitted.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'data',
            'en-US': 'data',
          },
          tip: 'additions options of request. support Awaitable data and Function since v2.3.13.',
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
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'key name for uploaded file.',
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
          tip: 'whether cookies are sent.',
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
            'zh-CN': 'showFileList',
            'en-US': 'showFileList',
          },
          tip: 'whether to show the uploaded file list.',
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
            'zh-CN': 'drag',
            'en-US': 'drag',
          },
          tip: 'whether to activate drag and drop mode.',
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
            'zh-CN': 'accept',
            'en-US': 'accept',
          },
          tip: 'accepted file types, will not work when thumbnail-mode === true.',
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
          tip: 'native attribute crossorigin.',
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
        name: 'onPreview',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onPreview',
            'en-US': 'onPreview',
          },
          tip: 'hook function when clicking the uploaded files.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onRemove',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onRemove',
            'en-US': 'onRemove',
          },
          tip: 'hook function when files are removed.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onSuccess',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onSuccess',
            'en-US': 'onSuccess',
          },
          tip: 'hook function when uploaded successfully.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onError',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onError',
            'en-US': 'onError',
          },
          tip: 'hook function when some errors occurs.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onProgress',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onProgress',
            'en-US': 'onProgress',
          },
          tip: 'hook function when some progress occurs.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onChange',
            'en-US': 'onChange',
          },
          tip: 'hook function when select file or upload file success or upload file fail.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'onExceed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'onExceed',
            'en-US': 'onExceed',
          },
          tip: 'hook function when limit is exceeded.',
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
        name: 'beforeUpload',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'beforeUpload',
            'en-US': 'beforeUpload',
          },
          tip: 'hook function before uploading with the file to be uploaded as its parameter. If false is returned or a Promise is returned and then is rejected, uploading will be aborted.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'beforeRemove',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'beforeRemove',
            'en-US': 'beforeRemove',
          },
          tip: 'hook function before removing a file with the file and file list as its parameters. If false is returned or a Promise is returned and then is rejected, removing will be aborted.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'v-model:file-list',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:file-list',
            'en-US': 'v-model:file-list',
          },
          tip: 'default uploaded files.',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'listType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'listType',
            'en-US': 'listType',
          },
          tip: 'type of file list.',
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
            'zh-CN': 'autoUpload',
            'en-US': 'autoUpload',
          },
          tip: 'whether to auto upload file.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'httpRequest',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'httpRequest',
            'en-US': 'httpRequest',
          },
          tip: "override default xhr behavior, allowing you to implement your own upload-file's request.",
        },
        setter: 'FunctionSetter',
        supportVariable: true,
        defaultValue: 'ajaxUpload see',
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: 'whether to disable upload.',
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
            'zh-CN': 'limit',
            'en-US': 'limit',
          },
          tip: 'maximum number of uploads allowed.',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'directory',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'directory',
            'en-US': 'directory',
          },
          tip: 'whether to support uploading directory. After enabling it, only folders can be selected, and after selecting a folder, the files within the folder will be flattened.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'trigger',
            'en-US': 'trigger',
          },
          tip: 'content which triggers file dialog.',
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
            'zh-CN': 'tip',
            'en-US': 'tip',
          },
          tip: 'content of tips.',
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
        name: 'file',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'file',
            'en-US': 'file',
          },
          tip: 'content of thumbnail template.',
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
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '上传',
      screenshot: './screenshots/upload.webp',
      schema: {
        componentName: 'ElUpload',
        props: {},
        children: '上传',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
