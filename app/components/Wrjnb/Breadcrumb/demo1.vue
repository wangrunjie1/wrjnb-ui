<template>
  <WrjnbBreadcrumb :items="items" />
</template>
<script setup lang="ts">
const items = [
  { label: '首页', to: '/' },
  { label: '分类', to: '/category' },
  { label: '详情' }
]
</script> 