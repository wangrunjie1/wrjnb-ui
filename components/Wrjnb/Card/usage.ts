import type { ComponentUsage } from '../Button/usage';

export const cardUsage: ComponentUsage = {
  name: 'Card',
  title: '卡片 Card',
  description: '卡片用于内容分组展示，支持标题和无标题两种形式。',
  category: '布局组件',
  props: [
    {
      name: 'title',
      description: '卡片标题',
      type: 'String',
      default: "''",
      required: false
    }
  ],
  events: [],
  examples: [
    {
      title: '基础用法',
      description: '卡片的基础用法，可以包含标题和内容。',
      code: `<wrjnb-card title="卡片标题">
  这是卡片的内容区域
</wrjnb-card>`,
      vueCode: `<template>
  <wrjnb-card title="卡片标题">
    这是卡片的内容区域
  </wrjnb-card>
</template>

<script setup>
// 无需额外配置
</script>`
    },
    {
      title: '无标题卡片',
      description: '不设置 title 属性可以创建无标题的卡片。',
      code: `<wrjnb-card>
  这是无标题卡片的内容
</wrjnb-card>`,
      vueCode: `<template>
  <wrjnb-card>
    这是无标题卡片的内容
  </wrjnb-card>
</template>

<script setup>
// 无需额外配置
</script>`
    }
  ]
}; 