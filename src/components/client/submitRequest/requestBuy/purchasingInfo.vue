/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-21 23:04:47 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:09:26
 */
<template>
  <div>
    <el-row style="margin: 20px 0px 20px">
      <el-col class="purshInfo" :span="22" :offset="1">
        <el-row style="margin-top: 20px;height: 30px;line-height:30px;">
          <el-col :span="1" :offset="1" style="">
            <span class="iconfont icongoumai" style="font-size: 30px;"></span>
          </el-col>
          <el-col :span="5">代购信息</el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1" style="background-color: white;margin-top:20px;">
            <el-row>
              <el-col :span="18" :offset="3">
                <el-form ref="firstStep" :model="firstStep" label-width="150px">
                  <el-form-item label="购买内容">
                    <el-radio-group v-model="sort" size="small" @change="changePlaceholder">
                      <el-radio v-for="(button,index) in buttons" fill="#6699FF" class="radiobutton" :label="index" border>{{button.name}}</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="购买地址">
                    <el-input v-model="firstStep.serviceAddress" placeholder="请填写购买地址">
                      <el-button slot="append" icon="iconfont icondingwei" @click="dialogVisible = true">定位</el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="地址备注">
                    <el-input v-model="firstStep.serviceAddressRemarks" placeholder="请填写具体楼号及门牌号"></el-input>
                  </el-form-item>
                  <el-form-item label="购买要求" style="margin: 0px;">
                    <el-input id="placeholder" type="textarea" maxlength="80" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="firstStep.serviceDemand">
                    </el-input>
                    <span style="float:right;font-size:12px;color:#C0C4CC">{{serviceDemandNum}}/80</span>
                  </el-form-item>
                  <el-form-item label="商品价格">
                    <el-col :span="10">
                      <el-input v-model.number="firstStep.price" placeholder="请填写商品价格，单位：元"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="购买时间">
                    <el-col :span="10">
                      <el-select v-model="value" placeholder="请选择购买时间" @change="soltime">
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
    <el-dialog title="选择购买地址" :visible.sync="dialogVisible" width="60%">
      <get-location @sendMsg="getMsg"></get-location>
    </el-dialog>
  </div>
</template>
<style scoped>
.purshInfo {
  background-color: white;
  border: 1px solid white;
}
.radiobutton {
  margin-right: 5px;
}
</style>
<script>
import getLocation from "./../map/getLocation";
import buy from "./../../../../assets/js/eventBus.js";
// import  store from "vuex";
export default {
  components: { getLocation: getLocation },
  data() {
    return {
      firstStep: {
        serviceAddress: "", // 购买地址
        serviceAddressRemarks: "", // 地址备注
        serviceDemand: "", // 购买要求
        price: null,
        appointment: null,
        buyType: null,
        serviceNow: 0,
        orderType: 0
      },
      dialogVisible: false,
      value: "", // 判断 是否为立即购买
      solStatus: false, // 展示选择预约时间
      appointment: "", // 预约时间
      currentTime: "", // 当前时间
      sort: "",
      buttons: [
        {
          name: "任意",
          placeholder: "随你买，请填写商品相关的备注哦",
          code: 1
        },
        {
          name: "洋快餐",
          placeholder: "请填写店名、食品名称、数量等要求",
          code: 2
        },
        {
          name: "早餐",
          placeholder: "请填写餐品名称、数量，是否忌口等要求",
          code: 3
        },
        {
          name: "宵夜",
          placeholder: "请填写餐品名称、数量，是否忌口等要求",
          code: 4
        },
        { name: "鲜花", placeholder: "请填写鲜花种类，数量等要求", code: 5 },
        {
          name: "生鲜蔬菜",
          placeholder: "请填写生鲜蔬菜种类、重量等要求",
          code: 6
        },
        { name: "咖啡", placeholder: "请填写咖啡品类，口味等要求", code: 7 }
      ],
      solOptions: [
        {
          value: "0",
          label: "立即购买"
        },
        {
          value: "1",
          label: "预约时间"
        }
      ]
    };
  },

  computed: {
    /**
     *   计算 购买要求 的字数
     */
    serviceDemandNum() {
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
     *  获取 地图 中选择的地
     */
    getMsg(address, longitude, latitude) {
      this.firstStep.serviceAddress = address;
    },
    /**
     * 根据选择代购的类型，更改input的placeholder
     */
    changePlaceholder(val) {
      let temp = this.buttons[val].placeholder;
      this.firstStep.buyType = this.buttons[val].code;
      console.log(this.buttons[val].code);
      document.getElementById("placeholder").placeholder = temp;
    },
    /**
     * 选择代购时间
     * val 下拉框的value
     */
    soltime(val) {
      if (val == 1) {
        this.solStatus = true;
        this.firstStep.serviceNow = 1;
      } else {
        this.solStatus = false;
        this.firstStep.serviceNow = 0;
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
