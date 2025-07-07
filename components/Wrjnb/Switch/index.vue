<template>
  <button
    class="wrjnb-switch"
    :class="[
      { 'is-checked': modelValue, 'is-disabled': disabled, 'is-loading': loading },
      `wrjnb-switch--${size}`
    ]"
    :style="switchStyle"
    :disabled="disabled || loading"
    @click="onToggle"
  >
    <span class="wrjnb-switch__core">
      <span v-if="loading" class="wrjnb-switch__spinner"></span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  activeColor: { type: String, default: '#409eff' },
  inactiveColor: { type: String, default: '#dcdfe6' },
  size: { type: String as () => 'default' | 'small' | 'large', default: 'default' },
});
const emit = defineEmits(['update:modelValue']);

const switchStyle = computed(() => ({
  background: props.modelValue ? props.activeColor : props.inactiveColor
}));

function onToggle() {
  if (props.disabled || props.loading) return;
  emit('update:modelValue', !props.modelValue);
}
</script>

<style lang="scss">
.wrjnb-switch {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  outline: none;
  background: #dcdfe6;
  &.is-checked {
    /* 背景色由 style 绑定 */
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.is-loading {
    cursor: wait;
  }
  &.wrjnb-switch--small {
    width: 32px;
    height: 18px;
    .wrjnb-switch__core {
      width: 14px;
      height: 14px;
    }
  }
  &.wrjnb-switch--large {
    width: 60px;
    height: 32px;
    .wrjnb-switch__core {
      width: 28px;
      height: 28px;
    }
  }
  .wrjnb-switch__core {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.2s, width 0.2s, height 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.is-checked .wrjnb-switch__core {
    left: 22px;
  }
  &.wrjnb-switch--small.is-checked .wrjnb-switch__core {
    left: 16px;
  }
  &.wrjnb-switch--large.is-checked .wrjnb-switch__core {
    left: 30px;
  }
  .wrjnb-switch__spinner {
    width: 1em;
    height: 1em;
    border: 2px solid #eee;
    border-top: 2px solid #409eff;
    border-radius: 50%;
    animation: wrjnb-spin 0.8s linear infinite;
  }
}
@keyframes wrjnb-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 