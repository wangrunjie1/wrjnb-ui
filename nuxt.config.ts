// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  devServer: {
    port: 8887,
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "wrjnb 组件库",
      meta: [
        { charset: "utf-8" },
        { name: "renderer", content: "webkit" },
        { name: "force-rendering", content: "webkit" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
        },
        // SEO
        { name: "author", content: "wrjnb" },
        {
          name: "keywords",
          content: "Vue3, 组件库, UI, Wrjnb, 前端, ts, scss",
        },
        {
          name: "description",
          content: "Wrjnb 组件库，提供高质量、易用的 Vue3 组件。",
        },

        // PWA - Add to home screen
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "white" },
        { name: "apple-mobile-web-app-title", content: "wrjnb UI" },
      ],
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

  modules: ["@nuxtjs/sitemap", "@nuxtjs/robots"],
});