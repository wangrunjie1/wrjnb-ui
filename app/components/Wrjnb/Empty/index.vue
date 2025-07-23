<template>
  <div class="wrjnb-empty">
    <div class="wrjnb-empty__image">
      <slot name="image">
        <img v-if="image" :src="image" alt="empty" />
        <svg v-else width="80" height="80" viewBox="0 0 80 80" fill="none">
          <ellipse cx="40" cy="72" rx="32" ry="8" fill="#f5f7fa" />
          <rect x="16" y="24" width="48" height="32" rx="8" fill="#f0f0f0" />
          <rect x="24" y="32" width="32" height="8" rx="4" fill="#e0e0e0" />
        </svg>
      </slot>
    </div>
    <div class="wrjnb-empty__desc">
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  image: { type: String, default: '' },
  description: { type: String, default: '暂无数据' },
});
</script>

<style lang="scss">
.wrjnb-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0 32px;
  color: #888;
  font-size: 1.08em;
  min-height: 180px;
  background: #fff;
}
.wrjnb-empty__image {
  margin-bottom: 18px;
  img, svg {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto;
  }
}
.wrjnb-empty__desc {
  margin-top: 2px;
  color: #888;
  font-size: 1.08em;
  text-align: center;
}
</style> 