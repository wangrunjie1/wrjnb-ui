<template>
  <WrjnbRadio v-model="val" label="A" type="button">选项A</WrjnbRadio>
  <WrjnbRadio v-model="val" label="B" type="button">选项B</WrjnbRadio>
  <WrjnbRadio v-model="val" label="C" type="button" disabled>选项C</WrjnbRadio>
  <p>当前选中：{{ val }}</p>
</template>
<script setup lang="ts">
const val = ref('A')
</script> 