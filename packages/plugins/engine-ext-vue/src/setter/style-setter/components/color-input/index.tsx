import { Balloon, Input } from '@alifd/next'
import * as React from 'react'
import type { ColorResult } from 'react-color'
import { SketchPicker } from 'react-color'
import type { onStyleChange, StyleData } from '../../utils/types'

import './index.less'

interface ColorInputProps {
  styleKey: string
  styleData: StyleData
  onStyleChange: onStyleChange
  inputWidth?: string
  color?: string
}

interface state {
  width: number
}
export default class ColorSetter extends React.Component<
  ColorInputProps,
  state
> {
  constructor(props: ColorInputProps) {
    super(props)
    this.state = {
      width: 50,
    }
  }
  componentDidMount() {
    this.screenChange()
    this.changeWidth()
  }
  /**
   * 屏幕分辨率监听
   */
  screenChange = () => {
    window.addEventListener('resize', this.changeWidth)
  }
  /**
   * 屏幕分辨率 变换 =>  改变冒泡框的位置
   */
  changeWidth = () => {
    this.setState({ width: document.body.clientWidth < 1860 ? -92 : -138 })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.changeWidth)
  }

  inputChange = (input: string | number) => {
    const color = String(input)
    const { onStyleChange, styleKey } = this.props
    if (color == '') {
      onStyleChange([
        {
          styleKey,
          value: null,
        },
      ])
    }
  }

  handleChange = (color: ColorResult) => {
    const { onStyleChange, styleKey } = this.props
    const { rgb, hex } = color
    const { r, g, b, a } = rgb
    if (a === 1) {
      onStyleChange([
        {
          styleKey,
          value: hex,
        },
      ])
    } else {
      onStyleChange([
        {
          styleKey,
          value: `rgba(${r},${g},${b},${a})`,
        },
      ])
    }
  }

  render() {
    const { styleKey, styleData, inputWidth = '108px' } = this.props
    const color = this.props.color || String(styleData[styleKey] ?? '')
    const InputTarget = (
      <Input
        className="lowcode-setter-color"
        style={{ width: inputWidth }}
        hasClear
        innerBefore={
          <div className="color-box" style={{ backgroundColor: color }} />
        }
        onChange={this.inputChange}
        value={color}
      />
    )
    return (
      <Balloon
        needAdjust
        align="tr"
        offset={[-30, 0]}
        style={{ padding: 0 }}
        trigger={InputTarget}
        triggerType="click"
        closable={false}
      >
        <SketchPicker
          width="250px"
          color={color}
          onChange={this.handleChange}
        />
      </Balloon>
    )
  }
}
