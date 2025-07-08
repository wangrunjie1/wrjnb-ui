<template>
  <div
    class="wrjnb-card"
    :class="{
      'wrjnb-card--bordered': bordered,
      'wrjnb-card--shadow': shadow
    }"
  >
    <template v-if="$slots.header">
      <div class="wrjnb-card__header">
        <slot name="header" />
      </div>
    </template>
    <template v-else-if="title">
      <div class="wrjnb-card__header">{{ title }}</div>
    </template>
    <div class="wrjnb-card__body" :style="{ padding: bodyPadding }">
      <slot />
    </div>
    <template v-if="$slots.footer">
      <div class="wrjnb-card__footer">
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface CardProps {
  title?: string
  bordered?: boolean
  shadow?: boolean
  bodyPadding?: string
}

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  bordered: true,
  shadow: false,
  bodyPadding: '1.2em 1.2em',
})
</script>

<style lang="scss">
.wrjnb-card {
  border-radius: 8px;
  background: #fff;
  min-width: 180px;
  max-width: 260px;
  overflow: hidden;
  border: 1px solid #e4e7ed;
  box-shadow: none;
  transition: box-shadow 0.2s, border-color 0.2s;
  &.wrjnb-card--shadow {
    box-shadow: 0 2px 8px #0001;
  }
  &.wrjnb-card--bordered {
    border: 1px solid #e4e7ed;
  }
  &:not(.wrjnb-card--bordered) {
    border: none;
  }
}
.wrjnb-card__header {
  font-weight: bold;
  font-size: 1.08rem;
  padding: 0.8em 1.2em;
  border-bottom: 1px solid #f0f0f0;
  background: #f7f8fa;
}
.wrjnb-card__body {
  color: #333;
}
.wrjnb-card__footer {
  padding: 0.8em 1.2em;
  border-top: 1px solid #f0f0f0;
  background: #fafbfc;
  font-size: 0.96rem;
  color: #666;
}
</style> 