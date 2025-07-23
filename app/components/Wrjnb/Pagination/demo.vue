<template>
  <div class="wrjnb-pagination-demo">
    <h3>基础用法</h3>
    <WrjnbPagination v-model="page1" :total="87" :page-size="10" @change="onChange1" />
    <p>当前页：{{ page1 }}</p>

    <h3>禁用状态</h3>
    <WrjnbPagination v-model="page2" :total="50" :disabled="true" />

    <h3>显示跳转</h3>
    <WrjnbPagination v-model="page3" :total="120" :show-jumper="true" />

    <h3>自定义页码按钮数量</h3>
    <WrjnbPagination v-model="page4" :total="200" :pager-count="5" />
  </div>
</template>

<script setup lang="ts">
const page1 = ref(1)
const page2 = ref(1)
const page3 = ref(1)
const page4 = ref(1)
function onChange1(page: number) {
  // 可做数据请求等
}
</script>

<style scoped>
.wrjnb-pagination-demo {
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-width: 700px;
}
</style> 