<template>
  <WrjnbTabs v-model="active" :tabs="tabs" direction="vertical" style="max-width:400px">
    <template #tabA>纵向内容A</template>
    <template #tabB>纵向内容B</template>
    <template #tabC>纵向内容C</template>
  </WrjnbTabs>
</template>
<script setup lang="ts">
const active = ref('tabA')
const tabs = [
  { name: 'tabA', label: '纵向A' },
  { name: 'tabB', label: '纵向B' },
  { name: 'tabC', label: '纵向C' },
]
</script> 