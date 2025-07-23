<template>
  <div :class="['wrjnb-tabs', directionCls]">
    <div class="wrjnb-tabs__nav">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="['wrjnb-tabs__tab', { 'is-active': tab.name === modelValue, 'is-disabled': tab.disabled }]"
        @click="onTabClick(tab)"
      >
        <slot name="label" :tab="tab">
          {{ tab.label }}
        </slot>
      </div>
    </div>
    <div class="wrjnb-tabs__content">
      <slot :name="modelValue" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

export interface Tab {
  name: string | number
  label: string
  disabled?: boolean
  icon?: string // 可选 icon 字段
}

const props = defineProps<{
  modelValue: string | number
  tabs: Tab[]
  direction?: 'horizontal' | 'vertical'
}>()

const emit = defineEmits(['update:modelValue', 'change'])

const directionCls = computed(() =>
  props.direction === 'vertical' ? 'wrjnb-tabs--vertical' : 'wrjnb-tabs--horizontal'
)

function onTabClick(tab: Tab) {
  if (tab.disabled || tab.name === props.modelValue) return
  emit('update:modelValue', tab.name)
  emit('change', tab.name)
}
</script>

<style lang="scss" scoped>
.wrjnb-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
  &.wrjnb-tabs--vertical {
    flex-direction: row;
    .wrjnb-tabs__nav {
      flex-direction: column;
      min-width: 120px;
      border-right: 1px solid #eee;
      border-bottom: none;
    }
    .wrjnb-tabs__content {
      flex: 1;
      padding-left: 1.5em;
    }
  }
  &.wrjnb-tabs--horizontal {
    .wrjnb-tabs__nav {
      flex-direction: row;
      border-bottom: 1px solid #eee;
    }
    .wrjnb-tabs__content {
      padding-top: 1em;
    }
  }
}
.wrjnb-tabs__nav {
  display: flex;
  gap: 0.5em;
  background: #fafbfc;
}
.wrjnb-tabs__tab {
  padding: 0.7em 1.5em;
  cursor: pointer;
  border-radius: 6px 6px 0 0;
  font-size: 1rem;
  color: #666;
  transition: color 0.2s, background 0.2s;
  &.is-active {
    color: #409eff;
    background: #fff;
    font-weight: bold;
    border-bottom: 2px solid #409eff;
  }
  &.is-disabled {
    color: #bbb;
    cursor: not-allowed;
    background: #f5f5f5;
  }
}
.wrjnb-tabs__content {
  min-height: 60px;
}
</style> 