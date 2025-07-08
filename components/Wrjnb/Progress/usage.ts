import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const progressUsage: ComponentUsage = {
  name: "Progress",
  title: "进度条 Progress",
  description: "用于展示操作进度，支持条形、环形、不同状态和动画。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "进度条的全部用法演示，包括条形、环形、不同状态、动画等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "percent",
      description: "进度百分比",
      type: "Number",
      default: "0",
      required: true,
    },
    {
      name: "status",
      description: "进度条状态（normal/success/exception/active）",
      type: "'normal' | 'success' | 'exception' | 'active'",
      default: "'normal'",
      required: false,
    },
    {
      name: "type",
      description: "进度条类型（line/circle）",
      type: "'line' | 'circle'",
      default: "'line'",
      required: false,
    },
    {
      name: "color",
      description: "自定义进度条颜色",
      type: "String",
      default: "''",
      required: false,
    },
  ],
  events: [],
}; 