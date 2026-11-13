import { Balloon, Icon, Input } from '@alifd/next'
import React, { PureComponent } from 'react'

import { elementIcons } from './element/icon'
import { vantIcons } from './vant/icon'

import './element/icon.css'
import './vant/icon.css'

import './index.less'

let client: string | null
let icons: string[] = elementIcons

// const CustomIcon = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/c/font_3713984_n3kn12ey5qi.js',
// })

interface IconSetterProps {
  value: string
  type: string
  defaultValue: string
  placeholder: string
  hasClear: boolean
  onChange: (icon: string) => undefined
  icons: string[]
}
interface SetterValueType {
  props?: {
    type?: string
  }
}

interface IconSetterState {
  setterValue: SetterValueType | string | null
}

export default class IconSetter extends PureComponent<
  IconSetterProps,
  IconSetterState
> {
  static displayName = 'CIconSetter'

  static defaultProps = {
    value: undefined,
    type: 'string',
    defaultValue: '',
    hasClear: true,
    icons,
    placeholder: '请点击选择 Icon',
    onChange: () => undefined,
  }

  static getDerivedStateFromProps(
    nextProps: IconSetterProps,
    prevState: IconSetterState,
  ) {
    const { value, defaultValue } = nextProps
    if (prevState.setterValue == null) {
      if (value === undefined && defaultValue) {
        return {
          setterValue: defaultValue,
        }
      }
    }

    return {
      setterValue: value,
    }
  }

  componentDidMount(): void {
    const qs = new URLSearchParams(location.search)
    client = qs.get('client')
    icons = client && client === 'h5' ? vantIcons : elementIcons

    // 手动更新组件
    this.forceUpdate()
  }

  state = {
    setterValue: null,
  }

  _onChange = (icon: string) => {
    const { onChange, type } = this.props
    if (type === 'string') {
      onChange(icon)
    } else if (type === 'node') {
      // @ts-expect-error
      onChange({
        componentName: 'Icon',
        props: {
          type: icon,
        },
      })
    }
  }

  onInputChange = (icon: string) => {
    this._onChange(icon)
  }

  onSelectIcon = (icon: string) => {
    this._onChange(icon)
  }

  render() {
    const { placeholder, hasClear } = this.props
    const { setterValue } = this.state
    const _value =
      typeof setterValue === 'object'
        ? (setterValue as unknown as SetterValueType)?.props?.type
        : setterValue

    const currentIcon = <Icon size="xs" type={_value} />
    const clearIcon = hasClear && (
      <Icon
        size="xs"
        id="icon-clear"
        type="delete-filling"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          this.onSelectIcon('')
        }}
      />
    )

    const triggerNode = (
      <div>
        <Input
          size="small"
          placeholder={placeholder}
          addonTextBefore={currentIcon}
          onChange={this.onInputChange as never}
          value={_value}
          readOnly
          addonTextAfter={clearIcon}
        />
      </div>
    )
    const InnerBeforeNode = (
      <Balloon
        className={'lowcode-icon-content'}
        trigger={triggerNode}
        needAdjust
        triggerType="click"
        closable={false}
        alignEdge
        align="l"
        popupClassName="lowcode-icon-setter-popup"
      >
        <ul className="lowcode-icon-list">
          {icons.map((icon) => (
            <li key={icon} onClick={() => this.onSelectIcon(icon)}>
              {client === 'h5' ? (
                <i className={'van-icon-' + icon}></i>
              ) : (
                <i className={icon}></i>
              )}
              {/* <Icon type={icon} size="medium" /> */}
              {/* <CustomIcon type={icon} size="medium" /> */}
            </li>
          ))}
        </ul>
      </Balloon>
    )

    return <div className="lc-icon-setter">{InnerBeforeNode}</div>
  }
}
