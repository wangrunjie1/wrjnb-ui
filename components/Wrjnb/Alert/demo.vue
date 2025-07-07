<template>
  <div class="wrjnb-alert-demo">
    <WrjnbAlert title="信息提示" />
    <WrjnbAlert type="success" title="成功提示" description="操作已成功完成。" />
    <WrjnbAlert type="warning" title="警告提示" description="请注意相关事项。" />
    <WrjnbAlert type="error" title="错误提示" description="操作失败，请重试。" closable />
    <WrjnbAlert type="info" title="无图标" :showIcon="false" />
  </div>
</template>

<style scoped>
.wrjnb-alert-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}
</style> 