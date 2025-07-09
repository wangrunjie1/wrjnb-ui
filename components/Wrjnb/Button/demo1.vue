<template>
  <div class="wrjnb-btn-demo">
    <WrjnbButton>默认按钮</WrjnbButton>
    <WrjnbButton type="primary">主色按钮</WrjnbButton>
    <WrjnbButton type="success">成功</WrjnbButton>
    <WrjnbButton type="danger">危险</WrjnbButton>
    <WrjnbButton type="text">文字按钮</WrjnbButton>
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
