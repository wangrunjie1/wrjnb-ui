import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const skeletonUsage: ComponentUsage = {
  name: "Skeleton",
  title: "骨架屏 Skeleton",
  description: "用于内容加载时的占位，支持段落、头像、动画、圆角。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "骨架屏的全部用法演示，包括基础、头像、圆形头像、不同行数、无动画等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "rows",
      description: "段落行数",
      type: "Number",
      default: "3",
      required: false,
    },
    {
      name: "avatar",
      description: "是否显示头像占位",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "avatarRound",
      description: "头像是否为圆形",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "animated",
      description: "是否显示动画",
      type: "Boolean",
      default: "true",
      required: false,
    },
  ],
  events: [],
}; 