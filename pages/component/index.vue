<template>
  <div class="component-page">
    <aside class="component-list glass">
      <h2>组件列表</h2>
      <ul>
        <li v-for="item in components" :key="item.name" :class="{active: item.name === activeComponent}" @click="activeComponent = item.name">
          {{ item.title }}
        </li>
      </ul>
    </aside>
    <section class="component-preview glass">
      <h2>{{ currentComponent.title }}</h2>
      <div class="doc-block">
        <p v-if="currentComponent.desc">{{ currentComponent.desc }}</p>
      </div>
      <div class="preview-box">
        <component :is="demoComp" />
      </div>
      <div class="btn-row">
        <wrjnb-button type="primary" @click="showDemoModal = true">查看用法示例源码</wrjnb-button>
        <wrjnb-button type="primary" @click="showSourceModal = true">查看组件源码</wrjnb-button>
      </div>
      <ModalCode v-model:show="showDemoModal" :code="demoCode" title="用法示例源码（demo.vue）" @copy="copyDemo" />
      <ModalCode v-model:show="showSourceModal" :code="sourceCode" title="组件源码（index.vue）" @copy="copySource" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, shallowRef, defineAsyncComponent } from 'vue'
import ModalCode from '@/components/ModalCode.vue'

const components = [
  {
    name: 'button',
    title: '按钮 Button',
    desc: '按钮用于触发操作，支持主色、成功、危险、禁用、小号等多种状态。',
    demoPath: '/components/WrjnbButton/demo.vue',
    sourcePath: '/components/WrjnbButton/index.vue',
    demoImport: () => import('@/components/WrjnbButton/demo.vue'),
  },
  {
    name: 'card',
    title: '卡片 Card',
    desc: '卡片用于内容分组展示，支持标题和无标题两种形式。',
    demoPath: '/components/WrjnbCard/demo.vue',
    sourcePath: '/components/WrjnbCard/index.vue',
    demoImport: () => import('@/components/WrjnbCard/demo.vue'),
  },
  {
    name: 'input',
    title: '输入框 Input',
    desc: '输入框用于文本输入，支持禁用、占位符等。',
    demoPath: '/components/WrjnbInput/demo.vue',
    sourcePath: '/components/WrjnbInput/index.vue',
    demoImport: () => import('@/components/WrjnbInput/demo.vue'),
  },
  {
    name: 'switch',
    title: '开关 Switch',
    desc: '开关用于二元状态切换，支持 v-model。',
    demoPath: '/components/WrjnbSwitch/demo.vue',
    sourcePath: '/components/WrjnbSwitch/index.vue',
    demoImport: () => import('@/components/WrjnbSwitch/demo.vue'),
  },
  {
    name: 'tag',
    title: '标签 Tag',
    desc: '标签用于标记和分类，支持主色、成功、危险等多种风格。',
    demoPath: '/components/WrjnbTag/demo.vue',
    sourcePath: '/components/WrjnbTag/index.vue',
    demoImport: () => import('@/components/WrjnbTag/demo.vue'),
  },
  {
    name: 'alert',
    title: '警告 Alert',
    desc: '警告用于展示提示信息，支持主色、成功、危险等多种类型。',
    demoPath: '/components/WrjnbAlert/demo.vue',
    sourcePath: '/components/WrjnbAlert/index.vue',
    demoImport: () => import('@/components/WrjnbAlert/demo.vue'),
  },
]

const activeComponent = ref(components[0].name)
const demoCode = ref('')
const sourceCode = ref('')
const demoComp = shallowRef()
const showDemoModal = ref(false)
const showSourceModal = ref(false)

const currentComponent = computed(() => components.find(c => c.name === activeComponent.value)!)

// 动态加载 demo.vue 和 index.vue 源码及 demo 组件
watchEffect(async () => {
  const demoPath = currentComponent.value.demoPath
  const sourcePath = currentComponent.value.sourcePath
  // @ts-ignore vite/nuxt3 支持 import.meta.glob
  const modules = import.meta.glob('/components/Wrjnb*/demo.vue', { query: '?raw', import: 'default' })
  const srcModules = import.meta.glob('/components/Wrjnb*/index.vue', { query: '?raw', import: 'default' })
  if (modules[demoPath]) {
    demoCode.value = await modules[demoPath]()
  } else {
    demoCode.value = '// demo 源码加载失败'
  }
  if (srcModules[sourcePath]) {
    sourceCode.value = await srcModules[sourcePath]()
  } else {
    sourceCode.value = '// 组件源码加载失败'
  }
  // 动态加载 demo 组件
  demoComp.value = defineAsyncComponent(currentComponent.value.demoImport)
})

function copyDemo() {
  navigator.clipboard.writeText(demoCode.value)
}
function copySource() {
  navigator.clipboard.writeText(sourceCode.value)
}
</script>

<style scoped>
.component-page {
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
  align-items: flex-start;
  justify-content: center;
}
.component-list {
  min-width: 200px;
  max-width: 240px;
  background: rgba(255,255,255,0.7);
  border-radius: 18px;
  box-shadow: 0 8px 32px #7f5fff22;
  padding: 2rem 1.2rem 2rem 1.2rem;
  height: fit-content;
  backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid #e0e7ff;
}
.component-list h2 {
  font-size: 1.15rem;
  margin-bottom: 1.2rem;
  color: #7f5fff;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.component-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.component-list li {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: background 0.2s, color 0.2s;
  font-size: 1.08rem;
  color: #333;
  font-weight: 500;
}
.component-list li.active, .component-list li:hover {
  background: linear-gradient(90deg, #7f5fff22 0%, #5aefff22 100%);
  color: #7f5fff;
}
.component-preview {
  flex: 1 1 0;
  min-width: 0;
  background: rgba(255,255,255,0.7);
  border-radius: 24px;
  box-shadow: 0 8px 32px #7f5fff22;
  padding: 2.5rem 2rem 2rem 2rem;
  backdrop-filter: blur(16px) saturate(1.2);
  border: 1px solid #e0e7ff;
}
.doc-block {
  background: rgba(255,255,255,0.6);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  margin-bottom: 1.2rem;
  color: #7f5fff;
  font-size: 1.02rem;
  box-shadow: 0 1px 4px #7f5fff11;
}
.preview-box {
  background: rgba(255,255,255,0.8);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 8px #7f5fff11;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
}
.btn-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 900px) {
  .component-page {
    flex-direction: column;
    gap: 1.2rem;
  }
  .component-list {
    width: 100%;
    min-width: 0;
    margin-bottom: 1rem;
    padding: 1.2rem 0.5rem;
  }
  .component-preview {
    padding: 1.2rem 0.5rem;
  }
}
</style>