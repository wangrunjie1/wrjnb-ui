import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Demo3 from "./demo3.vue";
import demo3Code from "./demo3.vue?raw";
import Code from "./index.vue?raw";

export const popoverUsage: ComponentUsage = {
  name: "Popover",
  title: "气泡卡片 Popover",
  description: "用于点击或悬停触发的气泡卡片，支持自定义内容、触发方式、方向。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的 Popover 用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "点击触发",
      description: "通过 trigger 属性设置为 click，点击触发 Popover。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "自定义内容和方向",
      description: "通过插槽自定义内容，placement 属性设置方向。",
      demo: Demo3,
      demoCode: demo3Code,
    },
  ],
  props: [
    {
      name: "content",
      description: "显示的内容（可用插槽自定义）。",
      type: "string",
      default: "''",
      required: false,
    },
    {
      name: "trigger",
      description: "触发方式（hover/click）。",
      type: "'hover' | 'click'",
      default: "'hover'",
      required: false,
    },
    {
      name: "placement",
      description: "气泡显示方向（top/bottom/left/right）。",
      type: "'top' | 'bottom' | 'left' | 'right'",
      default: "'top'",
      required: false,
    },
    {
      name: "triggerText",
      description: "默认触发器按钮文本。",
      type: "string",
      default: "'Popover'",
      required: false,
    },
  ],
  events: [],
  slots: [
    {
      name: "default",
      description: "自定义 Popover 内容。",
    },
    {
      name: "trigger",
      description: "自定义触发器插槽。",
    },
  ],
}; 