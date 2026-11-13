import { ConfigProvider } from '@alifd/next'
import enUS from '@alifd/next/lib/locale/en-us'
import zhCN from '@alifd/next/lib/locale/zh-cn'
import { common } from '@alilc/lowcode-engine'
import type { IPublicModelSettingField } from '@alilc/lowcode-types'
import * as React from 'react'
import CssCode from './components/css-code'
import Background from './pro/background'
import Border from './pro/border'
import Font from './pro/font'
import Layout from './pro/layout'
import Position from './pro/position'
import type { StyleChange, StyleData } from './utils/types'
import './index.less'

const { getLocale } = common.utils.createIntl()
const locale: string = getLocale() || 'zh-CN'
const localeSource: Record<string, typeof zhCN> = {
  'en-US': enUS,
  'zh-CN': zhCN,
}

interface StyleSetterProps {
  value?: StyleData
  field: IPublicModelSettingField
  onChange: (val: StyleData) => void
  isShowCssCode: boolean
  showModuleList: string[]
}

export default class StyleSetterV2 extends React.PureComponent<StyleSetterProps> {
  static defaultProps = {
    // 默认单位
    unit: 'px',
    // 默认计算尺寸缩放
    placeholderScale: 1,
    // 展示板块
    showModuleList: ['background', 'border', 'font', 'layout', 'position'],
    // 是否展示css源码编辑面板
    isShowCssCode: true,
    // layout 配置面板
    layoutPropsConfig: {
      // display 展示列表
      showDisPlayList: ['inline', 'flex', 'block', 'inline-block', 'none'],
      isShowPadding: true,
      isShowMargin: true,
      isShowWidthHeight: true,
    },

    fontPropsConfig: {
      // fontFamily列表
      fontFamilyList: [
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Arial', label: 'Arial' },
        { value: 'serif', label: 'serif' },
      ],
    },

    // position 配置面板
    positionPropsConfig: {
      isShowFloat: true,
      isShowClear: true,
    },
  }

  state: { styleData: StyleData } = { styleData: {} }

  componentDidMount() {
    const { value } = this.props
    if (value) {
      this.setState({
        styleData: value,
      })
    }
  }

  /**
   * style更改
   * @param styleKey
   * @param value
   */
  onStyleChange = (styleDataList: StyleChange[]) => {
    const { onChange } = this.props
    const styleData: StyleData = { ...this.state.styleData }
    for (const item of styleDataList) {
      if (item.value == undefined) {
        delete styleData[item.styleKey]
      } else {
        styleData[item.styleKey] = item.value
      }
    }

    this.setState({
      styleData,
    })

    onChange?.(styleData)
  }

  onStyleDataChange = (styleData: StyleData) => {
    this.setState({
      styleData,
    })
    const { onChange } = this.props

    onChange && onChange(styleData)
  }

  render() {
    const { isShowCssCode, showModuleList } = this.props
    const { styleData } = this.state

    return (
      <ConfigProvider locale={localeSource[locale]}>
        <div className="lowcode-setter-style-v2">
          {isShowCssCode && (
            <div className="top-bar">
              <CssCode
                styleData={styleData}
                onStyleDataChange={this.onStyleDataChange}
              />
            </div>
          )}

          {showModuleList.filter((item) => item == 'layout').length > 0 && (
            <Layout
              onStyleChange={this.onStyleChange}
              styleData={styleData}
              {...this.props}
            />
          )}

          {showModuleList.filter((item) => item == 'font').length > 0 && (
            <Font
              onStyleChange={this.onStyleChange}
              styleData={styleData}
              {...this.props}
            />
          )}

          {showModuleList.filter((item) => item == 'background').length > 0 && (
            <Background
              onStyleChange={this.onStyleChange}
              styleData={styleData}
              {...this.props}
            />
          )}

          {showModuleList.filter((item) => item == 'position').length > 0 && (
            <Position
              onStyleChange={this.onStyleChange}
              styleData={styleData}
              {...this.props}
            />
          )}

          {showModuleList.filter((item) => item == 'border').length > 0 && (
            <Border
              onStyleChange={this.onStyleChange}
              styleData={styleData}
              {...this.props}
            />
          )}
        </div>
      </ConfigProvider>
    )
  }
}
