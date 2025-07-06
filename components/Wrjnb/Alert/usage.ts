import type { ComponentUsage } from '../Button/usage';

export const alertUsage: ComponentUsage = {
  name: 'Alert',
  title: '警告 Alert',
  description: '警告用于展示提示信息，支持主色、成功、危险等多种类型。',
  category: '反馈组件',
  props: [
    {
      name: 'type',
      description: '警告类型',
      type: "'primary' | 'success' | 'danger' | 'warning'",
      default: "'primary'",
      required: false
    },
    {
      name: 'closable',
      description: '是否可关闭',
      type: 'Boolean',
      default: 'false',
      required: false
    },
    {
      name: 'show',
      description: '是否显示',
      type: 'Boolean',
      default: 'true',
      required: false
    }
  ],
  events: [
    {
      name: 'close',
      description: '关闭警告时触发',
      params: 'event: Event'
    }
  ],
  examples: [
    {
      title: '基础用法',
      description: '警告的基础用法，支持多种类型。',
      code: `<wrjnb-alert type="primary">这是一条主要警告</wrjnb-alert>
<wrjnb-alert type="success">这是一条成功警告</wrjnb-alert>
<wrjnb-alert type="danger">这是一条危险警告</wrjnb-alert>
<wrjnb-alert type="warning">这是一条警告信息</wrjnb-alert>`,
      vueCode: `<template>
  <wrjnb-alert type="primary">这是一条主要警告</wrjnb-alert>
  <wrjnb-alert type="success">这是一条成功警告</wrjnb-alert>
  <wrjnb-alert type="danger">这是一条危险警告</wrjnb-alert>
  <wrjnb-alert type="warning">这是一条警告信息</wrjnb-alert>
</template>

<script setup>
// 无需额外配置
</script>`
    },
    {
      title: '可关闭警告',
      description: '设置 closable 属性可以显示关闭按钮。',
      code: `<wrjnb-alert type="primary" closable @close="handleClose">
  这是一条可关闭的警告
</wrjnb-alert>`,
      vueCode: `<template>
  <wrjnb-alert type="primary" closable @close="handleClose">
    这是一条可关闭的警告
  </wrjnb-alert>
</template>

<script setup>
const handleClose = (event) => {
  console.log('警告被关闭', event)
}
</script>`
    }
  ]
}; 