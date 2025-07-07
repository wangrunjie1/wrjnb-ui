<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <span class="tagline">复制即用 · 无依赖</span>
        <h1>构建现代Web应用</h1>
        <p>
          Wrjnb UI 提供高质量的 Vue3
          组件，可直接复制到您的项目中，无需额外依赖或复杂配置。
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/component" class="btn">立即使用</NuxtLink>
          <NuxtLink to="/component" class="btn btn-outline">查看组件</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container">
      <div class="features">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-copy"></i>
          </div>
          <h3>复制即用</h3>
          <p>所有组件均可直接复制代码到您的项目中，无需安装依赖</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3>轻量高效</h3>
          <p>零第三方依赖，组件经过极致优化，不影响应用性能</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-palette"></i>
          </div>
          <h3>高度可定制</h3>
          <p>使用纯CSS变量设计，轻松定制组件样式以适应您的品牌</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getAllComponents } from "~/utils/components";
import { getComponent } from "~/utils/componentRenderer";

// 页面标题
useHead({
  title: "Wrjnb UI - 复制即用的前端组件库",
  meta: [
    {
      name: "description",
      content:
        "Wrjnb UI 提供高质量的 Vue3 组件，可直接复制到您的项目中，无需额外依赖或复杂配置。",
    },
  ],
});

// 获取组件列表
const components = ref([]);
const componentInstances = ref({});

onMounted(async () => {
  try {
    components.value = await getAllComponents();

    // 预加载所有组件实例
    components.value.forEach((component) => {
      componentInstances.value[component.name] = getComponent(component.name);
    });
  } catch (error) {
    console.error("Failed to load components:", error);
  }
});

// 获取组件预览属性
const getPreviewProps = (componentName) => {
  const propsMap = {
    Button: { type: "primary", children: "主要按钮" },
    Card: { title: "卡片标题", children: "卡片内容" },
    Input: { placeholder: "请输入内容" },
    Switch: { modelValue: true },
    Tag: { type: "primary", children: "标签" },
    Alert: { type: "primary", children: "这是一条警告信息" },
  };

  return propsMap[componentName] || {};
};
</script>

<style scoped>
.hero {
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: var(--secondary);
}

.hero p {
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: var(--dark-gray);
}

.tagline {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 600;
  margin-bottom: 30px;
}

.cta-buttons {
  margin-top: 40px;
}

.btn {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 12px 30px;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  margin-left: 15px;
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}

.features {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
  flex-wrap: wrap;
}

.feature-card {
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 30px;
  width: 300px;
  text-align: center;
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  font-size: 48px;
  color: var(--primary);
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--secondary);
}

.section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 15px;
}

.section-title p {
  font-size: 1.2rem;
  color: var(--dark-gray);
  max-width: 700px;
  margin: 0 auto;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.component-card {
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: var(--transition);
}

.component-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.component-preview {
  height: 180px;
  background: linear-gradient(45deg, #f5f7fa, #e4edf5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.preview-content {
  width: 100%;
  max-width: 200px;
}

.component-info {
  padding: 20px;
}

.component-info h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--secondary);
}

.component-info p {
  color: var(--dark-gray);
  margin-bottom: 15px;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .features {
    flex-direction: column;
    align-items: center;
  }

  .feature-card {
    width: 100%;
    max-width: 350px;
  }
}
</style>
