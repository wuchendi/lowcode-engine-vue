import { material } from '@alilc/lowcode-engine'
import type {
  IPublicTypeFieldConfig,
  IPublicTypeTransformedComponentMetadata,
} from '@alilc/lowcode-types'
import React from 'react'
import { name, version } from '../package.json'

function addonCombine(metadata: IPublicTypeTransformedComponentMetadata) {
  const { componentName, configure = {} } = metadata

  const docUrl = metadata.docUrl || ''

  const isRoot: boolean =
    componentName === 'Page' || componentName === 'Component'

  if (isRoot) {
    return metadata
  }

  let propsGroup: IPublicTypeFieldConfig | undefined

  const docItem: IPublicTypeFieldConfig = {
    title: '文档',
    name: 'docUrl',
    setter: () => {
      return (
        <div>
          <a href={docUrl} target="_blank" rel="noreferrer">
            {' '}
            使用文档{' '}
          </a>
        </div>
      )
    },
    condition() {
      return !!docUrl
    },
    supportVariable: false,
    extraProps: {
      // display: 'block',
      // supportVariable: true,
    },
  }

  if (!configure.combined) {
    configure.combined = []
  }

  propsGroup = configure.combined?.filter((d) => d.name === '#props')[0]

  if (!propsGroup) {
    propsGroup = {
      name: '#props',
      title: { type: 'i18n', 'zh-CN': '属性', 'en-US': 'Props' },
      items: [docItem],
    }

    configure.combined.push(propsGroup)
  }

  if (!propsGroup.items) {
    propsGroup.items = [docItem]
  }

  const propsItems: IPublicTypeFieldConfig[] = propsGroup.items || []

  if (
    !propsItems ||
    !propsItems.length ||
    !propsItems?.filter((d) => d.name === 'docUrl').length
  ) {
    propsItems.unshift(docItem)
  }

  return {
    ...metadata,
    configure,
  }
}

// 插件顺序问题 https://github.com/alibaba/lowcode-engine/issues/2159
const registerDocProp = () => {
  return {
    init() {
      material.registerMetadataTransducer(
        addonCombine,
        110,
        'register-doc-prop',
      )
    },
  }
}

registerDocProp.pluginName = 'register-doc-prop'

export default registerDocProp

console.log(
  `%c ${name} %c v`.concat(version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
)
