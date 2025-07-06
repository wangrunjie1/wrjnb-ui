<template>
  <span class="wrjnb-tag" :class="[`wrjnb-tag--${type}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  type: { type: String, default: '' }, // '', primary, success, danger
})
</script>

<style lang="scss">
$primary: #409eff;
$success: #67c23a;
$danger: #f56c6c;

.wrjnb-tag {
  display: inline-block;
  padding: 0.2em 0.8em;
  border-radius: 2em;
  font-size: 0.98rem;
  background: #f0f0f0;
  color: #333;
  margin-right: 0.5em;
  &.wrjnb-tag--primary {
    background: $primary;
    color: #fff;
  }
  &.wrjnb-tag--success {
    background: $success;
    color: #fff;
  }
  &.wrjnb-tag--danger {
    background: $danger;
    color: #fff;
  }
}
</style> 