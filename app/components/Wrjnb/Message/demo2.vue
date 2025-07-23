<!--
使用提示：
请先在根组件（如 app.vue 或 layout.vue）中挂载 <WrjnbMessage />，否则调用window.WrjnbMessage时消息不会显示。
-->
<template>
  <div style="display: flex; flex-direction: column; gap: 1em; max-width: 320px">
    <WrjnbButton @click="custom">自定义内容/时长</WrjnbButton>
    <WrjnbButton @click="closable">可关闭消息</WrjnbButton>
    <WrjnbButton @click="many">快速触发多条消息（最多5条）</WrjnbButton>
    <WrjnbButton type="danger" @click="closeAll">关闭全部</WrjnbButton>
  </div>
  <WrjnbMessage />
</template>
<script setup lang="ts">
import WrjnbMessage from "~/components/Wrjnb/Message/index.vue"
function custom() {
  ;(window as any).WrjnbMessage.info("自定义内容，显示 4 秒", { duration: 4000 })
}
function closable() {
  ;(window as any).WrjnbMessage.success("可手动关闭", { closable: true })
}
function many() {
  for (let i = 0; i < 8; i++) {
    ;(window as any).WrjnbMessage.warning("第" + (i + 1) + "条消息")
  }
}
function closeAll() {
  ;(window as any).WrjnbMessage.closeAll()
}
</script>
