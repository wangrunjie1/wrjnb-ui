<template>
  <label class="wrjnb-radio" :class="[
    disabled && 'is-disabled',
    checked && 'is-checked',
    `wrjnb-radio--${type}`
  ]">
    <input
      class="wrjnb-radio__input"
      type="radio"
      :value="label"
      :checked="checked"
      :disabled="disabled"
      @change="onChange"
    />
    <span class="wrjnb-radio__icon"></span>
    <span class="wrjnb-radio__label"><slot>{{ label }}</slot></span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: [String, Number, Boolean],
  label: [String, Number, Boolean],
  disabled: { type: Boolean, default: false },
  type: { type: String as () => 'default' | 'button' | 'card', default: 'default' }
})
const emit = defineEmits(['update:modelValue'])
const checked = computed(() => props.modelValue === props.label)
function onChange(e: Event) {
  if (props.disabled) return
  emit('update:modelValue', props.label)
}
</script>

<style lang="scss" scoped>
.wrjnb-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 1em;
  user-select: none;
  margin-right: 1.5em;
  position: relative;
  transition: all 0.2s;
}
.wrjnb-radio__input {
  display: none;
}
// 基础圆形
.wrjnb-radio--default .wrjnb-radio__icon {
  width: 18px;
  height: 18px;
  border: 2px solid #409eff;
  border-radius: 50%;
  margin-right: 6px;
  background: #fff;
  position: relative;
  transition: border-color 0.2s;
}
.wrjnb-radio--default.is-checked .wrjnb-radio__icon {
  border-color: #409eff;
  background: #409eff;
}
.wrjnb-radio--default.is-checked .wrjnb-radio__icon::after {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
// 按钮型
.wrjnb-radio--button {
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 0 16px;
  height: 32px;
  min-width: 60px;
  justify-content: center;
  .wrjnb-radio__icon { display: none; }
  .wrjnb-radio__label { font-weight: 500; }
}
.wrjnb-radio--button.is-checked {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
.wrjnb-radio--button:not(.is-disabled):hover {
  border-color: #409eff;
}
// 卡片型
.wrjnb-radio--card {
  border-radius: 8px;
  border: 1.5px solid #e5e5e5;
  background: #fafbfc;
  padding: 10px 20px;
  min-width: 80px;
  box-shadow: 0 1px 4px #409eff11;
  .wrjnb-radio__icon { display: none; }
  .wrjnb-radio__label { font-weight: 500; }
}
.wrjnb-radio--card.is-checked {
  border-color: #409eff;
  background: #e6f7ff;
  color: #409eff;
  box-shadow: 0 2px 8px #409eff22;
}
.wrjnb-radio.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.wrjnb-radio__label {
  line-height: 1.2;
}
</style> 