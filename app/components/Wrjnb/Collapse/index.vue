<template>
  <div class="wrjnb-collapse">
    <div
      v-for="(item, i) in panels"
      :key="item.name ?? i"
      :class="['wrjnb-collapse-item', isActive(item) && 'is-active', item.disabled && 'is-disabled']"
    >
      <div class="wrjnb-collapse-header" @click="onHeaderClick(item, i)">
        <span class="wrjnb-collapse-arrow" :class="isActive(item) ? 'is-open' : ''">&#9656;</span>
        <span>
          <slot name="header" :item="item" :index="i">
            {{ item.title }}
          </slot>
        </span>
      </div>
      <div class="wrjnb-collapse-body-wrapper" :class="{ 'is-active': isActive(item) }">
        <div class="wrjnb-collapse-body">
          <div class="wrjnb-collapse-inner">
            <slot name="body" :item="item" :index="i">
              {{ item.content }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Panel {
  name?: string | number
  title: string
  content?: string
  disabled?: boolean
}

const props = defineProps({
  modelValue: { type: [Array, String, Number], default: () => [] },
  panels: { type: Array as () => Panel[], default: () => [] },
  accordion: { type: Boolean, default: false },
})
const emit = defineEmits(["update:modelValue", "change"])

const activeNames = computed(() => {
  if (props.accordion) {
    return props.modelValue !== undefined && props.modelValue !== null ? [props.modelValue] : []
  }
  return Array.isArray(props.modelValue) ? props.modelValue : []
})

function isActive(item: Panel) {
  return activeNames.value.includes(item.name ?? panels.value.indexOf(item))
}

function onHeaderClick(item: Panel, i: number) {
  if (item.disabled) return
  const name = item.name ?? i
  let newValue
  if (props.accordion) {
    newValue = isActive(item) ? "" : name
  } else {
    newValue = isActive(item) ? activeNames.value.filter((n: any) => n !== name) : [...activeNames.value, name]
  }
  emit("update:modelValue", newValue)
  emit("change", newValue)
}

const panels = computed(() => props.panels)
</script>

<style scoped lang="scss">
.wrjnb-collapse {
  border-radius: 6px;
  border: 1px solid #e5e6eb;
  background: #fff;
  overflow: hidden;
}
.wrjnb-collapse-item + .wrjnb-collapse-item {
  border-top: 1px solid #e5e6eb;
}
.wrjnb-collapse-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 500;
  user-select: none;
  background: #fafbfc;
  transition: background 0.2s;

  &:hover {
    background: #f4f6fa;
  }
}
.wrjnb-collapse-arrow {
  display: inline-block;
  font-size: 13px;
  margin-right: 8px;
  transition: transform 0.2s;
}
.is-open {
  transform: rotate(90deg);
}
.is-disabled .wrjnb-collapse-header {
  color: #bbb;
  cursor: not-allowed;
  background: #f7f7f7;
}

.wrjnb-collapse-body-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s;

  &.is-active {
    grid-template-rows: 1fr;
  }

  .wrjnb-collapse-body {
    overflow: hidden;
    color: #444;
    font-size: 14px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    .wrjnb-collapse-inner {
      padding: 16px 20px;
    }
  }
}
</style>
