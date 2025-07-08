// 只保留 Button、Card、Input、Switch 四个组件
const componentConfigs = {
  Button: () =>
    import("~/components/Wrjnb/Button/usage").then((m) => m.buttonUsage),
  Card: () => import("~/components/Wrjnb/Card/usage").then((m) => m.cardUsage),
  Input: () =>
    import("~/components/Wrjnb/Input/usage").then((m) => m.inputUsage),
  Switch: () =>
    import("~/components/Wrjnb/Switch/usage").then((m) => m.switchUsage),
  Tag: () => import("~/components/Wrjnb/Tag/usage").then((m) => m.tagUsage),
  Alert: () =>
    import("~/components/Wrjnb/Alert/usage").then((m) => m.alertUsage),
  Modal: () =>
    import("~/components/Wrjnb/Modal/usage").then((m) => m.modalUsage),
  Badge: () =>
    import("~/components/Wrjnb/Badge/usage").then((m) => m.badgeUsage),
  Progress: () =>
    import("~/components/Wrjnb/Progress/usage").then((m) => m.progressUsage),
  Tooltip: () =>
    import("~/components/Wrjnb/Tooltip/usage").then((m) => m.tooltipUsage),
  Divider: () =>
    import("~/components/Wrjnb/Divider/usage").then((m) => m.dividerUsage),
  Skeleton: () =>
    import("~/components/Wrjnb/Skeleton/usage").then((m) => m.skeletonUsage),
  Empty: () =>
    import("~/components/Wrjnb/Empty/usage").then((m) => m.emptyUsage),
  Tabs: () => import("~/components/Wrjnb/Tabs/usage").then((m) => m.tabsUsage),
};

import { markRaw } from 'vue'

// 获取所有组件列表
export async function getAllComponents(): Promise<ComponentUsage[]> {
  const components: ComponentUsage[] = [];

  for (const [name, importFn] of Object.entries(componentConfigs)) {
    try {
      const config = await importFn();
      // 修复：markRaw 包裹 demo，防止组件被响应式代理
      if (config.examples) {
        config.examples = config.examples.map(ex => ({
          ...ex,
          demo: markRaw(ex.demo)
        }))
      }
      components.push(config);
    } catch (error) {
      console.warn(`Failed to load component config for ${name}:`, error);
    }
  }

  return components;
}

// 根据组件名获取单个组件配置
export async function getComponentByName(
  name: string
): Promise<ComponentUsage | null> {
  const importFn = componentConfigs[name as keyof typeof componentConfigs];
  if (!importFn) {
    return null;
  }

  try {
    const config = await importFn();
    // 修复：markRaw 包裹 demo，防止组件被响应式代理
    if (config.examples) {
      config.examples = config.examples.map(ex => ({
        ...ex,
        demo: markRaw(ex.demo)
      }))
    }
    return config;
  } catch (error) {
    console.warn(`Failed to load component config for ${name}:`, error);
    return null;
  }
}

// 获取组件分类
export function getComponentCategories(): string[] {
  return [
    "基础组件",
    "表单组件",
    "数据展示",
    "反馈组件",
    "导航组件",
    "布局组件",
  ];
}

// 根据分类获取组件
export async function getComponentsByCategory(
  category: string
): Promise<ComponentUsage[]> {
  const allComponents = await getAllComponents();
  return allComponents.filter((component) => component.category === category);
}
