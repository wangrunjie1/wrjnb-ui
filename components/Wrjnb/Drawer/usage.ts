import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Code from "./index.vue?raw";

export const drawerUsage = {
  name: "Drawer",
  title: "抽屉 Drawer",
  description: "用于侧边弹出内容区域，支持四个方向、遮罩、插槽、动画等。",
  category: "反馈组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的抽屉用法，右侧弹出。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "自定义方向和内容",
      description: "支持顶部、底部、左侧弹出，支持自定义 footer。",
      demo: Demo2,
      demoCode: demo2Code,
    },
  ],
  props: [
    { name: "modelValue", description: "显示/隐藏（v-model）", type: "boolean", default: "false", required: true },
    { name: "title", description: "抽屉标题", type: "string", default: "''", required: false },
    { name: "placement", description: "弹出方向（right/left/top/bottom）", type: "string", default: "'right'", required: false },
    { name: "size", description: "宽度或高度（如 '360px'）", type: "string | number", default: "'360px'", required: false },
    { name: "maskClosable", description: "点击遮罩是否关闭", type: "boolean", default: "true", required: false },
    { name: "zIndex", description: "弹层 zIndex", type: "number", default: "1000", required: false },
  ],
  events: [
    { name: "update:modelValue", description: "显示/隐藏时触发（v-model）", params: "value: boolean" },
    { name: "close", description: "关闭时触发", params: "无" },
  ],
  slots: [
    { name: "default", description: "抽屉内容插槽。" },
    { name: "title", description: "自定义标题插槽。" },
    { name: "footer", description: "自定义底部插槽。" },
  ],
}; 