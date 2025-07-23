<template>
  <WrjnbDropdown :items="items" triggerText="更多操作" @select="onSelect" />
  <p>选中项：{{ selected }}</p>
</template>
<script setup lang="ts">
const items = [
  { label: "操作一", value: 1 },
  { label: "操作二", value: 2 },
  { label: "操作三", value: 3 },
];
const selected = ref("");
function onSelect(item: any) {
  selected.value = item.label;
}
</script>
