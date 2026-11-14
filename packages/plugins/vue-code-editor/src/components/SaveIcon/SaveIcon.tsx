import { Button } from '@alifd/next'
import React from 'react'
import { intl } from '../../locale'
import './SaveIcon.less'

export interface ErrorTipProps {
  onClick: () => void
  isDisabled?: boolean
}

export const SaveIcon: React.FC<ErrorTipProps> = ({ isDisabled, onClick }) => {
  return (
    <div
      className={`plugin-code-editor-save-icon ${
        isDisabled ? 'plugin-code-editor-save-icon--disabled' : ''
      }`}
    >
      <Button onClick={onClick} size="small">
        {intl('Save')}
      </Button>
    </div>
  )
}
