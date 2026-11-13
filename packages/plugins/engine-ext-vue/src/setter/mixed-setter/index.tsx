import { Dropdown, Menu } from '@alifd/next'
import { setters } from '@alilc/lowcode-engine'
import type {
  IPublicModelSettingField,
  IPublicTypeCustomView,
  IPublicTypeDynamicProps,
  IPublicTypeDynamicSetter,
  IPublicTypeSetterConfig,
  IPublicTypeTitleContent,
} from '@alilc/lowcode-types'
import { isDynamicSetter, isSetterConfig } from '@alilc/lowcode-utils'
import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { Component } from 'react'
import { editorCabin } from '../../engine-cabin'
import { IconConvert } from './icons/convert'
import { intlNode } from './locale'

import './index.less'
import { IconVariable } from './icons/variable'

const { computed, obx, Title, createSetterContent, observer, shallowIntl } =
  editorCabin
const { getSetter, getSettersMap } = setters
type SetterType = string | IPublicTypeDynamicSetter | IPublicTypeCustomView

export interface SetterItem {
  name: string
  title: IPublicTypeTitleContent
  setter: SetterType
  props?: object | IPublicTypeDynamicProps
  condition?: (field: IPublicModelSettingField) => boolean
  initialValue?: unknown
  list: boolean
  /** Value types the setter produces (`valueType` of its registration). */
  valueType?: unknown[]
}

type MixedSetterSetters = Array<
  | string
  | IPublicTypeSetterConfig
  | IPublicTypeCustomView
  | IPublicTypeDynamicSetter
>

/** `valueType` of a setter registration (an extension of this package). */
function valueTypeOf(setter: object): unknown[] | undefined {
  return 'valueType' in setter && Array.isArray(setter.valueType)
    ? setter.valueType
    : undefined
}

/** Prop that remembers the setter chosen for a field. */
function mixedSelectPath(field: IPublicModelSettingField) {
  const path = [...(field.path || [])]
  if (!path.length) return undefined
  path.splice(
    path.length - 1,
    1,
    `_unsafe_MixedSetter_${path[path.length - 1]}_select`,
  )
  return path.join('.')
}

function getMixedSelect(field: IPublicModelSettingField): string | undefined {
  const path = mixedSelectPath(field)
  return path ? field.node?.getPropValue(path) : undefined
}

function setMixedSelect(field: IPublicModelSettingField, usedSetter: string) {
  const path = mixedSelectPath(field)
  if (path) field.node?.setPropValue(path, usedSetter)
}

interface VariableSetter {
  isPopup?: boolean
  show(params: object): void
}

/** The registered VariableSetter, when it is a popup. */
function popupVariableSetter(): VariableSetter | undefined {
  const component = getSetter('VariableSetter')?.component as
    | Partial<VariableSetter>
    | undefined
  return component?.isPopup && component.show
    ? (component as VariableSetter)
    : undefined
}

function nomalizeSetters(setters?: MixedSetterSetters): SetterItem[] {
  if (!setters) {
    const normalized: SetterItem[] = []
    getSettersMap().forEach((setter, name) => {
      if (name === 'MixedSetter') {
        return
      }
      normalized.push({
        name,
        title: setter.title || name,
        setter: name,
        condition: setter.condition,
        initialValue: setter.initialValue,
        list: setter.recommend || false,
        valueType: valueTypeOf(setter),
      })
    })

    return normalized
  }
  const names: string[] = []
  function generateName(n: string) {
    let idx = 1
    let got = n
    while (names.indexOf(got) > -1) {
      got = `${n}:${idx++}`
    }
    names.push(got)
    return got
  }
  const formattedSetters = setters.map((setter) => {
    const config: Omit<SetterItem, 'name' | 'title'> & {
      name?: string
      title?: IPublicTypeTitleContent
    } = isSetterConfig(setter)
      ? {
          setter: setter.componentName,
          props: setter.props,
          condition: setter.condition,
          initialValue: setter.initialValue,
          title: setter.title,
          valueType: setter.valueType,
          list: true,
        }
      : { setter, list: true }
    if (typeof config.setter === 'string') {
      config.name = config.setter
      names.push(config.name)
      const info = getSetter(config.setter)
      if (!config.title) {
        config.title = info?.title || config.setter
      }
      if (!config.valueType && info) {
        config.valueType = valueTypeOf(info)
      }
      if (!config.condition) {
        config.condition = info?.condition
      }
      if (!config.initialValue) {
        config.initialValue = info?.initialValue
      }
    } else {
      const { displayName, name } = config.setter as {
        displayName?: string
        name?: string
      }
      config.name = generateName(displayName || name || 'CustomSetter')
      if (!config.title) {
        config.title = config.name
      }
    }
    return config as SetterItem
  })
  const hasComplexSetter = formattedSetters.some(
    (item) => item.setter === 'ArraySetter' || item.setter === 'ObjectSetter',
  )
  return formattedSetters.map((item) => {
    if (item.setter === 'VariableSetter' && hasComplexSetter) {
      item.setter = 'ExpressionSetter'
      item.name = 'ExpressionSetter'
    }
    return item
  })
}

@observer
export default class MixedSetter extends Component<{
  field: IPublicModelSettingField
  setters?: MixedSetterSetters
  onSetterChange?: (field: IPublicModelSettingField, name: string) => void
  onChange?: (val: unknown) => void
  value?: unknown
  className?: string
}> {
  private fromMixedSetterSelect = false

  private setters = nomalizeSetters(this.props.setters)

  // set name ,used in setting Transducer
  static displayName = 'MixedSetter'

  @obx.ref private used?: string

  @computed private getCurrentSetter() {
    const { field } = this.props
    let firstMatched: SetterItem | undefined
    let firstDefault: SetterItem | undefined
    for (const setter of this.setters) {
      if (setter.name === this.used) {
        return setter
      }
      if (!setter.condition) {
        if (!firstDefault) {
          firstDefault = setter
        }
        continue
      }
      if (!firstMatched && setter.condition(field)) {
        firstMatched = setter
      }
    }
    return firstMatched || firstDefault || this.setters[0]
  }

  constructor(props: MixedSetter['props']) {
    super(props)
    // TODO: use engine ext.props
    const usedSetter = getMixedSelect(this.props.field)
    if (usedSetter) {
      this.used = usedSetter
    }
  }

  // dirty fix vision variable setter logic
  private hasVariableSetter = this.setters.some(
    (item) => item.name === 'VariableSetter',
  )

  private useSetter = (name: string, usedName: string) => {
    this.fromMixedSetterSelect = true
    const { field } = this.props

    if (name === 'VariableSetter') {
      const setterComponent = popupVariableSetter()
      if (setterComponent) {
        setterComponent.show({ prop: field })
        this.syncSelectSetter(name)
        return
      }
    } else {
      // 变量类型直接设undefined会引起初始值变化
      if (name !== this.used) {
        // reset value
        field.setValue(undefined)
      }
    }
    if (name === this.used) {
      return
    }

    const usedSetter = this.setters.find((item) => item.name === usedName)
    // 获取该setter的返回值类型
    const usedValueType = usedSetter?.valueType || ['string']

    const setter = this.setters.find((item) => item.name === name)

    const valueType = setter?.valueType || ['string']

    // 两个 setter 的值类型相同时保留当前值
    const fieldValue = usedValueType.some((item) => valueType.includes(item))
      ? field.getValue()
      : undefined

    this.syncSelectSetter(name)

    if (setter) {
      this.handleInitial(setter, fieldValue)
    }
  }

  private syncSelectSetter(name: string) {
    // TODO: sync into engine ext.props
    const { field } = this.props
    this.used = name
    setMixedSelect(field, name)
  }

  private handleInitial({ initialValue }: SetterItem, fieldValue?: unknown) {
    const { field, onChange } = this.props
    let newValue = initialValue
    if (typeof newValue === 'function') {
      newValue = newValue(field)
    } else if (fieldValue) {
      newValue = fieldValue
    }
    onChange?.(newValue)
  }

  private shell: HTMLDivElement | null = null

  private checkIsBlockField() {
    if (this.shell) {
      const setter = this.shell.firstElementChild
      if (setter && setter.classList.contains('lc-block-setter')) {
        this.shell.classList.add('lc-block-setter')
      } else {
        this.shell.classList.remove('lc-block-setter')
      }
    }
  }

  componentDidUpdate() {
    this.checkIsBlockField()
  }

  componentDidMount() {
    this.checkIsBlockField()
  }

  private renderCurrentSetter(currentSetter?: SetterItem, extraProps?: object) {
    const { className, field, setters, onSetterChange, ...restProps } =
      this.props
    if (!currentSetter) {
      // TODO: use intl
      if (restProps.value == null) {
        return <span>NullValue</span>
      } else {
        return <span>InvalidValue</span>
      }
    }
    const { setter, props } = currentSetter
    let setterType: ReturnType<IPublicTypeDynamicSetter> | SetterType
    let dynamicProps: object = {}
    if (isDynamicSetter(setter)) {
      setterType = setter.call(field, field)
      // { componentName: string; props: object }
      if (isSetterConfig(setterType)) {
        dynamicProps = setterType.props || {}
        setterType = setterType.componentName
      }
    } else {
      setterType = setter
    }
    const setterProps = typeof props === 'function' ? props(field) : props || {}

    return createSetterContent(setterType, {
      fromMixedSetterSelect: this.fromMixedSetterSelect,
      ...shallowIntl(setterProps),
      field,
      ...restProps,
      ...extraProps,
      ...dynamicProps,
      onInitial: () => {
        this.handleInitial(currentSetter)
      },
    })
  }

  private contentsFromPolyfill(setterComponent: VariableSetter) {
    const { field } = this.props

    const n = this.setters.length

    let setterContent: ReactNode
    let actions: ReactNode
    if (n < 3) {
      const tipContent = field.isUseVariable()
        ? intlNode('Binded: {expr}', { expr: field.getValue()?.value })
        : intlNode('Variable Binding')
      if (n === 1) {
        // =1: 原地展示<当前绑定的值，点击调用 VariableSetter.show>，icon 高亮是否->isUseVaiable，点击 VariableSetter.show
        setterContent = (
          <a
            onClick={() => {
              setterComponent.show({ prop: field })
            }}
          >
            {tipContent}
          </a>
        )
      } else {
        // =2: 另外一个 Setter 原地展示，icon 高亮，点击弹出调用 VariableSetter.show
        // FIXME! use variable placeholder setter

        const otherSetter = this.setters.find(
          (item) => item.name !== 'VariableSetter',
        )!
        setterContent = this.renderCurrentSetter(otherSetter, {
          value: field.getMockOrValue(),
        })
      }
      actions = (
        <Title
          className={field.isUseVariable() ? 'variable-binded' : ''}
          title={{
            icon: <IconVariable size={24} />,
            tip: tipContent,
          }}
          onClick={() => {
            setterComponent.show({ prop: field })
          }}
        />
      )
    } else {
      // >=3: 原地展示当前 setter<当前绑定的值，点击调用 VariableSetter.show>，icon tip 提示绑定的值，点击展示切换 Setter，点击其它 setter 直接切换，点击 Variable Setter-> VariableSetter.show
      const currentSetter =
        !this.used && field.isUseVariable()
          ? this.setters.find((item) => item.name === 'VariableSetter')
          : this.getCurrentSetter()
      if (currentSetter?.name === 'VariableSetter') {
        setterContent = (
          <a
            onClick={() => {
              setterComponent.show({ prop: field })
            }}
          >
            {intlNode('Binded: {expr}', {
              expr: field.getValue()?.value ?? '-',
            })}
          </a>
        )
      } else {
        setterContent = this.renderCurrentSetter(currentSetter)
      }
      actions = this.renderSwitchAction(currentSetter)
    }

    return {
      setterContent,
      actions,
    }
  }

  private renderSwitchAction(currentSetter?: SetterItem) {
    const usedName = currentSetter?.name || this.used
    const triggerNode = (
      <Title
        title={{
          tip: intlNode('Switch Setter'),
          // FIXME: got a beautiful icon
          icon: <IconConvert size={24} />,
        }}
        className="lc-switch-trigger"
      />
    )
    return (
      <Dropdown trigger={triggerNode} triggerType="click" align="tr br">
        <Menu
          selectMode="single"
          hasSelectedIcon
          selectedKeys={usedName}
          onItemClick={(name) => this.useSetter(name, usedName ?? '')}
        >
          {this.setters
            .filter((setter) => setter.list || setter.name === usedName)
            .map((setter) => {
              return (
                <Menu.Item key={setter.name}>
                  <Title title={setter.title} />
                </Menu.Item>
              )
            })}
        </Menu>
      </Dropdown>
    )
  }

  render() {
    const { className } = this.props
    let contents:
      | {
          setterContent: ReactNode
          actions: ReactNode
        }
      | undefined

    if (this.hasVariableSetter) {
      // polyfill vision variable setter logic
      const setterComponent = popupVariableSetter()
      if (setterComponent) {
        contents = this.contentsFromPolyfill(setterComponent)
      }
    }
    if (!contents) {
      const currentSetter = this.getCurrentSetter()
      contents = {
        setterContent: this.renderCurrentSetter(currentSetter),
        actions: this.renderSwitchAction(currentSetter),
      }
    }

    return (
      <div
        ref={(shell) => {
          this.shell = shell
        }}
        className={classNames('lc-setter-mixed', className)}
      >
        {contents.setterContent}
        <div className="lc-setter-actions">{contents.actions}</div>
      </div>
    )
  }
}
