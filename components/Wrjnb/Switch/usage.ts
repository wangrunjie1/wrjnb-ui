import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const switchUsage: ComponentUsage = {
  name: "Switch",
  title: "开关 Switch",
  description: "用于在打开和关闭状态之间进行切换。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "开关的全部用法演示。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "modelValue",
      description: "开关的值",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "disabled",
      description: "是否禁用",
      type: "Boolean",
      default: "false",
      required: false,
    },
  ],
  events: [
    {
      name: "update:modelValue",
      description: "开关状态变化时触发",
      params: "value: boolean",
    },
  ],
};
