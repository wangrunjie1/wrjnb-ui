<template>
  <div
    class="wrjnb-divider"
    :class="[`wrjnb-divider--${direction}`, { 'is-dashed': dashed, 'has-content': !!$slots.default } ]"
    role="separator"
  >
    <span v-if="$slots.default && direction === 'horizontal'" class="wrjnb-divider__content">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  direction: { type: String as () => 'horizontal' | 'vertical', default: 'horizontal' },
  dashed: { type: Boolean, default: false },
});
</script>

<style lang="scss">
.wrjnb-divider {
  box-sizing: border-box;
  margin: 24px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
  position: relative;
  &.is-dashed {
    border-top-style: dashed;
  }
  &.wrjnb-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 1.2em;
    margin: 0 16px;
    border-top: none;
    border-left: 1px solid #e0e0e0;
    vertical-align: middle;
    &.is-dashed {
      border-left-style: dashed;
    }
  }
  &.has-content {
    text-align: center;
    border-top: none;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 40%;
      height: 1px;
      background: #e0e0e0;
      vertical-align: middle;
    }
    &::before {
      margin-right: 16px;
    }
    &::after {
      margin-left: 16px;
    }
  }
}
.wrjnb-divider__content {
  display: inline-block;
  padding: 0 16px;
  color: #888;
  font-size: 0.98em;
  background: #fff;
}
</style> 