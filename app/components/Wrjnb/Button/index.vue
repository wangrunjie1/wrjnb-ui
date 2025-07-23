<template>
  <button
    class="wrjnb-btn"
    :class="[
      `wrjnb-btn--${type}`,
      `wrjnb-btn--${size}`,
      { 'is-disabled': disabled || loading },
      { 'is-loading': loading },
      { 'is-round': round },
      { 'is-block': block }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="wrjnb-btn__spinner"></span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: { type: String as () => 'default' | 'primary' | 'success' | 'danger' | 'text', default: 'default' },
  size: { type: String as () => 'large' | 'default' | 'small', default: 'default' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
});

const emit = defineEmits(['click']);

function handleClick(e: MouseEvent) {
  if (props.disabled || props.loading) return;
  emit('click', e);
}
</script>

<style lang="scss">
@use "sass:color";

$primary: #409eff;
$success: #67c23a;
$danger: #f56c6c;
$default: #fff;
$text: transparent;
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
  position: relative;
  user-select: none;
  &:hover:not(.is-disabled):not(.is-loading) {
    box-shadow: 0 2px 8px #409eff22;
    border-color: $primary;
    color: $primary;
  }
  &.wrjnb-btn--primary {
    background: $primary;
    color: #fff;
    border-color: $primary;
    &:hover:not(.is-disabled):not(.is-loading) {
      background: color.adjust($primary, $lightness: -8%);
      border-color: color.adjust($primary, $lightness: -8%);
      color: #fff;
    }
  }
  &.wrjnb-btn--success {
    background: $success;
    color: #fff;
    border-color: $success;
    &:hover:not(.is-disabled):not(.is-loading) {
      background: color.adjust($success, $lightness: -8%);
      border-color: color.adjust($success, $lightness: -8%);
      color: #fff;
    }
  }
  &.wrjnb-btn--danger {
    background: $danger;
    color: #fff;
    border-color: $danger;
    &:hover:not(.is-disabled):not(.is-loading) {
      background: color.adjust($danger, $lightness: -8%);
      border-color: color.adjust($danger, $lightness: -8%);
      color: #fff;
    }
  }
  &.wrjnb-btn--text {
    background: $text;
    color: $primary;
    border: none;
    box-shadow: none;
    &:hover:not(.is-disabled):not(.is-loading) {
      text-decoration: underline;
      background: $text;
      color: color.adjust($primary, $lightness: -8%);
    }
  }
  &.wrjnb-btn--large {
    font-size: 1.15rem;
    padding: 0.7em 1.6em;
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
  &.is-loading {
    pointer-events: none;
    opacity: 0.7;
  }
  &.is-round {
    border-radius: 999px;
  }
  &.is-block {
    display: block;
    width: 100%;
  }
  .wrjnb-btn__spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    border: 2px solid #fff;
    border-top: 2px solid $primary;
    border-radius: 50%;
    animation: wrjnb-spin 0.8s linear infinite;
    vertical-align: middle;
  }
}

@keyframes wrjnb-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
