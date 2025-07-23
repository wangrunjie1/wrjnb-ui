<template>
  <div class="wrjnb-stepper">
    <div
      v-for="(step, idx) in steps"
      :key="step.key ?? idx"
      class="wrjnb-stepper__step"
      :class="stepClass(idx)"
    >
      <div class="wrjnb-stepper__icon">
        <slot :name="step.slot || ''" v-bind="step">
          <span v-if="step.icon">{{ step.icon }}</span>
          <span v-else>{{ idx + 1 }}</span>
        </slot>
      </div>
      <div class="wrjnb-stepper__content">
        <div class="wrjnb-stepper__title">{{ step.title }}</div>
        <div v-if="step.description" class="wrjnb-stepper__desc">{{ step.description }}</div>
      </div>
      <div v-if="idx < steps.length - 1" class="wrjnb-stepper__line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  steps: {
    type: Array as () => Array<{ title: string; description?: string; icon?: string; key?: string|number; slot?: string }>,
    default: () => []
  },
  active: { type: Number, default: 0 },
  status: { type: String as () => 'process' | 'finish' | 'wait' | 'error', default: 'process' }
})
function stepClass(idx: number) {
  if (idx < props.active) return 'is-finish'
  if (idx === props.active) return 'is-process'
  return 'is-wait'
}
</script>

<style scoped>
.wrjnb-stepper {
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  user-select: none;
}
.wrjnb-stepper__step {
  display: flex;
  align-items: center;
  position: relative;
}
.wrjnb-stepper__icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f5f5f5;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1em;
  border: 2px solid #d9d9d9;
  transition: all 0.2s;
}
.wrjnb-stepper__step.is-finish .wrjnb-stepper__icon {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
.wrjnb-stepper__step.is-process .wrjnb-stepper__icon {
  background: #fffbe6;
  color: #e6a23c;
  border-color: #e6a23c;
}
.wrjnb-stepper__step.is-wait .wrjnb-stepper__icon {
  background: #f5f5f5;
  color: #bbb;
  border-color: #d9d9d9;
}
.wrjnb-stepper__content {
  margin-left: 0.5em;
  min-width: 60px;
}
.wrjnb-stepper__title {
  font-size: 1em;
  font-weight: 500;
}
.wrjnb-stepper__desc {
  font-size: 0.92em;
  color: #888;
  margin-top: 2px;
}
.wrjnb-stepper__line {
  width: 32px;
  height: 2px;
  background: #d9d9d9;
  margin: 0 8px;
  border-radius: 1px;
}
.wrjnb-stepper__step.is-finish + .wrjnb-stepper__step .wrjnb-stepper__line {
  background: #409eff;
}
</style> 