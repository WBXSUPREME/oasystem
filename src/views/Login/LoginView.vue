<template>
  <div class="Login">
    <div class="loginbox">
      <p>OA系统登录</p>
      <input type="text" placeholder="请输入用户名" class="inp1" />
      <input type="text" placeholder="请输入密码" class="inp1" />

      <p class="ForgotPassword" @click="$router.push('/changepassword')">
        忘记密码?
      </p>
      <p class="three">
        <input type="text" placeholder="验证码" />
        <button>验证码图片</button>
      </p>

      <!-- 登录按钮 -->
      <button class="loginbutton">登录</button>
      <img
        class="img1"
        src="../../../public/img/Snipaste_2022-08-27_14-44-14.png"
        alt=""
      />
      <img
        class="img2"
        src="../../../public/img/Snipaste_2022-08-27_14-45-03.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
// import {login} from '../../http/api.js'
export default {
  data() {
    return {}
  },
  created() {
    this.$axios.post('/effect/home/loginsearch').then((res) => {
      console.log(res, 'res')
    })
    // this.$axios.post('/http://127.0.0.1:8000/api/staff/login').then((res)=>{
    // 	console.log(res);
    // })
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.Login {
  width: 100%;
  height: 98vh;
  background-image: url(../../../public/img/login.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  // text-align: center;
  .loginbox {
    justify-content: center;
    align-items: center;
    width: 495px;
    height: 463px;
    background-color: rgba(255, 255, 255, 100);
    border-radius: 34px;
    margin: auto;
    position: relative;
    p {
      margin-left: 171px;
      margin-top: 29px;
      width: 160px;
      height: 35px;
      color: rgba(0, 0, 0, 1);
      font-size: 28px;
      text-align: left;
      font-family: 方正兰亭黑-标准;
      text-align: center;
    }
    .inp1 {
      width: 333px;
      height: 46px;
      line-height: 23px;
      border-radius: 16px;
      border: 1px solid #c8c8c8;
      color: rgba(206, 206, 206, 100);
      font-size: 16px;
      font-family: Roboto;
      margin-left: 53px;
      margin-top: 34px;
      padding-left: 56px;
      // border: none;
    }
    .ForgotPassword {
      color: rgba(244, 196, 56, 100);
      font-size: 16px;
      // background-color: skyblue;
      margin-left: 272px;
      margin-top: 2px;
      text-align: right;
      padding-right: 20px;
    }
    .three {
      width: 389px;
      height: 46px;
      // background-color: aqua;
      display: flex;
      margin-left: 53px;
      margin-top: 4px;
      justify-content: space-between;
      input {
        width: 226px;
        height: 46px;
        border-radius: 16px;
        border: 1px solid #c8c8c8;
        padding-left: 22px;
      }
      button {
        width: 119px;
        height: 46px;
        line-height: 20px;
        border-radius: 16px;
        font-size: 14px;
        border: 1px solid #c8c8c8;
        color: #c8c8c8;
        background-color: rgba(255, 255, 255, 100);
      }
    }
    .loginbutton {
      width: 332px;
      height: 52px;
      line-height: 29px;
      border-radius: 10px;
      background-color: rgba(184, 134, 248, 53);
      color: white;
      font-size: 20px;
      border: 1px solid rgba(184, 134, 248, 53);
      text-align: center;
      margin-left: 85px;
      margin-top: 34px;
    }
    .img1 {
      position: absolute;
      top: 104px;
      left: 76px;
      width: 23px;
      height: 23px;
    }
    .img2 {
      position: absolute;
      top: 192px;
      left: 76px;
      width: 23px;
      height: 23px;
    }
  }
}
</style>
