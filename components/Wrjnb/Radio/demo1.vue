<template>
  <WrjnbRadio v-model="val" label="A">选项A</WrjnbRadio>
  <WrjnbRadio v-model="val" label="B">选项B</WrjnbRadio>
  <WrjnbRadio v-model="val" label="C" disabled>选项C</WrjnbRadio>
  <p>当前选中：{{ val }}</p>
</template>
<script setup lang="ts">
const val = ref('A')
</script> 