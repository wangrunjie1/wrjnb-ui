<template>
  <div class="wrjnb-divider-demo">
    <div>
      <span>内容A</span>
      <WrjnbDivider />
      <span>内容B</span>
      <WrjnbDivider dashed />
      <span>内容C</span>
      <WrjnbDivider>有内容分割线</WrjnbDivider>
    </div>
    <div style="margin-top: 32px; display: flex; align-items: center;">
      <span>左</span>
      <WrjnbDivider direction="vertical" />
      <span>中</span>
      <WrjnbDivider direction="vertical" dashed />
      <span>右</span>
    </div>
  </div>
</template>

<style scoped>
.wrjnb-divider-demo {
  font-size: 1.1em;
  color: #333;
}
</style> 