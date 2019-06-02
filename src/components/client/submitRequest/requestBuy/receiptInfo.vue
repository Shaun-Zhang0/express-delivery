/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-21 23:04:47 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:08:57
 */
<template>
  <div>
    <el-row style="margin: 20px 0px 20px">
      <el-col class="purshInfo" :span="22" :offset="1">
        <el-row style="margin-top: 20px;height: 30px;line-height:30px;">
          <el-col :span="1" :offset="1" style="">
            <span class="iconfont iconshouhuo" style="font-size: 30px;"></span>
          </el-col>
          <el-col :span="5">收货信息</el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1" style="background-color: white;margin-top:20px;">
            <el-row>
              <el-col :span="18" :offset="3">
                <el-form ref="secondStep" :model="secondStep" label-width="150px">
                  <el-form-item label="收货地址">
                    <el-input v-model="secondStep.recAddress" placeholder="请填写收货地址">
                      <el-button slot="append" icon="iconfont icondingwei" @click="dialogVisible = true">定位</el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="地址备注">
                    <el-input v-model="secondStep.recAddressRemarks" placeholder="请填写具体楼号及门牌号"></el-input>
                  </el-form-item>
                  <el-form-item label="收货人">
                    <el-col :span="10">
                      <el-input v-model="secondStep.recPerson" placeholder="请填写收货人"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="收货电话">
                    <el-col :span="10">
                      <el-input v-model="secondStep.recPhone" placeholder="请填写收货电话"></el-input>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="选择收货地址" :visible.sync="dialogVisible" width="60%">
      <get-rec-locations @sendMsg="getMsg"></get-rec-locations>
    </el-dialog>
  </div>
</template>
<style scoped>
.purshInfo {
  background-color: white;
  /* height: 500px; */
  border: 1px solid white;
}
</style>
<script>
import getRecLocations from "./../map/getRecLocation";
export default {
  components: { getRecLocations: getRecLocations },
  data() {
    return {
      secondStep: {
        recAddress: "", // 收货地址
        recAddressRemarks: "", // 地址备注
        recPhone: "", //收货电话
        recPerson: "" // 收货人
      },
      dialogVisible: false
    };
  },
  methods: {
    /**
     * 获取 地图 选取的地址
     * data => 地址
     */
    getMsg(data) {
      this.secondStep.recAddress = data;
    }
  },
  watch: {
    secondStep: {
      deep: true,
      handler: function(newVal, oldVal) {
        this.$store.commit("submitOrder", newVal);
      }
    }
  },
  mounted() {}
};
</script>
