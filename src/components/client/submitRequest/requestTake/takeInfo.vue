/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-21 23:04:47 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:12:13
 */
<template>
  <div>
    <el-row style="margin: 20px 0px 20px">
      <el-col class="purshInfo" :span="22" :offset="1">
        <el-row style="margin-top: 20px;height: 30px;line-height:30px;">
          <el-col :span="1" :offset="1" style="">
            <span class="iconfont iconmn_kuaidiyuan" style="font-size: 30px;"></span>
          </el-col>
          <el-col :span="5">代取信息</el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1" style="background-color: white;margin-top:20px;">
            <el-row>
              <el-col :span="18" :offset="3">
                <el-form ref="firstStep" :model="firstStep" label-width="150px">
                  <el-form-item label="代取地址">
                    <el-input v-model="firstStep.serviceAddress" placeholder="请填写代取地址">
                      <el-button slot="append" icon="iconfont icondingwei" @click="dialogVisible = true">定位</el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="地址备注">
                    <el-input v-model="firstStep.takeAddressRemarks" placeholder="请填写具体楼号及门牌号"></el-input>
                  </el-form-item>
                  <el-form-item label="物品备注" style="margin: 0px;">
                    <el-input id="placeholder" type="textarea" maxlength="80" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入物品相关信息" v-model="firstStep.serviceDemand">
                    </el-input>
                    <span style="float:right;font-size:12px;color:#C0C4CC">{{takeDemandNum}}/80</span>
                  </el-form-item>
                  <el-form-item label="代取时间">
                    <el-col :span="10">
                      <el-select v-model="value" placeholder="请选择代取时间" @change="soltime">
                        <el-option v-for="item in solOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col v-show="solStatus" :span="10">
                      <el-time-select v-model="firstStep.appointment" :picker-options="{start: '08:00',step: '01:00', end: '22:00',minTime: currentTime}" placeholder="选择时间">
                      </el-time-select>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog title="选择代取地址" :visible.sync="dialogVisible" width="60%">
      <get-location @sendMsg="getMsg"></get-location>
    </el-dialog>
  </div>
</template>
<style scoped>
.purshInfo {
  background-color: white;
  /* height: 500px; */
  border: 1px solid white;
}
.radiobutton {
  margin-right: 5px;
}
</style>
<script>
import getLocation from "./../map/getLocation";
export default {
  components: { getLocation: getLocation },
  data() {
    return {
      firstStep: {
        serviceAddress: "", // 代拿地址
        serviceAddressRemarks: "", // 地址备注
        serviceDemand: "", // 代拿要求
        appointment: "",
        serviceNow: 0
      },
      dialogVisible: false,
      value: "", // 判断 是否为立即购买
      solStatus: false, // 展示选择预约时间
      appointment: "", // 预约时间
      currentTime: "", // 当前时间
      sort: "",

      solOptions: [
        {
          value: "0",
          label: "立即代取"
        },
        {
          value: "1",
          label: "预约时间"
        }
      ]
    };
  },

  computed: {
    // 计算 购买要求 的字数
    takeDemandNum() {
      return this.firstStep.serviceDemand.length;
    }
  },
  methods: {
    /**
     * 获取系统时间
     */
    getTime() {
      let date = new Date();
      let m = date.getMinutes();
      let d = date.getHours();
      this.currentTime = d + ":" + m;
    },
    /**
     * 获取 地图 中选择的地址
     */
    getMsg(address, longitude, latitude) {
      this.firstStep.takeAddress = address;
      // console.log(data+"+"+a+b);
    },
    /**
     * 选择代拿的时间
     * val => 下拉框的value
     */
    soltime(val) {
      if (val == 1) {
        this.solStatus = true;
        this.firstStep.takeNow = 1;
      } else {
        this.solStatus = false;
        this.firstStep.takeNow = 0;
      }
    }
  },
  mounted() {
    this.getTime();
  },
  watch: {
    firstStep: {
      deep: true,
      handler: function(newVal, oldVal) {
        this.$store.commit("submitOrder", newVal);
      }
    }
  }
};
</script>
