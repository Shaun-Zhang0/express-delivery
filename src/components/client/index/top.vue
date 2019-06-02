/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 18:06:49 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-26 22:39:34
 */
<template>
  <div>
    <div class="top" :style="{visibility : display}">
      <el-tooltip  class="item" effect="dark" content="个人中心" placement="left">
        <div style=" margin-top: 0px;">
          <span class="iconfont icondenglu"></span>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="在线咨询" placement="left">
        <div>
          <span class="iconfont iconzixun"></span>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="回到顶部" placement="left">
        <div @click="action_top">
          <span class="iconfont iconzhiding"></span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>
<style>
.top {
  position: fixed;
  bottom: 20%;
  right: 10px;
  z-index: 20000;
  visibility: hidden;
  background-color: #363e4f;
  color: white;
  width: 50px;
  text-align: center;
}
.top div {
  height: 60px;
  line-height: 60px;
  margin-top: 10px;
  width: 50px;
  cursor: pointer;
}
.top div:hover {
  background-color: red;
  width: 50px;
}
</style>
<script>
export default {
  data() {
    return {
      top_height: null,
      display: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
  methods: {
    // 获取滚动条高度
    handleScroll() {
      this.top_height = window.scrollY;
      if (this.top_height <= 300) {
        this.display = "hidden";
      } else {
        this.display = "visible";
      }
    },
    action_top() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
