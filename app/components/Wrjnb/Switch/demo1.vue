<template>
  <div class="wrjnb-switch-demo">
    <WrjnbSwitch v-model="checked" />
    <WrjnbSwitch v-model="checked2" disabled />
    <WrjnbSwitch v-model="checked3" loading />
  </div>
</template>
<script setup lang="ts">
const checked = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
</script>
<style scoped>
.wrjnb-switch-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style>
