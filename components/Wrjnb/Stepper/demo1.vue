<template>
  <WrjnbStepper :steps="steps" :active="1" />
</template>
<script setup lang="ts">
const steps = [
  { title: '步骤一' },
  { title: '步骤二' },
  { title: '步骤三' }
]
</script> 