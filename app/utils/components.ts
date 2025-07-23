// 自动扫描 Wrjnb 组件 usage.ts
const modules = import.meta.glob("~/components/Wrjnb/*/usage.ts");
import { markRaw } from "vue";

export async function getAllComponents(): Promise<ComponentUsage[]> {
  const components: ComponentUsage[] = [];
  for (const path in modules) {
    const mod = (await modules[path]()) as Record<string, unknown>;
    // usage.ts 默认导出如：export const xxxUsage
    const usage = Object.values(mod)[0] as ComponentUsage | undefined;
    if (usage && usage.name && usage.title) {
      // markRaw 包裹 demo，防止组件被响应式代理
      if (usage.examples) {
        usage.examples = usage.examples.map((ex: any) => ({
          ...ex,
          demo: markRaw(ex.demo),
        }));
      }
      components.push(usage);
    }
  }
  return components;
}

export async function getComponentByName(
  name: string
): Promise<ComponentUsage | null> {
  for (const path in modules) {
    // 目录名即组件名，忽略大小写
    const match = path.match(/Wrjnb\/(.*?)\//);
    if (match && match[1].toLowerCase() === name.toLowerCase()) {
      const mod = (await modules[path]()) as Record<string, unknown>;
      const usage = Object.values(mod)[0] as ComponentUsage | undefined;
      if (usage && usage.name && usage.title) {
        if (usage.examples) {
          usage.examples = usage.examples.map((ex: any) => ({
            ...ex,
            demo: markRaw(ex.demo),
          }));
        }
        return usage;
      }
    }
  }
  return null;
}

export async function getComponentCategories(): Promise<string[]> {
  const allComponents = await getAllComponents();
  const categories = allComponents.map((c) => c.category).filter(Boolean);
  return Array.from(new Set(categories));
}

export async function getComponentsByCategory(
  category: string
): Promise<ComponentUsage[]> {
  const allComponents = await getAllComponents();
  return allComponents.filter((component) => component.category === category);
}
