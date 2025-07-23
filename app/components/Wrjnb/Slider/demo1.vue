<template>
  <div class="wrjnb-slider-demo">
    <WrjnbSlider v-model="value" />
    <div>当前值：{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const value = ref(30)
</script>

<style scoped lang="scss">
.wrjnb-slider-demo {
  display: flex;
  gap: 2rem;
  align-items: center;
  &>div{
    white-space: nowrap;
  }
}
</style>
