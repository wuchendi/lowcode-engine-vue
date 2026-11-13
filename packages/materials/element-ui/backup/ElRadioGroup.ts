import type { ComponentMetadata } from '@alilc/lowcode-types'
import { cloneDeep, isEqual, throttle } from 'lodash'

const ElRadioGroup: ComponentMetadata = {
  title: '单选框组',
  group: '基础组件',
  priority: 1000,
  category: '数据录入',
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/radio',
  componentName: 'ElRadioGroup',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'RadioGroup',
    destructuring: true,
  },
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
        name: 'shape',
        title: '展示形状',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '默认',
                value: 'normal',
              },
              {
                title: '按钮',
                value: 'button',
              },
            ],
          },
          initialValue: 'normal',
        },
        extraProps: {
          setValue: (target, value) => {
            // 边框、尺寸置为空
            target.parent.setPropValue('border', false)
            target.parent.setPropValue('size', '')

            let schema = cloneDeep(target.node.schema)
            schema.children.forEach((child) => {
              if (value === 'normal') {
                child.componentName = 'ElRadio'
              } else {
                child.componentName = 'ElRadioButton'
                // 去掉边框属性
                // biome-ignore lint/performance/noDelete: the setter must drop the key
                delete child.props.border
              }
            })
            target.node.replaceWith(schema)
          },
        },
      },
      {
        name: 'border',
        title: '显示边框',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
        extraProps: {
          setValue: (target, value) => {
            let schema = cloneDeep(target.node.schema)
            schema.children.forEach((child) => {
              child.props.border = value
            })
            target.node.replaceWith(schema)
          },
        },
        condition(target) {
          return target.getProps().getPropValue('shape') === 'normal'
        },
      },
      {
        name: 'size',
        title: {
          label: '尺寸',
          tip: '单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效',
        },
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
        condition(target) {
          let result =
            target.getProps().getPropValue('shape') === 'button' ||
            (target.getProps().getPropValue('shape') === 'normal' &&
              target.getProps().getPropValue('border'))
          return result
        },
      },
      {
        name: 'textColor',
        title: {
          label: '文字颜色',
          tip: '按钮形式的 Radio 激活时的文本颜色',
        },
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#fff',
        },
        condition(target) {
          return target.getProps().getPropValue('shape') === 'button'
        },
      },
      {
        name: 'fill',
        title: {
          label: '填充颜色',
          tip: '按钮形式的 Radio 激活时的填充色和边框色',
        },
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#409EFF',
        },
        condition(target) {
          return target.getProps().getPropValue('shape') === 'button'
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
                      title: { label: '选项值', tip: 'label | 选项值' },
                      important: true,
                      setter: 'StringSetter',
                    },
                    {
                      name: 'entry',
                      title: '组件详细配置',
                      display: 'block',
                      setter: (target) => {
                        return React.createElement(
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
                }
              },
            },
          },
          initialValue: [
            {
              primaryKey: String(Math.floor(Math.random() * 10000)),
              label: '选项0',
            },
            {
              primaryKey: String(Math.floor(Math.random() * 10000)),
              label: '选项1',
            },
          ],
        },
        extraProps: {
          getValue: (target) => {
            const { children } = target.node
            const hotValue = children.map((child) => {
              const { propsData } = child
              return {
                ...propsData,
              }
            })
            return hotValue
          },
          setValue: throttle((target, value) => {
            const { node } = target
            const mergedValueMap = {}
            const mergedValues = []
            const map = {}
            if (!Array.isArray(value)) {
              value = []
            }
            value.forEach((item) => {
              if (!mergedValueMap[item.primaryKey]) {
                mergedValueMap[item.primaryKey] = item
                mergedValues.push(item)
              }
              map[item.primaryKey] = item
            })

            const children = node.children.filter((child) => {
              if (!mergedValueMap[child.propsData.primaryKey]) {
                mergedValueMap[child.propsData.primaryKey] = child.propsData
                mergedValues.push(child.propsData)
              }
              return true
            })

            const preValue = children.map((child) => {
              return child.propsData
            })

            if (isEqual(preValue, value)) {
              return
            }

            // remover、adder、sorter 会按顺序依次触发，且每一个筛选表单项都会触发一次
            node.children.mergeChildren(
              (child) => {
                console.log('remover', child)
                const primaryKey = child.getPropValue('primaryKey')
                if (Object.hasOwnProperty.call(map, primaryKey)) {
                  const newComponentProps = {
                    ...map[primaryKey],
                  }

                  let newProps = {
                    ...(child.propsData || {}),
                    ...newComponentProps,
                  }

                  node.replaceChild(child, {
                    componentName:
                      node.propsData.shape === 'normal'
                        ? 'ElRadio'
                        : 'ElRadioButton',
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
                      componentName:
                        node.propsData.shape === 'normal'
                          ? 'ElRadio'
                          : 'ElRadioButton',
                      props: map[primaryKey],
                    })
                  }
                }
                return items
              },
              (child1, child2) => {
                console.log('sorter')
                const a = mergedValues.findIndex(
                  (item) =>
                    String(item.primaryKey) ===
                    String(child1.getPropValue('primaryKey')),
                )
                const b = mergedValues.findIndex(
                  (item) =>
                    String(item.primaryKey) ===
                    String(child2.getPropValue('primaryKey')),
                )
                return a - b
              },
            )
          }),
        },
      },
    ],
    supports: {
      style: true,
      loop: true,
      events: [
        {
          name: 'onInput',
          template:
            'onInput(value, ${extParams}){\n// 绑定值变化时触发的事件\nconsole.log("onInput", value);\n}\n',
        },
      ],
    },
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['ElRadio', 'ElRadioButton'],
      },
    },
  },
  snippets: [
    {
      title: '单选框组',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-group-1.png',
      schema: {
        componentName: 'ElRadioGroup',
        props: {
          'v-model': '选项0',
        },
        children: [...new Array(2).keys()].map((item, index) => ({
          componentName: 'ElRadio',
          props: {
            primaryKey: String(Math.floor(Math.random() * 10000) + item),
            label: '选项' + index,
          },
        })),
      },
    },
  ],
}

export default ElRadioGroup
