import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const tagUsage: ComponentUsage = {
  name: "Tag",
  title: "标签 Tag",
  description: "用于标记和分类内容，可自定义颜色、可关闭、圆角。",
  category: "基础组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "标签的全部用法演示，包括类型、可关闭、圆角、自定义颜色等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "type",
      description: "标签类型",
      type: "'default' | 'primary' | 'success' | 'danger'",
      default: "'default'",
      required: false,
    },
    {
      name: "closable",
      description: "是否可关闭",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "round",
      description: "是否为圆角标签",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "color",
      description: "自定义背景色（如 #e67e22）",
      type: "String",
      default: "''",
      required: false,
    },
  ],
  events: [
    {
      name: "close",
      description: "点击关闭按钮时触发",
      params: "event: MouseEvent",
    },
  ],
}; 