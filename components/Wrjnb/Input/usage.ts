import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const inputUsage: ComponentUsage = {
  name: "Input",
  title: "输入框 Input",
  description: "用于接收用户输入的表单组件，支持多种类型、前后缀、可清除、禁用、只读等。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "输入框的全部用法演示，包括类型、禁用、只读、可清除、前后缀等。",
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
      name: "type",
      description: "输入框类型（text/password/number）",
      type: "'text' | 'password' | 'number'",
      default: "'text'",
      required: false,
    },
    {
      name: "disabled",
      description: "是否禁用",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "readonly",
      description: "是否只读",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "clearable",
      description: "是否显示清除按钮",
      type: "Boolean",
      default: "false",
      required: false,
    },
  ],
  slots: [
    {
      name: "prefix",
      description: "输入框前缀内容插槽。",
    },
    {
      name: "suffix",
      description: "输入框后缀内容插槽。",
    },
  ],
  events: [
    {
      name: "update:modelValue",
      description: "输入值变化时触发",
      params: "value: string | number",
    },
  ],
  // 插槽说明：prefix（输入框前缀内容插槽），suffix（输入框后缀内容插槽）
};
