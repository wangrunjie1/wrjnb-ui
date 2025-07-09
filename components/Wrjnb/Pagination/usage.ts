import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const paginationUsage: ComponentUsage = {
  name: "Pagination",
  title: "分页器 Pagination",
  description: "用于数据分页展示，支持页码切换、禁用、快速跳转、自定义页码数量等。",
  category: "导航组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的分页器用法，支持 v-model 双向绑定当前页。",
      demo: Demo,
      demoCode,
    },
    {
      title: "禁用状态",
      description: "通过 disabled 属性禁用分页器。",
      demo: Demo,
      demoCode,
    },
    {
      title: "显示跳转",
      description: "通过 show-jumper 属性显示快速跳转输入框。",
      demo: Demo,
      demoCode,
    },
    {
      title: "自定义页码按钮数量",
      description: "通过 pager-count 属性自定义显示的页码按钮数量。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "total",
      description: "数据总条数。",
      type: "number",
      default: "-",
      required: true,
    },
    {
      name: "pageSize",
      description: "每页条数。",
      type: "number",
      default: "10",
      required: false,
    },
    {
      name: "modelValue",
      description: "当前页码（v-model）。",
      type: "number",
      default: "1",
      required: false,
    },
    {
      name: "disabled",
      description: "是否禁用分页器。",
      type: "boolean",
      default: "false",
      required: false,
    },
    {
      name: "pagerCount",
      description: "显示的页码按钮数量，最小为5。",
      type: "number",
      default: "7",
      required: false,
    },
    {
      name: "showJumper",
      description: "是否显示快速跳转输入框。",
      type: "boolean",
      default: "false",
      required: false,
    },
  ],
  events: [
    {
      name: "update:modelValue",
      description: "页码变化时触发（v-model）。",
      params: "page: number",
    },
    {
      name: "change",
      description: "页码变化时触发。",
      params: "page: number",
    },
  ],
  slots: [
    {
      name: "jumper",
      description: "自定义跳转输入区插槽。",
    },
  ],
}; 