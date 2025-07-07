import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const switchUsage: ComponentUsage = {
  name: "Switch",
  title: "开关 Switch",
  description: "用于在打开和关闭状态之间进行切换。支持禁用、加载、自定义颜色、尺寸。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "全部用法",
      description: "开关的全部用法演示，包括禁用、加载、自定义颜色、尺寸等。",
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
    {
      name: "loading",
      description: "是否为加载中状态",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "activeColor",
      description: "选中时的背景色",
      type: "String",
      default: "'#409eff'",
      required: false,
    },
    {
      name: "inactiveColor",
      description: "未选中时的背景色",
      type: "String",
      default: "'#dcdfe6'",
      required: false,
    },
    {
      name: "size",
      description: "尺寸（default/small/large）",
      type: "'default' | 'small' | 'large'",
      default: "'default'",
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
