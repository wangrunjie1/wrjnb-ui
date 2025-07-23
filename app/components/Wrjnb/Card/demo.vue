<template>
  <div class="wrjnb-card-demo">
    <WrjnbCard title="卡片标题">这是默认卡片内容</WrjnbCard>
    <WrjnbCard :bordered="false" shadow>无边框+阴影</WrjnbCard>
    <WrjnbCard bodyPadding="2em" title="自定义内边距">内容区 padding 2em</WrjnbCard>
    <WrjnbCard>
      <template #header>自定义 header</template>
      <div>自定义 header 内容</div>
      <template #footer>页脚内容</template>
    </WrjnbCard>
  </div>
</template>

<style scoped>
.wrjnb-card-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
