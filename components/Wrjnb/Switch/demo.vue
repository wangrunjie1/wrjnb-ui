<template>
  <div class="wrjnb-switch-demo">
    <WrjnbSwitch v-model="checked" />
    <WrjnbSwitch v-model="checked2" disabled />
    <WrjnbSwitch v-model="checked3" loading />
    <WrjnbSwitch v-model="checked4" activeColor="#67c23a" inactiveColor="#f56c6c" />
    <WrjnbSwitch v-model="checked5" size="small" />
    <WrjnbSwitch v-model="checked6" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
const checked4 = ref(true)
const checked5 = ref(false)
const checked6 = ref(true)
</script>

<style scoped>
.wrjnb-switch-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style> 