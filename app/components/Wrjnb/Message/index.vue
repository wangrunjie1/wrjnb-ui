<template>
  <Teleport to="body">
    <TransitionGroup name="wrjnb-message-fade" tag="div" class="wrjnb-message-container">
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="['wrjnb-message', `wrjnb-message--${msg.type}`]"
        @mouseenter="clearTimer(msg)"
        @mouseleave="startTimer(msg)"
      >
        <span class="wrjnb-message__icon">{{ iconMap[msg.type] }}</span>
        <div class="wrjnb-message__content">{{ msg.content }}</div>
        <button v-if="msg.closable" class="wrjnb-message__close" @click="close(msg.id)">×</button>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'

interface Message {
  id: number
  type: 'info' | 'success' | 'warning' | 'error'
  content: string
  duration: number
  closable: boolean
  timer?: any
}

const messages = reactive<Message[]>([])
const maxCount = 5
let seed = 0
const iconMap = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
}

function show(type: Message['type'], content: string, opts: Partial<Omit<Message, 'id' | 'type' | 'content'>> = {}) {
  if (messages.length >= maxCount) messages.shift()
  const id = ++seed
  const msg: Message = {
    id,
    type,
    content,
    duration: opts.duration ?? 2000,
    closable: opts.closable ?? false,
  }
  messages.push(msg)
  startTimer(msg)
  return id
}
function close(id: number) {
  const idx = messages.findIndex(m => m.id === id)
  if (idx !== -1) {
    clearTimer(messages[idx])
    messages.splice(idx, 1)
  }
}
function startTimer(msg: Message) {
  if (msg.duration > 0) {
    msg.timer = setTimeout(() => close(msg.id), msg.duration)
  }
}
function clearTimer(msg: Message) {
  if (msg.timer) {
    clearTimeout(msg.timer)
    msg.timer = null
  }
}

// 全局方法
const Message = {
  info(content: string, opts = {}) { show('info', content, opts) },
  success(content: string, opts = {}) { show('success', content, opts) },
  warning(content: string, opts = {}) { show('warning', content, opts) },
  error(content: string, opts = {}) { show('error', content, opts) },
  closeAll() { messages.splice(0, messages.length) },
}
// 挂载到 window 方便全局调用
if (typeof window !== 'undefined') {
  (window as any).WrjnbMessage = Message
}
</script>

<style scoped>
.wrjnb-message-container {
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}
.wrjnb-message {
  min-width: 220px;
  max-width: 90vw;
  background: #fff;
  color: #333;
  border-radius: 6px;
  box-shadow: 0 4px 16px #0001;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin-top: 12px;
  font-size: 15px;
  pointer-events: auto;
  position: relative;
  transition: all 0.2s;
}
.wrjnb-message__icon {
  margin-right: 10px;
  font-size: 1.3em;
}
.wrjnb-message__close {
  background: none;
  border: none;
  font-size: 1.1em;
  color: #bbb;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 12px;
  transition: color 0.2s;
}
.wrjnb-message__close:hover {
  color: #888;
}
.wrjnb-message--success {
  border-left: 4px solid #67c23a;
}
.wrjnb-message--info {
  border-left: 4px solid #409eff;
}
.wrjnb-message--warning {
  border-left: 4px solid #e6a23c;
}
.wrjnb-message--error {
  border-left: 4px solid #f56c6c;
}
.wrjnb-message-fade-enter-active,
.wrjnb-message-fade-leave-active {
  transition: all 0.25s cubic-bezier(.4,0,.2,1);
}
.wrjnb-message-fade-enter-from,
.wrjnb-message-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}
.wrjnb-message-fade-enter-to,
.wrjnb-message-fade-leave-from {
  opacity: 1;
  transform: none;
}
</style> 