<template>
  <div class="wrjnb-modal-demo">
    <WrjnbButton @click="show1 = true">基础弹窗</WrjnbButton>
    <WrjnbButton @click="show2 = true">自定义 footer</WrjnbButton>
    <WrjnbButton @click="show3 = true">禁止点击遮罩关闭</WrjnbButton>

    <WrjnbModal v-model="show1" title="基础弹窗">
      这是一个基础弹窗内容。
    </WrjnbModal>

    <WrjnbModal v-model="show2" title="自定义 footer">
      <div>你可以自定义底部内容。</div>
      <template #footer>
        <WrjnbButton @click="show2 = false">关闭</WrjnbButton>
        <WrjnbButton type="primary" @click="onOk">确定</WrjnbButton>
      </template>
    </WrjnbModal>

    <WrjnbModal v-model="show3" title="不可点遮罩关闭" :maskClosable="false">
      必须点击右上角关闭按钮才能关闭。
    </WrjnbModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
function onOk() {
  alert('点击了确定');
  show2.value = false;
}
</script>

<style scoped>
.wrjnb-modal-demo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
</style> 