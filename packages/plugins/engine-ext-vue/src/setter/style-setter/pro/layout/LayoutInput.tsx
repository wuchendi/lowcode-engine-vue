import { Input } from '@alifd/next'
import type { InputProps } from '@alifd/next/types/input'
import type { FC } from 'react'
import React from 'react'
import { isCssVarBind } from '../../utils'

const LayoutInput: FC<InputProps> = (props) => {
  const { value } = props
  if (isCssVarBind(value)) {
    return null
  }
  return <Input {...props} />
}

export default LayoutInput
