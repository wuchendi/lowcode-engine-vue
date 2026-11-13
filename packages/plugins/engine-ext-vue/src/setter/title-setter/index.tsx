import { Box, Input, Switch } from '@alifd/next'
import type { IPublicModelSettingField } from '@alilc/lowcode-types'
import React, { useState } from 'react'

import './index.scss'

export interface TitleSetterProps {
  field?: IPublicModelSettingField
  prop?: IPublicModelSettingField
  value: string
  defaultValue: string
  defaultChecked?: boolean
  onChange?: (value: string) => void
}

const TitleSetter = (props: TitleSetterProps) => {
  const { value, defaultValue, defaultChecked, onChange, field, prop } = props
  const [checked, setChecked] = useState(defaultChecked)
  const target = field || prop
  const theVal = target?.getValue() || defaultValue || value

  const handleToggle = (vis: boolean) => {
    onChange?.(vis ? theVal : '')
    setChecked(vis)
  }
  const handleChangeText = (text: string | number) => {
    onChange?.(String(text))
  }

  return (
    <Box className="setter-title" direction="row" align="center" spacing={10}>
      <Switch size="small" checked={checked} onChange={handleToggle} />
      {checked && (
        <Input size="small" value={theVal} onChange={handleChangeText} />
      )}
    </Box>
  )
}

export default TitleSetter
