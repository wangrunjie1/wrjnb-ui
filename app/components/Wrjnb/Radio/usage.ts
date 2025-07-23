import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Demo3 from "./demo3.vue";
import demo3Code from "./demo3.vue?raw";
import Code from "./index.vue?raw";

export const radioUsage: ComponentUsage = {
  name: "Radio",
  title: "单选框 Radio",
  description: "用于在一组选项中选择单个选项，支持多种风格、禁用、插槽自定义内容。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的单选框用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "按钮型",
      description: "type 属性为 button，按钮风格单选框。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "卡片型",
      description: "type 属性为 card，卡片风格单选框。",
      demo: Demo3,
      demoCode: demo3Code,
    },
  ],
  props: [
    {
      name: "modelValue",
      description: "当前选中的值 (v-model)",
      type: "string | number | boolean",
      default: "-",
      required: true,
    },
    {
      name: "label",
      description: "单选框的值",
      type: "string | number | boolean",
      default: "-",
      required: true,
    },
    {
      name: "disabled",
      description: "是否禁用",
      type: "boolean",
      default: "false",
      required: false,
    },
    {
      name: "type",
      description: "风格类型（default/button/card）",
      type: "'default' | 'button' | 'card'",
      default: "'default'",
      required: false,
    },
  ],
  events: [
    {
      name: "update:modelValue",
      description: "选中项变化时触发 (v-model)",
      params: "value: string | number | boolean",
    },
  ],
  slots: [
    {
      name: "default",
      description: "自定义单选框内容。",
    },
  ],
}; 