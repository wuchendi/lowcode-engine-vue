import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (input); see https://element-plus.org/zh-CN/component/input.html
const meta = {
  componentName: 'ElInput',
  title: '输入框',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/input.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入类型',
            'en-US': 'type',
          },
          tip: '输入类型，更多信息请参见 MDN',
        },
        setter: [
          {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: 'text',
                  value: 'text',
                },
                {
                  title: 'textarea',
                  value: 'textarea',
                },
                {
                  title: 'number',
                  value: 'number',
                },
                {
                  title: 'password',
                  value: 'password',
                },
                {
                  title: 'email',
                  value: 'email',
                },
                {
                  title: 'search',
                  value: 'search',
                },
                {
                  title: 'tel',
                  value: 'tel',
                },
                {
                  title: 'url',
                  value: 'url',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'text',
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值',
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
        name: 'modelModifiers',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'modelModifiers',
            'en-US': 'modelModifiers',
          },
          tip: 'v-model modifiers, reference Vue modifiers',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'maxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxlength',
            'en-US': 'maxlength',
          },
          tip: '同原生 maxlength 属性',
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
            'zh-CN': '原生属性',
            'en-US': 'minlength',
          },
          tip: '原生属性，最小输入长度',
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
        name: 'showWordLimit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示统计字数',
            'en-US': 'showWordLimit',
          },
          tip: '是否显示统计字数, 只在 type 为 &#39;text&#39; 或 &#39;textarea&#39; 的时候生效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'wordLimitPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'wordLimitPosition',
            'en-US': 'wordLimitPosition',
          },
          tip: 'word count position, valid when show-word-limit is true',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'inside',
                value: 'inside',
              },
              {
                title: 'outside',
                value: 'outside',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'inside',
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框占位文本',
            'en-US': 'placeholder',
          },
          tip: '输入框占位文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示清除按钮',
            'en-US': 'clearable',
          },
          tip: '是否显示清除按钮，只有当 type 不是 textarea时生效',
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
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定输入值的格式',
            'en-US': 'formatter',
          },
          tip: '指定输入值的格式。(只有当 type 是&quot;text&quot;时才能工作)',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'parser',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定从格式化器输入中提取的值',
            'en-US': 'parser',
          },
          tip: '指定从格式化器输入中提取的值。(仅当 type 是&quot;text&quot;时才起作用)',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'showPassword',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示切换密码图标',
            'en-US': 'showPassword',
          },
          tip: '是否显示切换密码图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尺寸',
            'en-US': 'size',
          },
          tip: '输入框尺寸，只在 type 不为 &#39;textarea&#39; 时有效',
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
        name: 'prefixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义前缀图标',
            'en-US': 'prefixIcon',
          },
          tip: '自定义前缀图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义后缀图标',
            'en-US': 'suffixIcon',
          },
          tip: '自定义后缀图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框行数',
            'en-US': 'rows',
          },
          tip: '输入框行数，仅 type 为 &#39;textarea&#39; 时有效',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 2,
      },
      {
        name: 'autosize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autosize',
            'en-US': 'autosize',
          },
          tip: 'textarea 高度是否自适应，仅 type 为 &#39;textarea&#39; 时生效。可以接受一个对象，比如: { minRows: 2, maxRows: 6 }',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
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
          tip: '原生 autocomplete 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'off',
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: '等价于原生 input name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 readonly 属性',
            'en-US': 'readonly',
          },
          tip: '原生 readonly 属性，是否只读',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 max 属性',
            'en-US': 'max',
          },
          tip: '原生 max 属性，设置最大值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'min',
          },
          tip: '原生属性，设置最小值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'step',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'step',
          },
          tip: '原生属性，设置输入字段的合法数字间隔',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'resize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制是否能被用户缩放',
            'en-US': 'resize',
          },
          tip: '控制是否能被用户缩放',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'both',
                value: 'both',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'autofocus',
          },
          tip: '原生属性，自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'form',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'form',
          },
          tip: '原生属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'same as aria-label in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框的 tabindex',
            'en-US': 'tabindex',
          },
          tip: '输入框的 tabindex',
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
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入时是否触发表单的校验',
            'en-US': 'validateEvent',
          },
          tip: '输入时是否触发表单的校验',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'inputStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inputStyle',
            'en-US': 'inputStyle',
          },
          tip: 'input 元素或 textarea 元素的 style',
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
        name: 'inputmode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'inputmode',
            'en-US': 'inputmode',
          },
          tip: 'same as inputmode in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'countGraphemes',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'countGraphemes',
            'en-US': 'countGraphemes',
          },
          tip: 'custom function to count graphemes; when set, native maxlength/minlength constraints are bypassed. Component uses Intl.Segmenter (Chrome 87+, Firefox 125+, Safari 14.1+) for proper grapheme clustering; older browsers fall back to Array.from() for code-point iteration',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框头部内容',
            'en-US': 'prefix',
          },
          tip: '输入框头部内容，只对非 type=&quot;textarea&quot; 有效',
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
            'zh-CN': '输入框尾部内容',
            'en-US': 'suffix',
          },
          tip: '输入框尾部内容，只对非 type=&quot;textarea&quot; 有效',
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
        name: 'prepend',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框前置内容',
            'en-US': 'prepend',
          },
          tip: '输入框前置内容，只对非 type=&quot;textarea&quot; 有效',
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
        name: 'append',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框后置内容',
            'en-US': 'append',
          },
          tip: '输入框后置内容，只对非 type=&quot;textarea&quot; 有效',
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
        name: 'password-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'password-icon',
            'en-US': 'password-icon',
          },
          tip: 'content as Input password icon, only works when show-password is true. The scope variable is { visible: boolean }',
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
          name: 'onBlur',
          description: '当选择器的输入框失去焦点时触发',
          template:
            "onBlur(...args, extParams) {\n  // 当选择器的输入框失去焦点时触发\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: '当选择器的输入框获得焦点时触发',
          template:
            "onFocus(...args, extParams) {\n  // 当选择器的输入框获得焦点时触发\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onChange',
          description:
            '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发',
          template:
            "onChange(...args, extParams) {\n  // 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onInput',
          description: '在 Input 值改变时触发',
          template:
            "onInput(...args, extParams) {\n  // 在 Input 值改变时触发\n  console.log('onInput', ...args)\n}",
        },
        {
          name: 'onClear',
          description: '在点击由 clearable 属性生成的清空按钮时触发',
          template:
            "onClear(...args, extParams) {\n  // 在点击由 clearable 属性生成的清空按钮时触发\n  console.log('onClear', ...args)\n}",
        },
        {
          name: 'onKeydown',
          description: '按下键时触发',
          template:
            "onKeydown(...args, extParams) {\n  // 按下键时触发\n  console.log('onKeydown', ...args)\n}",
        },
        {
          name: 'onMouseleave',
          description: '当鼠标离开输入元素时触发',
          template:
            "onMouseleave(...args, extParams) {\n  // 当鼠标离开输入元素时触发\n  console.log('onMouseleave', ...args)\n}",
        },
        {
          name: 'onMouseenter',
          description: '当鼠标进入输入元素时触发',
          template:
            "onMouseenter(...args, extParams) {\n  // 当鼠标进入输入元素时触发\n  console.log('onMouseenter', ...args)\n}",
        },
        {
          name: 'onCompositionstart',
          description: '输入法输入开始时触发',
          template:
            "onCompositionstart(...args, extParams) {\n  // 输入法输入开始时触发\n  console.log('onCompositionstart', ...args)\n}",
        },
        {
          name: 'onCompositionupdate',
          description: '输入法输入改变时触发',
          template:
            "onCompositionupdate(...args, extParams) {\n  // 输入法输入改变时触发\n  console.log('onCompositionupdate', ...args)\n}",
        },
        {
          name: 'onCompositionend',
          description: '输入法输入完成时触发',
          template:
            "onCompositionend(...args, extParams) {\n  // 输入法输入完成时触发\n  console.log('onCompositionend', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '输入框',
      screenshot: './screenshots/input.webp',
      schema: {
        componentName: 'ElInput',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta
