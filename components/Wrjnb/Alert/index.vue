<template>
  <div class="wrjnb-alert" :class="[`wrjnb-alert--${type}`, { 'is-closable': closable }]">
    <span v-if="showIcon" class="wrjnb-alert__icon">{{ iconMap[type] }}</span>
    <div class="wrjnb-alert__content">
      <div class="wrjnb-alert__title">
        <slot>{{ title }}</slot>
      </div>
      <div v-if="description" class="wrjnb-alert__desc">{{ description }}</div>
    </div>
    <span v-if="closable" class="wrjnb-alert__close" @click="handleClose">×</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps({
  title: { type: String, default: '' },
  type: { type: String as () => 'info' | 'success' | 'warning' | 'error', default: 'info' },
  description: { type: String, default: '' },
  closable: { type: Boolean, default: false },
  showIcon: { type: Boolean, default: true },
});
const emit = defineEmits(['close']);
const visible = ref(true);
const iconMap: Record<string, string> = {
  info: 'ℹ️',
  success: '✔️',
  warning: '⚠️',
  error: '⛔',
};
function handleClose(e: MouseEvent) {
  visible.value = false;
  emit('close', e);
}
</script>

<style lang="scss">
$info: #909399;
$success: #67c23a;
$warning: #e6a23c;
$error: #f56c6c;
$radius: 4px;

.wrjnb-alert {
  display: flex;
  align-items: flex-start;
  border-radius: $radius;
  padding: 1em 1.2em;
  font-size: 1rem;
  background: #f4f4f5;
  color: #333;
  border: 1px solid #ebeef5;
  position: relative;
  margin-bottom: 1em;
  &.wrjnb-alert--info {
    border-color: $info;
    background: #f4f4f5;
    color: $info;
  }
  &.wrjnb-alert--success {
    border-color: $success;
    background: #f0f9eb;
    color: $success;
  }
  &.wrjnb-alert--warning {
    border-color: $warning;
    background: #fdf6ec;
    color: $warning;
  }
  &.wrjnb-alert--error {
    border-color: $error;
    background: #fef0f0;
    color: $error;
  }
  .wrjnb-alert__icon {
    font-size: 1.5em;
    margin-right: 0.7em;
    line-height: 1;
    flex-shrink: 0;
  }
  .wrjnb-alert__content {
    flex: 1;
  }
  .wrjnb-alert__title {
    font-weight: bold;
    margin-bottom: 0.2em;
  }
  .wrjnb-alert__desc {
    font-size: 0.96em;
    color: #666;
    margin-top: 0.2em;
  }
  .wrjnb-alert__close {
    margin-left: 1em;
    font-size: 1.2em;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
      color: #f56c6c;
    }
  }
}
</style> 