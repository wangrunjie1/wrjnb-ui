import Demo1 from "./demo1.vue";
import demo1Code from "./demo1.vue?raw";
import Demo2 from "./demo2.vue";
import demo2Code from "./demo2.vue?raw";
import Demo3 from "./demo3.vue";
import demo3Code from "./demo3.vue?raw";
import Code from "./index.vue?raw";

export const stepperUsage: ComponentUsage = {
  name: "Stepper",
  title: "步骤条 Stepper",
  description: "用于展示流程的各个步骤，支持自定义内容、图标、描述。",
  category: "数据展示",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的步骤条用法。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "带描述",
      description: "每个步骤可带有描述信息。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "自定义图标",
      description: "通过 icon 字段自定义步骤图标。",
      demo: Demo3,
      demoCode: demo3Code,
    },
  ],
  props: [
    {
      name: "steps",
      description: "步骤数据数组，格式为 { title, description?, icon?, key?, slot? }。",
      type: "Array<{ title: string; description?: string; icon?: string; key?: string|number; slot?: string }>",
      default: "[]",
      required: false,
    },
    {
      name: "active",
      description: "当前激活步骤索引（从0开始）。",
      type: "number",
      default: "0",
      required: false,
    },
    {
      name: "status",
      description: "当前步骤状态（process/finish/wait/error）。",
      type: "'process' | 'finish' | 'wait' | 'error'",
      default: "'process'",
      required: false,
    },
  ],
  events: [],
  slots: [
    {
      name: "default",
      description: "具名插槽自定义步骤图标内容，slot 属性指定插槽名。",
    },
  ],
}; 