<template>
  <el-dialog
    v-model="show"
    :title="title"
    width="800px"
    append-to-body
    class="wrjnb-modal-code-dialog"
    :close-on-click-modal="true"
    :destroy-on-close="true"
  >
    <pre class="modal-code-block"><code>{{ code }}</code></pre>
    <template #footer>
      <div class="modal-btn-row">
        <wrjnb-button type="primary" @click="copy">复制源码</wrjnb-button>
        <wrjnb-button @click="close">关闭</wrjnb-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps({
  show: Boolean,
  code: String,
  title: String
})
const emit = defineEmits(['update:show', 'copy'])
const show = computed({
  get: () => props.show,
  set: v => emit('update:show', v)
})
function close() {
  show.value = false
}
function copy() {
  navigator.clipboard.writeText(props.code || '')
  emit('copy')
}
</script>

<style scoped>
.wrjnb-modal-code-dialog :deep(.el-dialog__body) {
  padding: 0 1.5rem 1.5rem 1.5rem;
}
.modal-code-block {
  background: #f5f7fa;
  color: #606266;
  border-radius: 6px;
  border: 1px solid #e4e7ed;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 0.98rem;
  padding: 1rem;
  margin-bottom: 1.2rem;
  overflow-x: auto;
  max-height: 45vh;
  line-height: 1.7;
  transition: background 0.2s;
}
.modal-btn-row {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style> 