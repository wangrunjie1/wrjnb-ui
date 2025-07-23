import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const cardUsage: ComponentUsage = {
  name: "Card",
  title: "卡片 Card",
  description: "用于承载内容和操作，展示相关信息。支持 header/footer 插槽、边框、阴影、自定义内容区 padding。",
  category: "基础组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "卡片的全部用法演示，包括标题、header/footer 插槽、无边框、阴影、自定义 padding 等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "title",
      description: "卡片标题（header 插槽简写）",
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
    {
      name: "shadow",
      description: "是否显示阴影",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "bodyPadding",
      description: "内容区 padding（如 '1em 2em'）",
      type: "String",
      default: "'1.2em 1.2em'",
      required: false,
    },
  ],
  slots: [
    {
      name: "header",
      description: "自定义卡片头部内容。",
    },
    {
      name: "footer",
      description: "自定义卡片底部内容。",
    },
    {
      name: "default",
      description: "卡片主体内容。",
    },
  ],
  events: [],
  // 插槽说明：header（自定义卡片头部内容）、footer（自定义卡片底部内容）、default（卡片主体内容）
};
