import { DatePicker, TimePicker } from '@alifd/next'
import { isJSExpression, isJSFunction, isJSSlot } from '@alilc/lowcode-utils'
import moment from 'moment'
import React, { Component } from 'react'
import EventBindDialog from './plugin/plugin-event-bind-dialog'
import VariableBindDialog from './plugin/plugin-variable-bind-dialog'
import ArraySetter from './setter/array-setter'
import BoolSetter from './setter/bool-setter'
import ClassNameSetter from './setter/classname-setter'
import ColorSetter from './setter/color-setter'
import EventsSetter from './setter/events-setter'
import ExpressionSetter from './setter/expression-setter'
import FunctionSetter from './setter/function-setter'
import I18nSetter from './setter/i18n-setter'
import IconSetter from './setter/icon-setter'
import JsonSetter from './setter/json-setter'
import MixedSetter from './setter/mixed-setter'
import NumberSetter from './setter/number-setter'
import ObjectSetter from './setter/object-setter'
import RadioGroupSetter from './setter/radiogroup-setter'
import SelectSetter from './setter/select-setter'
import SlotSetter from './setter/slot-setter'
import StringSetter from './setter/string-setter'
import StyleSetterV2 from './setter/style-setter'
import TextAreaSetter from './setter/textarea-setter'
import TitleSetter from './setter/title-setter'
import VariableSetter from './setter/variable-setter'
import { isPlainObject } from './utils'
import './index.less'
import packagesInfo from '../package.json'
// suggest: 做成 StringSetter 的一个参数，
// export const TextAreaSetter = {
//   component: TextAreaSetter,
//   title: 'TextareaSetter',
//   recommend: true,
//   condition: (field: any) => {
//     const v = field.getValue();
//     return typeof v === 'string';
//   },
// };

export const DateSetter = DatePicker
export const DateYearSetter = DatePicker.YearPicker
export const DateMonthSetter = DatePicker.MonthPicker
export const DateRangeSetter = DatePicker.RangePicker

export { EventsSetter, ExpressionSetter, IconSetter, JsonSetter }

class StringDateSetter extends Component<any, any> {
  render() {
    const { onChange, value, showTime } = this.props
    return (
      <DatePicker
        value={moment(value)}
        showTime={showTime}
        onChange={(val) => {
          onChange(moment.isMoment(val) ? val.format() : val)
        }}
      />
    )
  }
}

class StringTimePicker extends Component<any, any> {
  render() {
    const { onChange, value } = this.props
    return (
      <TimePicker
        value={moment(value)}
        onChange={(val) => {
          onChange(moment.isMoment(val) ? val.format('HH:mm:ss') : val)
        }}
      />
    )
  }
}

const DataExpressionSetter = {
  component: ExpressionSetter,
  condition: (field: any) => {
    const v = field.getValue()
    return isJSExpression(v)
  },
  valueType: ['JSExpression'],
  defaultProps: { placeholder: '请输入表达式' },
  title: '表达式输入',
  recommend: true,
}

const DataVariableSetter = {
  component: VariableSetter,
  condition: (field: any) => {
    const v = field.getValue()
    return isJSExpression(v)
  },
  valueType: ['JSExpression'],
  title: '变量输入',
  recommend: true,
}

const FunctionBindSetter = {
  component: FunctionSetter,
  title: '函数绑定',
  condition: (field: any) => {
    const v = field.getValue()
    return isJSFunction(v)
  },

  valueType: ['JSFunction'],
}

const DataJsonSetter = {
  component: JsonSetter,
  valueType: ['object', 'array'],
}

const DataArraySetter = {
  component: ArraySetter,
  defaultProps: {},
  title: 'ArraySetter',
  condition: (field: any) => {
    const v = field.getValue()
    return v == null || Array.isArray(v)
  },
  initialValue: [],
  recommend: true,
  valueType: ['array'],
}

const DataObjectSetter = {
  component: ObjectSetter,
  // todo: defaultProps
  defaultProps: {},
  title: 'ObjectSetter', // TODO
  condition: (field: any) => {
    const v = field.getValue()
    return v == null || isPlainObject(v)
  },
  initialValue: {},
  recommend: true,
}

const DataSlotSetter = {
  component: SlotSetter,
  title: {
    type: 'i18n',
    'zh-CN': '插槽输入',
    'en-US': 'Slot Setter',
  },
  condition: (field: any) => {
    return isJSSlot(field.getValue())
  },
  initialValue: (field: any, value: any) => {
    if (isJSSlot(value)) {
      return value
    }
    return {
      type: 'JSSlot',
      value,
    }
  },
  recommend: true,
  valueType: ['JSSlot'],
}

/** Setters registered with `setters.registerSetter(setterMap)`. */
const setterMap = {
  StringSetter,
  NumberSetter,
  BoolSetter,
  SelectSetter,
  VariableSetter: DataVariableSetter,
  ExpressionSetter: DataExpressionSetter,
  RadioGroupSetter,
  TextAreaSetter,
  DateSetter: StringDateSetter,
  TimePicker: StringTimePicker,
  DateYearSetter,
  DateMonthSetter,
  DateRangeSetter,
  EventsSetter,
  ColorSetter,
  JsonSetter: DataJsonSetter,
  StyleSetter: StyleSetterV2,
  IconSetter,
  ClassNameSetter,
  I18nSetter,
  FunctionSetter: FunctionBindSetter,
  MixedSetter,
  SlotSetter: DataSlotSetter,
  ArraySetter: DataArraySetter,
  ObjectSetter: DataObjectSetter,
  TitleSetter,
}

const engineExt = {
  name: packagesInfo.name,
  version: packagesInfo.version,
  setters: setterMap,
  setterMap,
  pluginMap: {
    EventBindDialog,
    VariableBindDialog,
  },
}

declare global {
  interface Window {
    AliLowCodeEngineExt: typeof engineExt
  }
}

window.AliLowCodeEngineExt = engineExt
console.log(
  `%c ${engineExt.name} %c v`.concat(engineExt.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
)
export default engineExt

// registerSetter(builtinSetters);
