<template>
  <WrjnbCheckbox v-model="val" label="A" type="card">选项A</WrjnbCheckbox>
  <WrjnbCheckbox v-model="val" label="B" type="card">选项B</WrjnbCheckbox>
  <WrjnbCheckbox v-model="val" label="C" type="card" disabled>选项C</WrjnbCheckbox>
  <p>当前选中：{{ val }}</p>
</template>
<script setup lang="ts">
const val = ref(['A'])
</script> 