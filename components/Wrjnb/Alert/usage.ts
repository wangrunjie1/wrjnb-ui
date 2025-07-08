import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const alertUsage: ComponentUsage = {
  name: "Alert",
  title: "警告 Alert",
  description: "用于页面中展示重要的提示信息，支持多种类型、可关闭、描述、图标。",
  category: "基础组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "警告组件的全部用法演示，包括类型、可关闭、描述、图标等。",
      demo: Demo,
      demoCode,
    },
  ],
  slots: [
    {
      name: "icon",
      description: "自定义图标插槽。",
    },
    {
      name: "default",
      description: "警告内容插槽。",
    },
  ],
  props: [
    {
      name: "title",
      description: "标题内容",
      type: "String",
      default: "''",
      required: false,
    },
    {
      name: "type",
      description: "警告类型",
      type: "'info' | 'success' | 'warning' | 'error'",
      default: "'info'",
      required: false,
    },
    {
      name: "description",
      description: "辅助描述内容",
      type: "String",
      default: "''",
      required: false,
    },
    {
      name: "closable",
      description: "是否可关闭",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "showIcon",
      description: "是否显示图标",
      type: "Boolean",
      default: "true",
      required: false,
    },
  ],
  events: [
    {
      name: "close",
      description: "点击关闭按钮时触发",
      params: "event: MouseEvent",
    },
  ],
}; 