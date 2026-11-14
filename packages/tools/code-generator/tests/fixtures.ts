import type { IPublicTypeProjectSchema } from '@alilc/lowcode-types'
import type { MaterialPackage } from '../src'

export const packages: MaterialPackage[] = [
  {
    package: '@cdlab996/lowcode-materials-vant4',
    codegen: {
      exports: {
        VanButton: { package: 'vant', exportName: 'Button' },
        VanTabs: { package: 'vant', exportName: 'Tabs' },
      },
      styles: ['vant/lib/index.css'],
      dependencies: { vant: '^4.8.10' },
    },
  },
]

const homeCode = `import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const text = ref('outer');
    const visible = ref(true);
    const list = ref([{ name: 'a' }]);

    function onClick(event, extParams) {
      console.log(event, extParams);
    }

    onMounted(() => {
      this.dataSourceMap.info.load();
    });

    return { text, visible, list, onClick };
  },
});
`

export const project = {
  version: '1.0.0',
  componentsMap: [
    {
      componentName: 'VanButton',
      package: '@cdlab996/lowcode-materials-vant4',
      exportName: 'VanButton',
      destructuring: true,
    },
    {
      componentName: 'VanTabs',
      package: '@cdlab996/lowcode-materials-vant4',
      exportName: 'VanTabs',
      destructuring: true,
    },
  ],
  utils: [
    {
      name: 'format',
      type: 'function',
      content: {
        type: 'JSFunction',
        value: 'function (v) { return String(v) }',
      },
    },
  ],
  constants: { API: '/api' },
  i18n: { 'zh-CN': { hello: '你好' }, 'en-US': { hello: 'Hello' } },
  componentsTree: [
    {
      componentName: 'Page',
      fileName: 'home',
      id: 'home',
      css: 'body { margin: 0; }',
      props: { className: 'home' },
      meta: { originCode: homeCode },
      lifeCycles: {},
      dataSource: {
        list: [
          {
            id: 'info',
            type: 'fetch',
            isInit: true,
            options: { uri: '/mock/info.json', method: 'GET', params: {} },
          },
        ],
      },
      children: [
        {
          componentName: 'VanButton',
          id: 'button',
          props: {
            type: 'primary',
            round: true,
            text: { type: 'JSExpression', value: 'this.text' },
            onClick: {
              type: 'JSFunction',
              value:
                'function(){ return this.onClick.apply(this,Array.prototype.slice.call(arguments).concat([{ "testKey": 123 }])) }',
            },
          },
          children: 'Click "me" <now>',
        },
        {
          componentName: 'div',
          id: 'row',
          condition: { type: 'JSExpression', value: 'this.visible' },
          loop: { type: 'JSExpression', value: 'this.list' },
          loopArgs: ['row', 'i'],
          children: [
            {
              componentName: 'span',
              id: 'name',
              props: {},
              children: { type: 'JSExpression', value: 'this.row.name' },
            },
          ],
        },
        {
          componentName: 'VanTabs',
          id: 'tabs',
          props: {
            title: {
              type: 'JSSlot',
              params: ['scope'],
              value: [
                {
                  componentName: 'span',
                  id: 'label',
                  children: { type: 'JSExpression', value: 'this.scope.label' },
                },
              ],
            },
          },
        },
        {
          componentName: 'p',
          id: 'greeting',
          children: { type: 'i18n', key: 'hello' },
        },
        { componentName: 'card', id: 'card' },
        { componentName: 'Mystery', id: 'mystery' },
      ],
    },
    {
      componentName: 'Page',
      fileName: 'about',
      id: 'about',
      state: { count: 1 },
      methods: {
        add: { type: 'JSFunction', value: 'function () { this.count += 1 }' },
      },
      lifeCycles: {
        componentDidMount: {
          type: 'JSFunction',
          value: 'function () { console.log(this.utils.format(this.count)) }',
        },
      },
      children: [
        {
          componentName: 'span',
          id: 'count',
          props: {
            onClick: {
              type: 'JSFunction',
              value: 'function () { this.add() }',
            },
          },
          children: { type: 'JSExpression', value: 'this.count' },
        },
      ],
    },
    {
      componentName: 'Block',
      fileName: 'card',
      id: 'card-block',
      children: [{ componentName: 'span', id: 'card-text', children: 'card' }],
    },
  ],
} as unknown as IPublicTypeProjectSchema
