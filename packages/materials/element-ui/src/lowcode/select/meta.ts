import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import { isEqual, throttle } from 'lodash'
import React, { Component, useEffect, useState } from 'react'

const meta: IPublicTypeComponentMetadata = {
  title: '选择器',
  group: 'Element 组件',
  category: 'Form',
  // hidden: true,
  priority: 997,
  docUrl: 'https://element.eleme.cn/2.14/#/zh-CN/component/select',
  componentName: 'ElSelect',
  // npm: {
  //   package: 'element-ui',
  //   version: '2.30.6',
  //   exportName: 'Select',
  //   destructuring: true,
  // },
  configure: {
    props: [
      {
        name: 'v-model',
        title: '绑定值',
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
        ],
      },
      {
        name: 'clearable',
        title: '支持清空',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
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
        name: 'multiple',
        title: '支持多选',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'collapse-tags',
        title: {
          label: '折叠多选项',
          tip: '多选时是否将选中值按文字的形式展示',
        },
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'multiple-limit',
        title: {
          label: '多选数量限制',
          tip: '多选时用户最多可以选择的项目数，为 0 则不限制',
        },
        setter: {
          componentName: 'NumberSetter',
          initialValue: 0,
        },
      },
      {
        name: 'no-data-text',
        title: {
          label: '空选项文字',
          tip: '选项为空时显示的文字，也可以使用slot="empty"设置',
        },
        setter: {
          componentName: 'StringSetter',
          initialValue: '无数据',
        },
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
          initialValue: '',
        },
      },
      {
        name: 'placeholder',
        title: '占位符',
        setter: {
          componentName: 'StringSetter',
          initialValue: '请选择',
        },
      },
      {
        name: 'popper-class',
        title: '下拉框类名',
        setter: {
          componentName: 'StringSetter',
          initialValue: '',
        },
      },
      // {
      //   name: 'prefix',
      //   title: '选择框头部插槽',
      //   setter: {
      //     componentName: 'SlotSetter',
      //     initialValue: {
      //       type: 'JSSlot',
      //       title: '选择框头部插槽',
      //       params: ['slotProps'],
      //       value: [],
      //     },
      //   },
      // },
      // {
      //   name: 'empty',
      //   title: '选择框空状态插槽',
      //   setter: {
      //     componentName: 'SlotSetter',
      //     initialValue: {
      //       type: 'JSSlot',
      //       title: '选择框空状态插槽',
      //       params: ['slotProps'],
      //       value: [],
      //     },
      //   },
      // },
      {
        name: 'items',
        title: '可选项',
        supportVariable: false,
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'label',
                      title: { label: '选项标签', tip: 'label | 选项标签' },
                      important: true,
                      setter: [
                        {
                          componentName: 'StringSetter',
                        },
                        {
                          componentName: 'NumberSetter',
                        },
                      ],
                    },
                    {
                      name: 'value',
                      title: { label: '选项值', tip: 'label | 选项值' },
                      important: true,
                      setter: [
                        {
                          componentName: 'StringSetter',
                        },
                        {
                          componentName: 'NumberSetter',
                        },
                        {
                          componentName: 'JsonSetter',
                        },
                      ],
                    },
                    {
                      name: 'entry',
                      title: '组件详细配置',
                      display: 'block',
                      setter: (target: any) => {
                        return React.createElement(
                          // @ts-expect-error
                          Next.Button,
                          {
                            onClick: () => {
                              const { node } = target
                              node.children.get(target.parent.key).select()
                            },
                          },
                          '点击配置',
                        )
                      },
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  label: '选项',
                  value: String(Math.floor(Math.random() * 10000)) + '',
                }
              },
            },
          },
        },
        extraProps: {
          getValue: (target: any) => {
            const { children } = target.node
            const hotValue = children.map((child: any) => {
              const { propsData } = child
              return {
                ...propsData,
              }
            })
            return hotValue
          },
          setValue: throttle((target: any, value: any) => {
            const { node } = target
            const mergedValueMap: any = {}
            const mergedValues: any = []
            const map: any = {}
            if (!Array.isArray(value)) {
              value = []
            }
            value.forEach((item: any) => {
              if (!mergedValueMap[item.primaryKey]) {
                mergedValueMap[item.primaryKey] = item
                mergedValues.push(item)
              }
              map[item.primaryKey] = item
            })

            const children = node.children.filter((child: any) => {
              if (!mergedValueMap[child.propsData.primaryKey]) {
                mergedValueMap[child.propsData.primaryKey] = child.propsData
                mergedValues.push(child.propsData)
              }
              return true
            })

            const preValue = children.map((child: any) => {
              return child.propsData
            })

            if (isEqual(preValue, value)) {
              return
            }

            // remover、adder、sorter 会按顺序依次触发，且每一个筛选表单项都会触发一次
            node.children.mergeChildren(
              (child: any) => {
                console.log('remover', child)
                const primaryKey = child.getPropValue('primaryKey')
                if (Object.hasOwnProperty.call(map, primaryKey)) {
                  const newComponentProps = {
                    ...map[primaryKey],
                  }

                  const newProps = {
                    ...(child.propsData || {}),
                    ...newComponentProps,
                  }

                  node.replaceChild(child, {
                    componentName: 'ElOption',
                    props: newProps,
                  })
                  delete map[primaryKey]
                  return false
                }
                return true
              },
              () => {
                console.log('adder')
                const items = []
                for (const primaryKey in map) {
                  if (Object.hasOwnProperty.call(map, primaryKey)) {
                    items.push({
                      componentName: 'ElOption',
                      props: map[primaryKey],
                    })
                  }
                }
                return items
              },
              (child1: any, child2: any) => {
                console.log('sorter')
                const a = mergedValues.findIndex(
                  (item: any) =>
                    String(item.primaryKey) ===
                    String(child1.getPropValue('primaryKey')),
                )
                const b = mergedValues.findIndex(
                  (item: any) =>
                    String(item.primaryKey) ===
                    String(child2.getPropValue('primaryKey')),
                )
                return a - b
              },
            )
          }),
        },
      },
      {
        name: '高级配置',
        title: '高级配置',
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'filterable',
            title: '支持搜索',
            setter: {
              componentName: 'BoolSetter',
              initialValue: false,
            },
          },
          // {
          //   name: 'allow-create',
          //   title: {
          //     label: '允许创建条目',
          //     tip: '是否允许用户创建新条目，需配合 filterable 使用',
          //   },
          //   setter: {
          //     componentName: 'BoolSetter',
          //     initialValue: false,
          //   },
          // },
          {
            name: 'filter-method',
            title: '自定义搜索',
            setter: {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'filterMethod(value,${extParams}){\n// 参数为当前输入值 \n}\n',
              },
            },
          },
          {
            name: 'remote',
            title: '开启远程搜索',
            setter: {
              componentName: 'BoolSetter',
              initialValue: false,
            },
          },
          {
            name: 'remote-method',
            title: '远程搜索方法',
            setter: {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'remoteMethod(value,${extParams}){\n// 参数为当前输入值 \n}\n',
              },
            },
          },
          // {
          //   name: 'loading',
          //   title: '正在从远程获取数据',
          //   setter: {
          //     componentName: 'BoolSetter',
          //     initialValue: false,
          //   },
          // },
          {
            name: 'loading-text',
            title: '远程加载显示的文字',
            setter: {
              componentName: 'StringSetter',
              initialValue: '加载中',
            },
          },
          {
            name: 'no-match-text',
            title: {
              label: '搜索条件无匹配时显示的文字',
              tip: '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置',
            },
            setter: {
              componentName: 'StringSetter',
              initialValue: '无匹配数据',
            },
          },
          {
            name: 'reserve-keyword',
            title: {
              label: '保留搜索关键词',
              tip: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
            },
            setter: {
              componentName: 'BoolSetter',
              initialValue: false,
            },
          },
          {
            name: 'default-first-option',
            title: {
              label: '回车选择第一个匹配项',
              tip: '在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用',
            },
            setter: {
              componentName: 'BoolSetter',
              initialValue: false,
            },
          },
        ],
      },
      {
        name: '其他配置',
        title: '其他配置',
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: '唯一性标识',
            title: {
              label: 'value-key',
              tip: 'value-key | Select 的绑定值为对象类型，请务必指定 value-key 作为它的唯一性标识。',
            },
            setter: {
              componentName: 'StringSetter',
              initialValue: 'value',
            },
          },
          {
            name: 'popper-append-to-body',
            title: {
              label: '弹出框插入至 body 元素',
              tip: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
            },
            setter: {
              componentName: 'BoolSetter',
              initialValue: true,
            },
          },
        ],
      },
      {
        name: '原生属性',
        title: {
          label: '原生属性',
          tip: '原生 HTML 属性',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'name',
            title: 'name',
            setter: 'StringSetter',
          },
          {
            name: 'autocomplete',
            title: 'autocomplete',
            setter: 'StringSetter',
          },
        ],
      },
    ],
    supports: {
      events: [
        {
          name: 'onChange',
          description: '选中值发生变化时触发',
          template:
            'onChange(value, ${extParams}){\n// 当选中节点变化时触发,回调参数为选中节点的值\nconsole.log("onChange", value);\n}\n',
        },
        {
          name: 'onVisible-change',
          description: '下拉框出现/隐藏时触发',
          template:
            'onVisibleChange(value, ${extParams}){\n//下拉框出现/隐藏时触发 \nconsole.log("onVisibleChange", value);\n}\n',
        },
        {
          name: 'onRemove-tag',
          description: '多选模式下移除tag时触发',
          template:
            'onRemoveTag(value, ${extParams}){\n//多选模式下移除tag时触发,回调参数为移除的tag值 \nconsole.log("onVisibleChange", value);\n}\n',
        },
        {
          name: 'onClear',
          description: '可清空的单选模式下点击清空按钮时触发',
          template:
            'onClear(){\n// 可清空的单选模式下用户点击清空按钮时触发 \nconsole.log("onClear");\n}\n',
        },
        {
          name: 'onBlur',
          description: '当input失去焦点时触发',
          template:
            'handleBlur(ev, ${extParams}){\n// 	当 input 失去焦点时触发 \nconsole.log("onBlur", ev);\n}\n',
        },
        {
          name: 'onFocus',
          description: '当input获得焦点时触发',
          template:
            'handleFocus(ev, ${extParams}){\n// 当 input 获得焦点时触发 \nconsole.log("onFocus", ev);\n}\n',
        },
      ],
      loop: true,
      style: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['ElOption'],
      },
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
      title: '选择器',
      schema: {
        componentName: 'ElSelect',
        props: {
          'v-model': '',
        },
        children: [...new Array(3).keys()].map((item, index) => ({
          componentName: 'ElOption',
          props: {
            primaryKey: String(Math.floor(Math.random() * 10000) + item),
            label: '选项' + index,
            value: index + '',
          },
        })),
      },
    },
  ],
}

export default meta
