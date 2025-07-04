<template>
  <section class="home-hero glass">
    <div class="hero-brand">
      <img
        class="avatar"
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="作者头像"
      />
      <div>
        <h1>
          <span class="logo-icon">🧩</span>
          <span class="logo-text">wrjnb</span>
        </h1>
        <p class="slogan">极简 · 现代 · 玻璃拟态风格的 Vue3 组件库</p>
        <div class="author-meta">
          <span>By <b>你的昵称</b></span>
          <a class="github-btn" href="https://github.com/" target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84
              9.64.5.09.68-.22.68-.48
              0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62
              1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11
              2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07
              0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75
              1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33
              2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75
              0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01
              2.8 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2
              12 2Z"
                fill="#7f5fff"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div class="features-row">
      <div class="feature glass">
        <span class="feature-icon">🎨</span>
        <div>
          <h3>玻璃拟态美学</h3>
          <p>全站毛玻璃、渐变、圆角，极致现代感</p>
        </div>
      </div>
      <div class="feature glass">
        <span class="feature-icon">⚡</span>
        <div>
          <h3>复制即用</h3>
          <p>无需安装，直接复制源码到你的项目</p>
        </div>
      </div>
      <div class="feature glass">
        <span class="feature-icon">🧩</span>
        <div>
          <h3>独立组件</h3>
          <p>每个组件零依赖，互不耦合，灵活组合</p>
        </div>
      </div>
      <div class="feature glass">
        <span class="feature-icon">💡</span>
        <div>
          <h3>Vue3 + Composition API</h3>
          <p>拥抱最新技术栈，代码更优雅</p>
        </div>
      </div>
    </div>

    <div class="quickstart glass">
      <h2>快速开始</h2>
      <ol>
        <li>浏览 <b>组件列表</b>，选择你需要的组件</li>
        <li>点击 <b>查看源码</b>，一键复制 .vue 文件</li>
        <li>粘贴到你的项目，直接使用</li>
      </ol>
      <wrjnb-button
        type="primary"
        size="large"
        @click="$router.push('/component')"
        >立即体验</wrjnb-button
      >
    </div>

    <div class="showcase-row">
      <wrjnb-card title="按钮示例" class="showcase-card">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap">
          <wrjnb-button type="primary">主色按钮</wrjnb-button>
          <wrjnb-button>默认按钮</wrjnb-button>
          <wrjnb-button type="success">成功</wrjnb-button>
          <wrjnb-button type="danger">危险</wrjnb-button>
        </div>
      </wrjnb-card>
      <wrjnb-card title="输入框示例" class="showcase-card">
        <wrjnb-input placeholder="请输入内容" style="max-width: 180px" />
      </wrjnb-card>
      <wrjnb-card title="开关示例" class="showcase-card">
        <wrjnb-switch v-model="switchVal" />
      </wrjnb-card>
      <wrjnb-card title="卡片示例" class="showcase-card">
        这是一张卡片内容
      </wrjnb-card>
    </div>

    <div class="faq glass">
      <h2>常见问题</h2>
      <ul>
        <li>
          <b>Q: 可以商用吗？</b>
          <br />A: 当然可以，MIT 协议，放心使用。
        </li>
        <li>
          <b>Q: 如何集成到我的项目？</b>
          <br />A: 直接复制源码到你的项目，无需 npm 安装。
        </li>
        <li>
          <b>Q: 支持哪些浏览器？</b>
          <br />A: 现代主流浏览器（Chrome/Edge/Firefox/Safari）。
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const switchVal = ref(false);
</script>

<style scoped>
.home-hero {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 32px;
  box-shadow: 0 8px 32px #7f5fff22;
  padding: 2.5rem 2rem 2.5rem 2rem;
  backdrop-filter: blur(16px) saturate(1.2);
}
.hero-brand {
  display: flex;
  align-items: center;
  gap: 2.2rem;
  margin-bottom: 1.5rem;
}
.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  box-shadow: 0 2px 12px #7f5fff33;
  border: 3px solid #fff;
  object-fit: cover;
}
.logo-icon {
  font-size: 2.2rem;
  margin-right: 0.3em;
  filter: drop-shadow(0 2px 6px #7f5fff33);
}
.logo-text {
  font-family: "Inter", "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
  color: #7f5fff;
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: 2px;
}
.slogan {
  font-size: 1.18rem;
  color: #7f5fff;
  font-weight: 600;
  margin-bottom: 0.7em;
  letter-spacing: 0.02em;
}
.author-meta {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 0.5em;
}
.github-btn {
  display: flex;
  align-items: center;
  gap: 0.3em;
  background: linear-gradient(90deg, #7f5fff 0%, #5aefff 100%);
  color: #fff;
  border-radius: 8px;
  padding: 0.3em 1em;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  box-shadow: 0 2px 8px #7f5fff22;
  transition: background 0.2s, color 0.2s;
}
.github-btn:hover {
  background: linear-gradient(90deg, #5aefff 0%, #7f5fff 100%);
  color: #fff;
}
.features-row {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.feature {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 18px;
  box-shadow: 0 2px 12px #7f5fff11;
  padding: 1.2rem 1.5rem;
  min-width: 220px;
  max-width: 320px;
  flex: 1 1 220px;
  border: 1px solid #e0e7ff;
  backdrop-filter: blur(12px);
}
.feature-icon {
  font-size: 2.1rem;
  color: #7f5fff;
  filter: drop-shadow(0 2px 8px #7f5fff33);
}
.feature h3 {
  margin: 0 0 0.2em 0;
  font-size: 1.13rem;
  color: #7f5fff;
  font-weight: 700;
}
.feature p {
  margin: 0;
  color: #555;
  font-size: 1.01rem;
}
.quickstart {
  margin: 2.5rem 0 1.5rem 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 18px;
  box-shadow: 0 2px 12px #7f5fff11;
  padding: 2rem 2.5rem;
  border: 1px solid #e0e7ff;
  text-align: center;
  backdrop-filter: blur(12px);
}
.quickstart h2 {
  color: #7f5fff;
  font-size: 1.25rem;
  margin-bottom: 1em;
}
.quickstart ol {
  text-align: left;
  margin: 0 auto 1.2em auto;
  max-width: 420px;
  color: #555;
  font-size: 1.05rem;
  padding-left: 1.2em;
}
.showcase-row {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2.5rem 0 1.5rem 0;
}
.showcase-card {
  min-width: 180px;
  max-width: 240px;
  flex: 1 1 180px;
}
.faq {
  margin: 2.5rem 0 0 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 18px;
  box-shadow: 0 2px 12px #7f5fff11;
  padding: 2rem 2.5rem;
  border: 1px solid #e0e7ff;
  backdrop-filter: blur(12px);
}
.faq h2 {
  color: #7f5fff;
  font-size: 1.18rem;
  margin-bottom: 1em;
}
.faq ul {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #555;
  font-size: 1.05rem;
}
.faq li {
  margin-bottom: 1.1em;
}
@media (max-width: 900px) {
  .home-hero {
    padding: 1.2rem 0.5rem;
  }
  .features-row,
  .showcase-row {
    flex-direction: column;
    gap: 1.2rem;
  }
  .quickstart,
  .faq {
    padding: 1.2rem 0.7rem;
  }
}
</style>
