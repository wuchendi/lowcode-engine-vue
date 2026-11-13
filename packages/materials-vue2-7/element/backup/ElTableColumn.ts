import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElTableColumn: ComponentMetadata = {
  componentName: 'ElTableColumn',
  title: '表格列',
  group: '业务组件',
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/table',
  category: '表格相关',
  hidden: true,
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'TableColumn',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'label',
        title: '显示的标题',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'prop',
        title: {
          label: '字段名',
          tip: '对应列内容的字段名，也可以使用 property 属性',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'width',
        title: {
          label: '宽度',
          tip: 'width | 对应列的宽度',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'minWidth',
        title: {
          label: '最小宽度',
          tip: 'min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'showOverflowTooltip',
        title: {
          label: '显示tooltip',
          tip: '当内容过长被隐藏时显示 tooltip',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'align',
        title: '对齐方式',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '左对齐',
                value: 'left',
              },
              {
                title: '中对齐',
                value: 'center',
              },
              {
                title: '右对齐',
                value: 'right',
              },
            ],
          },
          initialValue: 'left',
        },
      },
      {
        name: 'fixed',
        title: {
          label: '固定位置',
          tip: '当内容过长被隐藏时显示 tooltip',
        },
        setter: [
          {
            componentName: 'BoolSetter',
            initialValue: false,
          },
          {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '左侧',
                  value: 'left',
                },
                {
                  title: '右侧',
                  value: 'right',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'default',
        title: '自定义渲染',
        setter: {
          componentName: 'SlotSetter',

          initialValue: {
            type: 'JSSlot',
            title: '表格列插槽',
            params: ['slotProps'],
            value: [],
          },
        },
      },
      {
        name: 'header',
        title: '自定义表头',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            title: '表头插槽',
            params: ['slotProps'],
            value: [],
          },
        },
      },
    ],
    supports: {
      condition: true,
      style: false,
    },
    component: {
      isContainer: false,
      nestingRule: {
        parentWhitelist: ['WsTable', 'ElTable', 'Slot'],
      },
    },
  },
  snippets: [
    {
      title: '表格列',
      schema: {
        componentName: 'ElTableColumn',
        children: [],
        props: {},
      },
    },
  ],
}

export default ElTableColumn
