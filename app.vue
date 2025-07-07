<template>
  <div id="app">
    <!-- Header -->
    <header>
      <div class="container">
        <nav class="navbar">
          <NuxtLink to="/" class="logo">
            <i class="fas fa-cube logo-icon"></i>
            Wrjnb UI
          </NuxtLink>
          <div class="nav-links">
            <NuxtLink
              to="/"
              class="nav-link"
              :class="{ active: $route.path === '/' }"
              >首页</NuxtLink
            >
            <NuxtLink
              to="/component"
              class="nav-link"
              :class="{ active: $route.path === '/component' }"
              >组件</NuxtLink
            >
            <NuxtLink
              to="/docs"
              class="nav-link"
              :class="{ active: $route.path === '/docs' }"
              >文档</NuxtLink
            >
            <NuxtLink
              to="/examples"
              class="nav-link"
              :class="{ active: $route.path === '/examples' }"
              >示例</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="nav-link"
              :class="{ active: $route.path === '/about' }"
              >关于</NuxtLink
            >
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-col">
            <h3>Wrjnb UI</h3>
            <p>
              提供高质量的Vue3组件，可直接复制到您的项目中，无需额外依赖。——Wrjnb
              UI
            </p>
          </div>

          <div class="footer-col">
            <h3>资源</h3>
            <ul class="footer-links">
              <li><NuxtLink to="/docs">文档</NuxtLink></li>
              <li><NuxtLink to="/component">组件</NuxtLink></li>
              <li><NuxtLink to="/examples">示例</NuxtLink></li>
              <li><NuxtLink to="/design">设计资源</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>社区</h3>
            <ul class="footer-links">
              <li>
                <a
                  href="https://github.com/wangrunjie1/wrjnb-ui"
                  target="_blank"
                  >GitHub</a
                >
              </li>
              <li><a href="#" target="_blank">问题反馈</a></li>
              <li><a href="#" target="_blank">贡献指南</a></li>
              <li><a href="#" target="_blank">博客</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>帮助</h3>
            <ul class="footer-links">
              <li><NuxtLink to="/faq">常见问题</NuxtLink></li>
              <li><NuxtLink to="/changelog">更新日志</NuxtLink></li>
              <li><NuxtLink to="/contact">联系我们</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="copyright">
          <p>© 2025 Wrjnb UI. 开源协议 MIT License.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
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
</script>

<style>
@import "~/assets/global.css";

:root {
  --primary: #3498db;
  --primary-dark: #2980b9;
  --secondary: #2c3e50;
  --accent: #e74c3c;
  --light: #f8f9fa;
  --gray: #e0e0e0;
  --dark-gray: #7f8c8d;
  --border: #e0e0e0;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  --radius: 8px;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
header {
  background-color: white;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  color: var(--secondary);
  text-decoration: none;
}

.logo-icon {
  color: var(--primary);
  font-size: 28px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--secondary);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.active {
  color: var(--primary);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--primary);
  border-radius: 2px;
}

/* Main Content */
main {
  min-height: calc(100vh - 200px);
}

/* Footer */
footer {
  background: var(--secondary);
  color: white;
  padding: 60px 0 30px;
  margin-top: 80px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col {
  min-width: 200px;
}

.footer-col h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #fff;
}

.footer-col p {
  color: #bdc3c7;
  max-width: 280px;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: var(--transition);
}

.footer-links a:hover {
  color: white;
}

.copyright {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #bdc3c7;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    gap: 20px;
  }

  .footer-content {
    flex-direction: column;
    gap: 30px;
  }

  .footer-col {
    min-width: auto;
  }
}
</style>
