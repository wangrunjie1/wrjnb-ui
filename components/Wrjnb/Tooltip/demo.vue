<template>
  <div class="wrjnb-tooltip-demo">
    <WrjnbTooltip content="默认上方提示">
      <WrjnbButton>上方</WrjnbButton>
    </WrjnbTooltip>
    <WrjnbTooltip content="右侧提示" placement="right">
      <WrjnbButton>右侧</WrjnbButton>
    </WrjnbTooltip>
    <WrjnbTooltip content="下方提示" placement="bottom">
      <WrjnbButton>下方</WrjnbButton>
    </WrjnbTooltip>
    <WrjnbTooltip content="左侧提示" placement="left">
      <WrjnbButton>左侧</WrjnbButton>
    </WrjnbTooltip>
    <WrjnbTooltip content="点击触发" trigger="click">
      <WrjnbButton>点击</WrjnbButton>
    </WrjnbTooltip>
    <WrjnbTooltip content="自定义色" color="#e67e22">
      <WrjnbButton>自定义色</WrjnbButton>
    </WrjnbTooltip>
  </div>
</template>

<style scoped>
.wrjnb-tooltip-demo {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}
</style> 