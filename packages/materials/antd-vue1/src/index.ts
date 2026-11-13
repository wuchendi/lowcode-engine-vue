import 'ant-design-vue/dist/antd.css'
import {
  Anchor,
  Checkbox,
  Collapse,
  DatePicker,
  Descriptions,
  Form,
  Input,
  List,
  Menu,
  Radio,
  Select,
  Steps,
  Tabs,
} from 'ant-design-vue'
import packagesInfo from '../package.json'

const { Link: AnchorLink } = Anchor
const { Group: CheckboxGroup } = Checkbox
const { Panel: CollapsePanel } = Collapse
const { Item: DescriptionsItem } = Descriptions
const { RangePicker, MonthPicker, WeekPicker } = DatePicker
const { Option: SelectOption, OptGroup: SelectOptGroup } = Select
const { Step } = Steps
const { Item: FormItem } = Form
const {
  Group: InputGroup,
  Search: InputSearch,
  TextArea,
  Password: InputPassword,
} = Input
const { Item: ListItem } = List
const { Meta: ListItemMeta } = ListItem
const { Item: MenuItem, SubMenu, ItemGroup: MenuItemGroup, Divider } = Menu
const { Group: RadioGroup, Button } = Radio
const { TabPane } = Tabs

// 通用
export {
  Affix as AAffix,
  Alert as AAlert,
  Anchor as AAnchor,
  Button as AButton,
} from 'ant-design-vue'
export { AnchorLink as AAnchorLink }

// export * from './lowcode/button';
// export * from './lowcode/affix';
// export * from './lowcode/alert';
// export * from './lowcode/anchor';

// 表单
export { AutoComplete as AAutoComplete } from 'ant-design-vue'
// export * from './lowcode/auto-complete';

// 数据展示
export { Avatar as AAvatar, Badge as ABadge } from 'ant-design-vue'
// export * from './lowcode/avatar';
// export * from './lowcode/badge';

// 其他
export { BackTop as ABackTop } from 'ant-design-vue'
// export * from './lowcode/back-top';

// export * from './lowcode/icon';

export * from './lowcode/breadcrumb'
export * from './lowcode/calendar'
export * from './lowcode/card'
export * from './lowcode/carousel'
export * from './lowcode/cascader'
export * from './lowcode/checkbox'
// export * from './lowcode/checkbox-group';
export * from './lowcode/collapse'
// export * from './lowcode/collapse-pane';
export * from './lowcode/comment'
export * from './lowcode/date-picker'
export * from './lowcode/descriptions'
// export * from './lowcode/descriptions-item';
export * from './lowcode/divider'
export * from './lowcode/drawer'
export * from './lowcode/dropdown'
export * from './lowcode/empty'
// export * from './lowcode/range-picker';
export * from './lowcode/rate'
export * from './lowcode/result'
export {
  CheckboxGroup as ACheckboxGroup,
  CollapsePanel as ACollapsePanel,
  DescriptionsItem as ADescriptionsItem,
  RangePicker as ARangePicker,
}

// export * from './lowcode/select';

export * from './lowcode/cascader'
export * from './lowcode/form'
// export * from './lowcode/form-item';
export * from './lowcode/form-list'
export * from './lowcode/grid-col'
export * from './lowcode/grid-row'
// export * from './lowcode/image';
export * from './lowcode/input'
export * from './lowcode/input-number'
// export * from './lowcode/select-option';
// export * from './lowcode/select-opt-group';
export * from './lowcode/sketelon'
export * from './lowcode/slider'
export * from './lowcode/space'
export * from './lowcode/spin'
export * from './lowcode/statistic'
export * from './lowcode/steps'
// export * from './lowcode/steps-step';
export * from './lowcode/switch'
export {
  FormItem as AFormItem,
  InputGroup as AInputGroup,
  InputPassword as AInputPassword,
  InputSearch as AInputSearch,
  SelectOptGroup as ASelectOptGroup,
  SelectOption as ASelectOption,
  Step as AStepsStep,
  TextArea as AInputTextArea,
}

// export * from './lowcode/input-group';
// export * from './lowcode/input-password';
// export * from './lowcode/input-search';
// export * from './lowcode/input-textarea';

// export * from 'ant-design-vue/es/message/style';
// export * from 'ant-design-vue/es/notification/style';
export { message, notification } from 'ant-design-vue'
// export * from './lowcode/list-item-meta';
// export * from './lowcode/list-item';
export * from './lowcode/list'
export * from './lowcode/mentions'
export * from './lowcode/menu'
// export * from './lowcode/menu-item';
// export * from './lowcode/menu-item-group';
// export * from './lowcode/menu-subMenu';
export * from './lowcode/modal'
export * from './lowcode/page-header'
export * from './lowcode/pagination'
export * from './lowcode/popconfirm'
export * from './lowcode/popover'
export * from './lowcode/progress'
export * from './lowcode/radio'
export * from './lowcode/table'
// export * from './lowcode/tab-pane';
export * from './lowcode/table'
export * from './lowcode/tabs'
export * from './lowcode/tag'
export * from './lowcode/time-picker'
export * from './lowcode/timeline'
export * from './lowcode/transfer'
export * from './lowcode/tree'
export * from './lowcode/tree-select'
// export * from './lowcode/typography-link';
// export * from './lowcode/typography-title';
// export * from './lowcode/typography-paragraph';
// export * from './lowcode/slot/view';
export * from './lowcode/upload'
// const { Item: MenuItem, SubMenu, ItemGroup: MenuItemGroup, Divider } = Menu;
export {
  ListItem as AListItem,
  ListItemMeta as AListItemMeta,
  MenuItem as AMenuItem,
  MenuItemGroup as AMenuItemGroup,
  RadioGroup as ARadioGroup,
  SubMenu as ASubMenu,
  TabPane as ATabPane,
}

console.log(
  `%c ${packagesInfo.name} %c v`.concat(packagesInfo.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
)
