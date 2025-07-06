<template>
  <div>
    <!-- Component Detail Section -->
    <section class="section" style="background: #f5f7fa; padding-top: 40px">
      <div class="container">
        <div class="detail-container">
          <!-- Sidebar -->
          <div class="sidebar">
            <div class="sidebar-card">
              <h3 class="sidebar-title">组件列表</h3>
              <ul class="component-list">
                <li v-for="component in components" :key="component.name">
                  <NuxtLink
                    :to="`/component/${component.name.toLowerCase()}`"
                    class="component-link"
                    :class="{
                      active:
                        $route.params.name === component.name.toLowerCase(),
                    }"
                  >
                    {{ component.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="sidebar-card">
              <h3 class="sidebar-title">设计资源</h3>
              <ul class="component-list">
                <li>
                  <NuxtLink to="/design/principles" class="component-link"
                    >设计原则</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/design/colors" class="component-link"
                    >色彩系统</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/design/layout" class="component-link"
                    >布局指南</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/design/icons" class="component-link"
                    >图标库</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Component Detail -->
          <div v-if="currentComponent" class="component-detail">
            <div class="detail-header">
              <h1>{{ currentComponent.title }}</h1>
              <p>{{ currentComponent.description }}</p>
            </div>

            <div
              v-for="(example, index) in currentComponent.examples"
              :key="index"
              class="demo-area"
            >
              <h3 class="demo-title">{{ example.title }}</h3>
              <p class="demo-description">{{ example.description }}</p>
              <div class="demo-content">
                <component
                  v-if="currentComponentInstance"
                  :is="currentComponentInstance"
                  v-bind="getExampleProps(example)"
                />
              </div>
            </div>

            <div
              v-for="(example, index) in currentComponent.examples"
              :key="`code-${index}`"
              class="code-section"
            >
              <div class="code-header">
                <h3>{{ example.title }} - 示例代码</h3>
                <button class="copy-btn" @click="copyCode(`code-${index}`)">
                  <i class="far fa-copy"></i> 复制代码
                </button>
              </div>
              <pre><code :id="`code-${index}`" class="html">{{ example.code }}</code></pre>
            </div>

            <div
              v-for="(example, index) in currentComponent.examples"
              :key="`vue-${index}`"
              class="code-section"
            >
              <div class="code-header">
                <h3>{{ example.title }} - Vue 组件代码</h3>
                <button class="copy-btn" @click="copyCode(`vue-${index}`)">
                  <i class="far fa-copy"></i> 复制代码
                </button>
              </div>
              <pre><code :id="`vue-${index}`" class="javascript">{{ example.vueCode }}</code></pre>
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

            <h3
              v-if="currentComponent.events.length > 0"
              style="margin: 40px 0 20px"
            >
              事件说明
            </h3>
            <table
              v-if="currentComponent.events.length > 0"
              class="props-table"
            >
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
                    <NuxtLink
                      :to="`/component/${component.name.toLowerCase()}`"
                    >
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
import { getAllComponents, getComponentByName } from "~/utils/components";
import { getComponent, parseExampleProps } from "~/utils/componentRenderer";

// 获取路由参数
const route = useRoute();
const componentName = route.params.name;

// 页面标题
useHead({
  title: computed(() => {
    if (currentComponent.value) {
      return `${currentComponent.value.title} - VueComponents`;
    }
    return "组件详情 - VueComponents";
  }),
  meta: [
    {
      name: "description",
      content: computed(() => {
        if (currentComponent.value) {
          return `${currentComponent.value.description} - VueComponents 组件详情页面`;
        }
        return "VueComponents 组件详情页面，包含组件演示、代码示例和属性说明。";
      }),
    },
  ],
});

// 获取组件列表和当前组件
const components = ref([]);
const currentComponent = ref(null);
const currentComponentInstance = ref(null);

onMounted(async () => {
  try {
    // 获取所有组件
    components.value = await getAllComponents();

    // 如果有组件名参数，获取当前组件
    if (componentName) {
      const name =
        String(componentName).charAt(0).toUpperCase() +
        String(componentName).slice(1);
      currentComponent.value = await getComponentByName(name);
      currentComponentInstance.value = getComponent(name);
    }
  } catch (error) {
    console.error("Failed to load components:", error);
  }
});

// 监听路由变化
watch(
  () => route.params.name,
  async (newName) => {
    if (newName) {
      const name =
        String(newName).charAt(0).toUpperCase() + String(newName).slice(1);
      currentComponent.value = await getComponentByName(name);
      currentComponentInstance.value = getComponent(name);
    }
  }
);

// 获取示例属性
const getExampleProps = (example) => {
  return parseExampleProps(example);
};

// 复制代码功能
const copyCode = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const text = element.textContent;
    navigator.clipboard.writeText(text).then(() => {
      // 显示复制成功提示
      const button = event.target.closest(".copy-btn");
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check"></i> 已复制';
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    });
  }
};
</script>

<style scoped>
.section {
  padding: 80px 0;
}

.detail-container {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.component-detail {
  flex: 1;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 30px;
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
  top: 100px;
  align-self: flex-start;
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
}

.component-list li {
  margin-bottom: 10px;
}

.component-link {
  text-decoration: none;
  color: var(--dark-gray);
  display: block;
  padding: 8px 0;
  transition: var(--transition);
  border-left: 3px solid transparent;
  padding-left: 10px;
}

.component-link:hover {
  color: var(--primary);
}

.component-link.active {
  color: var(--primary);
  border-left: 3px solid var(--primary);
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .detail-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}
</style>
