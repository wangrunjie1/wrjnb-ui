<template>
  <WrjnbPagination v-model="page" :total="50" :disabled="true" />
</template>
<script setup lang="ts">
const page = ref(1)
</script> 