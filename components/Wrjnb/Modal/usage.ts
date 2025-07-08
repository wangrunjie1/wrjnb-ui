import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const modalUsage: ComponentUsage = {
  name: "Modal",
  title: "弹窗 Modal",
  description: "用于重要操作或信息的模态对话框，支持自定义标题、内容、底部、遮罩关闭等。",
  category: "反馈组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "弹窗的全部用法演示，包括基础、footer插槽、禁止遮罩关闭等。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "modelValue",
      description: "弹窗显示/隐藏（v-model）",
      type: "Boolean",
      default: "false",
      required: true,
    },
    {
      name: "title",
      description: "弹窗标题",
      type: "String",
      default: "''",
      required: false,
    },
    {
      name: "width",
      description: "弹窗宽度（如 '400px'）",
      type: "String",
      default: "'400px'",
      required: false,
    },
    {
      name: "maskClosable",
      description: "点击遮罩是否关闭弹窗",
      type: "Boolean",
      default: "true",
      required: false,
    },
  ],
  slots: [
    {
      name: "header",
      description: "自定义弹窗头部内容。",
    },
    {
      name: "footer",
      description: "自定义弹窗底部内容。",
    },
    {
      name: "default",
      description: "弹窗主体内容。",
    },
  ],
  events: [
    {
      name: "update:modelValue",
      description: "弹窗显示/隐藏时触发（v-model）",
      params: "value: boolean",
    },
    {
      name: "close",
      description: "弹窗关闭时触发",
      params: "无",
    },
  ],
  // 插槽说明：header（自定义弹窗头部内容）、footer（自定义弹窗底部内容）、default（弹窗主体内容）
}; 