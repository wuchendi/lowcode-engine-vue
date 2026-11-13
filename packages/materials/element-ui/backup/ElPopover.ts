import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElPopover: ComponentMetadata = {
  title: '弹出框',
  group: '基础组件',
  category: 'Element 组件',
  priority: 1005,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/popover',
  componentName: 'ElPopover',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Popover',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'v-model',
        title: '显示弹出框',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      {
        name: 'title',
        title: '标题',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'trigger',
        title: '触发方式',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'click',
                value: 'click',
              },
              {
                title: 'focus',
                value: 'focus',
              },
              {
                title: 'hover',
                value: 'hover',
              },
              {
                title: 'manual',
                value: 'manual',
              },
            ],
          },
        },
        defaultValue: 'hover',
      },
      {
        name: 'width',
        title: '宽度',
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'StringSetter',
          },
        ],
      },
      {
        name: 'placement',
        title: '出现位置',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'top-start',
                value: 'top-start',
              },
              {
                title: 'top-end',
                value: 'top-end',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
              {
                title: 'bottom-start',
                value: 'bottom-start',
              },
              {
                title: 'bottom-end',
                value: 'bottom-end',
              },
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'left-start',
                value: 'left-start',
              },
              {
                title: 'left-end',
                value: 'left-end',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'right-start',
                value: 'right-start',
              },
              {
                title: 'right-end',
                value: 'right-end',
              },
            ],
          },
        },
        defaultValue: 'bottom',
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      {
        name: 'offset',
        title: '出现位置的偏移量',
        setter: {
          componentName: 'NumberSetter',
        },
        defaultValue: 0,
      },
      {
        name: 'transition',
        title: '渐变动画',
        setter: {
          componentName: 'StringSetter',
        },
        defaultValue: 'el-fade-in-linear',
      },
      {
        name: 'visibleArrow',
        title: '显示箭头',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: true,
      },
      {
        name: 'openDelay',
        title: '显示延迟',
        setter: {
          componentName: 'NumberSetter',
        },
        defaultValue: 0,
      },
      {
        name: 'hideAfter',
        title: '隐藏延时',
        setter: {
          componentName: 'NumberSetter',
        },
        defaultValue: 0,
      },
      {
        name: 'popperClass',
        title: {
          label: '自定义类名',
          tip: '为 Tooltip 的 popper 添加类名',
        },
        setter: {
          componentName: 'StringSetter',
        },
        defaultValue: '',
      },
      // {
      //   name: 'popperOptions',
      //   title: 'popper.js 的参数',
      //   setter: {
      //     componentName: 'JsonSetter',
      //   },
      // },
    ],
    supports: {
      loop: false,
      condition: true,
      style: false,
      events: [
        {
          name: 'onShow',
          template: 'onShow(${extParams}){\nconsole.log("显示时触发");\n}\n',
        },
        {
          name: 'onHide',
          template: 'onHide(${extParams}){\nconsole.log("隐藏时触发");\n}\n',
        },
        {
          name: 'onAfter-enter',
          template:
            'onAfterEnter(${extParams}){\nconsole.log("显示动画播放完毕后触发");\n}\n',
        },
        {
          name: 'onAfter-leave',
          template:
            'onAfterLeave(${extParams}){\nconsole.log("隐藏动画播放完毕后触发");\n}\n',
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/popover-1.jpg',
      title: '弹出框',
      schema: {
        componentName: 'ElPopover',
        children: [],
        props: {
          reference: {
            type: 'JSSlot',
            title: '弹出框触发元素插槽',
          },
          default: {
            type: 'JSSlot',
            title: '弹出框显示内容插槽',
          },
          title: '标题',
          placement: 'bottom',
          disabled: false,
          offset: 0,
          transition: 'el-fade-in-linear',
          visibleArrow: true,
          popperOptions: {
            boundariesElement: 'body',
            gpuAcceleration: false,
          },
          popperClass: '',
          openDelay: 0,
          'close-delay': 200,
          tabindex: 0,
        },
      },
    },
  ],
}

export default ElPopover
