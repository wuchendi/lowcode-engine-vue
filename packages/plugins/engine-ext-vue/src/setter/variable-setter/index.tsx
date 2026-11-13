import { event } from '@alilc/lowcode-engine'
import React, { PureComponent } from 'react'
import './index.less'

export default class SetterVariable extends PureComponent<any, any> {
  static displayName = 'SetterVariable'
  static isPopup = true

  static show({ prop: field }) {
    event.emit('variableBindDialog.openDialog', { field })
  }

  render() {
    return (
      <div className="lowcode-setter-variable">Hello LowcodeSetterVariable</div>
    )
  }
}
