<template>
  <WrjnbTabs v-model="active" :tabs="tabs">
    <template #label="{ tab }">
      <span style="color: #e67e22"><i v-if="tab.icon" :class="tab.icon" style="margin-right:4px" />{{ tab.label }}</span>
    </template>
    <template #tabX>自定义 label 内容 X</template>
    <template #tabY>自定义 label 内容 Y</template>
  </WrjnbTabs>
</template>
<script setup lang="ts">
const active = ref('tabX')
const tabs = [
  { name: 'tabX', label: '自定义X', icon: 'icon-star' },
  { name: 'tabY', label: '自定义Y', icon: 'icon-heart' },
]
</script> 