<template>
  <span class="wrjnb-badge" :class="{ 'is-dot': dot, 'is-alone': !hasSlot }">
    <slot v-if="hasSlot" />
    <sup v-if="showBadge" class="wrjnb-badge__sup">
      <template v-if="dot"></template>
      <template v-else>{{ displayValue }}</template>
    </sup>
  </span>
</template>

<script setup lang="ts">
import { defineProps, computed, useSlots } from 'vue';
const props = defineProps({
  value: { type: [String, Number], default: '' },
  max: { type: Number, default: 99 },
  dot: { type: Boolean, default: false },
});
const slots = useSlots();
const hasSlot = computed(() => !!slots.default);
const showBadge = computed(() => props.dot || (props.value !== '' && props.value !== null && props.value !== undefined));
const displayValue = computed(() => {
  if (props.dot) return '';
  const val = Number(props.value);
  if (!isNaN(val) && val > props.max) return props.max + '+';
  return props.value;
});
</script>

<style lang="scss">
.wrjnb-badge {
  position: relative;
  display: inline-block;
  &.is-alone {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    min-height: 22px;
    background: #f56c6c;
    color: #fff;
    border-radius: 12px;
    font-size: 0.92rem;
    font-weight: 500;
    padding: 0 7px;
    vertical-align: middle;
  }
}
.wrjnb-badge__sup {
  position: absolute;
  top: -8px;
  right: -10px;
  min-width: 18px;
  height: 18px;
  background: #f56c6c;
  color: #fff;
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  box-shadow: 0 2px 8px #f56c6c22;
  z-index: 1;
}
.wrjnb-badge.is-dot .wrjnb-badge__sup {
  width: 10px;
  min-width: 10px;
  height: 10px;
  padding: 0;
  border-radius: 50%;
  background: #f56c6c;
  box-shadow: 0 2px 8px #f56c6c22;
  top: -4px;
  right: -4px;
}
</style> 