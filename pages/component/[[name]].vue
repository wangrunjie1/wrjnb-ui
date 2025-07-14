<template>
  <div>
    <!-- Component Detail Section -->
    <section class="section">
      <div class="container">
        <div class="detail-container">
          <!-- Sidebar -->
          <div class="sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-title">组件列表</h3>
              <div v-for="category in categories" :key="category" class="category-group">
                <div class="category-title">{{ category }}</div>
                <ul class="component-list">
                  <li v-for="component in groupedComponents[category]" :key="component.name">
                    <div
                      class="component-link"
                      :class="{
                        active: ($route.params.name || 'alert') === component.name.toLowerCase(),
                      }"
                      @click="selectComponent(component)"
                    >
                      {{ component.title }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="sidebar-card">
              <h3 class="sidebar-title">设计资源</h3>
              <ul class="component-list">
                <li>
                  <NuxtLink to="/design/principles" class="component-link">设计原则</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/design/colors" class="component-link">色彩系统</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/design/layout" class="component-link">布局指南</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/design/icons" class="component-link">图标库</NuxtLink>
                </li>
              </ul>
            </div> -->
          </div>

          <div v-if="currentComponent" class="component-detail">
            <div class="detail-header">
              <h1>{{ currentComponent.title }}</h1>
              <p>{{ currentComponent.description }}</p>
            </div>

            <div v-for="(example, index) in currentComponent.examples" :key="index">
              <DemoBlock :title="example.title" :description="example.description" :code="example.demoCode">
                <component :is="example.demo" />
              </DemoBlock>
            </div>

            <div class="code-section">
              <div class="code-header">
                <h3>组件代码</h3>
                <button class="copy-btn" data-clipboard-target="#code-2" @click="copyComponentCode">
                  <template v-if="copiedComponentCode"> <i class="fas fa-check"></i> 已复制 </template>
                  <template v-else> <i class="far fa-copy"></i> 复制代码 </template>
                </button>
              </div>
              <pre><code id="code-2" class="javascript">{{ currentComponent.code }}</code></pre>
            </div>
            <h3 style="margin: 40px 0 20px">属性说明</h3>
            <table class="props-table">
              <thead>
                <tr>
                  <th>属性名</th>
                  <th>说明</th>
                  <th>类型</th>
                  <th>默认值</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="prop in currentComponent.props" :key="prop.name">
                  <td>
                    <span class="prop-name">{{ prop.name }}</span>
                  </td>
                  <td>{{ prop.description }}</td>
                  <td>
                    <span class="prop-type">{{ prop.type }}</span>
                  </td>
                  <td>
                    <span class="prop-default">{{ prop.default }}</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 v-if="currentComponent.events.length > 0" style="margin: 40px 0 20px">事件说明</h3>
            <table v-if="currentComponent.events.length > 0" class="props-table">
              <thead>
                <tr>
                  <th>事件名</th>
                  <th>说明</th>
                  <th>回调参数</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in currentComponent.events" :key="event.name">
                  <td>
                    <span class="prop-name">{{ event.name }}</span>
                  </td>
                  <td>{{ event.description }}</td>
                  <td>{{ event.params }}</td>
                </tr>
              </tbody>
            </table>

            <h3 v-if="currentComponent.slots && currentComponent.slots.length > 0" style="margin: 40px 0 20px">插槽说明</h3>
            <table v-if="currentComponent.slots && currentComponent.slots.length > 0" class="props-table">
              <thead>
                <tr>
                  <th>插槽名</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="slot in currentComponent.slots" :key="slot.name">
                  <td>
                    <span class="prop-name">{{ slot.name }}</span>
                  </td>
                  <td>{{ slot.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 404 状态 -->
          <div v-else class="component-detail">
            <div class="detail-header">
              <h1>组件未找到</h1>
              <p>抱歉，您访问的组件不存在或已被移除。</p>
            </div>
            <div class="demo-area">
              <h3 class="demo-title">可用的组件</h3>
              <div class="demo-content">
                <ul>
                  <li v-for="component in components" :key="component.name">
                    <NuxtLink :to="`/component/${component.name.toLowerCase()}`">
                      {{ component.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getAllComponents, getComponentByName, getComponentCategories } from "~/utils/components"
import DemoBlock from "~/components/DemoBlock.vue"

// 获取路由参数
const route = useRoute()
const componentName = route.params.name || "Alert"

// 获取组件列表和当前组件
const components = ref([])
const currentComponent = ref(null)

// 页面标题
useHead({
  title: computed(() => {
    if (currentComponent.value) {
      return `${currentComponent.value.title} - Wrjnb UI`
    }
    return "组件详情 - Wrjnb UI"
  }),
  meta: [
    {
      name: "description",
      content: computed(() => {
        if (currentComponent.value) {
          return `${currentComponent.value.description} - Wrjnb UI 组件详情页面`
        }
        return "Wrjnb UI 组件详情页面，包含组件演示、代码示例和属性说明。"
      }),
    },
  ],
})

const categories = await getComponentCategories()
const groupedComponents = ref({})

async function initAllComponents() {
  const all = await getAllComponents()
  components.value = all
  // 分组
  const group = {}
  for (const cat of categories) {
    group[cat] = all.filter((c) => c.category === cat)
  }
  groupedComponents.value = group
  // 当前组件
  if (componentName) {
    const name = String(componentName).charAt(0).toUpperCase() + String(componentName).slice(1)
    currentComponent.value = await getComponentByName(name)
  }
}

await initAllComponents()

// 监听路由变化
watch(
  () => route.params.name,
  async (newName) => {
    if (newName) {
      const name = String(newName).charAt(0).toUpperCase() + String(newName).slice(1)
      currentComponent.value = await getComponentByName(name)
    }
  },
)

// 复制代码功能
const copiedComponentCode = ref(false)
const copyComponentCode = () => {
  if (currentComponent.value && currentComponent.value.code) {
    navigator.clipboard.writeText(currentComponent.value.code).then(() => {
      copiedComponentCode.value = true
      setTimeout(() => (copiedComponentCode.value = false), 1500)
    })
  }
}

async function selectComponent(component) {
  const name = component.name.toLowerCase()
  currentComponent.value = await getComponentByName(name)
  route.params.name = name
  replaceStateUrl(`/component/${name}`)
}
</script>

<style scoped>
.section {
  background: #f5f7fa;
}

.detail-container {
  display: flex;
  gap: 30px;
}

.component-detail {
  flex: 1;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.detail-header {
  margin-bottom: 30px;
}

.detail-header h1 {
  font-size: 2.2rem;
  color: var(--secondary);
  margin-bottom: 10px;
}

.detail-header p {
  color: var(--dark-gray);
  font-size: 1.1rem;
}

.demo-area {
  background: #f8f9fa;
  border-radius: var(--radius);
  padding: 30px;
  margin-bottom: 30px;
}

.demo-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--secondary);
}

.demo-description {
  color: var(--dark-gray);
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.demo-content {
  padding: 20px;
  background: white;
  border-radius: calc(var(--radius) - 4px);
  box-shadow: inset 0 0 0 1px var(--border);
}

.code-section {
  position: relative;
  margin-bottom: 30px;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.code-header h3 {
  font-size: 1.1rem;
  color: var(--secondary);
}

.copy-btn {
  background: #f1f8ff;
  color: var(--primary);
  border: 1px solid #d1e5ff;
  border-radius: 4px;
  padding: 5px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: var(--transition);
}

.copy-btn:hover {
  background: #e1f0ff;
}

pre {
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
}

code {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.9rem;
}

.props-table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
}

.props-table th {
  background: #f5f7fa;
  text-align: left;
  padding: 12px 15px;
  font-weight: 600;
  color: var(--secondary);
}

.props-table td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}

.prop-name {
  font-family: monospace;
  color: #d73a49;
}

.prop-type {
  font-family: monospace;
  color: #6f42c1;
}

.prop-default {
  font-family: monospace;
  color: #005cc5;
}

/* Sidebar */
.sidebar {
  width: 260px;
  position: sticky;
  top: 78px;
  align-self: flex-start;
  max-height: calc(100vh - 78px);
  overflow-y: auto;
  padding-top: 40px;
  padding-bottom: 20px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 0px;
  }
}

.sidebar-card {
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
  margin-bottom: 20px;
}

.sidebar-title {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--secondary);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.component-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.component-list li {
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  list-style: none;
}

.component-link {
  text-decoration: none;
  color: var(--dark-gray);
  display: flex;
  align-items: center;
  padding: 7px 10px 7px 0;
  border-radius: 6px;
  border-left: 3px solid transparent;
  font-size: 1rem;
  transition: background 0.18s, color 0.18s, border 0.18s;
  position: relative;
  width: 100%;
  padding-left: 10px;
  cursor: pointer;
}

.component-link:hover {
  background: #f5f7fa;
  color: var(--primary);
}

.component-link.active {
  color: var(--primary);
  background: #eaf6ff;
  font-weight: 600;
}

.category-title {
  display: flex;
  align-items: center;
  font-size: 0.98rem;
  font-weight: 500;
  color: #888;
  margin: 22px 0 8px 0;
  padding-left: 0;
  letter-spacing: 0.5px;
}
.category-title::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 16px;
  border-radius: 2px;
  margin-right: 8px;
  background: linear-gradient(135deg, var(--primary), #6ec6ff 80%);
}
.category-group:not(:first-child) {
  margin-top: 28px;
}

/* Responsive */
@media (max-width: 768px) {
  .detail-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    max-height: none;
    overflow-y: visible;
  }
}
</style>
