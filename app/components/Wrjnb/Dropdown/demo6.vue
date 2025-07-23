<template>
  <WrjnbDropdown triggerText="分组菜单">
    <template #menu>
      <div class="dropdown-group-title">分组一</div>
      <div class="wrjnb-dropdown__item">选项A</div>
      <div class="wrjnb-dropdown__item">选项B</div>
      <div class="dropdown-group-title">分组二</div>
      <div class="wrjnb-dropdown__item">选项C</div>
    </template>
  </WrjnbDropdown>
</template>
<style scoped>
.dropdown-group-title {
  font-size: 0.95em;
  color: #888;
  padding: 6px 16px 2px 16px;
  font-weight: bold;
}
</style> 