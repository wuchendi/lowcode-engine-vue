import * as React from 'react'
import type { onStyleChange, RadioItem, StyleData } from '../../utils/types'
import RadioGroup from '../radio-group'

import './index.less'

interface rowProps {
  title?: string
  children?: React.ReactNode
  // 如果不传styleData的话，radiogroup就变成非受控组件
  styleData?: StyleData
  dataList?: Array<RadioItem>
  styleKey: string
  onStyleChange: onStyleChange
  value?: string | null
  contentStyle?: React.CSSProperties
  longTitle?: boolean
}

export default (props: rowProps) => {
  const {
    title,
    dataList,
    styleKey,
    children,
    styleData,
    contentStyle = {},
    value,
    longTitle,
  } = props
  return (
    <div className="row-container">
      {title && (
        <div
          className={
            styleData?.[styleKey]
              ? `${!longTitle ? 'title-contaienr' : 'title-contaienr-long'} title-text title-text-active`
              : `${!longTitle ? 'title-contaienr' : 'title-contaienr-long'} title-text`
          }
        >
          {title}
        </div>
      )}

      <div className="content-container" style={contentStyle}>
        {children ? (
          children
        ) : (
          <RadioGroup
            {...props}
            dataList={dataList ?? []}
            // 区分是style类型的值还是其他普通的值，从styleData获取的是对象
            value={typeof value != 'string' ? styleData?.[styleKey] : value}
          ></RadioGroup>
        )}
      </div>
    </div>
  )
}
