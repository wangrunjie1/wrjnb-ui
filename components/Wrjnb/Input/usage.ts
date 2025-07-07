import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const inputUsage: ComponentUsage = {
  name: "Input",
  title: "输入框 Input",
  description: "用于接收用户输入的表单组件。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "输入框的全部用法演示。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "modelValue",
      description: "输入框的值",
      type: "String | Number",
      default: "''",
      required: false,
    },
    {
      name: "placeholder",
      description: "占位符",
      type: "String",
      default: "''",
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
      description: "输入值变化时触发",
      params: "value: string | number",
    },
  ],
};
