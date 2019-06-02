/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 18:01:07 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 17:44:49
 */

<template>
  <div style="text-align: center;">
    <el-row style="background-color: white;height: 350px;line-height: 350px;font-size: 30px; ">
      <div style="height: 50px;">
        <span>让 随手 成为一种习惯</span>
      </div>
      <div style="height: auto;font-size: 20px;color: hsla(0, 0%, 50%, 0.8)">
        <span>让你的生活充满色彩</span>
      </div>
    </el-row>
    <el-row style="background-color: hsla(0, 0%, 50%, 0.3);height: 680px;">
      <el-row class="list" style="padding-top: 40px;">
        <el-col :span="7" :offset="4">
          <el-card shadow="hover" style="height: 300px;background-color: white;padding-top: 0px;">
            <div style="height: 40px;line-height: 40px;">代买</div>
            <div style="height: 350px;">
              <img src="../../../assets/image/buy.jpg" alt="" style="max-width:100%;max-height:100%" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="7" :offset="3">
          <el-card shadow="hover" style="height: 300px;background-color: white">
            <div style="height: 40px;line-height: 40px;">代取</div>
            <div style="height: 400px;">
              <img src="../../../assets/image/get.jpg" alt="" style="max-width:100%;max-height:100%" />
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="list" style="padding-top: 30px;">
        <el-col :span="7" :offset="4">
          <el-card shadow="hover" style="height: 300px;background-color: white">
            <div style="height: 40px;line-height: 40px;">生活圈</div>
            <div style="height: 400px;">
              <img src="../../../assets/image/life.png" alt="" style="max-width:100%;max-height:100%" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="7" :offset="3">
          <el-card shadow="hover" style="height: 300px;background-color: white;">
            <div style="height: 40px;line-height: 40px;">社交</div>
            <div style="height: 400px;">
              <img src="../../../assets/image/shejiao.jpg" alt="" style="max-width:100%;max-height:100%" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
    <el-row style="background: white;height: 350px;line-height: 350px;font-size: 30px;">
      <div style="height: 50px;">
        <span>从
          <span id="in">加入</span>
          我们开始
        </span>
      </div>
      <div style="height: 50px;font-size: 20px;color: hsla(0, 0%, 50%, 0.8)">
        <span>web端、小程序，只为让你更加方便</span>
      </div>
    </el-row>
    <el-row style="height: 500px;background-color:  hsla(0, 0%, 50%, 0.9)">
      <el-col :span="24">
        <el-col id="ip" :span="6" :offset="3" style="height: 500px;">
          <img style="height: 500px;" src="../../../assets/image/123.png" alt="" />
        </el-col>
        <el-col :span="12" :offset="2" style="background-color: none;height: 450px;line-height: 400px;">
          <div style="font-size: 30px;color:white;text-align: left;height: 50px;">
            <span style="">
              <b>客户端</b>
            </span>
            <span style="font-size: 15px;">均包括： 代购、代拿、生活圈、交友等 业务</span>
          </div>
          <div style="padding-top: 20px;">
            <el-button style="background-color:hsla(0, 0%, 0%, 0);color: white">现在下单</el-button>
            <el-button style="background-color:hsla(0, 0%, 0%, 0);color: white">微信小程序</el-button>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.list {
  transition: all 1s;
  -webkit-transition: all 1s;
  -ms-transition: all 1s;
}
.fadeInDown {
  animation: fadeInDown;
}

#in {
  animation-duration: 3s;
  animation-fill-mode: both;
  opacity: 0;
}
#ip {
  transition: all 1s;
  -webkit-transition: all 1s;
  -ms-transition: all 1s;
}
</style>

<script>
export default {
  mounted() {
    /**
     * 添加滚动条监听器
     */
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      var height = document.documentElement.scrollTop;
      if (height > 400) {
        var listNode = document.getElementsByClassName("list");
        listNode[1].style.transform = "translate(0,-100px)";
        listNode[0].style.transform = "translate(0,-100px)";
      }
      if (height > 1100) {
        var inNode = document.getElementById("in");
        inNode.className = "TwoAnimated";
        inNode.className = "fadeInDown";
      }
      if (height > 1460) {
        var ip = document.getElementById("ip");
        ip.style.transform = "translate(0,-60px)";
      }
    }
  },
  beforeDestroy() {
    /**
     * 删除滚动条监听器
     */
    window.removeEventListener("scroll", this.scroll);
  }
};
</script>
