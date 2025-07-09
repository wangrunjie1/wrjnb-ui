<template>
  <div class="wrjnb-switch-demo">
    <WrjnbSwitch v-model="checked" size="small" />
    <WrjnbSwitch v-model="checked" size="large" />
  </div>
</template>
<script setup lang="ts">
const checked = ref(false)
</script>
<style scoped>
.wrjnb-switch-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style>
