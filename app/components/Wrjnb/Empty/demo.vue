<template>
  <div class="wrjnb-empty-demo">
    <WrjnbEmpty />
    <WrjnbEmpty description="没有找到相关内容" />
    <WrjnbEmpty image="https://static.wrjnb.top/empty_icon.svg" description="自定义图片" />
    <WrjnbEmpty>
      <template #image>
        <svg width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="36" fill="#f5f7fa" /><text x="40" y="48" text-anchor="middle" font-size="32" fill="#e0e0e0">😕</text></svg>
      </template>
      <span>自定义插槽内容</span>
    </WrjnbEmpty>
  </div>
</template>

<style scoped>
.wrjnb-empty-demo {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style> 