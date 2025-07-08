import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const dividerUsage: ComponentUsage = {
  name: "Divider",
  title: "分割线 Divider",
  description: "用于分隔内容，可水平、垂直、有内容、虚线。",
  category: "布局组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "分割线的全部用法演示，包括水平、垂直、有内容、虚线等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "direction",
      description: "分割线方向（horizontal/vertical）",
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      required: false,
    },
    {
      name: "dashed",
      description: "是否为虚线",
      type: "Boolean",
      default: "false",
      required: false,
    },
  ],
  slots: [
    {
      name: "default",
      description: "分割线内容插槽，可自定义分割线中间的内容。",
    },
  ],
  events: [],
  // 有内容时插槽 default
}; 