<template>
  <div style="display: flex; gap: 1rem; align-items: center;">
    <WrjnbSwitch v-model="checked" />
    <WrjnbSwitch v-model="checked2" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
const checked2 = ref(true)
</script> 