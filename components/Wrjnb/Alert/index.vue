<template>
  <div class="wrjnb-alert" :class="[`wrjnb-alert--${type}`]">
    <span class="wrjnb-alert__icon"></span>
    <span class="wrjnb-alert__title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  type: { type: String, default: '' }, // '', primary, success, danger
})
</script>

<style lang="scss">
$primary: #409eff;
$success: #67c23a;
$danger: #f56c6c;

.wrjnb-alert {
  display: flex;
  align-items: center;
  padding: 0.8em 1.2em;
  border-radius: 4px;
  background: #f0f9eb;
  color: #333;
  font-size: 1rem;
  margin: 0.5em 0;
  border: 1px solid #e1f3d8;
  &.wrjnb-alert--primary {
    background: #ecf5ff;
    color: $primary;
    border-color: $primary;
  }
  &.wrjnb-alert--success {
    background: #f0f9eb;
    color: $success;
    border-color: $success;
  }
  &.wrjnb-alert--danger {
    background: #fef0f0;
    color: $danger;
    border-color: $danger;
  }
}
.wrjnb-alert__icon {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  margin-right: 0.7em;
  background: currentColor;
  opacity: 0.18;
}
.wrjnb-alert__title {
  font-weight: bold;
}
</style> 