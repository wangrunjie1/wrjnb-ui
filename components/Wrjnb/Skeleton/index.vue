<template>
  <div class="wrjnb-skeleton">
    <span v-if="avatar" class="wrjnb-skeleton__avatar" :class="{ 'is-round': avatarRound }"></span>
    <div class="wrjnb-skeleton__content">
      <span
        v-for="n in rows"
        :key="n"
        class="wrjnb-skeleton__row"
        :style="{ width: rowWidth(n) }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  rows: { type: Number, default: 3 },
  avatar: { type: Boolean, default: false },
  avatarRound: { type: Boolean, default: false },
  animated: { type: Boolean, default: true },
});
function rowWidth(n: number) {
  // 最后一行宽度短一些
  if (n === props.rows) return '60%';
  return '100%';
}
</script>

<style lang="scss">
.wrjnb-skeleton {
  display: flex;
  align-items: flex-start;
  gap: 18px;
}
.wrjnb-skeleton__avatar {
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 8px;
  flex-shrink: 0;
  &.is-round {
    border-radius: 50%;
  }
}
.wrjnb-skeleton__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.wrjnb-skeleton__row {
  display: block;
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e6e6e6 37%, #f0f0f0 63%);
  border-radius: 6px;
  width: 100%;
  animation: wrjnb-skeleton-ani 1.2s ease-in-out infinite;
}
.wrjnb-skeleton__row:last-child {
  margin-bottom: 0;
}
@keyframes wrjnb-skeleton-ani {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}
</style> 