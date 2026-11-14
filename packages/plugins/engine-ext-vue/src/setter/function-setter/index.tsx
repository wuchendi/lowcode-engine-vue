import { Button, Dialog, Icon } from '@alifd/next'
import { event, skeleton } from '@alilc/lowcode-engine'
import MonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor'
import type {
  IPublicModelSettingField,
  IPublicTypeJSFunction,
} from '@alilc/lowcode-types'
import { js_beautify } from 'js-beautify'
import React, { PureComponent } from 'react'
import './index.less'
import { intl } from '../../locale'

const SETTER_NAME = 'function-setter'

const defaultEditorOption = {
  width: '100%',
  height: '95%',
  options: {
    readOnly: false,
    automaticLayout: true,
    folding: true, // 默认开启折叠代码功能
    lineNumbers: 'on',
    wordWrap: 'off',
    formatOnPaste: true,
    fontSize: 12,
    tabSize: 2,
    scrollBeyondLastLine: false,
    fixedOverflowWidgets: false,
    snippetSuggestions: 'top',
    minimap: {
      enabled: false,
    },
    scrollbar: {
      vertical: 'auto',
      horizontal: 'auto',
    },
  },
}

interface FunctionSetterProps {
  value?: IPublicTypeJSFunction
  field: IPublicModelSettingField
  /** Template of the new function, passed to the event bind dialog. */
  template?: string
  onChange: (value: IPublicTypeJSFunction) => void
  removeProp: () => void
}

export default class FunctionSetter extends PureComponent<FunctionSetterProps> {
  private emitEventName = ''

  private functionCode = ''

  state = {
    isShowDialog: false,
  }

  componentDidMount() {
    this.emitEventName = `${SETTER_NAME}-${this.props.field.id}`
    event.on(`common:${this.emitEventName}.bindEvent`, this.bindEvent)
  }

  bindEvent = (eventName: string, paramStr: string) => {
    this.bindEventCallback(eventName, paramStr)
  }

  componentWillUnmount() {
    event.off(`common:${this.emitEventName}.bindEvent`, this.bindEvent)
  }

  bindFunction = (isEdit = false) => {
    const { field, value, template } = this.props

    let paramStr: string | null | undefined
    let functionName: string | undefined

    if (value) {
      paramStr = this.parseFunctionParam(value.value)
      functionName = this.parseFunctionName(value.value)
    }

    event.emit(
      'eventBindDialog.openDialog',
      functionName || field.name,
      this.emitEventName,
      paramStr,
      isEdit,
      functionName || field.name,
      { template },
    )
  }

  openDialog = () => {
    this.setState({
      isShowDialog: true,
    })

    this.functionCode = this.props.value?.value ?? ''
  }

  closeDialog = () => {
    this.setState({
      isShowDialog: false,
    })
  }

  removeFunctionBind = () => {
    this.props.removeProp()
  }

  parseFunctionName = (functionString: string) => {
    // 因为函数格式是固定的，所以可以按照字符换去匹配获取函数名
    return functionString.split('this.')[1]?.split('.')[0]
  }

  parseFunctionParam = (functionString: string) => {
    const matchList = functionString.match(/\[([\s\S]*?)\]/g)
    if (matchList?.length) {
      const paramStr = matchList[0].substring(1, matchList[0].length - 1)
      if (paramStr == '') {
        return null
      }
      return paramStr
    }
  }

  /**
   * 渲染按钮(初始状态)
   */
  renderButton = () => {
    return (
      <Button size="small" type="normal" onClick={() => this.bindFunction()}>
        {intl('BindFunction')}
      </Button>
    )
  }

  updateCode = (newCode: string) => {
    this.functionCode = newCode
  }

  onDialogOk = () => {
    const { onChange } = this.props
    onChange({
      type: 'JSFunction',
      value: this.functionCode,
    })

    this.closeDialog()
  }

  focusFunctionName = (functionName: string | undefined) => {
    skeleton.showPanel('codeEditor')

    setTimeout(() => {
      event.emit('codeEditor.focusByFunction', {
        functionName,
      })
    }, 300)
  }

  /**
   * 渲染绑定函数
   */
  renderBindFunction = () => {
    // 解析函数名
    const functionName = this.parseFunctionName(this.props.value?.value ?? '')
    return (
      <div className="function-container">
        <img
          className="funtion-icon"
          src="https://gw.alicdn.com/tfs/TB1NXNhk639YK4jSZPcXXXrUFXa-200-200.png"
        />
        <span
          className="function-name"
          onClick={() => this.focusFunctionName(functionName)}
        >
          {functionName}
        </span>
        <Icon
          type="set"
          size="medium"
          className="funtion-operate-icon"
          onClick={() => this.bindFunction(true)}
        />
        <Icon
          type="ashbin"
          size="medium"
          className="funtion-operate-icon"
          onClick={this.removeFunctionBind}
        />
      </div>
    )
  }

  /**
   * 渲染编辑函数按钮(可直接编辑函数内容)
   */
  renderEditFunctionButton = () => {
    return (
      <div>
        <Button size="small" type="primary" onClick={this.openDialog}>
          <Icon type="edit" />
          {intl('EditFunction')}
        </Button>
      </div>
    )
  }

  bindEventCallback = (eventName: string, paramStr: string) => {
    const { onChange } = this.props

    onChange({
      type: 'JSFunction',
      value: `function(){ return this.${eventName}.apply(this,Array.prototype.slice.call(arguments).concat([${
        paramStr || ''
      }])) }`,
    })
  }

  render() {
    const { value } = this.props
    const { isShowDialog } = this.state

    let functionName: string | undefined
    if (value && value.value) {
      functionName = this.parseFunctionName(value.value)
    }

    let renderFunction: () => React.ReactNode
    if (value) {
      if (functionName) {
        renderFunction = this.renderBindFunction
      } else {
        renderFunction = this.renderEditFunctionButton
      }
    } else {
      renderFunction = this.renderButton
    }

    return (
      <div className="lc-function-setter">
        {renderFunction()}

        {value && value.value && (
          <Dialog
            visible={isShowDialog}
            closeMode="close"
            title={intl('FunctionDialogTitle')}
            locale={{ ok: intl('Ok'), cancel: intl('Cancel') }}
            onCancel={this.closeDialog}
            onOk={this.onDialogOk}
            onClose={() => {
              this.closeDialog()
            }}
          >
            <div style={{ width: '500px', height: '400px' }}>
              <MonacoEditor
                value={js_beautify(value.value)}
                {...defaultEditorOption}
                {...{ language: 'javascript' }}
                onChange={this.updateCode}
              />
            </div>
          </Dialog>
        )}
      </div>
    )
  }
}
