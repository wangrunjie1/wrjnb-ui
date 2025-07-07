import { defineAsyncComponent } from "vue";

// 组件映射 - 直接导入组件以确保样式正确加载
const componentMap = {
  Button: defineAsyncComponent(
    () => import("~/components/Wrjnb/Button/index.vue")
  ),
  Card: defineAsyncComponent(() => import("~/components/Wrjnb/Card/index.vue")),
  Input: defineAsyncComponent(
    () => import("~/components/Wrjnb/Input/index.vue")
  ),
  Switch: defineAsyncComponent(
    () => import("~/components/Wrjnb/Switch/index.vue")
  ),
};

// 获取组件
export function getComponent(name: string) {
  return componentMap[name as keyof typeof componentMap] || null;
}
