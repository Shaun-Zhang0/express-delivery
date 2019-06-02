/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-21 23:03:58 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:13:10
 */
<template>
  <div>
    <el-row>
      <el-col :span="2" :offset="1">
        <sr-nav></sr-nav>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
/* body {
  background-color: #ebebeb !important;
} */
</style>
<script>
import srRequestBuy from "./requestBuy/requestBuy";
import srNav from "./submitRequestNav";
export default {
  components: {
    srRequestBuy: srRequestBuy,
    srNav: srNav
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#EBEBEB");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "");
  }
};
</script>
