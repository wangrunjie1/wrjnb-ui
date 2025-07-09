import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Demo3 from "./demo3.vue";
import demo3Code from "./demo3.vue?raw";
import Code from "./index.vue?raw";

export const breadcrumbUsage: ComponentUsage = {
  name: "Breadcrumb",
  title: "面包屑 Breadcrumb",
  description: "用于显示当前页面的路径导航，支持自定义分隔符和插槽自定义节点。",
  category: "导航组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的面包屑导航用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "自定义分隔符",
      description: "通过 separator 属性自定义分隔符。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "插槽自定义节点",
      description: "通过具名插槽自定义节点内容。",
      demo: Demo3,
      demoCode: demo3Code,
    },
  ],
  props: [
    {
      name: "items",
      description: "面包屑数据数组，格式为 { label, to?, key?, slot? }。",
      type: "Array<{ label: string; to?: any; key?: string|number; slot?: string }>",
      default: "[]",
      required: false,
    },
    {
      name: "separator",
      description: "分隔符，支持字符串或插槽。",
      type: "string",
      default: "'/'",
      required: false,
    },
  ],
  events: [
    {
      name: "click",
      description: "点击可跳转节点时触发。",
      params: "item: any, index: number",
    },
  ],
  slots: [
    {
      name: "separator",
      description: "自定义分隔符插槽。",
    },
    {
      name: "default",
      description: "具名插槽自定义节点内容，slot 属性指定插槽名。",
    },
  ],
}; 