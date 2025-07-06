<template>
  <div class="wrjnb-card">
    <div v-if="title" class="wrjnb-card__header">{{ title }}</div>
    <div class="wrjnb-card__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: String
})
</script>

<style lang="scss">
.wrjnb-card {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px #0001;
  border: 1px solid #e4e7ed;
  min-width: 180px;
  max-width: 260px;
  overflow: hidden;
}
.wrjnb-card__header {
  font-weight: bold;
  font-size: 1.08rem;
  padding: 0.8em 1.2em;
  border-bottom: 1px solid #f0f0f0;
  background: #f7f8fa;
}
.wrjnb-card__body {
  padding: 1.2em 1.2em;
  color: #333;
}
</style> 