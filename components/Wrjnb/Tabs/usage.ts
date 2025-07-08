import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const tabsUsage: ComponentUsage = {
  name: "Tabs",
  title: "标签页 Tabs",
  description: "用于分隔内容，多用于同一层级的内容切换展示。支持横向/纵向、禁用、插槽自定义 label。",
  category: "导航组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "Tabs 的全部用法演示，包括横向、纵向、禁用、自定义 label。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "modelValue",
      description: "当前激活的 tab 名称 (v-model)",
      type: "string | number",
      default: "-",
      required: true,
    },
    {
      name: "tabs",
      description: "标签页配置数组，每项包含 name、label、disabled 可选",
      type: "Tab[]",
      default: "-",
      required: true,
    },
    {
      name: "direction",
      description: "标签页方向，可选 'horizontal' | 'vertical'",
      type: "string",
      default: "'horizontal'",
      required: false,
    },
  ],
  events: [
    {
      name: "update:modelValue",
      description: "切换标签时触发，返回新的 tab name",
      params: "name: string | number",
    },
    {
      name: "change",
      description: "切换标签时触发，返回新的 tab name",
      params: "name: string | number",
    },
  ],
  slots: [
    {
      name: "label",
      description: "自定义标签 label 内容，作用域参数 { tab }",
    },
    {
      name: "default",
      description: "每个 tab 的内容，建议用 <template #tabName> 方式分发",
    },
  ],
}; 