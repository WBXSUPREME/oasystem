<template>
  <div>
    <!-- 顶部的发送箱按钮和收件箱按钮 -->
    <div class="TopSendButton">
      <p>发送箱</p>
      <p>收件箱</p>
    </div>

    <!-- 发送人信息 -->
    <div class="TheSender"></div>
  </div>
</template>

<style lang="scss" scoped>
.TopSendButton {
  width: 22.375rem;
  height: 2.0625rem;
  border: 1px solid #cbcbcb;
  display: flex;
  margin-top: 2.1875rem;
  margin-left: 1.875rem;
  p {
    margin: 0;
    width: 50%;
    height: 2.0625rem;
    line-height: 2.0625rem;
    text-align: center;
  }
  P:nth-child(1) {
    border-right: 1px solid #cbcbcb;
  }
}
.TheSender {
  width: 706px;
  height: 800px;
  background-color: skyblue;
}
</style>
