/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 23:40:34 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-25 21:11:55
 */
<template>
  <div>
    <el-row>
      <el-col :span="24" class="title_img" style="height: 400px;" :style="img">
        <div class="intro">
          <span class="title">服务介绍</span>
        </div>
        <div class="intro_banner" style="font-size:18px;">
          <span class="title_tip">让你的生活充满色彩、更加轻松，用更多的时间享受生活</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.intro {
  width: 100%;
  text-align: center;
  color: #409eff;
  font-size: 40px;
  position: absolute;
  line-height: 400px;
}
.intro_banner {
  color: #409eff;
  line-height: 500px;
  text-align: center;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.title_img {
  animation: fade-in;
  animation-duration: 0.5s;
  -webkit-animation: fade-in 0.5s;
}
.title {
  animation: fade-in;
  animation-duration: 1s;
  -webkit-animation: fade-in 1s;
}
.title_tip {
  animation: fade-in;
  animation-duration: 1.5s;
  -webkit-animation: fade-in 1.5s;
}
</style>
<script>
export default {
  data() {
    return {
      img: {
        backgroundImage:
          "url(" + require("./../../../assets/image/intro-bg.png") + ")"
      }
    };
  }
};
</script>
