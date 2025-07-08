<template>
  <div class="wrjnb-progress" :class="[`wrjnb-progress--${type}`]">
    <template v-if="type === 'line'">
      <div class="wrjnb-progress__bar">
        <div
          class="wrjnb-progress__inner"
          :class="[`is-${status}`]"
          :style="{ width: percent + '%', transition: 'width 0.6s cubic-bezier(.23,1,.32,1)' }"
        ></div>
      </div>
      <span class="wrjnb-progress__text">
        <template v-if="status === 'success'">✔️</template>
        <template v-else-if="status === 'exception'">❌</template>
        <template v-else>{{ percent }}%</template>
      </span>
    </template>
    <template v-else>
      <svg class="wrjnb-progress__circle" viewBox="0 0 100 100">
        <circle
          class="wrjnb-progress__circle-bg"
          cx="50" cy="50" r="45"
          fill="none" stroke="#f3f3f3" stroke-width="10"
        />
        <circle
          class="wrjnb-progress__circle-bar"
          :class="[`is-${status}`]"
          cx="50" cy="50" r="45"
          fill="none"
          :stroke="circleColor"
          stroke-width="10"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>
      <span class="wrjnb-progress__text">
        <template v-if="status === 'success'">✔️</template>
        <template v-else-if="status === 'exception'">❌</template>
        <template v-else>{{ percent }}%</template>
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
const props = defineProps({
  percent: { type: Number, default: 0 },
  status: { type: String as () => 'normal' | 'success' | 'exception' | 'active', default: 'normal' },
  type: { type: String as () => 'line' | 'circle', default: 'line' },
  color: { type: String, default: '' },
});
const circleColor = computed(() => {
  if (props.color) return props.color;
  if (props.status === 'success') return '#67c23a';
  if (props.status === 'exception') return '#f56c6c';
  return '#409eff';
});
const circumference = 2 * Math.PI * 45;
const dashOffset = computed(() => ((100 - props.percent) / 100) * circumference);
</script>

<style lang="scss">
.wrjnb-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  &--line {
    width: 220px;
  }
  &--circle {
    flex-direction: column;
    width: 100px;
    height: 100px;
  }
}
.wrjnb-progress__bar {
  flex: 1;
  height: 10px;
  background: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
}
.wrjnb-progress__inner {
  height: 100%;
  background: #409eff;
  border-radius: 5px;
  transition: background 0.3s;
  &.is-success {
    background: #67c23a;
  }
  &.is-exception {
    background: #f56c6c;
  }
  &.is-active {
    animation: wrjnb-progress-active 2s linear infinite;
  }
}
@keyframes wrjnb-progress-active {
  0% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
  100% { filter: brightness(1); }
}
.wrjnb-progress__text {
  min-width: 38px;
  text-align: right;
  font-size: 0.98em;
  color: #333;
  font-weight: 500;
}
.wrjnb-progress__circle {
  width: 100px;
  height: 100px;
  display: block;
}
.wrjnb-progress__circle-bg {
  stroke: #f3f3f3;
}
.wrjnb-progress__circle-bar {
  transition: stroke-dashoffset 0.6s cubic-bezier(.23,1,.32,1);
  stroke: #409eff;
}
.wrjnb-progress__circle-bar.is-success {
  stroke: #67c23a;
}
.wrjnb-progress__circle-bar.is-exception {
  stroke: #f56c6c;
}
</style> 