<template>
  <WrjnbDropdown :items="items">
    <template #trigger>
      <button type="button" style="color: #409eff">自定义按钮</button>
    </template>
  </WrjnbDropdown>
</template>
<script setup lang="ts">
const items = [
  { label: "操作一", value: 1 },
  { label: "操作二", value: 2 },
  { label: "操作三", value: 3 },
];
</script>
