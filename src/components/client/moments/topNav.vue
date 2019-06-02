/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 18:06:49 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-26 23:55:47
 */
<template>
  <div>
    <div class="top-nav" :style="{visibility : display}">
      <el-tabs v-model="status">
        <el-tab-pane label="关注" name="1"></el-tab-pane>
        <el-tab-pane label="热门" name="2"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style>
.top-nav {
  position: fixed;
  top: 0%;
  z-index: 20000;
  visibility: hidden;
  background-color: #fff;
  left: 50%;
  text-align: center;
  /* width: 200px; */
}
.top-nav div {
  /* display: inline; */
}
</style>
<script>
export default {
  props: ["tapwidth", "tapstatus"],
  data() {
    return {
      top_height: null,
      display: "",
      status: "1"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    console.log(this.tapstatus);
    this.$nextTick(function() {
      this.setWidth();
    });
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

    setWidth() {
      const Node = document.getElementsByClassName("top-nav")[0];
      Node.style.width = this.tapwidth + "px";
      Node.style.marginLeft = -this.tapwidth / 2 + "px";
    },
    action_top() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
