import Demo1 from "./demo1.vue"
import demo1Code from "./demo1.vue?raw"
import Demo2 from "./demo2.vue"
import demo2Code from "./demo2.vue?raw"
import Code from "./index.vue?raw"

export const messageUsage: ComponentUsage = {
  name: "Message",
  title: "全局消息 Message",
  description: "全局展示操作反馈信息，支持 info/success/warning/error 类型、自动关闭、最大数量、可关闭。支持 JS 调用。",
  category: "反馈组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "通过 JS 调用不同类型的消息。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "进阶用法",
      description: "自定义内容、最大数量、可关闭等。",
      demo: Demo2,
      demoCode: demo2Code,
    },
  ],
  props: [
    { name: "type", description: "消息类型", type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", required: false },
    { name: "content", description: "消息内容", type: "string", default: "-", required: true },
    { name: "duration", description: "自动关闭时间(ms)", type: "number", default: "2000", required: false },
    { name: "closable", description: "是否可手动关闭", type: "boolean", default: "false", required: false },
  ],
  events: [],
  slots: [],
} 