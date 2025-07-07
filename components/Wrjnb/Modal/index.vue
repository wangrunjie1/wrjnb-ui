<template>
  <Teleport to="body">
    <div v-if="visible" class="wrjnb-modal__mask" @click.self="onMaskClick">
      <Transition name="wrjnb-modal-fade" @after-leave="afterLeave">
        <div v-show="modelValue" class="wrjnb-modal" :style="{ width }">
          <div class="wrjnb-modal__header">
            <slot name="header">
              <span class="wrjnb-modal__title">{{ title }}</span>
            </slot>
            <button class="wrjnb-modal__close" @click="close">×</button>
          </div>
          <div class="wrjnb-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="wrjnb-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, ref } from 'vue';
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
  width: { type: String, default: '400px' },
  maskClosable: { type: Boolean, default: true },
});
const emit = defineEmits(['update:modelValue', 'close']);
const visible = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  if (val) visible.value = true;
});

function close() {
  emit('update:modelValue', false);
  emit('close');
}
function afterLeave() {
  visible.value = false;
}
function onMaskClick() {
  if (props.maskClosable) close();
}
</script>

<style lang="scss">
.wrjnb-modal__mask {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrjnb-modal {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 40px #0002;
  min-width: 260px;
  max-width: 90vw;
  animation: wrjnb-modal-fade-in 0.2s;
  overflow: hidden;
}
.wrjnb-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2em 1.5em 1em 1.5em;
  border-bottom: 1px solid #f0f0f0;
  background: #f8f9fa;
}
.wrjnb-modal__title {
  font-size: 1.15em;
  font-weight: bold;
  color: #333;
}
.wrjnb-modal__close {
  background: none;
  border: none;
  font-size: 1.5em;
  color: #bbb;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #f56c6c;
  }
}
.wrjnb-modal__body {
  padding: 1.5em;
  color: #333;
}
.wrjnb-modal__footer {
  padding: 1em 1.5em;
  border-top: 1px solid #f0f0f0;
  background: #fafbfc;
  text-align: right;
}
@keyframes wrjnb-modal-fade-in {
  0% { transform: translateY(40px) scale(0.98); opacity: 0; }
  100% { transform: none; opacity: 1; }
}
.wrjnb-modal-fade-enter-active,
.wrjnb-modal-fade-leave-active {
  transition: all 0.2s;
}
.wrjnb-modal-fade-enter-from,
.wrjnb-modal-fade-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
</style> 