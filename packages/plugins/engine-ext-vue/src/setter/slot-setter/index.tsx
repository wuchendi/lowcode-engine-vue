import { Button, Icon, Input, Select, Switch } from '@alifd/next'
import type { IPublicTypeJSSlot } from '@alilc/lowcode-types'
import React, { Component } from 'react'
import './index.less'
import { intl } from '../../locale'

interface Template {
  // 模板标签
  label: string
  // 模板ID
  value: string
  // 模板内容
  content: object
}

type SlotValue =
  | (Omit<IPublicTypeJSSlot, 'value'> & {
      value?: IPublicTypeJSSlot['value'] | null
      visible?: boolean
    })
  | null

export default class SlotSetter extends Component<{
  value?: SlotValue
  defaultValue?: SlotValue
  checkedText?: string
  unCheckedText?: string
  hideParams?: boolean
  onChange?: (value: SlotValue) => void
  onInitial?: () => void
  // 是否支持设置入参
  supportParams?: boolean
  templates: Template[]
}> {
  onChangeSwitch = (checked: boolean) => {
    const { onChange } = this.props
    if (checked) {
      this.handleInitial()
    } else {
      onChange && onChange(null)
    }
  }

  private handleInitial = () => {
    const { onChange, onInitial } = this.props
    if (onInitial) {
      onInitial()
      return
    }
    if (!onChange) {
      return
    }

    onChange({
      type: 'JSSlot',
      value: null,
    })
  }

  // 模板选择事件
  private onTemplateChange = (value: unknown) => {
    const { onChange, templates } = this.props
    if (value === 'jsslot') {
      this.handleInitial()
    } else if (value === 'disable') {
      onChange && onChange(null)
    } else {
      const template = templates.find((item) => item.value === value)
      if (template) {
        onChange &&
          onChange({
            type: 'JSSlot',
            ...template.content,
            name: template.value,
          })
      }
    }
  }

  private slotIsOpen = (initialValue: SlotValue | undefined) => {
    if (initialValue) {
      const { value, visible } = initialValue
      if (value) {
        if (visible == undefined) {
          if (Array.isArray(value)) {
            return value.length > 0
          }
        } else {
          return visible
        }
      }
    }

    return false
  }

  render() {
    const {
      value,
      onChange,
      supportParams,
      hideParams,
      checkedText = intl('Enable'),
      unCheckedText = intl('Disable'),
      templates,
    } = this.props

    const isOpenSlot = this.slotIsOpen(value)

    let switchComponent: React.ReactNode = null
    if (templates) {
      // 模板场景下，使用下拉列表切换
      const templateName = value?.name || (isOpenSlot ? 'jsslot' : 'disable')
      switchComponent = (
        <Select
          dataSource={templates.map(({ label, value }) => ({ label, value }))}
          defaultValue={templateName}
          onChange={this.onTemplateChange}
          autoWidth={false}
        />
      )
    } else {
      // 标准场景下，使用开关进行切换
      switchComponent = (
        <Switch
          autoWidth
          checked={!!value}
          defaultChecked={isOpenSlot}
          onChange={(checked) => this.onChangeSwitch(checked)}
          size="small"
          checkedChildren={checkedText}
          unCheckedChildren={unCheckedText}
        />
      )
    }

    const params = value && Array.isArray(value.params) ? value.params : null
    return (
      <div className="lc-setter-slot lc-setter-slot-column">
        {switchComponent}
        {!hideParams && value && params ? (
          <Input
            className="lc-slot-params"
            addonTextBefore={intl('SlotParams')}
            placeholder={intl('SlotParamsPlaceholder')}
            value={params.join(',')}
            onChange={(input) => {
              const val = String(input).trim()
              const params = val ? val.split(/ *, */) : []
              onChange &&
                onChange({
                  ...value,
                  params: params.length == 0 ? [''] : params,
                })
            }}
            addonAfter={
              <Button
                type="secondary"
                onClick={() => {
                  onChange &&
                    onChange({
                      ...value,
                      params: [''],
                    })
                }}
              >
                <Icon type="close" />
              </Button>
            }
          />
        ) : supportParams ? (
          <Button
            className="lc-slot-params"
            type="primary"
            onClick={() => {
              onChange &&
                onChange({
                  type: 'JSSlot',
                  ...value,
                  params: [],
                })
            }}
          >
            {intl('AddSlotParams')}
          </Button>
        ) : null}
      </div>
    )
  }
}
