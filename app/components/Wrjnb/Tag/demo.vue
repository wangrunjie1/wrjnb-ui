<template>
  <div class="wrjnb-tag-demo">
    <WrjnbTag>默认标签</WrjnbTag>
    <WrjnbTag type="primary">主色标签</WrjnbTag>
    <WrjnbTag type="success">成功</WrjnbTag>
    <WrjnbTag type="danger">危险</WrjnbTag>
    <WrjnbTag closable @close="onClose">可关闭</WrjnbTag>
    <WrjnbTag round type="primary">圆角</WrjnbTag>
    <WrjnbTag color="#e67e22">自定义色</WrjnbTag>
  </div>
</template>

<script setup lang="ts">
function onClose() {
  alert('标签被关闭');
}
</script>

<style scoped>
.wrjnb-tag-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style> 