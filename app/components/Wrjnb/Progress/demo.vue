<template>
  <div class="wrjnb-progress-demo">
    <WrjnbProgress :percent="30" />
    <WrjnbProgress :percent="100" status="success" />
    <WrjnbProgress :percent="60" status="exception" />
    <WrjnbProgress :percent="70" status="active" />
    <WrjnbProgress :percent="45" type="circle" />
    <WrjnbProgress :percent="100" type="circle" status="success" />
    <WrjnbProgress :percent="80" type="circle" status="exception" />
  </div>
</template>

<style scoped>
.wrjnb-progress-demo {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
}
</style> 