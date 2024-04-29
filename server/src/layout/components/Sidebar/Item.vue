<script setup>
import { h, defineComponent } from 'vue'

defineComponent({
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => {
      const vnodes = []

      if (props.icon) {
        if (props.icon.includes('el-icon')) {
          vnodes.push(h('i', { class: [props.icon, 'sub-el-icon'] }))
        } else {
          vnodes.push(h('svg-icon', { 'icon-class': props.icon }))
        }
      }

      if (props.title) {
        vnodes.push(h('span', { slot: 'title' }, props.title))
      }

      return vnodes
    }
  }
})
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
