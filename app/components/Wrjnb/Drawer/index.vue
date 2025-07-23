<template>
  <Teleport to="body">
    <transition name="wrjnb-drawer-fade">
      <div v-if="visible" class="wrjnb-drawer-mask" @click="onMaskClick"></div>
    </transition>
    <transition :name="drawerTransition">
      <div v-if="visible" :class="drawerClass" :style="drawerStyle">
        <div class="wrjnb-drawer-header">
          <span class="wrjnb-drawer-title">
            <slot name="title">{{ title }}</slot>
          </span>
          <button class="wrjnb-drawer-close" @click="close">×</button>
        </div>
        <div class="wrjnb-drawer-body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="wrjnb-drawer-footer">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: '' },
  placement: { type: String as () => 'right' | 'left' | 'top' | 'bottom', default: 'right' },
  size: { type: [String, Number], default: '360px' },
  maskClosable: { type: Boolean, default: true },
  zIndex: { type: Number, default: 1000 },
})
const emit = defineEmits(['update:modelValue', 'close'])

const visible = computed(() => props.modelValue)

const drawerClass = computed(() => [
  'wrjnb-drawer',
  `is-${props.placement}`
])
const drawerStyle = computed(() => {
  const base: Record<string, string | number> = { zIndex: props.zIndex }
  if (props.placement === 'right' || props.placement === 'left') {
    base.width = typeof props.size === 'number' ? props.size + 'px' : props.size
  } else {
    base.height = typeof props.size === 'number' ? props.size + 'px' : props.size
  }
  return base
})
const drawerTransition = computed(() => {
  switch (props.placement) {
    case 'left': return 'wrjnb-drawer-slide-left'
    case 'top': return 'wrjnb-drawer-slide-top'
    case 'bottom': return 'wrjnb-drawer-slide-bottom'
    default: return 'wrjnb-drawer-slide-right'
  }
})

function close() {
  emit('update:modelValue', false)
  emit('close')
}
function onMaskClick() {
  if (props.maskClosable) close()
}

watch(() => props.modelValue, v => {
  if (v) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''
})
</script>

<style scoped lang="scss">
.wrjnb-drawer-mask {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 999;
}
.wrjnb-drawer {
  position: fixed;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
  &.is-right { top: 0; right: 0; height: 100vh; }
  &.is-left { top: 0; left: 0; height: 100vh; }
  &.is-top { left: 0; top: 0; width: 100vw; }
  &.is-bottom { left: 0; bottom: 0; width: 100vw; }
}
.wrjnb-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 12px 20px;
  font-size: 17px;
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
}
.wrjnb-drawer-title {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wrjnb-drawer-close {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
  &:hover { color: #409eff; }
}
.wrjnb-drawer-body {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
.wrjnb-drawer-footer {
  border-top: 1px solid #f0f0f0;
  padding: 12px 20px;
  background: #fafbfc;
}
// 动画
.wrjnb-drawer-fade-enter-active, .wrjnb-drawer-fade-leave-active {
  transition: opacity 0.2s;
}
.wrjnb-drawer-fade-enter-from, .wrjnb-drawer-fade-leave-to {
  opacity: 0;
}
.wrjnb-drawer-slide-right-enter-active, .wrjnb-drawer-slide-right-leave-active {
  transition: transform 0.25s cubic-bezier(.4,0,.2,1);
}
.wrjnb-drawer-slide-right-enter-from, .wrjnb-drawer-slide-right-leave-to {
  transform: translateX(100%);
}
.wrjnb-drawer-slide-left-enter-active, .wrjnb-drawer-slide-left-leave-active {
  transition: transform 0.25s cubic-bezier(.4,0,.2,1);
}
.wrjnb-drawer-slide-left-enter-from, .wrjnb-drawer-slide-left-leave-to {
  transform: translateX(-100%);
}
.wrjnb-drawer-slide-top-enter-active, .wrjnb-drawer-slide-top-leave-active {
  transition: transform 0.25s cubic-bezier(.4,0,.2,1);
}
.wrjnb-drawer-slide-top-enter-from, .wrjnb-drawer-slide-top-leave-to {
  transform: translateY(-100%);
}
.wrjnb-drawer-slide-bottom-enter-active, .wrjnb-drawer-slide-bottom-leave-active {
  transition: transform 0.25s cubic-bezier(.4,0,.2,1);
}
.wrjnb-drawer-slide-bottom-enter-from, .wrjnb-drawer-slide-bottom-leave-to {
  transform: translateY(100%);
}
</style> 