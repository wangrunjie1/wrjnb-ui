<template>
  <WrjnbInput v-model="val" placeholder="只读" readonly style="max-width: 180px" />
</template>
<script setup lang="ts">
const val = ref("只读内容")
</script>
