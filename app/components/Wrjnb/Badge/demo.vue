<template>
  <div class="wrjnb-badge-demo">
    <WrjnbBadge :value="5">
      <WrjnbButton>消息</WrjnbButton>
    </WrjnbBadge>
    <WrjnbBadge :value="120" :max="99">
      <WrjnbButton>通知</WrjnbButton>
    </WrjnbBadge>
    <WrjnbBadge dot>
      <WrjnbButton>小红点</WrjnbButton>
    </WrjnbBadge>
    <WrjnbBadge :value="8" />
    <WrjnbBadge dot />
  </div>
</template>

<style scoped>
.wrjnb-badge-demo {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}
</style> 