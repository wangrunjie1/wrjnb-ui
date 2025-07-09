<template>
  <nav class="wrjnb-breadcrumb" aria-label="Breadcrumb">
    <ol class="wrjnb-breadcrumb__list">
      <li
        v-for="(item, idx) in items"
        :key="item.key ?? idx"
        class="wrjnb-breadcrumb__item"
      >
        <span v-if="item.to" class="wrjnb-breadcrumb__link" @click="onClick(item, idx)">
          <slot :name="item.slot || ''" v-bind="item">
            {{ item.label }}
          </slot>
        </span>
        <span v-else class="wrjnb-breadcrumb__text">
          <slot :name="item.slot || ''" v-bind="item">
            {{ item.label }}
          </slot>
        </span>
        <span v-if="idx < items.length - 1" class="wrjnb-breadcrumb__separator">
          <slot name="separator">{{ separator }}</slot>
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array as () => Array<{ label: string; to?: any; key?: string|number; slot?: string }>,
    default: () => []
  },
  separator: {
    type: String,
    default: '/' // 默认分隔符
  }
})
const emit = defineEmits(['click'])
function onClick(item: any, idx: number) {
  emit('click', item, idx)
}
</script>

<style scoped>
.wrjnb-breadcrumb {
  font-size: 14px;
  color: #666;
}
.wrjnb-breadcrumb__list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.wrjnb-breadcrumb__item {
  display: flex;
  align-items: center;
}
.wrjnb-breadcrumb__link {
  color: #409eff;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}
.wrjnb-breadcrumb__link:hover {
  color: #66b1ff;
  text-decoration: underline;
}
.wrjnb-breadcrumb__text {
  color: #333;
}
.wrjnb-breadcrumb__separator {
  margin: 0 0.5em;
  color: #bbb;
  user-select: none;
}
</style> 