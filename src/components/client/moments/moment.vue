/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 17:04:22 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-27 22:28:54
 */
<template>
  <div>
    <el-row>
      <el-col :span="4" :offset="2" style="position:fixed;z-index:3000">
        <person-info></person-info>
      </el-col>
      <el-col :span="12" :offset="6">
        <el-row>
          <el-col :span="22" :offset="1">
            <post-creator></post-creator>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <dynamic></dynamic>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
@keyframes animation1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: scale(180deg);
  }
  100% {
    transform: scale(360deg);
  }
}
</style>
<script>
import personInfo from "./personInfo";
import postCreator from "./postCreator";
import dynamic from "./dynamic";
export default {
  components: {
    personInfo: personInfo,
    postCreator: postCreator,
    dynamic: dynamic
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#EBEBEB");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "");
  },
  mounted() {
    let oBox = document.getElementsByClassName("touxiang")[0];
    let oldX = oBox.offsetLeft;
    let oldY = oBox.offsetTop;
    let count = 0;
    console.log(oldX + "," + oldY);
    oBox.onmousedown = function(e) {
      var oEvent = e || window.event,
        disL = oEvent.clientX - oBox.offsetLeft,
        disT = oEvent.clientY - oBox.offsetTop,
        maxL = document.documentElement.clientWidth - oBox.offsetWidth,
        maxT = document.documentElement.clientHeight - oBox.offsetHeight;
      oBox.style.transform = "none";
      document.onmousemove = function(e) {
        var oEvent = e || window.event,
          disX = oEvent.clientX - disL,
          disY = oEvent.clientY - disT;

        if (disX <= 0) {
          disX = 0;
        }
        if (disY <= 0) {
          disY = 0;
        }
        if (disX >= maxL) {
          disX = maxL;
        }
        if (disY >= maxT) {
          disY = maxT;
        }
        oBox.style.left = disX + "px";
        oBox.style.top = disY + "px";
        oBox.style.transition = "none";
      };
    };
     oBox.onmouseup = function() {
      count++;
      if (count % 2 == 0) {
        oBox.style.transform = "rotate(720deg)";
      } else {
        oBox.style.transform = "rotate(-720deg)";
      }
      document.onmousemove = null;
      oBox.style.left = oldX + "px";
      oBox.style.top = oldY + "px";
      oBox.style.transition = "ease-in 0.6s,transform 2s ";
    };
  }
};
</script>
