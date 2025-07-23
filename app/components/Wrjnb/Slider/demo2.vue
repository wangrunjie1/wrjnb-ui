<template>
  <div class="wrjnb-slider-demo">
    <WrjnbSlider v-model="value1" :step="10" :disabled="true" style="width: 200px;" />
    <WrjnbSlider v-model="value2" vertical style="height: 200px;" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref(50)
const value2 = ref(20)
</script>

<style scoped>
.wrjnb-slider-demo {
  display: flex;
  gap: 2rem;
  align-items: flex-end;
}
</style> 