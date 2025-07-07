<template>
  <div class="wrjnb-input-wrapper" :class="{ 'is-disabled': disabled, 'is-readonly': readonly, 'is-focus': isFocus }">
    <span v-if="$slots.prefix" class="wrjnb-input__prefix"><slot name="prefix" /></span>
    <input
      class="wrjnb-input"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      @input="onInput"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <span v-if="clearable && modelValue && !disabled && !readonly" class="wrjnb-input__clear" @mousedown.prevent="clearInput">×</span>
    <span v-if="$slots.suffix" class="wrjnb-input__suffix"><slot name="suffix" /></span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  modelValue: [String, Number],
  placeholder: { type: String, default: '' },
  type: { type: String as () => 'text' | 'password' | 'number', default: 'text' },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);
const isFocus = ref(false);

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value;
  emit('update:modelValue', val);
}
function clearInput() {
  emit('update:modelValue', '');
}
</script>

<style lang="scss">
.wrjnb-input-wrapper {
  display: inline-flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  transition: border 0.2s;
  padding: 0 0.5em;
  position: relative;
  &.is-focus {
    border-color: #409eff;
  }
  &.is-disabled {
    background: #f5f7fa;
    color: #bbb;
    cursor: not-allowed;
    .wrjnb-input {
      background: #f5f7fa;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.is-readonly {
    .wrjnb-input {
      background: #f8f8f8;
      color: #888;
      cursor: default;
    }
  }
}
.wrjnb-input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  padding: 0.5em 0;
  flex: 1;
  min-width: 0;
  color: #222;
}
.wrjnb-input__prefix,
.wrjnb-input__suffix {
  color: #888;
  font-size: 1em;
  margin: 0 0.3em;
  display: flex;
  align-items: center;
}
.wrjnb-input__clear {
  cursor: pointer;
  color: #bbb;
  font-size: 1.1em;
  margin-left: 0.2em;
  user-select: none;
  transition: color 0.2s;
  &:hover {
    color: #f56c6c;
  }
}
</style> 