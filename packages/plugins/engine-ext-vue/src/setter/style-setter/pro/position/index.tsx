import { Collapse, NumberPicker, Select } from '@alifd/next'
import * as React from 'react'
import Row from '../../components/row'
import { isCssVarBind } from '../../utils'
import type { onStyleChange, StyleData } from '../../utils/types'
import PositionBox from '../position/positionBox'
import { intlLocal } from './locale'

const { Panel } = Collapse

interface layoutProps {
  styleData: StyleData
  onStyleChange: onStyleChange
  positionPropsConfig?: { isShowFloat?: boolean; isShowClear?: boolean }
}

const positionConfig = intlLocal()

export default (props: layoutProps) => {
  const { float, clear, position } = positionConfig

  const { onStyleChange, styleData, positionPropsConfig } = props

  const { isShowFloat, isShowClear } = positionPropsConfig ?? {}

  const onZIndexChange = (zIndex: string | number | undefined) => {
    onStyleChange([{ styleKey: 'zIndex', value: zIndex }])
  }

  return (
    <Collapse defaultExpandedKeys={['0']}>
      <Panel title={positionConfig.title}>
        <Row
          title={position.title}
          styleData={styleData}
          styleKey="position"
          onStyleChange={onStyleChange}
        >
          <Select
            dataSource={position.dataList}
            value={styleData.position}
            hasClear
            onChange={(val) =>
              onStyleChange([
                {
                  styleKey: 'position',
                  value: val == null ? null : String(val),
                },
              ])
            }
          />
        </Row>

        {styleData.position && styleData.position != 'static' && (
          <PositionBox {...props} />
        )}

        <Row
          title={'zIndex'}
          styleData={styleData}
          styleKey="zIndex"
          onStyleChange={onStyleChange}
        >
          <NumberPicker
            disabled={isCssVarBind(styleData.zIndex)}
            step={1}
            precision={2}
            onChange={onZIndexChange}
            value={styleData.zIndex}
          />
        </Row>

        {isShowFloat && (
          <Row
            title={float.title}
            dataList={float.dataList}
            onStyleChange={onStyleChange}
            styleData={styleData}
            styleKey="float"
          />
        )}
        {isShowClear && (
          <Row
            title={clear.title}
            dataList={clear.dataList}
            onStyleChange={onStyleChange}
            styleData={styleData}
            styleKey="clear"
          />
        )}
      </Panel>
    </Collapse>
  )
}
