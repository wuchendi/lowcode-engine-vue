import { defineComponent } from 'vue'

const Leaf = defineComponent({
  functional: true,
  render(h, context) {
    return context.scopedSlots.default!({})
  },
})

Object.assign(Leaf, {
  displayName: 'Leaf',
  componentMetadata: {
    componentName: 'Leaf',
    configure: {
      props: [
        {
          name: 'children',
          setter: 'StringSetter',
        },
      ],
      supports: false,
    },
  },
})

export default Leaf
