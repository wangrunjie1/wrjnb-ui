import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const tooltipUsage: ComponentUsage = {
  name: "Tooltip",
  title: "气泡提示 Tooltip",
  description: "用于鼠标悬停或点击时展示提示信息，支持多方向、触发方式和自定义颜色。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "气泡提示的全部用法演示，包括不同方向、触发方式、自定义颜色等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "content",
      description: "提示内容",
      type: "String",
      default: "''",
      required: true,
    },
    {
      name: "placement",
      description: "气泡方向（top/right/bottom/left）",
      type: "'top' | 'right' | 'bottom' | 'left'",
      default: "'top'",
      required: false,
    },
    {
      name: "trigger",
      description: "触发方式（hover/click）",
      type: "'hover' | 'click'",
      default: "'hover'",
      required: false,
    },
    {
      name: "color",
      description: "自定义气泡颜色",
      type: "String",
      default: "''",
      required: false,
    },
  ],
  slots: [
    {
      name: "default",
      description: "提示内容插槽，显示 tooltip 的内容。",
    },
  ],
  events: [],
}; 