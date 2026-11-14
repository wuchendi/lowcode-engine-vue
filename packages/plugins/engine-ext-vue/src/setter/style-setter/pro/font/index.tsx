import { Collapse, NumberPicker, Range, Select } from '@alifd/next'
import * as React from 'react'
import ColorInput from '../../components/color-input'
import NumberInput from '../../components/number'
import Row from '../../components/row'
import { addUnit, isEmptyValue } from '../../utils'
import type { onStyleChange, StyleData } from '../../utils/types'
import { intlLocal } from './locale'
import './index.less'

const Panel = Collapse.Panel

function stringOf(value: unknown) {
  return value == null ? null : String(value)
}

const fontConfig = intlLocal()

interface fontProps {
  styleData: StyleData
  onStyleChange: onStyleChange
  fontPropsConfig?: { fontFamilyList?: { value: string; label: string }[] }
  unit?: string
}
export default (props: fontProps) => {
  const { styleData, onStyleChange, fontPropsConfig } = props
  const defaultFontPropsConfig = {
    // display 展示列表
    fontFamilyList: [
      { value: 'Helvetica', label: 'Helvetica' },
      { value: 'Arial', label: 'Arial' },
      { value: 'serif', label: 'serif' },
    ],
  }

  // 配置合并
  const propsConfig = { ...defaultFontPropsConfig, ...fontPropsConfig }

  const { fontWeight, textAlign } = fontConfig

  const onNumberChange = (
    styleKey: string,
    value: number | null,
    unit?: string,
  ) => {
    onStyleChange([
      {
        styleKey,
        value: unit ? addUnit(value, unit) : value,
      },
    ])
  }

  const opacity = Number(styleData.opacity)
  const hasOpacity = !isEmptyValue(styleData.opacity) && !Number.isNaN(opacity)

  return (
    <Collapse defaultExpandedKeys={['0']}>
      <Panel title={fontConfig.title} className="font-style-container">
        <div className="inner-row-contaienr">
          <div className="row-item">
            <span className="row-item-title">{fontConfig.fontSize}</span>
            <NumberInput
              max={100}
              min={0}
              styleKey="fontSize"
              {...props}
              style={{ marginRight: '10px', width: '100%' }}
              useComputedStyle={true}
            />
          </div>
          <div className="row-item">
            <span className="row-item-title">{fontConfig.lineHeight}</span>
            <NumberInput
              min={0}
              styleKey="lineHeight"
              {...props}
              style={{ width: '100%' }}
              useComputedStyle={true}
            />
          </div>
        </div>

        <Row
          title={fontConfig.fontWeight.title}
          styleData={styleData}
          styleKey=""
          onStyleChange={onStyleChange}
        >
          <Select
            dataSource={fontWeight.dataList}
            style={{ width: '100%' }}
            value={styleData.fontWeight}
            hasClear={true}
            onChange={(val) =>
              onStyleChange([{ styleKey: 'fontWeight', value: stringOf(val) }])
            }
          />
        </Row>
        <Row
          title={fontConfig.fontFamily}
          styleData={styleData}
          styleKey=""
          onStyleChange={onStyleChange}
        >
          <Select
            dataSource={propsConfig.fontFamilyList}
            style={{ width: '100%' }}
            value={styleData.fontFamily}
            hasClear={true}
            onChange={(val) =>
              onStyleChange([{ styleKey: 'fontFamily', value: stringOf(val) }])
            }
          />
        </Row>

        <Row title={fontConfig.color} styleKey="" {...props}>
          <ColorInput
            styleKey={'color'}
            {...props}
            inputWidth="100%"
          ></ColorInput>
        </Row>

        <Row
          title={textAlign.title}
          dataList={textAlign.dataList}
          styleKey="textAlign"
          {...props}
        />

        <Row title={fontConfig.opacity} styleKey="opacity" {...props}>
          <div className="opacity-container">
            <Range
              style={{ marginRight: '7px' }}
              value={hasOpacity ? opacity * 100 : 0}
              onChange={(val) => onNumberChange('opacity', Number(val) / 100)}
            />
            <NumberPicker
              value={hasOpacity ? Math.floor(opacity * 100) : undefined}
              max={100}
              min={0}
              onChange={(val) =>
                onNumberChange(
                  'opacity',
                  isEmptyValue(val) ? null : Number(val) / 100,
                )
              }
            />
          </div>
        </Row>
      </Panel>
    </Collapse>
  )
}
