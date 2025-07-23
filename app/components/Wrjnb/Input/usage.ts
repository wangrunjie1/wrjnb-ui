import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Demo3 from "./demo3.vue";
import demo3Code from "./demo3.vue?raw";
import Demo4 from "./demo4.vue";
import demo4Code from "./demo4.vue?raw";
import Demo5 from "./demo5.vue";
import demo5Code from "./demo5.vue?raw";
import Demo6 from "./demo6.vue";
import demo6Code from "./demo6.vue?raw";
import Demo7 from "./demo7.vue";
import demo7Code from "./demo7.vue?raw";
import Code from "./index.vue?raw";

export const inputUsage: ComponentUsage = {
  name: "Input",
  title: "输入框 Input",
  description: "用于接收用户输入的表单组件，支持多种类型、前后缀、可清除、禁用、只读等。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的输入框用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "禁用",
      description: "通过 disabled 属性禁用输入框。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "只读",
      description: "通过 readonly 属性设置只读。",
      demo: Demo3,
      demoCode: demo3Code,
    },
    {
      title: "可清除",
      description: "通过 clearable 属性显示清除按钮。",
      demo: Demo4,
      demoCode: demo4Code,
    },
    {
      title: "密码类型",
      description: "type 属性为 password。",
      demo: Demo5,
      demoCode: demo5Code,
    },
    {
      title: "数字类型",
      description: "type 属性为 number。",
      demo: Demo6,
      demoCode: demo6Code,
    },
    {
      title: "前后缀插槽",
      description: "通过 prefix/suffix 插槽自定义前后缀内容。",
      demo: Demo7,
      demoCode: demo7Code,
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
};
