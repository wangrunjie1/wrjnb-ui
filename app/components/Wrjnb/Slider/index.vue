<template>
  <div :class="sliderClass" ref="trackRef" @click="onTrackClick">
    <div class="wrjnb-slider__track">
      <div class="wrjnb-slider__bar" :style="barStyle"></div>
      <div
        class="wrjnb-slider__thumb"
        :style="thumbStyle"
        tabindex="0"
        @mousedown="onThumbDown"
        @touchstart="onThumbDown"
        @keydown="onKeyDown"
        :aria-valuenow="modelValue"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-disabled="disabled"
      >
        <span v-if="showTooltip" class="wrjnb-slider__tooltip">{{ modelValue }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Number, required: true },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  disabled: { type: Boolean, default: false },
  vertical: { type: Boolean, default: false },
  showTooltip: { type: Boolean, default: true },
})
const emit = defineEmits(['update:modelValue'])

const trackRef = ref<HTMLElement | null>(null)
const dragging = ref(false)

// 保证 value 始终在 min/max 范围内
watch(
  () => [props.min, props.max],
  ([newMin, newMax]) => {
    let v = props.modelValue
    if (v < newMin) v = newMin
    if (v > newMax) v = newMax
    if (v !== props.modelValue) emit('update:modelValue', v)
  }
)

const percent = computed(() => {
  const range = props.max - props.min
  if (range <= 0) return 0
  return ((props.modelValue - props.min) / range) * 100
})

const sliderClass = computed(() => [
  'wrjnb-slider',
  props.disabled && 'is-disabled',
  props.vertical && 'is-vertical',
])

const barStyle = computed(() =>
  props.vertical
    ? { height: percent.value + '%', bottom: 0 }
    : { width: percent.value + '%' }
)
const thumbStyle = computed(() =>
  props.vertical
    ? { bottom: percent.value + '%' }
    : { left: percent.value + '%' }
)

function getPosFromEvent(e: MouseEvent | TouchEvent) {
  const track = trackRef.value
  if (!track) return 0
  const rect = track.getBoundingClientRect()
  if (props.vertical) {
    const total = rect.height
    let pos = 0
    if (e instanceof MouseEvent) {
      pos = rect.bottom - e.clientY
    } else {
      pos = rect.bottom - e.touches[0].clientY
    }
    return Math.max(0, Math.min(pos, total)) / (total || 1)
  } else {
    const total = rect.width
    let pos = 0
    if (e instanceof MouseEvent) {
      pos = e.clientX - rect.left
    } else {
      pos = e.touches[0].clientX - rect.left
    }
    return Math.max(0, Math.min(pos, total)) / (total || 1)
  }
}

function setValueByPos(e: MouseEvent | TouchEvent) {
  if (props.disabled) return
  const percent = getPosFromEvent(e)
  const range = props.max - props.min
  let value = props.min + percent * range
  value = Math.round(value / props.step) * props.step
  value = Math.max(props.min, Math.min(props.max, value))
  emit('update:modelValue', value)
}

function onTrackClick(e: MouseEvent) {
  if (props.disabled) return
  setValueByPos(e)
}

function onThumbDown(e: MouseEvent | TouchEvent) {
  if (props.disabled) return
  dragging.value = true
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', onDragEnd)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('touchend', onDragEnd)
  e.preventDefault()
}

function onDrag(e: MouseEvent | TouchEvent) {
  if (!dragging.value) return
  setValueByPos(e)
}

function onDragEnd() {
  dragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', onDragEnd)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', onDragEnd)
}

function onKeyDown(e: KeyboardEvent) {
  if (props.disabled) return
  let value = props.modelValue
  if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
    value = Math.max(props.min, value - props.step)
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
    value = Math.min(props.max, value + props.step)
  } else {
    return
  }
  emit('update:modelValue', value)
  e.preventDefault()
}
</script>

<style scoped lang="scss">
.wrjnb-slider {
  position: relative;
  width: 100%;
  height: 32px;
  user-select: none;
  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &.is-vertical {
    width: 32px;
    height: 200px;
    .wrjnb-slider__track {
      width: 6px;
      height: 100%;
      margin: 0 auto;
    }
    .wrjnb-slider__thumb {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.wrjnb-slider__track {
  position: relative;
  width: 100%;
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  margin: 13px 0;
}
.wrjnb-slider__bar {
  position: absolute;
  height: 100%;
  background: #409eff;
  border-radius: 3px;
}
.is-vertical .wrjnb-slider__bar {
  width: 100%;
  height: auto;
  bottom: 0;
}
.wrjnb-slider__thumb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #409eff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  &:hover {
    border-color: #66b1ff;
  }
}
.is-vertical .wrjnb-slider__thumb {
  top: auto;
  left: 50%;
  transform: translateX(-50%);
}
.wrjnb-slider__tooltip {
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: #409eff;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
}
.is-vertical .wrjnb-slider__tooltip {
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
}
</style> 