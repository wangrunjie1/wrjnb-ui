<template>
  <WrjnbBreadcrumb :items="slotItems">
    <template #home>
      <span style="color:#e67e22;font-weight:bold;">🏠 首页</span>
    </template>
    <template #user>
      <span style="color:#67c23a;">👤 用户中心</span>
    </template>
  </WrjnbBreadcrumb>
</template>
<script setup lang="ts">
const slotItems = [
  { label: '首页', to: '/', slot: 'home' },
  { label: '用户', to: '/user', slot: 'user' },
  { label: '设置' }
]
</script> 