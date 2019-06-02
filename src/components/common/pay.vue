/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-05-23 11:47:39 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 17:30:15
 */
<template>
  <el-dialog class="paying" top="30vh" title="输入支付密码" :visible.sync="dialogPassword" width="30%" @opened="focusInput" :before-close="handleClose" :close-on-click-modal=false>
    <el-row style="text-align:center" class="passwordInput">
      <ul v-if="!paying">
        <li v-for="(item,index) in password">
          <input type="password" v-model="item.val" maxlength="1" @keyup="nextFocus($event,index)">
        </li>
      </ul>
      <div v-else>
        <div v-if="!payFinished">
          <loading></loading>
          <div>正在支付中</div>
        </div>
        <div v-else class="payingfinished">
          <div style="text-align:left;margin-bottom:10px;">订单号：123456</div>
          <span class="iconfont iconok mark" style="font-size:30px;"></span>
          <div class="mark">支付成功</div>
          <div style="font-size:30px;margin:10px 0;">￥{{totalPrice}}</div>
          <span class="downtime">{{totalTime}}s后关闭该窗口</span>
        </div>
      </div>

    </el-row>
  </el-dialog>
</template>
<script>
import loading from "./loading";
import { setTimeout, clearInterval } from "timers";
export default {
  components: {
    loading: loading
  },
  data() {
    return {
      dialogPassword: false, // 支付密码框
      payFinished: false, // 支付成功
      paying: false, // 正在支付动画
      password: [{ val: "" }, { val: "" }, { val: "" }, { val: "" }], // 记录单个密码
      pwd: "",
      totalTime: 5,
      totalPrice: ""
    };
  },
  watch: {
    payFinished(newValue) {
      if ((newValue = true)) {
        let timer = setInterval(() => {
          this.totalTime--;
          if (this.totalTime == 0) {
            window.clearInterval(timer);
            this.clearPwd();
          }
        }, 1000);
      }
    }
  },

  methods: {
    /**
     * 按下按钮
     */
    nextFocus(e, index) {
      const divNode = document.getElementsByClassName("passwordInput")[0];
      let preNode = divNode.getElementsByTagName("input")[index - 1]; // 上一个input
      let nextNode = divNode.getElementsByTagName("input")[index + 1]; // 下一个
      switch (e.keyCode) {
        case 37:
          /**
           * keycode 37 为键盘方向左键，按下 聚焦上一个input
           */
          if (index != 0) {
            preNode.focus();
          }
          break;
        case 39:
          /**
           * keycode 39 为键盘方向右键，按下 聚焦下一个input
           */
          if (index != 3) {
            nextNode.focus();
          }
          break;
        case 8:
          /**
           * keycode 8 为键盘退格键，按下 删除当前input的内容，并聚焦上一个input
           */
          this.password[index].val = "";
          if (index != 0) {
            preNode.focus();
          }
          break;
        default:
          /**
           * 当密码输入完成后，发送请求
           */
          if (index == 3) {
            // apiCreateOrder({
            //   orderInfo: this.$store.state.buyInfo
            // })
            //   .then(res => {})
            //   .catch(res => {
            //     console.log(err);
            //   });
            const payNode = document.getElementsByClassName("paying")[0];
            const buttonNode = payNode.getElementsByClassName(
              "el-dialog__headerbtn"
            )[0];
            let header = payNode.getElementsByClassName("el-dialog__header")[0];
            let spanNode = header.getElementsByTagName("span")[0];
            this.paying = true;
            this.totalPrice =
              this.$store.state.buyInfo.price +
              this.$store.state.buyInfo.shippingFee; // 计算支付的金额
            setTimeout(() => {
              this.payFinished = true;
              spanNode.innerHTML = "支付成功";
              buttonNode.setAttribute("style", "display:none");
              this.$options.methods.clearPwd();
            }, 2000);
            var array = new Array();
            for (let i = 0; i < this.password.length; i++) {
              array[i] = this.password[i].val;
            }
            this.pwd = array.toString();
            this.pwd = this.pwd.replace(/,/g, "");
          } else {
            setTimeout(function() {
              // 每300ms跳转到下一个input
              nextNode.focus();
            }, 300);
          }
      }
    },
    /**
     * 聚焦第一个input
     */
    focusInput() {
      const divNode = document.getElementsByClassName("passwordInput")[0];
      let Node = divNode.getElementsByTagName("input")[0];
      Node.focus();
    },
    /**
     * 支付对话框关闭执行的操作
     */
    handleClose(done) {
      this.$confirm("取消订单支付, 是否继续?", "取消支付", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(_ => {
          done();
          this.$options.methods.clearPwd();
        })
        .catch(_ => {});
    },
    /**
     * 清除密码
     */
    clearPwd() {
      this.dialogPassword = false;
      this.payFinished = false;
      this.paying = false;
      this.pwd = null;
      for (let i; i < this.password.length; i++) {
        this.password[i].val = "";
      }
    }
  }
};
</script>
<style scoped>
.passwordInput > ul input {
  border: 1px solid #c5cad4;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  outline: none;
  height: 40px;
  line-height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  color: #606266;
  text-align: center;
  font-size: 20px;
}
ul {
  text-align: center;
  margin: 0;
  padding: 0;
  display: inline-block;
}
ul::after {
  clear: both;
  overflow: hidden;
}
li {
  float: left;
  width: 25%;
  list-style: none;
  padding: 0 14px;
  display: inline;
  box-sizing: border-box;
}
.mark {
  color: #67c23a;
}
div .mark {
  margin: 10px 0px;
}
</style>

