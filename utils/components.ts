// 只保留 Button、Card、Input、Switch 四个组件
const componentConfigs = {
  Button: () => import('~/components/Wrjnb/Button/usage').then(m => m.buttonUsage),
  Card: () => import('~/components/Wrjnb/Card/usage').then(m => m.cardUsage),
  Input: () => import('~/components/Wrjnb/Input/usage').then(m => m.inputUsage),
  Switch: () => import('~/components/Wrjnb/Switch/usage').then(m => m.switchUsage),
}

// 获取所有组件列表
export async function getAllComponents(): Promise<ComponentUsage[]> {
  const components: ComponentUsage[] = []
  
  for (const [name, importFn] of Object.entries(componentConfigs)) {
    try {
      const config = await importFn()
      components.push(config)
    } catch (error) {
      console.warn(`Failed to load component config for ${name}:`, error)
    }
  }
  
  return components.sort((a, b) => a.name.localeCompare(b.name))
}

// 根据组件名获取单个组件配置
export async function getComponentByName(name: string): Promise<ComponentUsage | null> {
  const importFn = componentConfigs[name as keyof typeof componentConfigs]
  if (!importFn) {
    return null
  }
  
  try {
    return await importFn()
  } catch (error) {
    console.warn(`Failed to load component config for ${name}:`, error)
    return null
  }
}

// 获取组件分类
export function getComponentCategories(): string[] {
  return ['基础组件', '表单组件', '数据展示', '反馈组件', '布局组件']
}

// 根据分类获取组件
export async function getComponentsByCategory(category: string): Promise<ComponentUsage[]> {
  const allComponents = await getAllComponents()
  return allComponents.filter(component => component.category === category)
} 