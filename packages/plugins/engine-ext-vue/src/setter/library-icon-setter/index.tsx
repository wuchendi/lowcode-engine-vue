import { Balloon, Icon, Input } from '@alifd/next'
import React, { PureComponent } from 'react'

import { elementIcons } from './element/icon'
import { intl } from './locale'
import { vantIcons } from './vant/icon'

import './element/icon.css'
import './vant/icon.css'

import './index.less'

/**
 * The icon sets of the component libraries. The value is what the library's
 * `icon` prop takes: the class name for Element UI, the name for Vant.
 */
const LIBRARIES = {
  element: { icons: elementIcons, className: (icon: string) => icon },
  vant: {
    icons: vantIcons,
    className: (icon: string) => `van-icon van-icon-${icon}`,
  },
}

interface IconSetterProps {
  value: string
  type: string
  defaultValue: string
  placeholder: string
  hasClear: boolean
  onChange: (icon: string) => undefined
  /** Icon set to choose from (`element` by default). */
  library?: keyof typeof LIBRARIES
}
interface SetterValueType {
  props?: {
    type?: string
  }
}

interface IconSetterState {
  setterValue: SetterValueType | string | null
}

/** `CIconSetter`: picks an icon of a component library (Element UI, Vant). */
export default class LibraryIconSetter extends PureComponent<
  IconSetterProps,
  IconSetterState
> {
  static defaultProps = {
    value: undefined,
    type: 'string',
    defaultValue: '',
    hasClear: true,
    placeholder: intl('SelectIcon'),
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
    const { placeholder, hasClear, library } = this.props
    const { setterValue } = this.state
    const { icons, className } = LIBRARIES[library ?? 'element']
    const _value =
      typeof setterValue === 'object'
        ? (setterValue as unknown as SetterValueType)?.props?.type
        : setterValue

    const currentIcon = _value ? <i className={className(_value)} /> : null
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

    return (
      <div className="lc-icon-setter">
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
                <i className={className(icon)}></i>
              </li>
            ))}
          </ul>
        </Balloon>
      </div>
    )
  }
}
