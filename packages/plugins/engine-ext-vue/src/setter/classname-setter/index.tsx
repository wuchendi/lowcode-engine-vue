import { Select } from '@alifd/next'
import type { DataSourceItem } from '@alifd/next/types/select'
import { project } from '@alilc/lowcode-engine'
import React, { PureComponent } from 'react'
import { currentRoot } from '../../utils'
import './index.less'

interface ClassNameSetterProps {
  value?: string
  onChange: (value: string) => void
}

interface ClassNameSetterState {
  dataSource: { value: string; label: string }[]
  selectValue: string[]
}

export default class ClassNameView extends PureComponent<
  ClassNameSetterProps,
  ClassNameSetterState
> {
  static display = 'ClassName'

  constructor(props: ClassNameSetterProps) {
    super(props)
    const { value } = props
    this.state = {
      dataSource: this.getClassNameList().map((item) => ({
        value: item,
        label: item,
      })),
      selectValue: value ? value.split(' ') : [],
    }
  }

  getClassNameList = () => {
    const css = currentRoot(project as never)?.css
    const classNameList: string[] = []
    if (css) {
      const re = /\.?\w+[^{]+\{[^}]*\}/g
      const list = css.match(re)
      list?.map((item) => {
        if (item[0] === '.') {
          let className = item.substring(1, item.indexOf('{'))
          if (className.indexOf(':') >= 0) {
            className = item.substring(1, item.indexOf(':'))
          }
          // 移除左右两边空格
          className = className.replace(/^\s*|\s*$/g, '')
          classNameList.push(className)
        }

        return item
      })
    }

    return classNameList
  }

  handleChange = (value: DataSourceItem | DataSourceItem[]) => {
    const selectValue = (Array.isArray(value) ? value : [value])
      .map((item) => (typeof item === 'object' ? item?.value : item))
      .filter((item) => item != null)
      .map(String)
    this.props.onChange(selectValue.join(' '))
    this.setState({
      selectValue,
    })
  }

  render() {
    const { dataSource, selectValue } = this.state
    return (
      <Select
        size="small"
        style={{ width: '100%' }}
        aria-label="tag mode"
        mode="tag"
        dataSource={dataSource}
        onChange={this.handleChange}
        value={selectValue}
      />
    )
  }
}
