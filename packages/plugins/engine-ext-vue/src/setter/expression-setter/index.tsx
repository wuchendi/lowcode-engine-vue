import { Balloon, Select } from '@alifd/next'
import type { ObjectItem } from '@alifd/next/types/select'
import { project } from '@alilc/lowcode-engine'
import type { IPublicTypeJSExpression } from '@alilc/lowcode-types'
import { isJSExpression } from '@alilc/lowcode-utils'
import React, { PureComponent } from 'react'
import type { MessageKey } from '../../locale'
import { intl } from '../../locale'
import { rootState } from '../../utils'

import './index.less'

const { Option, AutoComplete } = Select
const { Tooltip } = Balloon
const helpMap: Record<string, MessageKey> = {
  this: 'HelpThis',
  state: 'HelpState',
  props: 'HelpProps',
  context: 'HelpContext',
  schema: 'HelpSchema',
  component: 'HelpComponent',
  constants: 'HelpConstants',
  utils: 'HelpUtils',
  dataSourceMap: 'HelpDataSourceMap',
  field: 'HelpField',
}

interface ExpressionSetterProps {
  value?: IPublicTypeJSExpression | string
  onChange: (value: IPublicTypeJSExpression) => void
  placeholder?: string
  /** Initial completion items. */
  dataSource?: string[]
}

interface ExpressionSetterState {
  value: string
  dataSource: string[]
}

export default class ExpressionView extends PureComponent<
  ExpressionSetterProps,
  ExpressionSetterState
> {
  static displayName = 'Expression'

  static defaultProps = {
    dataSource: [],
    placeholder: '',
    value: '',
  }

  expression = React.createRef<HTMLDivElement>()

  t: ReturnType<typeof setTimeout> | undefined

  $input: HTMLInputElement | undefined

  listenerFun: ((event: KeyboardEvent | MouseEvent) => void) | undefined

  static getInitValue(val: ExpressionSetterProps['value']): string {
    if (isJSExpression(val)) return val.value
    if (typeof val === 'string') {
      const arr = val.match(/^\{\{(.*?)\}\}$/)
      return arr ? arr[1] : val
    }
    return String(val ?? '')
  }

  constructor(props: ExpressionSetterProps) {
    super(props)
    this.state = {
      value: ExpressionView.getInitValue(props.value),
      dataSource: props.dataSource || [],
    }
  }

  // static getDerivedStateFromProps(props: { value: any }, state: { preValue: any }) {
  //   const curValue = ExpressionView.getInitValue(props.value);
  //   if (curValue !== state.preValue) {
  //     return {
  //       preValue: curValue,
  //       value: curValue,
  //     };
  //   }
  //   return null;
  // }

  onChange(value: string) {
    const realInputValue = value
    this.setState({ value: realInputValue })
    // 默认加上变量表达式
    this.t && clearTimeout(this.t)
    this.t = setTimeout(() => {
      this.props.onChange?.({
        type: 'JSExpression',
        value: realInputValue,
      })
    }, 300)
  }

  /**
   * 获取AutoComplete数据源
   * @param  {String}
   * @return {Array}
   */
  getDataSource(): string[] {
    const schema = project.exportSchema()
    const stateMap = rootState(schema.componentsTree[0])
    const dataSource: string[] = []

    const datasourceMap = schema.componentsTree[0]?.dataSource
    const list = datasourceMap?.list || []

    for (const key in stateMap) {
      dataSource.push(`this.${key}`)
    }

    for (const item of list) {
      if (item && item.id) {
        dataSource.push(`this.${item.id}`)
      }
    }

    return dataSource
  }

  /**
   * 根据输入项进行筛选
   * @param  {String}
   * @param  {String}
   * @return {Boolen}
   */
  filterOption(inputValue: string | number, item: ObjectItem) {
    const cursorIndex = this.getInputCursorPosition()
    if (typeof inputValue != 'string') return false
    const preStr = inputValue.slice(0, cursorIndex)
    const lastKey = preStr.split('.').pop()
    if (!lastKey) return true
    return String(item.value).indexOf(lastKey) > -1
  }

  // handleClick = () => {
  //   this.props.field.editor.emit('variableBindDialog.open');
  // }

  render() {
    const { value, dataSource } = this.state
    const { placeholder } = this.props
    const isValObject = value === '[object Object]'
    const title = isValObject
      ? intl('ExpressionValueIllegal')
      : value || placeholder || intl('ExpressionJs')
    const cursorIndex = this.getInputCursorPosition()
    const childNode = cursorIndex ? (
      <div className="cursor-blink">
        {title.slice(0, cursorIndex)}
        <b>|</b>
        {title.slice(cursorIndex)}
      </div>
    ) : (
      title
    )

    return (
      <div
        ref={this.expression}
        style={{ width: '100%', display: 'inline-block' }}
      >
        <Tooltip
          triggerType={isValObject ? ['click'] : ['focus']}
          align="tl"
          popupClassName="code-input-overlay"
          trigger={
            isValObject ? (
              value
            ) : (
              <div>
                <AutoComplete
                  size="small"
                  style={{ width: '100%' }}
                  dataSource={dataSource}
                  placeholder={placeholder || intl('ExpressionJs')}
                  value={value}
                  disabled={isValObject}
                  innerBefore={
                    <span style={{ color: '#999', marginLeft: 4 }}>{'{{'}</span>
                  }
                  innerAfter={
                    <span style={{ color: '#999', marginRight: 4 }}>
                      {'}}'}
                    </span>
                  }
                  popupClassName="expression-setter-item-inner"
                  itemRender={(itemValue) => {
                    const key = String(itemValue.value)
                    return (
                      <Option key={key} value={key}>
                        <div className="code-input-value">{key}</div>
                        <div className="code-input-help">
                          {helpMap[key] && intl(helpMap[key])}
                        </div>
                      </Option>
                    )
                  }}
                  onChange={this.onChange.bind(this)}
                  filter={this.filterOption.bind(this)}
                />
              </div>
            )
          }
        >
          {childNode}
        </Tooltip>
      </div>
    )
  }

  componentDidMount() {
    this.$input = this.findInputElement()
    if (this.$input) {
      this.listenerFun = (event) => {
        const isMoveKey =
          event instanceof KeyboardEvent &&
          ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'Meta'].includes(event.key)
        const isMouseup = event.type == 'mouseup'
        if (isMoveKey || isMouseup) {
          const dataSource = this.getDataSource()
          this.setState({
            dataSource,
          })
        }
      }
      this.$input.addEventListener('keyup', this.listenerFun, false)
      this.$input.addEventListener('mouseup', this.listenerFun, false)
    }
  }

  componentWillUnmount() {
    if (this.listenerFun && this.$input) {
      this.$input.removeEventListener('keyup', this.listenerFun, false)
      this.$input.removeEventListener('mouseup', this.listenerFun, false)
    }
  }

  /**
   * 获取Input输入框DOM节点
   */
  findInputElement() {
    return this.expression.current?.getElementsByTagName('input')[0]
  }

  /**
   * 获取光标位置
   *
   */
  getInputCursorPosition() {
    return this.$input?.selectionStart ?? undefined
  }
}
