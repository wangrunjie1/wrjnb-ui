import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const buttonUsage: ComponentUsage = {
  name: "Button",
  title: "按钮 Button",
  description: "按钮用于触发一个操作或事件，如提交表单、取消操作等。",
  category: "基础组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "按钮的全部用法演示。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "type",
      description: "按钮类型",
      type: "'primary' | 'success' | 'danger' | ''",
      default: "''",
      required: false,
    },
    {
      name: "size",
      description: "按钮尺寸",
      type: "'default' | 'small'",
      default: "'default'",
      required: false,
    },
    {
      name: "disabled",
      description: "是否禁用状态",
      type: "Boolean",
      default: "false",
      required: false,
    },
  ],
  events: [
    {
      name: "click",
      description: "点击按钮时触发",
      params: "event: MouseEvent",
    },
  ],
};
