import Demo1 from "./demo1.vue"
import demo1Code from "./demo1.vue?raw"
import Demo2 from "./demo2.vue"
import demo2Code from "./demo2.vue?raw"
import Demo3 from "./demo3.vue"
import demo3Code from "./demo3.vue?raw"
import Code from "./index.vue?raw"

export const switchUsage: ComponentUsage = {
  name: "Switch",
  title: "开关 Switch",
  description: "用于在打开和关闭状态之间进行切换。支持禁用、加载、自定义颜色、尺寸。",
  category: "表单组件",
  code: Code,
  examples: [
    {
      title: "基础/禁用/加载用法",
      description: "基础用法、禁用、加载状态对比。",
      demo: Demo1,
      demoCode: demo1Code,
    },
    {
      title: "自定义颜色",
      description: "通过 activeColor/inactiveColor 属性自定义颜色。",
      demo: Demo2,
      demoCode: demo2Code,
    },
    {
      title: "小号/大号",
      description: "size 属性为 small/large。",
      demo: Demo3,
      demoCode: demo3Code,
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
  slots: [],
}
