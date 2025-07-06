import type { ComponentUsage } from '../Button/usage';

export const switchUsage: ComponentUsage = {
  name: 'Switch',
  title: '开关 Switch',
  description: '开关用于二元状态切换，支持 v-model。',
  category: '表单组件',
  props: [
    {
      name: 'modelValue',
      description: '绑定值',
      type: 'Boolean',
      default: 'false',
      required: false
    },
    {
      name: 'disabled',
      description: '是否禁用',
      type: 'Boolean',
      default: 'false',
      required: false
    }
  ],
  events: [
    {
      name: 'update:modelValue',
      description: '值更新时触发',
      params: 'value: Boolean'
    },
    {
      name: 'change',
      description: '状态改变时触发',
      params: 'value: Boolean'
    }
  ],
  examples: [
    {
      title: '基础用法',
      description: '开关的基础用法。',
      code: `<wrjnb-switch v-model="checked" />`,
      vueCode: `<template>
  <wrjnb-switch v-model="checked" />
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
</script>`
    },
    {
      title: '禁用状态',
      description: '通过 disabled 属性禁用开关。',
      code: `<wrjnb-switch disabled />
<wrjnb-switch v-model="checked" disabled />`,
      vueCode: `<template>
  <wrjnb-switch disabled />
  <wrjnb-switch v-model="checked" disabled />
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(true)
</script>`
    }
  ]
}; 