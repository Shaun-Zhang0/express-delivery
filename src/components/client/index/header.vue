/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 15:53:09 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:03:59
 */
<template>
  <div>
    <el-header height="60px" style="background-color:rgb(84, 92, 100)">
      <el-row style="width: 100%;">
        <el-col :span="3" class="headerline">
          <span style="color: white;font-size: 14px;">随手快递</span>
        </el-col>
        <el-col :span="16">
          <el-menu :router="true" style="height: 50px;" :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#69f">
            <el-menu-item index="index">
              首页
            </el-menu-item>
            <el-menu-item index="introduction">
              服务介绍
            </el-menu-item>
            <el-menu-item index="moments">生活圈</el-menu-item>
            <el-menu-item index="submitRequest">在线下单</el-menu-item>
            <el-menu-item index="joinus">加入我们</el-menu-item>
            <el-submenu index="6">
              <template slot="title">关于我们</template>
              <el-menu-item index="6-1">团队介绍</el-menu-item>
              <el-menu-item index="6-2">常见问题</el-menu-item>
              <el-menu-item index="6-3">意见反馈</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col class="headerline" :span="2" style="text-align:right">
          <span>
            <router-link to="/clientLogin" tag="span"> <span  @click="loginStatus = true">登录</span></router-link>
            <!-- <el-dropdown v-else :hide-on-click="false">
              <span class="el-dropdown-link" style="color:white;">
                用户名
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click.native="loginStatus = false">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown> -->
          </span>
        </el-col>
        <el-col class="headerline" :span="3" style="text-align:center">
          <span class="el-icon-location localcity" style="font-size: 14px;color: white;cursor: pointer;" @click="dialogVisible = true">{{ localcity }}</span>
        </el-col>

      </el-row>
      <div id="allmap"></div>
    </el-header>
    <div>
      <el-dialog title="定位" :visible.sync="dialogVisible" style="500px;">
        <div id="tips">
          <span>{{tipWord}}</span>
        </div>
        <el-row>
          <el-row style="border-bottom: 1px solid #ccc;padding-bottom: 10px;">
            <el-col :span="2">当前定位</el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="3">
              <span class="el-icon-location"></span>{{localcity}}</el-col>
            <el-col :span="18">
              <el-row>
                <el-col class="index" :span="1" v-for="(ind,index) in arrayIndex" style="text-align:center">
                  <a href="javascript:void(0);" style="text-decoration:none;color:grey;" @click="jumpTo(index,ind.code)">{{ind.code}}</a>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-row>
        <div style="height: 500px;overflow: hidden;">
          <el-scrollbar style="height: 100%">
            <el-row>
              <el-row v-for="(array,index) in arrayIndex" style="padding-top: 20px;">
                <el-col :span="1">
                  <el-row :id="'__code'+index" style="text-align:center;cursor:pointer;">
                    {{array.code}}
                  </el-row>
                </el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="20">
                  <el-row style="border-bottom: 1px solid #ccc;">
                    <el-row>
                      <el-col :span="3" style="margin-bottom:20px;" v-for='cityList in array.cityList'>
                        <span class="cityName" @click="selectCity(cityList)">{{cityList}}</span>
                      </el-col>
                    </el-row>
                  </el-row>
                </el-col>
              </el-row>
            </el-row>
          </el-scrollbar>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<style>
.el-scrollbar__wrap {
  overflow: auto !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px !important;
}
</style>
<style scoped>
.el-header {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
}
.headerline {
  line-height: 60px;
  height: 60px;
  color: white;
}
.headerline span {
  cursor: pointer;
}
#tips {
  width: 50px;
  height: 50px;
  background-color: grey;
  left: 50%;
  margin-left: -25px;
  top: 50%;
  margin-top: -25px;
  opacity: 0.7;
  position: absolute;
  color: white;
  text-align: center;
  line-height: 50px;
  z-index: 999;
  display: none;
}
#tips span {
  font-size: 30px;
}
.el-scrollbar {
  height: 100%;
}
.cityName {
  cursor: pointer;
  color: #2b6db1;
}
.cityName:hover {
  color: #2d2d2d;
}
.index:hover {
  color: white;
}
</style>    
<script>
import getCurrentCityName from "./../../../assets/js/getCityName.js";
import citylist from "../../../assets/common/citylist.js";
import { setInterval } from "timers";
export default {
  data() {
    return {
      activeIndex2: "",
      dialogVisible: false, //定位对话框
      localcity: "正在定位中...", //定位城市名称
      arrayIndex: citylist, // 城市列表
      tipWord: "", // 索引字母
      i: 0,
      loginStatus: false
    };
  },
  methods: {
    getCurrentCity() {
      /**
       * 获取当前城市名称
       */
      getCurrentCityName().then(city => {
        this.localcity = city;
      });
    },
    jumpTo(val, code) {
      /**
       * val => 索引
       * code => 字母
       * 根据点击字母，将以该字母开头的区域显示到可视区
       * 效果: 选定字母，呈现在页面中心
       */
      let id = "__code" + val;
      document.getElementById(id).scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
      });
      document.getElementById("tips").style.display = "block";
      this.tipWord = code;
      let timer = setInterval(function() {
        document.getElementById("tips").style.display = "none";
      }, 2000);
    },
    selectCity(val) {
      /**
       * 重新选择定位城市
       */
      this.$confirm("是否定位为" + val, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        iconClass: "el-icon-location-outline"
      }).then(() => {
        this.localcity = val;
        this.dialogVisible = false;
      });
    }
  },
  mounted() {
    this.getCurrentCity();
  }
};
</script>
