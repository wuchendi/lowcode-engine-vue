import 'element-ui/lib/theme-chalk/index.css'
import packagesInfo from '../package.json'

export {
  Button as ElButton,
  Card as ElCard,
  Cascader as ElCascader,
  Checkbox as ElCheckbox,
  CheckboxGroup as ElCheckboxGroup,
  Input as ElInput,
  Option as ElOption,
  Select as ElSelect,
  Tag as ElTag,
} from 'element-ui'

console.log(
  `%c ${packagesInfo.name} %c v`.concat(packagesInfo.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
)
