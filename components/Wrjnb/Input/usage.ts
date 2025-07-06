import type { ComponentUsage } from '../Button/usage';

export const inputUsage: ComponentUsage = {
  name: 'Input',
  title: '输入框 Input',
  description: '输入框用于文本输入，支持禁用、占位符等。',
  category: '表单组件',
  props: [
    {
      name: 'modelValue',
      description: '绑定值',
      type: 'String | Number',
      default: "''",
      required: false
    },
    {
      name: 'placeholder',
      description: '输入框占位文本',
      type: 'String',
      default: "''",
      required: false
    },
    {
      name: 'disabled',
      description: '是否禁用',
      type: 'Boolean',
      default: 'false',
      required: false
    },
    {
      name: 'type',
      description: '输入框类型',
      type: "'text' | 'password' | 'number'",
      default: "'text'",
      required: false
    }
  ],
  events: [
    {
      name: 'update:modelValue',
      description: '值更新时触发',
      params: 'value: String | Number'
    },
    {
      name: 'input',
      description: '输入时触发',
      params: 'event: Event'
    },
    {
      name: 'change',
      description: '值改变时触发',
      params: 'event: Event'
    }
  ],
  examples: [
    {
      title: '基础用法',
      description: '输入框的基础用法。',
      code: `<wrjnb-input v-model="value" placeholder="请输入内容" />`,
      vueCode: `<template>
  <wrjnb-input v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>`
    },
    {
      title: '禁用状态',
      description: '通过 disabled 属性禁用输入框。',
      code: `<wrjnb-input disabled placeholder="禁用状态" />`,
      vueCode: `<template>
  <wrjnb-input disabled placeholder="禁用状态" />
</template>

<script setup>
// 无需额外配置
</script>`
    },
    {
      title: '密码输入',
      description: '使用 type="password" 创建密码输入框。',
      code: `<wrjnb-input type="password" placeholder="请输入密码" />`,
      vueCode: `<template>
  <wrjnb-input type="password" placeholder="请输入密码" />
</template>

<script setup>
// 无需额外配置
</script>`
    }
  ]
}; 