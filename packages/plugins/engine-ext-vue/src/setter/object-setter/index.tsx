import { Button } from '@alifd/next'
import type {
  IPublicModelSettingField,
  IPublicTypeCustomView,
  IPublicTypeFieldConfig,
  IPublicTypeFieldExtraProps,
  IPublicTypeSetterType,
  IPublicTypeTitleContent,
} from '@alilc/lowcode-types'
import { isSetterConfig } from '@alilc/lowcode-utils'
import * as React from 'react'
import { Component, Fragment } from 'react'
import CustomIcon from '../../components/custom-icon'
import type { PopupContextValue, PopupPipe } from '../../engine-cabin'
import { designerCabin, editorCabin, skeletonCabin } from '../../engine-cabin'
import './index.less'
import { intl } from '../../locale'

const { Title } = editorCabin
const { isSettingField } = designerCabin
const { createSettingFieldView, PopupContext } = skeletonCabin

/** Title of the object: a prop name of the object, or a function. */
type ObjectDescriptor =
  | string
  | ((field: IPublicModelSettingField) => IPublicTypeTitleContent)

export default class ObjectSetter extends Component<{
  field: IPublicModelSettingField
  value?: unknown
  descriptor?: ObjectDescriptor
  config: ObjectSetterConfig
  mode?: 'popup' | 'form'
  // 1: in tablerow  2: in listrow 3: in column-cell
  forceInline?: number
}> {
  render() {
    const { mode, forceInline = 0, ...props } = this.props
    if (forceInline || mode === 'popup') {
      if (forceInline > 2 || mode === 'popup') {
        // popup
        return <RowSetter {...props} primaryButton={!forceInline} />
      } else {
        return <RowSetter columns={forceInline > 1 ? 2 : 4} {...props} />
      }
    } else {
      // form
      return <FormSetter {...props} />
    }
  }
}

interface ObjectSetterConfig {
  items?: IPublicTypeFieldConfig[]
  extraSetter?: IPublicTypeSetterType
  canCloseByOutSideClick: boolean
}

interface RowSetterProps {
  value?: unknown
  field: IPublicModelSettingField
  descriptor?: ObjectDescriptor
  config: ObjectSetterConfig
  columns?: number
  primaryButton?: boolean
}

interface RowSetterState {
  items: IPublicModelSettingField[]
  descriptor?: IPublicTypeTitleContent
}

/** Makes `setValue` of a child field also call the parent's `setValue`. */
function chainSetValue(
  item: IPublicModelSettingField,
  parentSetValue: IPublicTypeFieldExtraProps['setValue'],
) {
  const originalSetValue = item.extraProps.setValue
  item.extraProps.setValue = (target, value) => {
    // 调用子字段本身的 setValue
    originalSetValue?.(target, value)
    // 调用父字段本身的 setValue
    parentSetValue?.(target, value)
  }
}

function getItemsFromProps(props: RowSetterProps, state?: RowSetterState) {
  const { config, field, columns } = props
  const { extraProps } = field
  const items: IPublicModelSettingField[] = []
  if (columns && config?.items) {
    const l = Math.min(config.items.length, columns)
    for (let i = 0; i < config.items.length; i++) {
      const conf = config.items[i]
      if (
        conf.isRequired ||
        conf.important ||
        (isSetterConfig(conf.setter) && conf.setter.isRequired)
      ) {
        const item =
          state?.items?.filter((d) => d.name === conf.name)?.[0] ||
          field.createField({
            ...conf,
            // in column-cell
            forceInline: 3,
          })
        chainSetValue(item, extraProps.setValue)
        items.push(item)
      }
      if (items.length >= l) {
        break
      }
    }
  }
  return items
}

class RowSetter extends Component<RowSetterProps, RowSetterState> {
  static contextType = PopupContext

  declare context: PopupContextValue

  state: RowSetterState = {
    descriptor: '',
    items: [],
  }

  static getDerivedStateFromProps(
    props: RowSetterProps,
    state: RowSetterState,
  ) {
    return {
      items: getItemsFromProps(props, state),
    }
  }

  constructor(props: RowSetterProps) {
    super(props)
    const { descriptor, field } = props
    const items: IPublicModelSettingField[] = getItemsFromProps(props)
    this.state = { items }

    let firstRun = true
    field.onEffect(() => {
      const state: Pick<RowSetterState, 'descriptor'> = {
        descriptor: !descriptor
          ? field.title
          : typeof descriptor === 'function'
            ? descriptor(field)
            : field.getPropValue(descriptor),
      }

      if (firstRun) {
        firstRun = false
        this.state = { ...this.state, ...state }
      } else {
        this.setState(state)
      }
    })
  }

  shouldComponentUpdate(nextProps: RowSetterProps, nextState: RowSetterState) {
    if (this.state.descriptor !== nextState.descriptor) {
      return true
    }
    if (this.props.value !== nextProps.value) {
      return true
    }
    return false
  }

  private pipe: PopupPipe | undefined

  render() {
    const { items } = this.state
    const { field, config } = this.props

    const pipe = (this.pipe ??= this.context.create({
      width: 320,
      canCloseByOutSideClick: config.canCloseByOutSideClick,
    }))

    const title = (
      <Fragment>
        <Title title={this.state.descriptor} />
      </Fragment>
    )

    pipe.send(
      <FormSetter key={field.id} field={field} config={config} />,
      title,
    )

    if (items && items.length) {
      return (
        <div className="lc-setter-object-row">
          <Button
            className="lc-setter-object-row-edit"
            size="small"
            ghost="light"
            onClick={(e) => {
              pipe.show(e.target as Element, field.id)
            }}
          >
            <CustomIcon type="icon-ic_edit" />
          </Button>
          <div className="lc-setter-object-row-body">
            {items.map((item) => createSettingFieldView(item, field))}
          </div>
        </div>
      )
    }

    return (
      <div className="lc-setter-object-row">
        <Button
          className="lc-setter-object-row-edit"
          size="small"
          ghost="light"
          onClick={(e) => {
            pipe.show(e.target as Element, field.id)
          }}
        >
          <CustomIcon type="icon-ic_edit" />
        </Button>
        <div className="lc-setter-object-row-body">
          {intl('ObjectNoQuickEdit', { descriptor: this.state.descriptor })}
        </div>
      </div>
    )
  }
}

interface FormSetterProps {
  field: IPublicModelSettingField
  config: ObjectSetterConfig
}
class FormSetter extends Component<FormSetterProps> {
  private items: (IPublicModelSettingField | IPublicTypeCustomView)[]

  constructor(props: FormSetterProps) {
    super(props)
    const { config, field } = props
    const { extraProps } = field

    if (Array.isArray(field.items) && field.items.length > 0) {
      for (const item of field.items) {
        if (isSettingField(item)) chainSetValue(item, extraProps.setValue)
      }
      this.items = field.items
    } else {
      this.items = (config?.items || []).map((conf) =>
        field.createField({
          ...conf,
          setValue: extraProps?.setValue,
        }),
      )
    }
    // TODO: extraConfig for custom fields
  }

  render() {
    const { field } = this.props
    return (
      <div className="lc-setter-object lc-block-setter">
        {this.items.map((item, index) =>
          createSettingFieldView(item, field, index),
        )}
      </div>
    )
  }
}
