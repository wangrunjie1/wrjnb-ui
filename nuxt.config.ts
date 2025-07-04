// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  devServer: {
    port: 8887,
  },
  modules: ["@element-plus/nuxt"],
  elementPlus: {
    /** Options */
  },
  css: [
    "element-plus/dist/index.css",
    "@/assets/global.css", // 预留全局样式
  ],
  build: {
    transpile: ["element-plus"],
  },
});
