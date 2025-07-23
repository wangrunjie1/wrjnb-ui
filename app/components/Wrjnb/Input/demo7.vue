<template>
  <WrjnbInput v-model="val" placeholder="前后缀" clearable style="max-width: 220px;">
    <template #prefix>￥</template>
    <template #suffix>.00</template>
  </WrjnbInput>
</template>
<script setup lang="ts">
const val = ref("");
</script> 