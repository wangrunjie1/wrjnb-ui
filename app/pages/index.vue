<template>
  <div>
    <!-- 顶部品牌区 -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-left">
          <img src="~assets/images/logo.png" class="logo-img" alt="wrjnb ui" />
          <h1 class="hero-title">Wrjnb UI</h1>
          <p class="hero-subtitle">高颜值 · 极致轻量 · 复制即用的 Vue3 组件库</p>
          <div class="hero-actions">
            <NuxtLink to="/component" class="btn btn-primary btn-lg"> <i class="fas fa-rocket"></i> 立即体验 </NuxtLink>
            <a href="https://github.com/wangrunjie1/wrjnb-ui" target="_blank" class="btn btn-outline btn-lg">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
          <div class="hero-badges">
            <img src="https://img.shields.io/github/stars/wangrunjie1/wrjnb-ui?style=social" alt="GitHub stars" />
            <img src="https://img.shields.io/npm/dm/wrjnb-ui" alt="NPM downloads" />
            <span class="badge-mit">MIT License</span>
          </div>
        </div>
        <div class="hero-right">
          <!-- 组件预览卡片区 -->
          <div class="component-cards">
            <div class="component-card">
              <div class="card-title">Button</div>
              <WrjnbButton type="primary">按钮</WrjnbButton>
            </div>
            <div class="component-card">
              <div class="card-title">Input</div>
              <WrjnbInput placeholder="请输入..." style="width: 160px" />
            </div>
            <div class="component-card">
              <div class="card-title">Tag</div>
              <WrjnbTag type="success">标签</WrjnbTag>
            </div>
            <div class="component-card">
              <div class="card-title">Switch</div>
              <WrjnbSwitch v-model="switchVal" />
            </div>
            <!-- 可继续添加更多组件预览 -->
          </div>
        </div>
      </div>
    </section>

    <!-- 卖点区 -->
    <section class="features-section">
      <div class="container features">
        <div class="feature">
          <div class="feature-icon feature-bg1">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="feature-title">极致轻量</div>
          <div class="feature-desc">无第三方依赖，体积小，加载快。</div>
        </div>
        <div class="feature">
          <div class="feature-icon feature-bg2">
            <i class="fas fa-palette"></i>
          </div>
          <div class="feature-title">高颜值</div>
          <div class="feature-desc">现代美观，支持 CSS 变量，轻松定制。</div>
        </div>
        <div class="feature">
          <div class="feature-icon feature-bg3">
            <i class="fas fa-copy"></i>
          </div>
          <div class="feature-title">复制即用</div>
          <div class="feature-desc">所有组件可直接复制到你的项目，无需配置。</div>
        </div>
        <div class="feature">
          <div class="feature-icon feature-bg4">
            <i class="fas fa-code"></i>
          </div>
          <div class="feature-title">TypeScript 支持</div>
          <div class="feature-desc">类型安全，开发体验极佳。</div>
        </div>
      </div>
    </section>

    <!-- 底部引导 -->
    <section class="cta-section">
      <div class="container cta-content">
        <h2>立即体验 Wrjnb UI，让开发更高效！</h2>
        <NuxtLink to="/component" class="btn btn-primary btn-xl"> <i class="fas fa-magic"></i> 开始使用 </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue"
import WrjnbButton from "~/components/Wrjnb/Button/index.vue"
import WrjnbInput from "~/components/Wrjnb/Input/index.vue"
import WrjnbTag from "~/components/Wrjnb/Tag/index.vue"
import WrjnbSwitch from "~/components/Wrjnb/Switch/index.vue"

const switchVal = ref(true)

useHead({
  title: "Wrjnb UI - 高颜值 Vue3 组件库",
  meta: [
    {
      name: "description",
      content: "Wrjnb UI 提供高质量的 Vue3 组件，极致轻量、现代美观、复制即用。",
    },
  ],
})
</script>

<style scoped>
/* 顶部品牌区 */
.hero {
  background: linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%);
  padding: 0;
  min-height: 520px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, #aee1ff 0%, #e0e7ff 80%);
  z-index: 0;
  opacity: 0.7;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 1;
}
.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 520px;
  gap: 40px;
}
.hero-left {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}
.logo-img {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin-bottom: 8px;
  box-shadow: 0 4px 16px #b3e5fc55;
}
.hero-title {
  font-size: 3.2rem;
  font-weight: 900;
  color: #22223b;
  margin-bottom: 0;
  letter-spacing: 2px;
}
.hero-subtitle {
  font-size: 1.25rem;
  color: #4f5d75;
  margin-bottom: 18px;
  font-weight: 500;
}
.hero-actions {
  display: flex;
  gap: 18px;
  margin-bottom: 10px;
}
.btn {
  display: inline-block;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.18s;
  border: none;
  cursor: pointer;
  font-size: 1.08rem;
  padding: 12px 32px;
}
.btn-lg {
  font-size: 1.15rem;
  padding: 15px 38px;
}
.btn-xl {
  font-size: 1.25rem;
  padding: 18px 48px;
}
.btn-primary {
  background: linear-gradient(90deg, #409eff 0%, #34d399 100%);
  color: #fff;
  box-shadow: 0 2px 8px #409eff22;
}
.btn-primary:hover {
  background: linear-gradient(90deg, #34d399 0%, #409eff 100%);
  transform: translateY(-2px) scale(1.04);
}
.btn-outline {
  background: transparent;
  border: 2px solid #409eff;
  color: #409eff;
}
.btn-outline:hover {
  background: #409eff;
  color: #fff;
}
.hero-badges {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
}
.badge-mit {
  background: #eaf6ff;
  color: #409eff;
  padding: 6px 16px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1rem;
}
.hero-right {
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.component-cards {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  justify-content: center;
}
.component-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px #409eff18;
  padding: 32px 24px 24px;
  min-width: 180px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.18s, transform 0.18s;
}
.component-card:hover {
  box-shadow: 0 8px 32px #409eff33;
  transform: translateY(-6px) scale(1.04);
}
.card-title {
  font-size: 1.08rem;
  color: #409eff;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.features-section {
  background: linear-gradient(120deg, #f0fdfa 0%, #e0e7ff 100%);
  padding: 80px 0 60px;
}
.features {
  /* display: flex;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  flex-wrap: wrap;
}
.feature {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px #409eff11;
  padding: 38px 32px 30px;
  width: 260px;
  text-align: center;
  transition: box-shadow 0.18s, transform 0.18s;
  position: relative;
  overflow: hidden;
}
.feature:hover {
  box-shadow: 0 8px 32px #409eff22;
  transform: translateY(-8px) scale(1.03);
}
.feature-icon {
  font-size: 2.3rem;
  color: #fff;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 18px;
}
.feature-bg1 {
  background: linear-gradient(135deg, #409eff 60%, #34d399 100%);
}
.feature-bg2 {
  background: linear-gradient(135deg, #a78bfa 60%, #f472b6 100%);
}
.feature-bg3 {
  background: linear-gradient(135deg, #fbbf24 60%, #f87171 100%);
}
.feature-bg4 {
  background: linear-gradient(135deg, #34d399 60%, #60a5fa 100%);
}
.feature-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: #22223b;
  margin-bottom: 8px;
}
.feature-desc {
  color: #4f5d75;
  font-size: 1rem;
}
.cta-section {
  background: #fff;
  padding: 60px 0 40px;
  text-align: center;
}
.cta-content h2 {
  font-size: 2.1rem;
  color: #409eff;
  margin-bottom: 28px;
  font-weight: 800;
  letter-spacing: 1px;
}
@media (max-width: 1100px) {
  .hero-content {
    flex-direction: column;
    min-height: unset;
    gap: 32px;
  }
  .hero-left,
  .hero-right {
    align-items: center;
  }
}
@media (max-width: 700px) {
  .hero-title {
    font-size: 2.1rem;
  }
  .hero-content {
    gap: 18px;
  }
  .component-cards {
    gap: 14px;
  }
  .features {
    gap: 18px;
  }
  .feature {
    width: 90%;
    min-width: 180px;
  }
}
</style>
