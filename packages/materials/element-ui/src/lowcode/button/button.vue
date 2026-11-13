<template>
  <button :style="{ color }">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineExpose } from 'vue'

defineExpose<{ color: string }>({
  color: 'red',
})
</script>
