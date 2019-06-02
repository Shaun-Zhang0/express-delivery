/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 22:07:13 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-26 15:15:23
 */
<template>
  <el-row class="main-body">
    <el-row>
      <el-col :span="3">
        <div class="touxiang" :style="touxiang"></div>
      </el-col>
      <el-col :span="18">
        <el-row>
          <el-col style="padding-top: 20px;" :span="24">
            <el-input class="postWord" resize="none" type="textarea" :rows="2" placeholder="善于发言的人都很迷人哦" v-model="postBody.postWord"></el-input>
          </el-col>
        </el-row>
        <el-row class="post-item-body">
          <el-col :span="3" class="post-item">
            <span class="iconfont icontupian"></span>图片
          </el-col>
          <el-col :span="4" :offset="17">
            <el-button style="width: 100%;" size="mini" type="primary">发布</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>
<style scoped>
.main-body {
  background-color: white;
  height: 150px;
  margin-top: 20px;
  border-radius: 4px;
}
.postWord {
  font-size: 15px !important;
}
.post-item-body {
  align-items: center;
  margin-top: 10px;
  display: flex;
}
.post-item {
  cursor: pointer;
  color: rgb(84, 92, 100);
  font-size: 16px;
}
.post-item:hover {
  color: #409eff;
}
.touxiang {
  margin-top: 20px;
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
<script>
export default {
  data() {
    return {
      postBody: { postWord: "" },
      touxiang: {
        backgroundImage:
          "url(" + require("./../../../assets/image/touxiang.jpg") + ")"
      }
    };
  }
};
</script>
