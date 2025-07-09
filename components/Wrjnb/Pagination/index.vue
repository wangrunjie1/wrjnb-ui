<template>
  <nav class="wrjnb-pagination" :class="[disabled && 'is-disabled']">
    <button
      class="wrjnb-pagination__btn"
      :disabled="isPrevDisabled"
      @click="changePage(currentPage - 1)"
    >
      上一页
    </button>
    <button
      v-for="page in pageList"
      :key="page.key"
      class="wrjnb-pagination__btn"
      :class="[page.active && 'is-active', page.ellipsis && 'is-ellipsis']"
      :disabled="page.ellipsis"
      @click="!page.ellipsis && changePage(page.num!)"
    >
      <span v-if="page.ellipsis">...</span>
      <span v-else>{{ page.num }}</span>
    </button>
    <button
      class="wrjnb-pagination__btn"
      :disabled="isNextDisabled"
      @click="changePage(currentPage + 1)"
    >
      下一页
    </button>
    <slot name="jumper">
      <span v-if="showJumper" class="wrjnb-pagination__jumper">
        跳至
        <input
          type="number"
          v-model.number="inputPage"
          min="1"
          :max="pageCount"
          @keydown.enter="jumpToPage"
        />
        页
        <button class="wrjnb-pagination__btn" @click="jumpToPage">确定</button>
      </span>
    </slot>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  total: { type: Number, required: true },
  pageSize: { type: Number, default: 10 },
  modelValue: { type: Number, default: 1 },
  disabled: { type: Boolean, default: false },
  pagerCount: { type: Number, default: 7 }, // 显示页码按钮数
  showJumper: { type: Boolean, default: false },
});
const emit = defineEmits(["update:modelValue", "change"]);
const currentPage = ref(props.modelValue);
const inputPage = ref(props.modelValue);

const pageCount = computed(() =>
  Math.max(1, Math.ceil(props.total / props.pageSize))
);
const isPrevDisabled = computed(() => props.disabled || currentPage.value <= 1);
const isNextDisabled = computed(
  () => props.disabled || currentPage.value >= pageCount.value
);

watch(
  () => props.modelValue,
  (val) => {
    currentPage.value = val;
    inputPage.value = val;
  }
);

function changePage(page: number) {
  if (
    props.disabled ||
    page < 1 ||
    page > pageCount.value ||
    page === currentPage.value
  )
    return;
  currentPage.value = page;
  inputPage.value = page;
  emit("update:modelValue", page);
  emit("change", page);
}
function jumpToPage() {
  let page = Number(inputPage.value);
  if (!page || page < 1) page = 1;
  if (page > pageCount.value) page = pageCount.value;
  changePage(page);
}

const pageList = computed(() => {
  const pages = [];
  const count = pageCount.value;
  const pagerCount = Math.max(5, props.pagerCount);
  let showPrevEllipsis = false;
  let showNextEllipsis = false;
  let start = 1;
  let end = count;
  if (count > pagerCount) {
    const half = Math.floor(pagerCount / 2);
    if (currentPage.value > half) {
      start = Math.max(1, currentPage.value - half);
      end = start + pagerCount - 1;
      if (end > count) {
        end = count;
        start = end - pagerCount + 1;
      }
    } else {
      end = pagerCount;
    }
    showPrevEllipsis = start > 1;
    showNextEllipsis = end < count;
  }
  if (showPrevEllipsis) {
    pages.push({ key: "prev-ellipsis", ellipsis: true });
  }
  for (let i = start; i <= end; i++) {
    pages.push({ key: i, num: i, active: i === currentPage.value });
  }
  if (showNextEllipsis) {
    pages.push({ key: "next-ellipsis", ellipsis: true });
  }
  return pages;
});
</script>

<style scoped>
.wrjnb-pagination {
  display: flex;
  align-items: center;
  gap: 0.25em;
  user-select: none;
}
.wrjnb-pagination.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
.wrjnb-pagination__btn {
  min-width: 32px;
  height: 32px;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.2s;
}
.wrjnb-pagination__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.wrjnb-pagination__btn.is-active {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
.wrjnb-pagination__btn.is-ellipsis {
  cursor: default;
  background: none;
  border: none;
}
.wrjnb-pagination__jumper {
  margin-left: 1em;
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
}
.wrjnb-pagination__jumper input {
  width: 48px;
  padding: 2px 6px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 0 4px;
}
</style>
