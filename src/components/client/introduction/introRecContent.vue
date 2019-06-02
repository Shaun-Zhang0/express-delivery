/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 23:42:14 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-25 23:27:57
 */
<template>
  <div style="padding-bottom: 80px;background-color:white;">
    <el-row style="padding-top: 30px;">
      <el-col :span="3" style="font-size: 25px;font-weight: 500" :offset="1">接单方法</el-col>
    </el-row>
    <el-row style="padding-top: 60px;margin:0px 30px 0px;">
      <el-col :span="20" :offset="2" style="background-color:white;height: 300px;text-align:center;">
        <el-row>
          <el-col :span="3" :offset="1">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont iconxiaochengxu" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc" style="">
                <span>打开随手快递</span>
              </div>
              <div class="card_desc_deep" style="">
                <span>接单模式</span>
                <br>
                <span>只可使用小程序</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="height:270px;line-height:270px;">
            <span class="iconfont iconxiayibu"></span>
          </el-col>

          <el-col :span="3">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont iconchakan" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc" style="">
                <span>查看代购圈</span>
              </div>
              <div class="card_desc_deep" style="">
                <span>根据自己的实际情况</span>
                <br>
                <span>进行接单</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="height:270px;line-height:270px;">
            <span class="iconfont iconxiayibu"></span>
          </el-col>
          <el-col :span="3">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont icongoumai" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc" style="">
                <span>进行购买</span>
              </div>
              <div class="card_desc_deep" style="">
                <span>根据订单的需求</span>
                <br>
                <span>到指定地点购买</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="height:270px;line-height:270px;">
            <span class="iconfont iconxiayibu"></span>
          </el-col>
          <el-col :span="3">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont iconmn_kuaidiyuan" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc" style="">
                <span>送货或者邮递送达</span>
              </div>
              <div class="card_desc_deep" style="">
                <span>闪电推送</span>
                <br>
                <span>让有心人看见</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="height:270px;line-height:270px;">
            <span class="iconfont iconxiayibu"></span>
          </el-col>
          <el-col :span="3">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont iconok" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc" style="">
                <span>完成</span>
              </div>
              <div class="card_desc_deep" style="">
                <span>等待收货人确认订单</span>
                <br>
                <span>即可进行结算</span>
              </div>
            </div>
          </el-col>
        </el-row>

      </el-col>
    </el-row>

  </div>
</template>
<style scoped>
@keyframes jiggle {
  10% {
    transform: rotate(15deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  30% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  50%,
  100% {
    transform: rotate(0deg);
  }
}
.content_card {
  /* border: 1px solid #ccc; */
  color: #333333;
  cursor: pointer;
}
.card_desc {
  text-align: center;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  background-color: #e8e8e8;
  height: 150px;
  line-height: 150px;
  font-weight: 800;
}
.card_desc_deep {
  height: 50px;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%;
  background-color: #f8f8f8;
  font-size: 12px;
  color: #666666;
}
.content_card:hover {
  animation: jiggle 1s ease-in infinite;
}
</style>
<script>
export default {};
</script>
