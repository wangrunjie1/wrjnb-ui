import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const cardUsage: ComponentUsage = {
  name: "Card",
  title: "卡片 Card",
  description: "用于承载内容和操作，展示相关信息。",
  category: "基础组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "卡片的全部用法演示。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "title",
      description: "卡片标题",
      type: "String",
      default: "''",
      required: false,
    },
    {
      name: "bordered",
      description: "是否显示边框",
      type: "Boolean",
      default: "true",
      required: false,
    },
  ],
  events: [],
};
