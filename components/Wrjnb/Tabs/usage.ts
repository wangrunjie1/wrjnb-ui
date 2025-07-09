import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Demo3 from "./demo3.vue";
import demo3Code from "./demo3.vue?raw";
import Code from "./index.vue?raw";

export const tabsUsage: ComponentUsage = {
  name: "Tabs",
  title: "标签页 Tabs",
  description: "用于分隔内容，多用于同一层级的内容切换展示。支持横向/纵向、禁用、插槽自定义 label。",
  category: "导航组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的标签页用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "纵向标签页",
      description: "通过 direction 属性设置为 vertical。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "自定义 label",
      description: "通过 label 插槽自定义标签内容。",
      demo: Demo3,
      demoCode: demo3Code,
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