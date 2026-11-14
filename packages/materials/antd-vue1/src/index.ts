import 'ant-design-vue/dist/antd.css'
import {
  Breadcrumb,
  Card,
  Checkbox,
  Collapse,
  DatePicker,
  Descriptions,
  Dropdown,
  Form,
  Input,
  Layout,
  List,
  Mentions,
  Menu,
  Radio,
  Select,
  Statistic,
  Steps,
  Table,
  Tabs,
  Timeline,
  Tree,
  TreeSelect,
} from 'ant-design-vue'
import packagesInfo from '../package.json'

export {
  Affix as AAffix,
  Alert as AAlert,
  Anchor as AAnchor,
  AutoComplete as AAutoComplete,
  Avatar as AAvatar,
  BackTop as ABackTop,
  Badge as ABadge,
  Breadcrumb as ABreadcrumb,
  Button as AButton,
  Calendar as ACalendar,
  Card as ACard,
  Carousel as ACarousel,
  Cascader as ACascader,
  Checkbox as ACheckbox,
  Collapse as ACollapse,
  Comment as AComment,
  ConfigProvider as AConfigProvider,
  DatePicker as ADatePicker,
  Descriptions as ADescriptions,
  Divider as ADivider,
  Drawer as ADrawer,
  Dropdown as ADropdown,
  Empty as AEmpty,
  Form as AForm,
  FormModel as AFormModel,
  Icon as AIcon,
  Input as AInput,
  InputNumber as AInputNumber,
  Layout as ALayout,
  List as AList,
  LocaleProvider as ALocaleProvider,
  Mentions as AMentions,
  Menu as AMenu,
  Modal as AModal,
  PageHeader as APageHeader,
  Pagination as APagination,
  Popconfirm as APopconfirm,
  Popover as APopover,
  Progress as AProgress,
  Radio as ARadio,
  Rate as ARate,
  Result as AResult,
  Select as ASelect,
  Skeleton as ASkeleton,
  Slider as ASlider,
  Space as ASpace,
  Spin as ASpin,
  Statistic as AStatistic,
  Steps as ASteps,
  Switch as ASwitch,
  Table as ATable,
  Tabs as ATabs,
  Tag as ATag,
  Timeline as ATimeline,
  TimePicker as ATimePicker,
  Tooltip as ATooltip,
  Transfer as ATransfer,
  Tree as ATree,
  TreeSelect as ATreeSelect,
  Upload as AUpload,
} from 'ant-design-vue'
export const ABreadcrumbItem = Breadcrumb.Item
export const ABreadcrumbSeparator = Breadcrumb.Separator
export const ACardMeta = Card.Meta
export const ACheckboxGroup = Checkbox.Group
export const ACollapsePanel = Collapse.Panel
export const ADatePickerMonthPicker = DatePicker.MonthPicker
export const ADatePickerRangePicker = DatePicker.RangePicker
export const ADatePickerWeekPicker = DatePicker.WeekPicker
export const ADescriptionsItem = Descriptions.Item
export const ADropdownButton = Dropdown.Button
export const AFormItem = Form.Item
export const AInputGroup = Input.Group
export const AInputPassword = Input.Password
export const AInputSearch = Input.Search
export const AInputTextArea = Input.TextArea
export const ALayoutSider = Layout.Sider
export const AListItem = List.Item
export const AListItemMeta = List.Item.Meta
export const AMentionsOption = Mentions.Option
export const AMenuItem = Menu.Item
export const AMenuItemGroup = Menu.ItemGroup
export const AMenuSubMenu = Menu.SubMenu
export const ARadioGroup = Radio.Group
export const ASelectOptGroup = Select.OptGroup
export const ASelectOption = Select.Option
export const AStatisticCountdown = Statistic.Countdown
export const AStepsStep = Steps.Step
export const ATableColumn = Table.Column
export const ATableColumnGroup = Table.ColumnGroup
export const ATabsTabPane = Tabs.TabPane
export const ATimelineItem = Timeline.Item
export const ATreeDirectoryTree = Tree.DirectoryTree
export const ATreeSelectTreeNode = TreeSelect.TreeNode
export const ATreeTreeNode = Tree.TreeNode

console.log(
  `%c ${packagesInfo.name} %c v`.concat(packagesInfo.version, ' '),
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #5584ff; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
)
