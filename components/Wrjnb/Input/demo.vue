<template>
  <div class="wrjnb-input-demo">
    <WrjnbInput v-model="val" placeholder="基础用法" style="max-width: 180px;" />
    <WrjnbInput v-model="val2" placeholder="禁用" disabled style="max-width: 180px;" />
    <WrjnbInput v-model="val3" placeholder="只读" readonly style="max-width: 180px;" />
    <WrjnbInput v-model="val4" placeholder="可清除" clearable style="max-width: 180px;" />
    <WrjnbInput v-model="val5" type="password" placeholder="密码" clearable style="max-width: 180px;" />
    <WrjnbInput v-model="val6" type="number" placeholder="数字" style="max-width: 180px;" />
    <WrjnbInput v-model="val7" placeholder="前后缀" clearable style="max-width: 220px;">
      <template #prefix>￥</template>
      <template #suffix>.00</template>
    </WrjnbInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
const val2 = ref('')
const val3 = ref('只读内容')
const val4 = ref('')
const val5 = ref('')
const val6 = ref('')
const val7 = ref('')
</script>

<style scoped>
.wrjnb-input-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style> 