import Demo from "./demo.vue";
import demoCode from "./demo.vue?raw";
import Code from "./index.vue?raw";

export const dropdownUsage: ComponentUsage = {
  name: "Dropdown",
  title: "下拉菜单 Dropdown",
  description:
    "用于展示一组操作选项，点击触发器后显示下拉菜单。支持插槽自定义菜单内容和触发器，支持禁用、图标、分组等。",
  category: "导航组件",
  code: Code,
  examples: [
    {
      title: "基础用法",
      description: "最基础的下拉菜单用法，支持 items 配置菜单项。",
      demo: Demo,
      demoCode,
    },
    {
      title: "自定义触发器",
      description: "通过 trigger 插槽自定义触发按钮，支持使用 WrjnbButton。",
      demo: Demo,
      demoCode,
    },
    {
      title: "自定义菜单内容",
      description: "通过 menu 插槽自定义菜单内容，可实现分组、复杂内容等。",
      demo: Demo,
      demoCode,
    },
    {
      title: "禁用状态",
      description: "通过 disabled 属性禁用下拉菜单。",
      demo: Demo,
      demoCode,
    },
    {
      title: "带图标菜单",
      description: "菜单项支持 icon 字段，展示图标。",
      demo: Demo,
      demoCode,
    },
    {
      title: "分组菜单",
      description: "通过 menu 插槽自定义分组菜单。",
      demo: Demo,
      demoCode,
    },
  ],
  props: [
    {
      name: "items",
      description: "菜单项数组，格式为 { label, value, disabled?, icon? }。",
      type: "Array<{ label: string; value: any; disabled?: boolean; icon?: string }>",
      default: "[]",
      required: false,
    },
    {
      name: "triggerText",
      description: "默认触发器按钮文本。",
      type: "string",
      default: "'下拉菜单'",
      required: false,
    },
    {
      name: "disabled",
      description: "是否禁用下拉菜单。",
      type: "boolean",
      default: "false",
      required: false,
    },
    {
      name: "direction",
      description: "菜单弹出方向（bottom/top）。",
      type: "'bottom' | 'top'",
      default: "'bottom'",
      required: false,
    },
    {
      name: "menuWidth",
      description: "菜单宽度，可为数字或字符串（如 '200px'）。",
      type: "string | number",
      default: "''",
      required: false,
    },
    {
      name: "triggerClass",
      description: "触发器自定义 class。",
      type: "string | object | array",
      default: "''",
      required: false,
    },
    {
      name: "triggerStyle",
      description: "触发器自定义 style。",
      type: "string | object",
      default: "''",
      required: false,
    },
    {
      name: "menuClass",
      description: "菜单自定义 class。",
      type: "string | object | array",
      default: "''",
      required: false,
    },
    {
      name: "menuStyle",
      description: "菜单自定义 style。",
      type: "string | object",
      default: "''",
      required: false,
    },
    {
      name: "style",
      description: "外层容器自定义 style。",
      type: "string | object",
      default: "''",
      required: false,
    },
  ],
  slots: [
    {
      name: "trigger",
      description: "自定义触发器插槽，建议用 WrjnbButton。",
    },
    {
      name: "menu",
      description: "自定义菜单内容插槽，支持分组、复杂内容。",
    },
    {
      name: "default",
      description: "等同于 menu 插槽，作为菜单内容默认插槽。",
    },
  ],
  events: [
    {
      name: "select",
      description: "选中菜单项时触发。",
      params: "item: { label: string; value: any; disabled?: boolean; icon?: string }",
    },
    {
      name: "update:visible",
      description: "菜单显示/隐藏时触发。",
      params: "visible: boolean",
    },
  ],
};
