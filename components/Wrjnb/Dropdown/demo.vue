<template>
  <div class="wrjnb-dropdown-demo">
    <h3>基础用法</h3>
    <WrjnbDropdown :items="items" triggerText="更多操作" @select="onSelect" />
    <p>选中项：{{ selected }}</p>

    <h3>自定义触发器</h3>
    <WrjnbDropdown :items="items">
      <template #trigger>
        <WrjnbButton type="primary" icon="icon-arrow-down"
          >自定义按钮</WrjnbButton
        >
      </template>
    </WrjnbDropdown>

    <h3>自定义菜单内容</h3>
    <WrjnbDropdown>
      <template #trigger>
        <WrjnbButton>自定义触发器</WrjnbButton>
      </template>
      <template #menu>
        <div style="padding: 8px 16px">自定义内容</div>
        <div style="padding: 8px 16px; color: #888">更多设置</div>
      </template>
    </WrjnbDropdown>

    <h3>禁用状态</h3>
    <WrjnbDropdown :items="items" triggerText="禁用菜单" :disabled="true" />

    <h3>带图标菜单</h3>
    <WrjnbDropdown :items="iconItems" triggerText="带图标菜单" />

    <h3>分组菜单（自定义 menu 插槽）</h3>
    <WrjnbDropdown triggerText="分组菜单">
      <template #menu>
        <div class="dropdown-group-title">分组一</div>
        <div class="wrjnb-dropdown__item">选项A</div>
        <div class="wrjnb-dropdown__item">选项B</div>
        <div class="dropdown-group-title">分组二</div>
        <div class="wrjnb-dropdown__item">选项C</div>
      </template>
    </WrjnbDropdown>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: "操作一", value: 1 },
  { label: "操作二", value: 2 },
  { label: "操作三", value: 3 },
];
const iconItems = [
  { label: "编辑", value: "edit", icon: "icon-edit" },
  { label: "删除", value: "delete", icon: "icon-delete", disabled: true },
  { label: "分享", value: "share", icon: "icon-share" },
];
const selected = ref("");
function onSelect(item: any) {
  selected.value = item.label;
}
</script>

<style scoped>
.wrjnb-dropdown-demo {
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-width: 700px;
}
.dropdown-group-title {
  font-size: 0.95em;
  color: #888;
  padding: 6px 16px 2px 16px;
  font-weight: bold;
}
</style>
