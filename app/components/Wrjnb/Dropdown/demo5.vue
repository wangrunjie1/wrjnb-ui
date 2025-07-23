<template>
  <WrjnbDropdown :items="iconItems" triggerText="带图标菜单" />
</template>
<script setup lang="ts">
const iconItems = [
  { label: '编辑', value: 'edit', icon: 'icon-edit' },
  { label: '删除', value: 'delete', icon: 'icon-delete', disabled: true },
  { label: '分享', value: 'share', icon: 'icon-share' }
]
</script> 