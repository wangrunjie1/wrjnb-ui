<template>
  <button class="wrjnb-switch" :class="{ 'is-checked': modelValue }" @click="$emit('update:modelValue', !modelValue)">
    <span class="wrjnb-switch__core"></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.wrjnb-switch {
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: #dcdfe6;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  outline: none;
  &.is-checked {
    background: #409eff;
  }
  .wrjnb-switch__core {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.2s;
  }
  &.is-checked .wrjnb-switch__core {
    left: 22px;
  }
}
</style> 