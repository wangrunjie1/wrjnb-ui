<template>
  <WrjnbButton @click="show = true">打开抽屉</WrjnbButton>
  <WrjnbDrawer v-model="show" title="基础抽屉">
    <div>这里是抽屉内容，可以放表单、说明等。</div>
  </WrjnbDrawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script> 