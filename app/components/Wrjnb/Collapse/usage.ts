import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Code from "./index.vue?raw";

export const collapseUsage = {
  name: "Collapse",
  title: "折叠面板 Collapse",
  description: "用于内容区域的收纳与展开，支持手风琴、禁用、插槽自定义等。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的折叠面板用法，支持多面板展开。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "手风琴/禁用/自定义",
      description: "手风琴模式、禁用、插槽自定义 header/body。",
      demo: Demo2,
      demoCode: demo2Code,
    },
  ],
  props: [
    { name: "modelValue", description: "当前展开面板（v-model）", type: "string | number | Array", default: "[]", required: true },
    { name: "panels", description: "面板数据数组", type: "Array<Panel>", default: "[]", required: true },
    { name: "accordion", description: "是否手风琴模式（每次只展开一个）", type: "boolean", default: "false", required: false },
  ],
  events: [
    { name: "update:modelValue", description: "展开面板变化时触发（v-model）", params: "value: string | number | Array" },
    { name: "change", description: "展开面板变化时触发", params: "value: string | number | Array" },
  ],
  slots: [
    { name: "header", description: "自定义面板头部插槽，作用域参数 { item, index }。" },
    { name: "body", description: "自定义面板内容插槽，作用域参数 { item, index }。" },
  ],
}; 