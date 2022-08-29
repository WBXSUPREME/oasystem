<template>
  <div class="ChangePassword">
    <div class="ChangePasswordBox">
      <p>修改密码</p>
      <div>
        <p><span>用户名:</span> <input type="text" /></p>
        <p><span>新密码:</span> <input type="text" /></p>
        <p><span>再次输入</span> <input type="text" /></p>
      </div>
      <div>
        <button>确认</button>
        <button>取消</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.ChangePassword {
  display: flex;
  width: 100%;
  height: 98vh;
  // background-color: skyblue;
  justify-content: center;
  align-items: center;
  .ChangePasswordBox {
    width: 669px;
    height: 473px;
    border: 1px solid gray;
    p:nth-child(1) {
      margin-left: 42px;
      margin-top: 26px;
    }
    div:nth-child(2) {
      width: 391px;
      height: 161px;
      // border: 1px solid black;
      margin-left: 140px;
      margin-top: 72px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      p {
        padding: 0;
        margin: 0;
        display: flex;
        margin-bottom: 40px;
        span {
          display: inline-block;
          width: 59px;
          height: 23px;
          font-size: 14px;
        }
        input {
          width: 224px;
          height: 27px;
          margin-left: 8px;
        }
      }
    }
    div:nth-child(3) {
      width: 200px;
      height: 50px;
      // background-color: red;
      margin-left: 390px;
      margin-top: 87px;
      button:nth-child(1) {
        width: 80px;
        height: 30px;
        border-radius: 5px;
        background-color: rgba(184, 134, 248, 53);
        color: rgba(255, 255, 255, 100);
        font-size: 14px;
        text-align: center;
        font-family: Microsoft Yahei;
        border: none;
        margin-right: 21px;
      }
      button:nth-child(2) {
        width: 80px;
        height: 30px;
        background-color: white;
        font-size: 14px;
        text-align: center;
        border-radius: 5px;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 187, 100);
      }
    }
  }
}
</style>
