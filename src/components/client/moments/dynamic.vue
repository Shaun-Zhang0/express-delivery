/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 22:41:10 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:45:47
 */
<template>
  <div>
    <el-row class="dynamic-tabs">
      <el-col :offset="1" :span="22">
        <el-tabs v-model="tapStatus">
          <el-tab-pane label="关注" name="1">
            <follow-body></follow-body>
          </el-tab-pane>
          <el-tab-pane label="热门" name="2">
            <hot-view-body></hot-view-body>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <div class="top-nav" :style="{visibility : display}">
      <el-tabs v-model="tapStatus" @tab-click="handleClick">
        <el-tab-pane label="关注" name="1"></el-tab-pane>
        <el-tab-pane label="热门" name="2"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
.dynamic-tabs {
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
}
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
</style>
<script>
import followBody from "./follow";
import hotViewBody from "./hotView";
import topNav from "./topNav";
export default {
  components: {
    followBody: followBody,
    hotViewBody: hotViewBody,
    topNav: topNav
  },
  data() {
    return {
      tapStatus: "1",
      tapwidth: 0,
      top_height: null,
      display: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.$nextTick(function() {
      this.setWidth();
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
  methods: {
    /**
     * tab => 导航栏的子栏的对象
     * event => 事件对象
     * 点击动态导航条，切换栏目操作，并置顶
     */
    handleClick(tab, event) {
      this.$options.methods.action_top();
    },
    /**
     * 用于判断滚动条的高度，显示动态导航条
     */
    handleScroll() {
      this.top_height = window.scrollY;
      if (this.top_height <= 300) {
        this.display = "hidden";
      } else {
        this.display = "visible";
      }
    },
    /**
     * 设置动态tab的宽度
     */
    setWidth() {
      const o = document.getElementsByClassName("el-tabs__nav-scroll")[0];
      var w = o.clientWidth || o.offsetWidth;
      this.tapwidth = w;
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
