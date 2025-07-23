import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Code from "./index.vue?raw";

export const buttonUsage: ComponentUsage = {
  name: "Button",
  title: "按钮 Button",
  description: "按钮用于触发一个操作或事件，如提交表单、取消操作等。支持多种类型、尺寸、状态。",
  category: "基础组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "按钮的基础用法，包括不同类型。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "更多用法",
      description: "禁用、加载、尺寸、圆角、块级等。",
      demo: Demo2,
      demoCode: demo2Code,
    },
  ],
  props: [
    {
      name: "type",
      description: "按钮类型",
      type: "'default' | 'primary' | 'success' | 'danger' | 'text'",
      default: "'default'",
      required: false,
    },
    {
      name: "size",
      description: "按钮尺寸",
      type: "'large' | 'default' | 'small'",
      default: "'default'",
      required: false,
    },
    {
      name: "loading",
      description: "是否为加载中状态",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "disabled",
      description: "是否禁用状态",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "round",
      description: "是否为圆角按钮",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "block",
      description: "是否为块级按钮（宽度100%）",
      type: "Boolean",
      default: "false",
      required: false,
    },
  ],
  slots: [
    {
      name: "default",
      description: "按钮内容插槽，显示按钮文本或自定义内容。",
    },
  ],
  events: [
    {
      name: "click",
      description: "点击按钮时触发（loading/disabled 时不会触发）",
      params: "event: MouseEvent",
    },
  ],
};
