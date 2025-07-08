<template>
  <div class="wrjnb-skeleton-demo">
    <WrjnbSkeleton />
    <WrjnbSkeleton :rows="4" />
    <WrjnbSkeleton avatar />
    <WrjnbSkeleton avatar avatarRound />
    <WrjnbSkeleton :rows="2" :animated="false" />
  </div>
</template>

<style scoped>
.wrjnb-skeleton-demo {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style> 