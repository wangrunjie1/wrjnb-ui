import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Code from "./index.vue?raw";

export const sliderUsage = {
  name: "Slider",
  title: "滑块 Slider",
  description: "用于在数值区间内进行选择，支持横向/纵向、禁用、步长、tooltip 等。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的滑块用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "禁用/步长/垂直",
      description: "禁用、步长、垂直模式等进阶用法。",
      demo: Demo2,
      demoCode: demo2Code,
    },
  ],
  props: [
    {
      name: "modelValue",
      description: "当前值 (v-model)",
      type: "number",
      default: "0",
      required: true,
    },
    {
      name: "min",
      description: "最小值",
      type: "number",
      default: "0",
      required: false,
    },
    {
      name: "max",
      description: "最大值",
      type: "number",
      default: "100",
      required: false,
    },
    {
      name: "step",
      description: "步长",
      type: "number",
      default: "1",
      required: false,
    },
    {
      name: "disabled",
      description: "是否禁用",
      type: "boolean",
      default: "false",
      required: false,
    },
    {
      name: "vertical",
      description: "是否垂直模式",
      type: "boolean",
      default: "false",
      required: false,
    },
    {
      name: "showTooltip",
      description: "是否显示当前值提示",
      type: "boolean",
      default: "true",
      required: false,
    },
  ],
  events: [
    {
      name: "update:modelValue",
      description: "值变化时触发 (v-model)",
      params: "value: number",
    },
  ],
  slots: [],
}; 