import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Demo3 from "./demo3.vue";
import demo3Code from "./demo3.vue?raw";
import Demo4 from "./demo4.vue";
import demo4Code from "./demo4.vue?raw";
import Code from "./index.vue?raw";

export const dividerUsage: ComponentUsage = {
  name: "Divider",
  title: "分割线 Divider",
  description: "用于分隔内容的线条，支持水平、垂直、虚线、带内容。",
  category: "基础组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的分割线用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "虚线分割线",
      description: "通过 dashed 属性设置虚线。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "带内容分割线",
      description: "分割线中间可插入内容。",
      demo: Demo3,
      demoCode: demo3Code,
    },
    {
      title: "垂直分割线",
      description: "通过 direction 属性设置为 vertical。",
      demo: Demo4,
      demoCode: demo4Code,
    },
  ],
  props: [
    {
      name: "dashed",
      description: "是否为虚线。",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "direction",
      description: "分割线方向（horizontal/vertical）。",
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      required: false,
    },
  ],
  slots: [
    {
      name: "default",
      description: "分割线中间内容插槽。",
    },
  ],
  events: [],
}; 