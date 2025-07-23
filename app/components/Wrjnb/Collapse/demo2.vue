<template>
  <WrjnbCollapse v-model="active" :panels="panels" accordion>
    <template #header="{ item }">
      <span style="color:#409eff;font-weight:600">{{ item.title }}</span>
    </template>
    <template #body="{ item }">
      <div style="color:#888">自定义内容：{{ item.content }}</div>
    </template>
  </WrjnbCollapse>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref('2')
const panels = [
  { name: '1', title: '面板一', content: '内容一' },
  { name: '2', title: '面板二', content: '内容二', disabled: true },
  { name: '3', title: '面板三', content: '内容三' },
]
</script> 