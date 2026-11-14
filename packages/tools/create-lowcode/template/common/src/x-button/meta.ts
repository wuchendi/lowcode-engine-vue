import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  componentName: 'XButton',
  title: 'Button',
  group: 'Components',
  category: 'Basic',
  configure: {
    props: [
      { name: 'text', title: 'Text', setter: 'StringSetter' },
      { name: 'color', title: 'Color', setter: 'ColorSetter' },
    ],
    supports: {
      events: [{ name: 'onClick', description: 'Fired when clicked' }],
    },
  },
  snippets: [
    {
      title: 'Button',
      schema: { componentName: 'XButton', props: { text: 'Button' } },
    },
  ],
}

export default meta
