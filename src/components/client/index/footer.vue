/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 18:01:01 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-22 19:56:09
 */
<template>
  <el-footer style="background-color: black;height: 320px;">
    <el-row>
      <el-col :span="24">
        <el-col :span="3" :offset="2" style="color: hsla(0, 0%, 50%, 0.9);height: 300px;">
          <div style="padding-top: 40px;text-align: left;font-size: 15px;">
            关于我们
          </div>
          <div style="list-style-type: none;text-align: left;padding-top: 30px;font-size: 12px;">
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">随手快递介绍</span>
            </li>
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">联系我们</span>
            </li>
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">公告通知</span>
            </li>
          </div>
        </el-col>
        <el-col :span="3" :offset="0" style="color: hsla(0, 0%, 50%, 0.9);height: 300px;">
          <div style="padding-top: 40px;text-align: left;font-size: 15px;">
            意见反馈
          </div>
          <div style="list-style-type: none;text-align: left;padding-top: 30px;font-size: 12px;">
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">常见问题</span>
            </li>
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">问题反馈</span>
            </li>
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">如何下单</span>
            </li>
          </div>
        </el-col>
        <el-col :span="3" :offset="0" style="color: hsla(0, 0%, 50%, 0.9);height: 300px;">
          <div style="padding-top: 40px;text-align: left;font-size: 15px;">
            网站导航
          </div>
          <div style="list-style-type: none;text-align: left;padding-top: 30px;font-size: 12px;">
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">生活圈</span>
            </li>
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">在线下单</span>
            </li>
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">在线接单</span>
            </li>
          </div>
        </el-col>
        <el-col :span="4" :offset="0" style="color: hsla(0, 0%, 50%, 0.9);height: 300px;">
          <div style="padding-top: 40px;text-align: left;font-size: 15px;">
            联系客服
          </div>
          <div style="list-style-type: none;text-align: left;padding-top: 30px;font-size: 12px;">
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">tel：13546213579</span>
            </li>
            <li class="footer" style="padding-top: 20px; ">
              <span class="foot">emile：724892908@qq.com</span>
            </li>
            <li class="footer" style="padding-top: 20px;">
              <span class="foot">工作时间：早9：00-晚21：00</span>
            </li>
          </div>
        </el-col>
        <el-col :span="2" :offset="2" style="color: hsla(0, 0%, 50%, 0.9);height: 300px;">
          <div style="padding-top: 40px;text-align: center;font-size: 15px;">
            开发者微信
          </div>
          <div style="list-style-type: none;text-align: center;padding-top: 40px;font-size: 12px;">
            <img style="height: 120px;" src="./../../../assets/image/wechat.jpg" alt="" />
          </div>
          <div style="text-align: center;font-size: 12px;line-height: 20px;">
            <img style="height: 20px;vertical-align: middle;" src="./../../../assets/image/weixin.png" alt="" /> 关注微信
          </div>
        </el-col>
        <el-col :span="4" :offset="1" style="color: hsla(0, 0%, 50%, 0.9);height: 300px;">
          <div style="padding-top: 40px;text-align: center;font-size: 15px;">
            开发者微博
          </div>
          <div style="list-style-type: none;text-align: center;padding-top: 40px;font-size: 12px;">
            <img style="height: 120px;" src="./../../../assets/image/sina.jpg" alt="" />
          </div>
          <div style="text-align: center;font-size: 12px;line-height: 20px;">
            <img style="height: 20px;vertical-align: middle;" src="./../../../assets/image/sina.png" alt="" /> 关注微信
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row style="height:20px;color: hsla(0, 0%, 50%, 0.9);margin:0;font-size:12px;">
      <el-col :span="4" :offset="10">
        <span class="iconfont iconbanquan" style="font-size:12px;"></span> Shaun.Zhang</el-col>
    </el-row>
  </el-footer>
</template>
<style scoped>
.foot {
  cursor: pointer;
}
.foot:hover {
  color: #69f;
}
</style>
<script>
export default {};
</script>
