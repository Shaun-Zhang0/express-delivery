/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-21 23:04:47 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:05:26
 */
<template>
  <div>
    <el-row style="margin: 20px 0px 20px">
      <el-col class="purshInfo" :span="22" :offset="1">
        <el-row style="margin-top: 20px;height: 30px;line-height:30px;">
          <el-col :span="1" :offset="1">
            <span class="iconfont iconzhifu" style="font-size: 30px;"></span>
          </el-col>
          <el-col :span="5">支付信息</el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1" style="background-color: white;margin-top:20px;">
            <el-row>
              <el-col :span="18" :offset="3">
                <el-form ref="thirdStep" :model="thirdStep" label-width="150px">
                  <el-form-item label="运费">
                    <el-col :span="10">
                      <el-input v-model.number="thirdStep.shippingFee" placeholder="请填写运费,单位为元"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item>
                    <el-col :span="10">
                      <el-button style="width: 100%;" @click="submitOrder">确认订单</el-button>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <pay ref="pay"></pay>
  </div>

</template>
<style scoped>
.purshInfo {
  background-color: white;
  border: 1px solid white;
}
</style>
<script>
import { apiCreateOrder } from "./../../../../assets/js/api";
import pay from "./../../../common/pay";
export default {
  components: {
    pay: pay
  },
  data() {
    return {
      dialogPassword: false,
      paying: false,
      payFinished: false,
      aaa: "1",
      payState: false,
      password: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }],
      thirdStep: {
        shippingFee: null, // 运费
        pwd: ""
      }
    };
  },
  watch: {
    thirdStep: {
      deep: true,
      handler: function(newVal, oldVal) {
        this.$store.commit("submitOrder", newVal);
      }
    }
  },
  methods: {
    /**
     * 确认是否发布订单
     */
    submitOrder() {
      this.$confirm("发布订单, 是否继续?", "帮我买 订单 确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$refs.pay.dialogPassword = true;
      });
    }
  },
  mounted() {
    this.$store.commit("submitOrder", { orderType: 0 });
  }
};
</script>
