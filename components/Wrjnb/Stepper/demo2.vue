<template>
  <WrjnbStepper :steps="steps" :active="2" />
</template>
<script setup lang="ts">
const steps = [
  { title: '下单', description: '填写订单信息' },
  { title: '支付', description: '完成支付' },
  { title: '发货', description: '等待收货' },
  { title: '完成', description: '交易完成' }
]
</script> 