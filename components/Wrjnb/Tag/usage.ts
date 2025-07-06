import type { ComponentUsage } from '../Button/usage';

export const tagUsage: ComponentUsage = {
  name: 'Tag',
  title: '标签 Tag',
  description: '标签用于标记和分类，支持主色、成功、危险等多种风格。',
  category: '数据展示',
  props: [
    {
      name: 'type',
      description: '标签类型',
      type: "'primary' | 'success' | 'danger' | ''",
      default: "''",
      required: false
    },
    {
      name: 'closable',
      description: '是否可关闭',
      type: 'Boolean',
      default: 'false',
      required: false
    }
  ],
  events: [
    {
      name: 'close',
      description: '关闭标签时触发',
      params: 'event: Event'
    }
  ],
  examples: [
    {
      title: '基础用法',
      description: '标签的基础用法，支持多种类型。',
      code: `<wrjnb-tag>默认标签</wrjnb-tag>
<wrjnb-tag type="primary">主要标签</wrjnb-tag>
<wrjnb-tag type="success">成功标签</wrjnb-tag>
<wrjnb-tag type="danger">危险标签</wrjnb-tag>`,
      vueCode: `<template>
  <wrjnb-tag>默认标签</wrjnb-tag>
  <wrjnb-tag type="primary">主要标签</wrjnb-tag>
  <wrjnb-tag type="success">成功标签</wrjnb-tag>
  <wrjnb-tag type="danger">危险标签</wrjnb-tag>
</template>

<script setup>
// 无需额外配置
</script>`
    },
    {
      title: '可关闭标签',
      description: '设置 closable 属性可以显示关闭按钮。',
      code: `<wrjnb-tag closable @close="handleClose">可关闭标签</wrjnb-tag>`,
      vueCode: `<template>
  <wrjnb-tag closable @close="handleClose">可关闭标签</wrjnb-tag>
</template>

<script setup>
const handleClose = (event) => {
  console.log('标签被关闭', event)
}
</script>`
    }
  ]
}; 