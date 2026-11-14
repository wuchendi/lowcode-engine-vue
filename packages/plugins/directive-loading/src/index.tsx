import { material } from '@alilc/lowcode-engine'
import type {
  IPublicTypeFieldConfig,
  IPublicTypeTransformedComponentMetadata,
} from '@alilc/lowcode-types'
import { name, version } from '../package.json'

function addonCombine(metadata: IPublicTypeTransformedComponentMetadata) {
  const { componentName, configure = {} } = metadata

  const isRoot: boolean =
    componentName === 'Page' || componentName === 'Component'

  if (isRoot) {
    return metadata
  }

  let advancedGroup: IPublicTypeFieldConfig | undefined

  const refItem: IPublicTypeFieldConfig = {
    title: {
      label: 'loading',
      tip: {
        type: 'i18n',
        'zh-CN': '加载数据时显示动效(v-loading)',
        'en-US': 'Show a loading animation while loading data (v-loading)',
      },
      icon: '',
    },
    name: 'v-loading',
    defaultValue: false,
    setter: [
      {
        componentName: 'BoolSetter',
      },
      {
        componentName: 'VariableSetter',
      },
    ],
    extraProps: {
      display: 'block',
      supportVariable: false,
    },
  }

  if (!configure.combined) {
    configure.combined = []
  }

  advancedGroup = configure.combined?.filter((d) => d.name === '#advanced')[0]

  if (!advancedGroup) {
    advancedGroup = {
      name: '#advanced',
      title: { type: 'i18n', 'zh-CN': '高级', 'en-US': 'Advanced' },
      items: [refItem],
    }

    configure.combined.push(advancedGroup)
  }

  if (!advancedGroup.items) {
    advancedGroup.items = [refItem]
  }

  const advanceItems: IPublicTypeFieldConfig[] = advancedGroup.items || []

  if (
    !advanceItems ||
    !advanceItems.length ||
    !advanceItems?.filter((d) => d.name === 'directive-loading').length
  ) {
    advanceItems.push(refItem)
  }

  return {
    ...metadata,
    configure,
  }
}

const directiveLoading = () => {
  return {
    init() {
      material.registerMetadataTransducer(
        addonCombine,
        110,
        'register-directive-loading',
      )
    },
  }
}

directiveLoading.pluginName = 'register-directive-loading'

export default directiveLoading

console.log(
  `%c ${name} %c v`.concat(version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
)
