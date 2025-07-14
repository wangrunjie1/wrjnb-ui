<template>
  <WrjnbCollapse v-model="active" :panels="panels" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const active = ref(['1'])
const panels = [
  { name: '1', title: '面板一', content: '内容一' },
  { name: '2', title: '面板二', content: '内容二' },
  { name: '3', title: '面板三', content: '内容三' },
]
</script> 