<template>
  <span class="wrjnb-popover-wrapper" ref="wrapperRef">
    <span class="wrjnb-popover-trigger" ref="triggerRef" @mouseenter="onEnter" @mouseleave="onLeave" @click="onClick">
      <slot name="trigger">
        <button class="wrjnb-popover__default-btn">{{ triggerText }}</button>
      </slot>
    </span>
    <transition name="wrjnb-popover-fade">
      <div
        v-if="visible"
        class="wrjnb-popover"
        :class="[`wrjnb-popover--${placement}`]"
        ref="popoverRef"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
      >
        <slot>
          {{ content }}
        </slot>
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  content: { type: String, default: '' },
  trigger: { type: String as () => 'hover' | 'click', default: 'hover' },
  placement: { type: String as () => 'top' | 'bottom' | 'left' | 'right', default: 'top' },
  triggerText: { type: String, default: 'Popover' }
})
const visible = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)

function onEnter() {
  if (props.trigger === 'hover') visible.value = true
}
function onLeave() {
  if (props.trigger === 'hover') visible.value = false
}
function onClick() {
  if (props.trigger === 'click') visible.value = !visible.value
}
// 点击外部关闭
function handleClickOutside(e: MouseEvent) {
  if (props.trigger !== 'click') return
  if (!wrapperRef.value) return
  if (!wrapperRef.value.contains(e.target as Node)) {
    visible.value = false
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
.wrjnb-popover-wrapper {
  display: inline-block;
  position: relative;
}
.wrjnb-popover-trigger {
  display: inline-block;
}
.wrjnb-popover__default-btn {
  cursor: pointer;
  padding: 6px 16px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 4px;
  font-size: 1em;
  transition: all 0.2s;
}
.wrjnb-popover {
  position: absolute;
  min-width: 120px;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  border-radius: 4px;
  padding: 10px 16px;
  z-index: 1000;
  font-size: 14px;
  color: #333;
}
.wrjnb-popover--top {
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}
.wrjnb-popover--bottom {
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  margin-top: 8px;
}
.wrjnb-popover--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 8px;
}
.wrjnb-popover--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
}
.wrjnb-popover-fade-enter-active,
.wrjnb-popover-fade-leave-active {
  transition: opacity 0.15s;
}
.wrjnb-popover-fade-enter-from,
.wrjnb-popover-fade-leave-to {
  opacity: 0;
}
</style> 