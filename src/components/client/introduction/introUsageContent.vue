/** 
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 23:42:14 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-25 23:28:41
 */
<template>
  <div style="background-color:white;">
    <el-row class="title">
      <el-col class="title_content" :span="3" :offset="1">使用方法</el-col>
    </el-row>
    <el-row class="method_body">
      <el-col :span="20" :offset="2" style="height: 300px;text-align:center;">
        <el-row>
          <el-col :span="3" :offset="1">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont iconshouji" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc">
                <span>打开随手快递</span>
              </div>
              <div class="card_desc_deep">
                <span>web端、小程序端</span>
                <br />>
                <span>均可使用</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="height:270px;line-height:270px;">
            <span class="iconfont iconxiayibu"></span>
          </el-col>
          <el-col :span="3">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont iconfenqixianjudi" style="font-size:40px;">
              </span>
            </div>
            <div class="content_card">
              <div class="card_desc">
                <span>选择代购地点</span>
              </div>
              <div class="card_desc_deep">
                <span>根据您的需求</span>
                <br />
                <span>进行选择</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="height:270px;line-height:270px;">
            <span class="iconfont iconxiayibu"></span>
          </el-col>
          <el-col :span="3">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont icontianxie" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc">
                <span>填写物品信息</span>
              </div>
              <div class="card_desc_deep">
                <span>备注相关信息</span>
                <br />
                <span>或特殊需求</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2" style="height:270px;line-height:270px;">
            <span class="iconfont iconxiayibu"></span>
          </el-col>
          <el-col :span="3">
            <div style="width:70px;height:70px;margin:auto">
              <span class="iconfont iconzhifu" style="font-size:40px;"></span>
            </div>
            <div class="content_card">
              <div class="card_desc">
                <span>下单支付费用</span>
              </div>
              <div class="card_desc_deep">
                <span>闪电推送</span>
                <br />
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
              <div class="card_desc">
                <span>送达商品到家</span>
              </div>
              <div class="card_desc_deep">
                <span>就近结单</span>
                <br />
                <span>提高效率</span>
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
.title {
  padding-top: 30px;
}
.title_content {
  font-size: 25px;
  font-weight: 500;
}
.method_body {
  padding-top: 60px;
  margin: 0px 30px 0px;
}
</style>
<script>
export default {};
</script>
