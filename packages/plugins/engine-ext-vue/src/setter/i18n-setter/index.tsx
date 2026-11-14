import { Button, Icon, Input, Search } from '@alifd/next'
import { project } from '@alilc/lowcode-engine'
import type { IPublicTypeI18nMap } from '@alilc/lowcode-types'
import React, { Component } from 'react'
import './index.less'
import { intl, isEnglish } from '../../locale'
import lang from './lang.json'

/** Text of one language. */
interface I18nData {
  langKey: string
  i18nData: string
}

/** One key of the project i18n, with its texts in every language. */
interface I18nItem {
  i18nkey: string
  i18nDataList: I18nData[]
}

/** The key bound to the prop. */
interface I18nValue {
  type?: 'i18n'
  key?: string
  i18nDataList?: I18nData[]
  /** Chinese text, shown in the input. */
  inputValue?: string
}

/** Prop value: `{ type: 'i18n', key, [langKey]: text }`. */
type I18nPropValue = { type: 'i18n'; key?: string } & Record<string, string>

interface I18nSetterProps {
  value?: I18nPropValue
  onChange: (value: I18nPropValue | Record<string, never>) => void
}

interface I18nSetterState {
  isShowSearchPopUp: boolean
  isShowBindDataPopUp: boolean
  i18nValue: I18nValue
  i18nPageDataList: I18nItem[]
  i18nSearchDataList: I18nItem[]
}

function langName(langKey: string) {
  const names = lang[langKey as keyof typeof lang]
  return (isEnglish() ? names?.i18nLangEN : names?.i18nLangCN) ?? langKey
}

class I18nSetter extends Component<I18nSetterProps, I18nSetterState> {
  state: I18nSetterState = {
    isShowSearchPopUp: false,
    isShowBindDataPopUp: false,
    i18nValue: {},
    i18nPageDataList: [],
    i18nSearchDataList: [],
  }

  componentDidMount() {
    // 获取schema
    const { value } = this.props

    const i18nPageDataList = this.transfromI18nData(project.exportSchema().i18n)
    let i18nValue: I18nValue = {}
    if (value && value.key) {
      i18nValue = this.setI18nValue(value.key, i18nPageDataList)
    }
    // 对原始的i18n数据结构进行转化，方便页面输出
    this.setState({
      i18nPageDataList: i18nPageDataList,
      i18nValue,
    })
  }

  transfromI18nData = (i18nSchema: IPublicTypeI18nMap = {}) => {
    const i18nPageDataList: I18nItem[] = []
    for (const langKey in i18nSchema) {
      const i18nMap = i18nSchema[langKey]
      for (const key2 in i18nMap) {
        const i18nData = { langKey, i18nData: i18nMap[key2] }
        const i18nItem = i18nPageDataList.find((item) => item.i18nkey === key2)
        if (i18nItem) {
          i18nItem.i18nDataList.push(i18nData)
        } else {
          i18nPageDataList.push({ i18nkey: key2, i18nDataList: [i18nData] })
        }
      }
    }
    return i18nPageDataList
  }

  showSearchPopUp = () => {
    this.setState({
      isShowSearchPopUp: true,
    })
  }

  showBindDataPopUp = () => {
    this.setState({
      isShowBindDataPopUp: !this.state.isShowBindDataPopUp,
    })
  }

  clearI18n = () => {
    const { onChange } = this.props
    this.setState({
      i18nValue: {},
      isShowBindDataPopUp: false,
    })

    onChange({})
  }

  setI18nValue = (
    i18nkey: string,
    i18nPageDataList = this.state.i18nPageDataList,
  ): I18nValue => {
    const i18nDataList =
      i18nPageDataList.find((item) => item.i18nkey === i18nkey)?.i18nDataList ??
      []
    // 中文用于input展示
    const inputValue = i18nDataList.find(
      (item) => item.langKey === 'zh-CN',
    )?.i18nData
    return {
      type: 'i18n',
      key: i18nkey,
      i18nDataList,
      inputValue,
    }
  }

  createNewI18nItemData = () => {
    const { onChange } = this.props
    const i18nSchema = project.exportSchema().i18n ?? {}
    const newI18nKey = this.uniqueId('i18n')
    // 将新的key添加到i18nSchema中
    for (const langKey in i18nSchema) {
      i18nSchema[langKey][newI18nKey] = ''
    }

    if (Object.keys(i18nSchema).length === 0) {
      // i18n结构为空的话，默认建中文和英文
      i18nSchema['zh-CN'] = { [newI18nKey]: '你好' }
      i18nSchema['en-US'] = { [newI18nKey]: 'Hello' }
    }

    const i18nPageDataList = this.transfromI18nData(i18nSchema)
    const i18nValue = this.setI18nValue(newI18nKey, i18nPageDataList)

    onChange(this.parseI18nValue2PropsValue(i18nValue))

    project.setI18n(i18nSchema)

    this.setState({
      i18nPageDataList,
      i18nValue,
      isShowBindDataPopUp: true,
      isShowSearchPopUp: false,
    })
  }

  uniqueId = (prefix = '') => {
    return `${prefix}-${Date.now().toString(36).toLowerCase()}`
  }

  onClickI18nItem = (i18nItem: I18nItem) => {
    const { onChange } = this.props
    const i18nValue = this.setI18nValue(i18nItem.i18nkey)
    this.setState({
      i18nValue,
      isShowSearchPopUp: false,
      isShowBindDataPopUp: true,
    })
    onChange(this.parseI18nValue2PropsValue(i18nValue))
  }

  parseI18nValue2PropsValue = (i18nValue: I18nValue): I18nPropValue => {
    const propsValue = {
      type: 'i18n',
      key: i18nValue.key,
    } as I18nPropValue

    for (const item of i18nValue.i18nDataList ?? []) {
      propsValue[item.langKey] = item.i18nData
    }

    return propsValue
  }

  renderI18nList = () => {
    const { i18nSearchDataList } = this.state
    return (
      <div className="lowcode-setter-i18n-list">
        {i18nSearchDataList.map((item) => {
          return (
            <div
              key={item.i18nkey}
              className="lowcode-setter-i18n-search-box-container"
              onClick={() => this.onClickI18nItem(item)}
            >
              {item.i18nDataList.map((i18nItem) => {
                return (
                  <div className="i18n-lang-item" key={i18nItem.langKey}>
                    <div className="i18n-item-lang-type">
                      {langName(i18nItem.langKey)}
                    </div>
                    <div className="item-lang-content">{i18nItem.i18nData}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  onSearchChange = (value: string) => {
    // 联想的数据
    const i18nSearchDataList = this.state.i18nPageDataList.filter(
      (item) =>
        value !== '' &&
        item.i18nDataList.some((itemData) => itemData.i18nData.includes(value)),
    )

    this.setState({
      i18nSearchDataList,
    })
  }

  i18nItemOnChange = (value: string, langKey: string) => {
    const { i18nValue } = this.state
    const { onChange } = this.props
    for (const item of i18nValue.i18nDataList ?? []) {
      if (item.langKey === langKey) {
        item.i18nData = value
        if (langKey === 'zh-CN') {
          i18nValue.inputValue = value
        }
      }
    }

    this.setState({
      i18nValue,
    })

    onChange(this.parseI18nValue2PropsValue(i18nValue))

    this.updateI18nSchema(i18nValue)
  }

  /** Writes the texts of the bound key to the project i18n. */
  updateI18nSchema = (i18nValue: I18nValue) => {
    const { key } = i18nValue
    const i18nSchema = project.exportSchema().i18n ?? {}
    for (const i18nDataItem of i18nValue.i18nDataList ?? []) {
      const schemaLangData = i18nSchema[i18nDataItem.langKey]
      if (key && schemaLangData && key in schemaLangData) {
        schemaLangData[key] = i18nDataItem.i18nData
      }
    }
    project.setI18n(i18nSchema)
  }

  render() {
    const { isShowSearchPopUp, i18nValue, isShowBindDataPopUp } = this.state
    return (
      <div className="lowcode-setter-i18n">
        <Input size="small" value={i18nValue.inputValue} />

        {!i18nValue.key ? (
          <div className="i18n-icon" onClick={this.showSearchPopUp}>
            <img src="https://gw.alicdn.com/imgextra/i2/O1CN01kvqrSB22B9CKB4yVl_!!6000000007081-2-tps-200-200.png"></img>
          </div>
        ) : (
          <div
            className="i18n-icon i18n-icon-selected"
            onClick={this.showBindDataPopUp}
          >
            <img src="https://gw.alicdn.com/imgextra/i3/O1CN01VpNCcg1wfTjbdHK8I_!!6000000006335-2-tps-200-200.png"></img>
          </div>
        )}
        {isShowSearchPopUp && (
          <div className="popup-container">
            <Search
              onChange={this.onSearchChange}
              popupContent={this.renderI18nList()}
              type="normal"
              shape="simple"
              style={{ width: '195px' }}
              placeholder={intl('SearchI18n')}
            />
            <Button
              type="primary"
              className="new-i18n-button"
              onClick={this.createNewI18nItemData}
            >
              <Icon type="add" />
              {intl('NewI18n')}
            </Button>
          </div>
        )}
        {isShowBindDataPopUp && (
          <div className="binddata-popup-container">
            <div className="clear-i18n" onClick={this.clearI18n}>
              {intl('UnbindI18n')}
            </div>
            {i18nValue.i18nDataList?.map((i18nItem) => {
              return (
                <div className="bind-item" key={i18nItem.langKey}>
                  <p>{langName(i18nItem.langKey)}</p>
                  <Input
                    size="small"
                    value={i18nItem.i18nData}
                    onChange={(value) =>
                      this.i18nItemOnChange(String(value), i18nItem.langKey)
                    }
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default I18nSetter
