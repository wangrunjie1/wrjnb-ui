<template>
  <WrjnbPagination v-model="page" :total="87" :page-size="10" @change="onChange" />
  <p>当前页：{{ page }}</p>
</template>
<script setup lang="ts">
const page = ref(1)
function onChange(p: number) {
  // 可做数据请求等
}
</script> 