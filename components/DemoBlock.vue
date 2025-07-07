<template>
  <div class="demo-block">
    <div class="demo-block__meta">
      <div class="demo-block__title">{{ title }}</div>
      <div class="demo-block__desc" v-if="description">{{ description }}</div>
      <button class="demo-block__toggle" @click="showCode = !showCode">
        {{ showCode ? "隐藏示例代码" : "显示示例代码" }}
      </button>
      <button class="demo-block__copy" @click="copyCode">
        <template v-if="copied"> <i class="fas fa-check"></i> 已复制 </template>
        <template v-else> <i class="far fa-copy"></i> 复制代码 </template>
      </button>
    </div>
    <div class="demo-block__preview">
      <slot />
    </div>
    <pre
      v-if="showCode"
      class="demo-block__code"
    ><code ref="codeRef" class="language-html">{{ props.code }}</code></pre>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Prism from "prismjs";

const props = defineProps({
  title: String,
  description: String,
  code: String,
});

const showCode = ref(false);
const copied = ref(false);
const codeRef = ref(null);
const highlightedCode = ref("");

const highlight = () => {
  highlightedCode.value = Prism.highlight(
    props.code || "",
    Prism.languages.html,
    "html"
  );
};

watch(() => props.code, highlight, { immediate: true });
onMounted(highlight);

const copyCode = () => {
  if (!props.code) return;
  navigator.clipboard.writeText(props.code).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  });
};
</script>

<style scoped>
.demo-block {
  border: 1px solid #e5e6eb;
  border-radius: 8px;
  margin-bottom: 32px;
  background: #fff;
  box-shadow: 0 2px 8px 0 #f2f3f5;
}
.demo-block__preview {
  padding: 24px;
  border-bottom: 1px solid #f0f0f0;
}
.demo-block__meta {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 24px;
  background: #f8f9fa;
}
.demo-block__title {
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}
.demo-block__desc {
  color: #888;
  font-size: 0.95em;
}
.demo-block__toggle,
.demo-block__copy {
  background: #f1f8ff;
  color: #409eff;
  border: 1px solid #d1e5ff;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.9em;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.demo-block__toggle {
  margin-left: auto;
}

.demo-block__toggle:hover,
.demo-block__copy:hover {
  background: #e1f0ff;
}
.demo-block__code {
  margin: 0;
  padding: 18px 24px;
  font-size: 0.95em;
  border-radius: 0 0 8px 8px;
  overflow-x: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
