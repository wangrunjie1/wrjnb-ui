export interface ComponentUsage {
  name: string;
  title: string;
  description: string;
  category: string;
  props: Array<{
    name: string;
    description: string;
    type: string;
    default: string;
    required?: boolean;
  }>;
  events: Array<{
    name: string;
    description: string;
    params: string;
  }>;
  examples: Array<{
    title: string;
    description: string;
    code: string;
    vueCode: string;
  }>;
}

export const buttonUsage: ComponentUsage = {
  name: 'Button',
  title: '按钮 Button',
  description: '按钮用于触发一个操作或事件，如提交表单、取消操作等。',
  category: '基础组件',
  props: [
    {
      name: 'type',
      description: '按钮类型',
      type: "'primary' | 'success' | 'danger' | ''",
      default: "''",
      required: false
    },
    {
      name: 'size',
      description: '按钮尺寸',
      type: "'default' | 'small'",
      default: "'default'",
      required: false
    },
    {
      name: 'disabled',
      description: '是否禁用状态',
      type: 'Boolean',
      default: 'false',
      required: false
    }
  ],
  events: [
    {
      name: 'click',
      description: '点击按钮时触发',
      params: 'event: MouseEvent'
    }
  ],
  examples: [
    {
      title: '基础用法',
      description: '按钮的基础用法，支持多种类型。',
      code: `<wrjnb-button>默认按钮</wrjnb-button>
<wrjnb-button type="primary">主要按钮</wrjnb-button>
<wrjnb-button type="success">成功按钮</wrjnb-button>
<wrjnb-button type="danger">危险按钮</wrjnb-button>`,
      vueCode: `<template>
  <wrjnb-button>默认按钮</wrjnb-button>
  <wrjnb-button type="primary">主要按钮</wrjnb-button>
  <wrjnb-button type="success">成功按钮</wrjnb-button>
  <wrjnb-button type="danger">危险按钮</wrjnb-button>
</template>

<script setup>
// 无需额外配置
</script>`
    },
    {
      title: '不同尺寸',
      description: '按钮支持两种尺寸：default 和 small。',
      code: `<wrjnb-button size="default">默认尺寸</wrjnb-button>
<wrjnb-button size="small">小尺寸</wrjnb-button>`,
      vueCode: `<template>
  <wrjnb-button size="default">默认尺寸</wrjnb-button>
  <wrjnb-button size="small">小尺寸</wrjnb-button>
</template>

<script setup>
// 无需额外配置
</script>`
    },
    {
      title: '禁用状态',
      description: '通过 disabled 属性禁用按钮。',
      code: `<wrjnb-button disabled>禁用按钮</wrjnb-button>
<wrjnb-button type="primary" disabled>禁用主要按钮</wrjnb-button>`,
      vueCode: `<template>
  <wrjnb-button disabled>禁用按钮</wrjnb-button>
  <wrjnb-button type="primary" disabled>禁用主要按钮</wrjnb-button>
</template>

<script setup>
// 无需额外配置
</script>`
    }
  ]
}; 