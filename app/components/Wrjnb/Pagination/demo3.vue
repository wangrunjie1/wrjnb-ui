<template>
  <WrjnbPagination v-model="page" :total="120" :show-jumper="true" />
</template>
<script setup lang="ts">
const page = ref(1)
</script> 