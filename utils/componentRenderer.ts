import { defineAsyncComponent } from 'vue'

// 组件映射 - 直接导入组件以确保样式正确加载
const componentMap = {
  Button: defineAsyncComponent(() => import('~/components/Wrjnb/Button/index.vue')),
  Card: defineAsyncComponent(() => import('~/components/Wrjnb/Card/index.vue')),
  Input: defineAsyncComponent(() => import('~/components/Wrjnb/Input/index.vue')),
  Switch: defineAsyncComponent(() => import('~/components/Wrjnb/Switch/index.vue')),
  Tag: defineAsyncComponent(() => import('~/components/Wrjnb/Tag/index.vue')),
  Alert: defineAsyncComponent(() => import('~/components/Wrjnb/Alert/index.vue')),
}

// 获取组件
export function getComponent(name: string) {
  return componentMap[name as keyof typeof componentMap] || null
}

// 获取所有可用的组件名
export function getAvailableComponents() {
  return Object.keys(componentMap)
}

// 解析示例代码中的属性
export function parseExampleProps(example: any) {
  const props: Record<string, any> = {}
  
  // 根据示例代码解析属性
  if (example.code) {
    // 简单的属性解析逻辑
    const code = example.code.toLowerCase()
    
    if (code.includes('type="primary"')) {
      props.type = 'primary'
    } else if (code.includes('type="success"')) {
      props.type = 'success'
    } else if (code.includes('type="danger"')) {
      props.type = 'danger'
    }
    
    if (code.includes('size="small"')) {
      props.size = 'small'
    }
    
    if (code.includes('disabled')) {
      props.disabled = true
    }
    
    if (code.includes('placeholder=')) {
      const match = example.code.match(/placeholder="([^"]+)"/)
      if (match) {
        props.placeholder = match[1]
      }
    }
    
    if (code.includes('v-model')) {
      props.modelValue = true
    }
    
    // 提取文本内容
    const textMatch = example.code.match(/>([^<]+)</)
    if (textMatch) {
      props.children = textMatch[1].trim()
    }
  }
  
  return props
}

 