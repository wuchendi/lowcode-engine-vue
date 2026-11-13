import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElTooltip: ComponentMetadata = {
  title: '文字提示',
  group: '基础组件',
  category: 'Element 组件',
  priority: 1005,
  docUrl: 'https://element.eleme.cn/2.14/#/zh-CN/component/tooltip',
  componentName: 'ElTooltip',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Tooltip',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'v-model',
        title: '显示气泡框',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'effect',
        title: '主题',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        defaultValue: 'dark',
      },
      {
        name: 'content',
        title: '显示内容',
        setter: {
          componentName: 'StringSetter',
        },
        defaultValue: '文字提示',
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
        name: 'offset',
        title: '位置偏移量',
        setter: {
          componentName: 'NumberSetter',
        },
        defaultValue: 0,
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
        name: 'visibleArrow',
        title: '显示箭头',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: true,
      },
      {
        name: 'manual',
        title: '手动模式',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      {
        name: 'enterable',
        title: '鼠标可进入气泡框',
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
      condition: true,
      loop: false,
      style: false,
    },
    component: {
      isContainer: true,
    },
    advanced: {
      // 处理删除插槽内容之后，组件渲染异常问题
      callbacks: {
        onNodeRemove: (e, currentNode) => {
          currentNode.replaceWith(currentNode.exportSchema())
        },
      },
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_balloon.png',
      title: '文字提示',
      schema: {
        componentName: 'ElTooltip',
        children: [],
        props: {
          'v-model': false,
          effect: 'dark',
          content: '文字提示',
          placement: 'bottom',
          disabled: false,
          transition: 'el-fade-in-linear',
          visibleArrow: true,
          openDelay: 0,
          manual: false,
          popperClass: '',
          enterable: true,
          hideAfter: 0,
          tabindex: 0,
          popperOptions: {
            boundariesElement: 'body',
            gpuAcceleration: false,
          },
        },
      },
    },
  ],
}

export default ElTooltip
