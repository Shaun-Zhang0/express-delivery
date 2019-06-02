/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 15:22:38 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:13:34
 */
<template>
  <el-row style="margin: 40px 0px 20px">
    <router-link to="/requestBuy">
      <el-row class="nav_item active" @click.native="navitemClick">
        <el-col :span="24" style="text-align:center;">
          <el-row class="icon">
            <el-col :span="24">
              <span class="iconfont icongoumai"></span>
            </el-col>
            <el-row>帮我买</el-row>
          </el-row>
        </el-col>
      </el-row>
    </router-link>
    <router-link to="/requestTake">
      <el-row class="nav_item" @click.native="navitemClick">
        <el-col :span="24" style="text-align:center;">
          <el-row class="icon">
            <el-col :span="24">
              <span class="iconfont iconkuaidi"></span>
            </el-col>
            <el-row>帮我取</el-row>
          </el-row>
        </el-col>
      </el-row>
    </router-link>
  </el-row>
</template>
<style scoped>
.nav_item {
  height: 200px;
  background-color: white;
  text-align: center;
  cursor: pointer;
}
.iconfont {
  font-size: 40px;
  font-weight: 100;
}
.icon {
  border: 3px solid #ccc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  top: 40%;
  margin-top: -30px;
}
.nav_item:hover {
  background-color: #545c64;
  color: white;
}
.active {
  background-color: #545c64 !important;
  color: white;
}
</style>
<script>
export default {
  data() {
    return {
      navStatu: 0
    };
  },
  methods: {
    /**
     * 点击订单类型，进行切换
     */
    navitemClick(e) {
      const Nodes = document.getElementsByClassName("nav_item");
      for (let i = 0; i < Nodes.length; i++) {
        Nodes[i].classList.remove("active");
      }
      const currentNode = e.currentTarget;
      currentNode.classList.add("active");
    }
  }
};
</script>
