import { Button } from '@alifd/next'
import React from 'react'
import { intl } from '@/locale'
import Logger from '@/utils/Logger'
import { saveProject } from '@/utils/store'
import type { VueVersion } from '@/version'
import { vueVersion } from '@/version'

const versions: { label: string; value: VueVersion }[] = [
  { label: 'Vue 2.7', value: 2 },
  { label: 'Vue 3', value: 3 },
]

/** Saves the current project, then reloads the designer with `?vue=<version>`. */
async function switchTo(version: VueVersion) {
  if (version === vueVersion) return
  await saveProject()
  const url = new URL(window.location.href)
  url.searchParams.set('vue', String(version))
  window.location.assign(url)
}

/** Segmented buttons, styled like the other top bar buttons. */
export function VueVersionSwitch() {
  return (
    <div
      title={intl('SwitchVueVersion')}
      style={{ display: 'flex', alignItems: 'center', marginLeft: 12 }}
    >
      <Button.Group>
        {versions.map(({ label, value }) => (
          <Button
            key={value}
            type={value === vueVersion ? 'primary' : 'normal'}
            onClick={() => {
              switchTo(value).catch((error) => Logger.error(error))
            }}
          >
            {label}
          </Button>
        ))}
      </Button.Group>
    </div>
  )
}
