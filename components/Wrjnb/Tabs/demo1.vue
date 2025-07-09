<template>
  <WrjnbTabs v-model="active" :tabs="tabs">
    <template #tab1>内容一</template>
    <template #tab2>内容二</template>
    <template #tab3>内容三</template>
  </WrjnbTabs>
</template>
<script setup lang="ts">
const active = ref('tab1')
const tabs = [
  { name: 'tab1', label: '标签一' },
  { name: 'tab2', label: '标签二' },
  { name: 'tab3', label: '标签三', disabled: true },
]
</script> 