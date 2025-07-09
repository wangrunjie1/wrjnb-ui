<template>
  <div
    class="wrjnb-dropdown"
    :class="[disabled && 'is-disabled', directionCls]"
    :style="style"
    ref="dropdownRef"
  >
    <div @click="toggle" class="wrjnb-dropdown__trigger" :class="triggerClass" :style="triggerStyle">
      <slot name="trigger">
        <button class="wrjnb-dropdown__default-btn" :disabled="disabled">{{ triggerText }}</button>
      </slot>
    </div>
    <transition name="wrjnb-dropdown-fade">
      <div
        v-if="visible && !disabled"
        class="wrjnb-dropdown__menu"
        :class="menuClass"
        :style="menuStyle"
        @click.stop
      >
        <slot name="menu">
          <div
            v-for="(item, idx) in items"
            :key="item.value ?? idx"
            class="wrjnb-dropdown__item"
            :class="[item.disabled && 'is-disabled']"
            @click="onSelect(item)"
          >
            <span v-if="item.icon" :class="['wrjnb-dropdown__icon', item.icon]" />
            {{ item.label }}
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: {
    type: Array as () => Array<{ label: string; value: any; disabled?: boolean; icon?: string }>,
    default: () => []
  },
  triggerText: {
    type: String,
    default: '下拉菜单'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String as () => 'bottom' | 'top',
    default: 'bottom'
  },
  menuWidth: {
    type: [String, Number],
    default: ''
  },
  triggerClass: {
    type: [String, Array, Object],
    default: ''
  },
  triggerStyle: {
    type: [String, Object],
    default: ''
  },
  menuClass: {
    type: [String, Array, Object],
    default: ''
  },
  menuStyle: {
    type: [String, Object],
    default: ''
  },
  style: {
    type: [String, Object],
    default: ''
  }
})
const emit = defineEmits(['select', 'update:visible'])
const visible = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const directionCls = computed(() => `wrjnb-dropdown--${props.direction}`)

function toggle() {
  if (props.disabled) return
  visible.value = !visible.value
  emit('update:visible', visible.value)
}
function onSelect(item: any) {
  if (item.disabled) return
  emit('select', item)
  visible.value = false
  emit('update:visible', false)
}
function handleClickOutside(e: MouseEvent) {
  if (!dropdownRef.value) return
  if (!dropdownRef.value.contains(e.target as Node)) {
    visible.value = false
    emit('update:visible', false)
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.wrjnb-dropdown {
  display: inline-block;
  position: relative;
}
.wrjnb-dropdown.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
.wrjnb-dropdown__trigger {
  display: inline-block;
}
.wrjnb-dropdown__menu {
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 120px;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 4px;
  margin-top: 4px;
  z-index: 1000;
  padding: 4px 0;
}
.wrjnb-dropdown--top .wrjnb-dropdown__menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 4px;
}
.wrjnb-dropdown__item {
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.wrjnb-dropdown__item.is-disabled {
  color: #bbb;
  cursor: not-allowed;
}
.wrjnb-dropdown__item:hover:not(.is-disabled) {
  background: #f5f5f5;
}
.wrjnb-dropdown__icon {
  font-size: 1em;
  margin-right: 0.25em;
}
.wrjnb-dropdown__default-btn {
  cursor: pointer;
  padding: 6px 16px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 4px;
  font-size: 1em;
  transition: all 0.2s;
}
.wrjnb-dropdown__default-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.wrjnb-dropdown-fade-enter-active,
.wrjnb-dropdown-fade-leave-active {
  transition: opacity 0.15s;
}
.wrjnb-dropdown-fade-enter-from,
.wrjnb-dropdown-fade-leave-to {
  opacity: 0;
}
</style> 