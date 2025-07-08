<template>
  <div class="wrjnb-tabs-demo">
    <WrjnbTabs v-model="active1" :tabs="tabs1">
      <template #tab1>内容一</template>
      <template #tab2>内容二</template>
      <template #tab3>内容三</template>
    </WrjnbTabs>

    <WrjnbTabs v-model="active2" :tabs="tabs2" direction="vertical" style="margin-top:2em;max-width:400px">
      <template #tabA>纵向内容A</template>
      <template #tabB>纵向内容B</template>
      <template #tabC>纵向内容C</template>
    </WrjnbTabs>

    <WrjnbTabs v-model="active3" :tabs="tabs3" style="margin-top:2em">
      <template #label="{ tab }">
        <span style="color: #e67e22"><i v-if="tab.icon" :class="tab.icon" style="margin-right:4px"/>{{ tab.label }}</span>
      </template>
      <template #tabX>自定义 label 内容 X</template>
      <template #tabY>自定义 label 内容 Y</template>
    </WrjnbTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active1 = ref('tab1')
const tabs1 = [
  { name: 'tab1', label: '标签一' },
  { name: 'tab2', label: '标签二' },
  { name: 'tab3', label: '标签三', disabled: true },
]
const active2 = ref('tabA')
const tabs2 = [
  { name: 'tabA', label: '纵向A' },
  { name: 'tabB', label: '纵向B' },
  { name: 'tabC', label: '纵向C' },
]
const active3 = ref('tabX')
const tabs3 = [
  { name: 'tabX', label: '自定义X', icon: 'icon-star' },
  { name: 'tabY', label: '自定义Y', icon: 'icon-heart' },
]
</script>

<style scoped>
.wrjnb-tabs-demo {
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-width: 700px;
}
</style> 