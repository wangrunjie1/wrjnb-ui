<template>
  <button
    class="wrjnb-btn"
    :class="[
      `wrjnb-btn--${type}`,
      `wrjnb-btn--${size}`,
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  type: { type: String, default: "" }, // '', primary, success, danger
  size: { type: String, default: "default" }, // default, small
  disabled: { type: Boolean, default: false },
});
</script>

<style lang="scss">
@use "sass:color";

$primary: #409eff;
$success: #67c23a;
$danger: #f56c6c;
$default: #fff;
$border: #dcdfe6;
$radius: 4px;

.wrjnb-btn {
  display: inline-block;
  font-size: 1rem;
  padding: 0.5em 1.2em;
  border-radius: $radius;
  border: 1px solid $border;
  background: $default;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  &:hover:not(.is-disabled) {
    box-shadow: 0 2px 8px #409eff22;
    border-color: $primary;
    color: $primary;
  }
  &.wrjnb-btn--primary {
    background: $primary;
    color: #fff;
    border-color: $primary;
    &:hover:not(.is-disabled) {
      background: color.adjust($primary, $lightness: -8%);
      border-color: color.adjust($primary, $lightness: -8%);
    }
  }
  &.wrjnb-btn--success {
    background: $success;
    color: #fff;
    border-color: $success;
    &:hover:not(.is-disabled) {
      background: color.adjust($success, $lightness: -8%);
      border-color: color.adjust($success, $lightness: -8%);
    }
  }
  &.wrjnb-btn--danger {
    background: $danger;
    color: #fff;
    border-color: $danger;
    &:hover:not(.is-disabled) {
      background: color.adjust($danger, $lightness: -8%);
      border-color: color.adjust($danger, $lightness: -8%);
    }
  }
  &.wrjnb-btn--small {
    font-size: 0.88rem;
    padding: 0.3em 0.8em;
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
