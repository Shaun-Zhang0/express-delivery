/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-26 15:10:29 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-26 22:29:54
 */
<template>
  <div>
    <el-row class="comment-head">
      <el-col :span="2" :offset="1">
        <div class="touxiang" :style="touxiang"></div>
      </el-col>
      <el-col :span="18">
        <el-row class="username">
          <el-col :span="24">火鸡中的颤抖鸡</el-col>
        </el-row>
        <el-row class="post-time">
          <el-col :span="24">
            <span>11:35</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="comment-body">
      <el-row>
        <el-col class="comment-word" :span="18" :offset="3">牛逼啊！！！牛逼啊！！！牛逼啊！！！牛逼啊！！！牛逼啊！！！牛逼啊！！！</el-col>
        <el-col :span="2" :offset="1">
          <span class="iconfont icondianzan"></span>
          <span style="font-size:11px;">1</span>
        </el-col>
      </el-row>
      <el-row class="comment-son-body">
        <el-col :span="20" :offset="3" style="background-color: #f0f3f5;">
          <el-row style="padding-top:20px;">
            <el-col :span="22">
              <span class="comment-son-user">超级无敌帅气迷人：</span>
              <span>超级牛逼啊！！！超级牛逼啊！！！超级牛逼啊！！！超级牛逼啊！！！超级牛逼啊！！！</span>
            </el-col>
          </el-row>
          <el-row style="height:30px;line-height:30px;">
            <el-col :span="22" style="color:#bfbfbf">04/26</el-col>
            <el-col :span="2">
              <span class="iconfont icondianzan"></span>
              <span style="font-size:12px;">1</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<style scoped>
.touxiang {
  height: 40px;
  width: 40px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.username {
  font-size: 12px;
}
.post-time {
  font-size: 11px;
  color: #bfbfbf;
  margin-top: 10px;
}
.comment-body {
  margin-top: 20px;
  margin-bottom: 20px;
}
.comment-word {
  font-size: 13px;
}
.comment-son-body {
  margin-top: 20px;
  /* background-color: #f0f3f5; */
  font-size: 12px;
}
.comment-son-user {
  cursor: pointer;
  color: #9cb0f4;
}
</style>
<script>
export default {
  data() {
    return {
      touxiang: {
        backgroundImage:
          "url(" + require("./../../../assets/image/touxiang.jpg") + ")"
      }
    };
  }
};
</script>
