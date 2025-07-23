<template>
  <label class="wrjnb-checkbox" :class="[
    disabled && 'is-disabled',
    checked && 'is-checked',
    `wrjnb-checkbox--${type}`
  ]">
    <input
      class="wrjnb-checkbox__input"
      type="checkbox"
      :value="label"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="wrjnb-checkbox__icon"></span>
    <span class="wrjnb-checkbox__label"><slot>{{ label }}</slot></span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  label: [String, Number, Boolean],
  disabled: { type: Boolean, default: false },
  type: { type: String as () => 'default' | 'button' | 'card', default: 'default' }
})
const emit = defineEmits(['update:modelValue'])
const checked = computed(() => Array.isArray(props.modelValue) && props.modelValue.includes(props.label))
function onChange(e: Event) {
  if (props.disabled) return
  let newValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  if (checked.value) {
    newValue = newValue.filter((v) => v !== props.label)
  } else {
    newValue.push(props.label)
  }
  emit('update:modelValue', newValue)
}
</script>

<style lang="scss" scoped>
.wrjnb-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1em;
  user-select: none;
  margin-right: 1.5em;
  position: relative;
  transition: all 0.2s;
}
.wrjnb-checkbox__input {
  display: none;
}
// 基础方形
.wrjnb-checkbox--default .wrjnb-checkbox__icon {
  width: 18px;
  height: 18px;
  border: 2px solid #409eff;
  border-radius: 4px;
  margin-right: 6px;
  background: #fff;
  position: relative;
  transition: border-color 0.2s;
}
.wrjnb-checkbox--default.is-checked .wrjnb-checkbox__icon {
  border-color: #409eff;
  background: #409eff;
}
.wrjnb-checkbox--default.is-checked .wrjnb-checkbox__icon::after {
  content: '';
  display: block;
  width: 10px;
  height: 6px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%) rotate(-45deg);
}
// 按钮型
.wrjnb-checkbox--button {
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 0 16px;
  height: 32px;
  min-width: 60px;
  justify-content: center;
  .wrjnb-checkbox__icon { display: none; }
  .wrjnb-checkbox__label { font-weight: 500; }
}
.wrjnb-checkbox--button.is-checked {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
.wrjnb-checkbox--button:not(.is-disabled):hover {
  border-color: #409eff;
}
// 卡片型
.wrjnb-checkbox--card {
  border-radius: 8px;
  border: 1.5px solid #e5e5e5;
  background: #fafbfc;
  padding: 10px 20px;
  min-width: 80px;
  box-shadow: 0 1px 4px #409eff11;
  .wrjnb-checkbox__icon { display: none; }
  .wrjnb-checkbox__label { font-weight: 500; }
}
.wrjnb-checkbox--card.is-checked {
  border-color: #409eff;
  background: #e6f7ff;
  color: #409eff;
  box-shadow: 0 2px 8px #409eff22;
}
.wrjnb-checkbox.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.wrjnb-checkbox__label {
  line-height: 1.2;
}
</style> 