<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <WrjnbButton @click="showTop = true">顶部弹出</WrjnbButton>
    <WrjnbButton @click="showLeft = true">左侧弹出</WrjnbButton>
    <WrjnbButton @click="showBottom = true">底部弹出</WrjnbButton>
  </div>
  <WrjnbDrawer v-model="showTop" title="顶部抽屉" placement="top" size="180px">
    <div>顶部弹出的内容</div>
    <template #footer>
      <WrjnbButton @click="showTop = false">关闭</WrjnbButton>
    </template>
  </WrjnbDrawer>
  <WrjnbDrawer v-model="showLeft" title="左侧抽屉" placement="left" size="300px">
    <div>左侧弹出的内容</div>
    <template #footer>
      <WrjnbButton @click="showLeft = false">关闭</WrjnbButton>
    </template>
  </WrjnbDrawer>
  <WrjnbDrawer v-model="showBottom" title="底部抽屉" placement="bottom" size="180px">
    <div>底部弹出的内容</div>
    <template #footer>
      <WrjnbButton @click="showBottom = false">关闭</WrjnbButton>
    </template>
  </WrjnbDrawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const showTop = ref(false)
const showLeft = ref(false)
const showBottom = ref(false)
</script> 