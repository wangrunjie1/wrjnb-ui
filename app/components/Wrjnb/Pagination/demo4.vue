<template>
  <WrjnbPagination v-model="page" :total="200" :pager-count="5" />
</template>
<script setup lang="ts">
const page = ref(1)
</script> 