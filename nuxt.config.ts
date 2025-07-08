// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  devServer: {
    port: 8887,
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
        },
      ],
      script: [
        {
          src:
            process.env.NODE_ENV === "production"
              ? "https://hm.baidu.com/hm.js?f4e09a1bc7ff3921b0ef21ee00d12f91"
              : "",
        },
      ],
    },
  },
  css: [
    "@/assets/global.css", // 全局样式
  ],
});
