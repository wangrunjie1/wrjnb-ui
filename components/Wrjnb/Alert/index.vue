<template>
  <div class="wrjnb-alert" :class="[`wrjnb-alert--${type}`, { 'is-closable': closable }]">
    <span v-if="showIcon" class="wrjnb-alert__icon">{{ iconMap[type] }}</span>
    <div class="wrjnb-alert__content">
      <div v-if="title" class="wrjnb-alert__title">{{ title }}</div>
      <div v-if="description || $slots.default" class="wrjnb-alert__desc">
        <slot>{{ description }}</slot>
      </div>
    </div>
    <button v-if="closable" class="wrjnb-alert__close" @click="close">×</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue"
const props = defineProps({
  type: { type: String as () => "info" | "success" | "warning" | "error", default: "info" },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  closable: { type: Boolean, default: false },
  showIcon: { type: Boolean, default: true },
})
const emit = defineEmits(["close"])
const visible = ref(true)
const iconMap = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
}
function close() {
  visible.value = false
  emit("close")
}
</script>

<style lang="scss" scoped>
.wrjnb-alert {
  display: flex;
  align-items: flex-start;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 1em;
  background: #f4f4f5;
  color: #333;
  border: 1px solid #ebeef5;
  position: relative;
  margin: 8px 0;
  transition: all 0.2s;
}
.wrjnb-alert__icon {
  font-size: 1.5em;
  margin-right: 12px;
  line-height: 1.2;
}
.wrjnb-alert__content {
  flex: 1;
}
.wrjnb-alert__title {
  font-weight: 600;
  margin-bottom: 2px;
}
.wrjnb-alert__desc {
  font-size: 0.98em;
  color: #666;
}
.wrjnb-alert__close {
  background: none;
  border: none;
  font-size: 1.2em;
  color: #bbb;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 14px;
  transition: color 0.2s;
}
.wrjnb-alert__close:hover {
  color: #888;
}
.wrjnb-alert--success {
  background: #f0f9eb;
  border-color: #e1f3d8;
  color: #52c41a;
}
.wrjnb-alert--info {
  background: #f4f4f5;
  border-color: #ebeef5;
  color: #409eff;
}
.wrjnb-alert--warning {
  background: #fffbe6;
  border-color: #faecd8;
  color: #faad14;
}
.wrjnb-alert--error {
  background: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}
</style>
