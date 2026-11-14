<template>
  <button class="x-button" :style="{ color }" @click="emit('click', $event)">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{ text?: string; color?: string }>()

const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<style scoped>
.x-button {
  padding: 4px 12px;
  border: 1px solid currentColor;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
}
</style>
