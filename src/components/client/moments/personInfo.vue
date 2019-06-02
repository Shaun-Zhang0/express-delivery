/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 17:05:20 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-25 22:04:12
 */
<template>
  <el-row class="user">
    <el-row class="info" style="height:150px;" :style="img">
      <div class="touxiang" :style="touxiang"></div>
    </el-row>
    <el-row class="username">
      <div :span="12">火鸡中颤抖鸡</div>
    </el-row>

  </el-row>
</template>
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.user {
  margin-top: 20px;
  margin-bottom: 20px;
  /* left:20px; */
  border-radius: 5%;
  background-color: white;
  /* position: fixed; */
  /* height: 230px; */
}
.touxiang {
  height: 80px;
  width: 80px;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: fixed;
  /* margin: 110px 10px 0px; */
  margin-left: 10px;
  z-index: 2000;
  top: 189px;
  /* background-size: cover; */
  background-size: 100% auto;
  background-repeat: no-repeat;
  /* transform: rotate(360deg); */
}
.info {
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-position: 50%; */
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  /* background-color: red; */
}
.username {
  /* height: 80px; */
  line-height: 80px;
  padding: 20px 10px 0px;
}


</style>
<script>
export default {
  data() {
    return {
      img: {
        backgroundImage:
          "url(" + require("./../../../assets/image/background.jpg") + ")"
      },
      touxiang: {
        backgroundImage:
          "url(" + require("./../../../assets/image/touxiang.jpg") + ")"
      }
    };
  }
};
</script>
