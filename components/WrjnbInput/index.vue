<template>
  <input
    class="wrjnb-input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: String,
  placeholder: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.wrjnb-input {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0.5em 1em;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  background: #fff;
  color: #222;
  &:focus {
    border-color: #409eff;
  }
}
</style> 