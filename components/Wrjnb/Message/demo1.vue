<!--
使用提示：
请先在根组件（如 app.vue 或 layout.vue）中挂载 <WrjnbMessage />，否则调用window.WrjnbMessage时消息不会显示。
-->
<template>
  <div style="display: flex; gap: 1.5em; align-items: center">
    <WrjnbButton @click="info">Info</WrjnbButton>
    <WrjnbButton type="success" @click="success">Success</WrjnbButton>
    <WrjnbButton @click="warning">Warning</WrjnbButton>
    <WrjnbButton type="danger" @click="error">Error</WrjnbButton>
  </div>
  <WrjnbMessage />
</template>
<script setup lang="ts">
import WrjnbMessage from "~/components/Wrjnb/Message/index.vue"
function info() {
  ;(window as any).WrjnbMessage.info("这是一条普通消息")
}
function success() {
  ;(window as any).WrjnbMessage.success("操作成功！")
}
function warning() {
  ;(window as any).WrjnbMessage.warning("警告信息")
}
function error() {
  ;(window as any).WrjnbMessage.error("操作失败")
}
</script>
