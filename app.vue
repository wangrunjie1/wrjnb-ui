<template>
  <el-config-provider :locale="zhCn" :size="size" :z-index="3000" :namespace="'el'" :button="{ autoInsertSpace: true }">
    <div class="wrjnb-app">
      <header class="wrjnb-header glass">
        <div class="logo">
          <span class="logo-icon">🧩</span>
          <span class="logo-text">wrjnb</span>
        </div>
        <nav>
          <NuxtLink to="/" exact-active-class="active">首页</NuxtLink>
          <NuxtLink to="/component" exact-active-class="active">组件</NuxtLink>
        </nav>
      </header>
      <main>
        <NuxtPage />
      </main>
      <footer class="wrjnb-footer glass">
        <span>© 2024 wrjnb 组件库</span>
        <span class="footer-links">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <span>|</span>
          <a href="mailto:hi@wrjnb.com">联系作者</a>
        </span>
      </footer>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
// @ts-expect-error: element-plus locale 没有类型声明
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue'
const size = ref('default')
</script>

<style scoped>
.wrjnb-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #e0e7ff 0%, #f5f7fa 100%);
  transition: background 0.3s;
}
.wrjnb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 68px;
  border-bottom: 1px solid #e0e7ff77;
  box-shadow: 0 2px 24px #7f5fff22;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px) saturate(1.2);
}
.logo {
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #7f5fff;
  user-select: none;
  text-shadow: 0 2px 12px #7f5fff33;
}
.logo-icon {
  font-size: 1.8rem;
  margin-right: 0.3em;
  filter: drop-shadow(0 2px 6px #7f5fff33);
}
.logo-text {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
}
nav {
  display: flex;
  gap: 1.5rem;
}
nav a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.2em 0.9em;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  font-size: 1.08rem;
  backdrop-filter: blur(4px);
}
nav a.active, nav a.router-link-active {
  background: linear-gradient(90deg, #7f5fff22 0%, #5aefff22 100%);
  color: #7f5fff;
}
nav a:hover {
  background: linear-gradient(90deg, #7f5fff33 0%, #5aefff33 100%);
  color: #7f5fff;
}
main {
  flex: 1;
  padding: 2.5rem 1rem 1.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background: none;
}
.wrjnb-footer {
  text-align: center;
  padding: 1.2rem 0 0.7rem 0;
  color: #7f5fff;
  font-size: 1rem;
  background: rgba(255,255,255,0.7);
  border-top: 1px solid #e0e7ff77;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
  backdrop-filter: blur(12px) saturate(1.2);
}
.footer-links {
  margin-top: 0.2em;
  font-size: 0.98em;
  color: #7f5fff;
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.footer-links a {
  color: #7f5fff;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: #5aefff;
}
.glass {
  background: rgba(255,255,255,0.7) !important;
  box-shadow: 0 8px 32px #7f5fff22 !important;
  backdrop-filter: blur(16px) saturate(1.2) !important;
}
@media (max-width: 900px) {
  .wrjnb-header {
    flex-direction: column;
    height: auto;
    padding: 1rem 0.5rem;
    gap: 0.5rem;
  }
  main {
    padding: 1rem 0.2rem;
  }
}
</style>