<template>
  <span class="wrjnb-tooltip-wrapper" @mouseenter="onEnter" @mouseleave="onLeave" @click="onClick">
    <slot />
    <Transition name="wrjnb-tooltip-fade">
      <span
        v-if="show"
        class="wrjnb-tooltip"
        :class="[`wrjnb-tooltip--${placement}`]"
        :style="{ background: color || '', color: color ? '#fff' : '' }"
        ref="tooltipRef"
      >
        {{ content }}
        <span class="wrjnb-tooltip__arrow" :style="arrowStyle"></span>
      </span>
    </Transition>
  </span>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  content: { type: String, required: true },
  placement: { type: String as () => 'top' | 'right' | 'bottom' | 'left', default: 'top' },
  trigger: { type: String as () => 'hover' | 'click', default: 'hover' },
  color: { type: String, default: '' },
});
const show = ref(false);
const tooltipRef = ref<HTMLElement | null>(null);
let clickOutsideHandler: any = null;

function onEnter() {
  if (props.trigger === 'hover') show.value = true;
}
function onLeave() {
  if (props.trigger === 'hover') show.value = false;
}
function onClick(e: MouseEvent) {
  if (props.trigger === 'click') {
    show.value = !show.value;
    e.stopPropagation();
  }
}
function onClickOutside(e: MouseEvent) {
  if (tooltipRef.value && !tooltipRef.value.contains(e.target as Node)) {
    show.value = false;
  }
}
watch(show, (val) => {
  if (props.trigger === 'click') {
    if (val) {
      document.addEventListener('click', onClickOutside);
    } else {
      document.removeEventListener('click', onClickOutside);
    }
  }
});
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
const arrowStyle = computed(() => {
  if (!props.color) return {};
  return { [
    props.placement === 'top' ? 'borderTopColor' :
    props.placement === 'bottom' ? 'borderBottomColor' :
    props.placement === 'left' ? 'borderLeftColor' :
    'borderRightColor'
  ]: props.color };
});
</script>

<style lang="scss">
.wrjnb-tooltip-wrapper {
  position: relative;
  display: inline-block;
}
.wrjnb-tooltip {
  position: absolute;
  z-index: 999;
  background: #333;
  color: #fff;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 0.96em;
  white-space: nowrap;
  box-shadow: 0 2px 8px #0002;
  pointer-events: none;
  opacity: 0.95;
  transition: all 0.18s;
  &--top {
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY(-8px);
  }
  &--bottom {
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY(8px);
  }
  &--left {
    right: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(-8px);
  }
  &--right {
    left: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(8px);
  }
}
.wrjnb-tooltip__arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px;
  pointer-events: none;
}
.wrjnb-tooltip--top .wrjnb-tooltip__arrow {
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  border-color: #333 transparent transparent transparent;
  border-width: 6px 6px 0 6px;
}
.wrjnb-tooltip--bottom .wrjnb-tooltip__arrow {
  left: 50%;
  top: -6px;
  transform: translateX(-50%) rotate(180deg);
  border-color: #333 transparent transparent transparent;
  border-width: 6px 6px 0 6px;
}
.wrjnb-tooltip--left .wrjnb-tooltip__arrow {
  right: -9px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  border-color: #333 transparent transparent transparent;
  border-width: 6px 6px 0 6px;
}
.wrjnb-tooltip--right .wrjnb-tooltip__arrow {
  left: -9px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  border-color: #333 transparent transparent transparent;
  border-width: 6px 6px 0 6px;
}
.wrjnb-tooltip-fade-enter-active,
.wrjnb-tooltip-fade-leave-active {
  transition: opacity 0.18s;
}
.wrjnb-tooltip-fade-enter-from,
.wrjnb-tooltip-fade-leave-to {
  opacity: 0;
}
</style> 