<template>
  <WrjnbDropdown :items="items" triggerText="禁用菜单" :disabled="true" />
</template>
<script setup lang="ts">
const items = [
  { label: "操作一", value: 1 },
  { label: "操作二", value: 2 },
  { label: "操作三", value: 3 },
];
</script>
