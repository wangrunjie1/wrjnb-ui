<template>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    <WrjnbInput v-model="val" placeholder="请输入内容" style="max-width: 180px;" />
    <WrjnbInput v-model="val2" placeholder="禁用" disabled style="max-width: 180px;" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
const val2 = ref('')
</script> 