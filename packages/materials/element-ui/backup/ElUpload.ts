import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElUpload: ComponentMetadata = {
  title: '上传组件',
  group: '基础组件',
  category: '数据录入',
  priority: 994,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/upload',
  componentName: 'ElUpload',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Upload',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'action',
        title: {
          label: '上传地址',
          tip: '必选参数，上传的地址',
        },
        setter: {
          componentName: 'StringSetter',
          initialValue: '#',
        },
      },
      {
        name: 'headers',
        title: {
          label: '请求头部',
          tip: '设置上传的请求头部',
        },
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'multiple',
        title: '支持多选文件',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'data',
        title: {
          label: '额外参数',
          tip: '上传时附带的额外参数',
        },
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'name',
        title: {
          label: '文件字段名',
          tip: '上传的文件字段名',
        },
        setter: {
          componentName: 'StringSetter',
          initialValue: 'file',
        },
      },
      {
        name: 'withCredentials',
        title: {
          label: '支持发送 cookie',
          tip: '支持发送 cookie 凭证信息',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'showFileList',
        title: '显示已上传文件列表',
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        name: 'drag',
        title: '启用拖拽上传',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
        extraProps: {
          setValue(target, value) {
            const { node } = target
            let schema = node.exportSchema()

            if (value) {
              schema.children = [
                {
                  componentName: 'div',
                  children: [
                    {
                      componentName: 'LowcodeIcon',
                      props: {
                        name: 'elIconUpload',
                        fontSize: 65,
                      },
                    },
                    {
                      componentName: 'div',
                      children: [
                        {
                          componentName: 'span',
                          props: {
                            children: '将文件拖入此处，或',
                            style: {
                              fontSize: '14px',
                              color: '#606266',
                            },
                          },
                        },
                        {
                          componentName: 'span',
                          props: {
                            children: '点击上传',
                            style: {
                              fontSize: '14px',
                              color: '#409eff',
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ]
            } else {
              schema.children = [
                {
                  componentName: 'ElButton',
                  props: {
                    children: '上传文件',
                    type: 'primary',
                    icon: 'el-icon-upload2',
                  },
                },
              ]
            }
            node.replaceWith(schema)
          },
        },
      },
      {
        name: 'accept',
        title: {
          label: '文件类型',
          tip: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
        },
        setter: [
          {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '所有文件',
                  value: '',
                },
                {
                  title: 'image/*',
                  value: 'image/*',
                },
                {
                  title: 'audio/*',
                  value: 'audio/*',
                },
                {
                  title: 'video/*',
                  value: 'video/*',
                },
                {
                  title: '.xls, .xlsx',
                  value: '.xls, .xlsx',
                },
                {
                  title: '.png, .jpg, .jpeg',
                  value: '.png, .jpg, .jpeg',
                },
              ],
            },
          },
          {
            componentName: 'StringSetter',
          },
        ],
      },
      {
        name: 'on-preview',
        title: {
          label: '点击已上传文件钩子',
          tip: '点击文件列表中已上传的文件时的钩子',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template: 'onPreview(file,${extParams}){\n console.log(file) \n}\n',
          },
        },
      },
      {
        name: 'on-remove',
        title: {
          label: '移除文件钩子',
          tip: '文件列表移除文件时的钩子',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'onRemove(file,fileList, ${extParams}){\n console.log(file, fileList) \n}\n',
          },
        },
      },
      {
        name: 'on-success',
        title: {
          label: '上传成功钩子',
          tip: '文件上传成功时的钩子',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'onSuccess(response, file, fileList, ${extParams}){\n console.log(response, file, fileList) \n}\n',
          },
        },
      },
      {
        name: 'on-error',
        title: {
          label: '上传失败钩子',
          tip: '文件上传失败时的钩子',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'onError(err, file, fileList, ${extParams}){\n console.log(err, file, fileList) \n}\n',
          },
        },
      },
      {
        name: 'on-progress',
        title: {
          label: '上传时钩子',
          tip: '文件上传时的钩子',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'onProgress(event, file, fileList, ${extParams}){\n console.log(event, file, fileList) \n}\n',
          },
        },
      },
      {
        name: 'on-change',
        title: {
          label: '状态改变钩子',
          tip: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'onChange(file, fileList, ${extParams}){\n console.log(file, fileList) \n}\n',
          },
        },
      },
      {
        name: 'beforeUpload',
        title: {
          label: '上传文件之前的钩子',
          tip: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'beforeUpload(file, ${extParams}){\n console.log(file) \n}\n',
          },
        },
      },
      {
        name: 'beforeRemove',
        title: {
          label: '删除文件之前的钩子',
          tip: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'filterMethod(value,${extParams}){\n console.log(file, fileList) \n}\n',
          },
        },
      },
      {
        name: 'listType',
        title: '文件列表的类型',
        setter: {
          componentName: 'SelectSetter',
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
          initialValue: 'text',
        },
      },
      {
        name: 'autoUpload',
        title: {
          label: '自动上传',
          tip: '是否在选取文件后立即进行上传',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        name: 'fileList',
        title: '上传的文件列表',
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'httpRequest',
        title: {
          label: '自定义上传',
          tip: '覆盖默认的上传行为，可以自定义上传的实现',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'httpRequest(${extParams}){\n console.log("httpRequest") \n}\n',
          },
        },
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'limit',
        title: '最大允许上传个数',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        name: 'on-exceed',
        title: {
          label: '文件超出个数限制钩子',
          tip: '文件超出个数限制时的钩子',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'onExceed(files, fileList, ${extParams}){\n console.log(files, fileList)  \n}\n',
          },
        },
      },
      {
        name: 'tip',
        title: '说明文字插槽',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            title: '上传说明文字插槽',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_upload.png',
      title: '上传组件',
      schema: {
        componentName: 'ElUpload',
        children: [
          {
            componentName: 'ElButton',
            props: {
              children: '上传文件',
              type: 'primary',
              icon: 'el-icon-upload2',
            },
          },
        ],
        props: {
          action: 'https://jsonplaceholder.typicode.com/posts/',
          headers: {},
          multiple: false,
          data: {},
          name: 'file',
          withCredentials: false,
          showFileList: true,
          drag: false,
          accept: '',
          listType: 'text',
          autoUpload: true,
          fileList: [],
          disabled: false,
        },
      },
    },
  ],
}

export default ElUpload
