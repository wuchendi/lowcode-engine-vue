import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (input-tag); see https://element-plus.org/zh-CN/component/input-tag.html
const meta = {
  componentName: 'ElInputTag',
  title: '标签输入框',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/input-tag.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: 'binding value',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'max',
            'en-US': 'max',
          },
          tip: 'max number tags that can be enter',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'tagType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tagType',
            'en-US': 'tagType',
          },
          tip: 'tag type',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'info',
                value: 'info',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'info',
      },
      {
        name: 'tagEffect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tagEffect',
            'en-US': 'tagEffect',
          },
          tip: 'tag effect',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'light',
                value: 'light',
              },
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'plain',
                value: 'plain',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'effect',
            'en-US': 'effect',
          },
          tip: 'tooltip theme, built-in theme: dark / light',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'trigger',
            'en-US': 'trigger',
          },
          tip: 'the key to trigger input tag',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'Enter',
                value: 'Enter',
              },
              {
                title: 'Space',
                value: 'Space',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'Enter',
      },
      {
        name: 'draggable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'draggable',
            'en-US': 'draggable',
          },
          tip: 'whether tags can be dragged',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'delimiter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'delimiter',
            'en-US': 'delimiter',
          },
          tip: 'add a tag when a delimiter is matched',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'input box size',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'collapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseTags',
            'en-US': 'collapseTags',
          },
          tip: 'whether to collapse tags to a text when multiple selecting',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'collapseTagsTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseTagsTooltip',
            'en-US': 'collapseTagsTooltip',
          },
          tip: 'whether show all selected tags when mouse hover text of collapse-tags. To use this, collapse-tags must be true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'saveOnBlur',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'saveOnBlur',
            'en-US': 'saveOnBlur',
          },
          tip: 'whether to save the input value when the input loses focus',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'clearable',
            'en-US': 'clearable',
          },
          tip: 'whether to show clear button',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'clearIcon',
            'en-US': 'clearIcon',
          },
          tip: 'custom clear icon component',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'CircleClose',
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: 'whether to disable input-tag',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validateEvent',
            'en-US': 'validateEvent',
          },
          tip: 'whether to trigger form validation',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'readonly',
            'en-US': 'readonly',
          },
          tip: 'same as readonly in native input',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autofocus',
            'en-US': 'autofocus',
          },
          tip: 'same as autofocus in native input',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'id',
            'en-US': 'id',
          },
          tip: 'same as id in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'same as tabindex in native input',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'maxCollapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxCollapseTags',
            'en-US': 'maxCollapseTags',
          },
          tip: 'the max tags number to be shown. To use this, collapse-tags must be true',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'maxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxlength',
            'en-US': 'maxlength',
          },
          tip: 'same as maxlength in native input',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'minlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'minlength',
            'en-US': 'minlength',
          },
          tip: 'same as minlength in native input',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placeholder',
            'en-US': 'placeholder',
          },
          tip: 'placeholder of input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'autocomplete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autocomplete',
            'en-US': 'autocomplete',
          },
          tip: 'same as autocomplete in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'off',
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'native aria-label attribute',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '作为tag的内容',
            'en-US': 'tag',
          },
          tip: '作为tag的内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'InputTag 头部内容',
            'en-US': 'prefix',
          },
          tip: 'InputTag 头部内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'InputTag 尾部内容',
            'en-US': 'suffix',
          },
          tip: 'InputTag 尾部内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
        },
        {
          name: 'onChange',
          description: 'triggers when the modelValue change',
          template:
            "onChange(...args, extParams) {\n  // triggers when the modelValue change\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onInput',
          description: 'triggers when the input value change',
          template:
            "onInput(...args, extParams) {\n  // triggers when the input value change\n  console.log('onInput', ...args)\n}",
        },
        {
          name: 'onAddTag',
          description: 'triggers when a tag is added',
          template:
            "onAddTag(...args, extParams) {\n  // triggers when a tag is added\n  console.log('onAddTag', ...args)\n}",
        },
        {
          name: 'onRemoveTag',
          description: 'triggers when a tag is removed',
          template:
            "onRemoveTag(...args, extParams) {\n  // triggers when a tag is removed\n  console.log('onRemoveTag', ...args)\n}",
        },
        {
          name: 'onDragTag',
          description: 'triggers when a tag is dragged',
          template:
            "onDragTag(...args, extParams) {\n  // triggers when a tag is dragged\n  console.log('onDragTag', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: 'triggers when InputTag focuses',
          template:
            "onFocus(...args, extParams) {\n  // triggers when InputTag focuses\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: 'triggers when InputTag blurs',
          template:
            "onBlur(...args, extParams) {\n  // triggers when InputTag blurs\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onClear',
          description: 'triggers when the clear icon is clicked',
          template:
            "onClear(...args, extParams) {\n  // triggers when the clear icon is clicked\n  console.log('onClear', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '标签输入框',
      screenshot: './screenshots/input-tag.webp',
      schema: {
        componentName: 'ElInputTag',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
