import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const emptyUsage: ComponentUsage = {
  name: "Empty",
  title: "空状态 Empty",
  description: "用于无数据、无内容等空状态的占位展示，支持自定义图片、描述、插槽。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "空状态的全部用法演示，包括默认、带图片、带描述、插槽自定义等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "image",
      description: "自定义图片地址",
      type: "String",
      default: "''",
      required: false,
    },
    {
      name: "description",
      description: "描述内容",
      type: "String",
      default: "'暂无数据'",
      required: false,
    },
  ],
  events: [],
  // 支持 image、default 插槽
}; 