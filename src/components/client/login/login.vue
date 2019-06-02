/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-05-27 22:27:36 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-30 22:42:21
 */
<template>
  <div>
    <el-row class="login-body">
      <el-col :span="8" style="position:absolute">
        <el-row class="login-table">
          <div class="register">
            <span @click="register">注册</span>
          </div>
          <el-row class="login-title">账号登录</el-row>
          <el-row class="login-input">
            <el-form ref="loginInfo" :model="loginInfo" label-position="top" label-width="80px" style="width:100%;">
              <el-col class="input" :span="14" :offset="5">
                <el-form-item label="用户名/邮箱/手机号码">
                  <el-input v-model="loginInfo.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input type="password" v-model="loginInfo.password"></el-input>
                </el-form-item>
                <el-form-item style="margin:30px 0;">
                  <el-button type="primary" style="width:100%;">立即登录</el-button>
                </el-form-item>
              </el-col>
              <!-- <el-col :span="14" :offset="5" style="margin-top:20px;">
                <el-slider :show-tooltip="false" v-model="rangeValue"></el-slider>
              </el-col> -->
            </el-form>
          </el-row>
        </el-row>
      </el-col>
      <register></register>
      <video src="./../../../assets/video/Ipad.mp4" autoplay loop="loop" muted="muted" preload="auto"></video>
      <el-row class="footer">

        <span class="iconfont iconbanquan" style="font-size:12px;"></span>
        <span>Shaun.Zhang - 随手快递</span>

      </el-row>
    </el-row>

  </div>
</template>
<script>
import register from "../login/register";
export default {
  components: {
    register: register
  },
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      },
      rangeValue: 0
    };
  },
  methods: {
    register() {
      let loginNode = document.querySelector(".login-table");
      let registerNode = document.querySelector(".register-table");
      loginNode.style.transform = "translate(-200%,0px)";
      registerNode.style.transform = "translate(-200%,0px)";
    }
  }
};
</script>
<style scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: -100px;
  z-index: -20;
  position: relative;
}
.login-body {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.login-table {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  /* height: 300px; */
  color: black;
  overflow: hidden;
  transition: all 1s;
}
.login-title {
  color: #606266;
  text-align: center;
  margin: 30px 5px;
  font-size: 20px;
}
.login-input {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  overflow: hidden;
  clear: both;
}
.el-form-item {
  margin: 0;
}
.register {
  width: 60px;
  height: 60px;
  background: linear-gradient(-45deg, rgba(0, 0, 0, 0.4) 50%, transparent 50%);
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;
  font-size: 14px;
  z-index: 2000;
  transition: all 0.4s;
}
.register:hover {
  width: 80px;
  height: 80px;
}
.register span {
  transform: rotate(-45deg);
  margin: 10px 10px;
  cursor: pointer;
}
.footer {
  width: 100%;
  height: 50px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>
