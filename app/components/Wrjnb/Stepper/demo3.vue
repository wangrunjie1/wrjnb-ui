<template>
  <WrjnbStepper :steps="steps" :active="1" />
</template>
<script setup lang="ts">
const steps = [
  { title: '登录', icon: '🔑' },
  { title: '验证', icon: '✅' },
  { title: '完成', icon: '🎉' }
]
</script> 