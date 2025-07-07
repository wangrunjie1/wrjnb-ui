<template>
  <span
    class="wrjnb-tag"
    :class="[
      `wrjnb-tag--${type}`,
      { 'is-round': round }
    ]"
    :style="customStyle"
  >
    <slot />
    <span v-if="closable" class="wrjnb-tag__close" @click.stop="handleClose">×</span>
  </span>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  type: { type: String as () => 'default' | 'primary' | 'success' | 'danger', default: 'default' },
  closable: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  color: { type: String, default: '' }, // 支持自定义背景色
});

const emit = defineEmits(['close']);

function handleClose(e: MouseEvent) {
  emit('close', e);
}

const customStyle = computed(() =>
  props.color ? { background: props.color, borderColor: props.color, color: '#fff' } : undefined
);
</script>

<style lang="scss">
$primary: #409eff;
$success: #67c23a;
$danger: #f56c6c;
$default: #f3f4f6;
$border: #dcdfe6;
$radius: 4px;

.wrjnb-tag {
  display: inline-flex;
  align-items: center;
  font-size: 0.92rem;
  padding: 0.2em 0.8em;
  border-radius: $radius;
  border: 1px solid $border;
  background: $default;
  color: #333;
  margin-right: 0.5em;
  transition: all 0.2s;
  user-select: none;
  &.wrjnb-tag--primary {
    background: $primary;
    color: #fff;
    border-color: $primary;
  }
  &.wrjnb-tag--success {
    background: $success;
    color: #fff;
    border-color: $success;
  }
  &.wrjnb-tag--danger {
    background: $danger;
    color: #fff;
    border-color: $danger;
  }
  &.is-round {
    border-radius: 999px;
  }
  .wrjnb-tag__close {
    margin-left: 0.5em;
    font-size: 1em;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
      color: #f56c6c;
    }
  }
}
</style> 