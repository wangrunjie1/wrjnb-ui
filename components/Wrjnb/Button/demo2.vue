<template>
  <div class="wrjnb-btn-demo">
    <WrjnbButton disabled>禁用</WrjnbButton>
    <WrjnbButton loading>加载中</WrjnbButton>
    <WrjnbButton size="large">大号按钮</WrjnbButton>
    <WrjnbButton size="small">小号按钮</WrjnbButton>
    <WrjnbButton round type="primary">圆角按钮</WrjnbButton>
    <WrjnbButton block type="success">块级按钮</WrjnbButton>
  </div>
</template>

<style scoped>
.wrjnb-btn-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
}
</style>
