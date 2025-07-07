import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const badgeUsage: ComponentUsage = {
  name: "Badge",
  title: "徽章 Badge",
  description: "用于展示数字、状态点等，支持独立和包裹模式。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "徽章的全部用法演示，包括数字、最大值、点、独立/包裹等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "value",
      description: "徽章内容（数字或字符串）",
      type: "String | Number",
      default: "''",
      required: false,
    },
    {
      name: "max",
      description: "最大值，超出显示为 max+",
      type: "Number",
      default: "99",
      required: false,
    },
    {
      name: "dot",
      description: "是否显示为红点",
      type: "Boolean",
      default: "false",
      required: false,
    },
  ],
  events: [],
  // 包裹模式：有 slot 时徽章包裹内容，无 slot 时独立显示
}; 