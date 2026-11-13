import { NumberPicker, Select } from '@alifd/next'
import type { IPublicModelSettingField } from '@alilc/lowcode-types'
import * as React from 'react'
import { useEffect, useMemo, useState } from 'react'
import {
  addUnit,
  getPlaceholderPropertyValue,
  getUnit,
  isCssVarBind,
  isEmptyValue,
  removeUnit,
  unifyStyle,
} from '../../utils'
import type { onStyleChange, StyleData } from '../../utils/types'
import './index.less'

interface numberProps {
  styleKey: string
  styleData: StyleData
  onStyleChange: onStyleChange
  unit?: string | string[]
  min?: number
  max?: number
  style?: React.CSSProperties
  className?: string
  field?: IPublicModelSettingField
  placeholderScale?: number
  defaultPlaceholder?: string
  useComputedStyle?: boolean
  onChangeFunction?: (
    styleKey: string,
    value: number | null | undefined,
    unit?: string,
  ) => void
  multiProp?: number // 属性值包含多项是的项序号
}

export default (props: numberProps) => {
  const {
    styleData,
    styleKey,
    unit,
    onStyleChange,
    min,
    max,
    style = {},
    className = '',
    placeholderScale = 1,
    onChangeFunction,
    multiProp,
    defaultPlaceholder,
  } = props

  const [placeholder, setPlaceholder] = useState(defaultPlaceholder)
  const onNumberChange = (
    styleKey: string,
    value: number | null | undefined,
    unit?: string,
  ) => {
    onStyleChange([
      {
        styleKey,
        value:
          value == null ? null : unit ? addUnit(value, unit) : String(value),
      },
    ])
  }

  const initData = (props: numberProps) => {
    const { field, styleKey, useComputedStyle } = props
    if (useComputedStyle && field) {
      const placeholder = getPlaceholderPropertyValue(field, styleKey)

      if (typeof placeholder === 'number' && !isNaN(placeholder)) {
        setPlaceholder(String(placeholder / placeholderScale))
      } else {
        setPlaceholder('auto')
      }
    }
  }

  useEffect(() => {
    initData(props)
  }, [])

  const rawValue = styleData[styleKey]
  let value = unit ? removeUnit(rawValue) : rawValue
  let curUnit = unit ? getUnit(rawValue) || 'px' : ''
  // 不加multiprop一样，加了单独处理
  if (typeof multiProp === 'number') {
    const part = unifyStyle(String(rawValue ?? ''))?.split(' ')[multiProp]
    if (!part || part === 'auto') {
      value = null
      curUnit = 'px'
    } else {
      curUnit = unit ? getUnit(part) || 'px' : ''
      value = unit ? removeUnit(part) : part
    }
  }
  // 空值显示为空，非数字显示为 0
  const numberValue =
    value === null
      ? undefined
      : Number.isNaN(Number(value ?? Number.NaN))
        ? 0
        : Number(value)
  const getInnerAfter = useMemo(() => {
    if (typeof unit === 'string') {
      return unit
    }
    if (!unit) {
      return ''
    }
    const options = unit?.map((item) => {
      return {
        value: item,
        label: item,
      }
    })
    return (
      <Select
        defaultValue="px"
        style={{ width: '24px' }}
        value={curUnit || 'px'}
        autoWidth={false}
        hasBorder={false}
        hasArrow={false}
        onChange={(val) =>
          onChangeFunction
            ? onChangeFunction(styleKey, numberValue, String(val))
            : onNumberChange(styleKey, numberValue, String(val))
        }
        dataSource={options}
      />
    )
  }, [unit])
  const originValue = styleData[styleKey]
  if (isCssVarBind(originValue)) {
    return (
      <div className="ext-css-variable-ghost" title={String(originValue)}>
        {originValue}
      </div>
    )
  }
  return (
    <NumberPicker
      style={style}
      className={className}
      value={numberValue}
      min={isEmptyValue(min) ? Number.MIN_SAFE_INTEGER : min}
      max={isEmptyValue(max) ? Number.MAX_SAFE_INTEGER : max}
      onChange={(input) => {
        const val =
          input === undefined || input === '' ? undefined : Number(input)
        return onChangeFunction
          ? onChangeFunction(styleKey, val, curUnit)
          : onNumberChange(styleKey, val, curUnit)
      }}
      innerAfter={getInnerAfter}
      placeholder={placeholder}
    />
  )
}
