/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-24 10:54:45 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-29 11:31:13
 */

<template>
  <el-form>
    <el-form-item label="详细地址">
      <div id="r-results">
        <el-autocomplete width="100%" size="mini" popper-class="my-autocomplete" v-model="shopaddress" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect">
          <template slot-scope="{ item }">
            <span class="addr">{{ item.address }}</span>
          </template>
        </el-autocomplete>
      </div>
      <div id="r-map"></div>
    </el-form-item>
  </el-form>
</template>
<style scoped>
#r-map {
  height: 500px;
}
</style>

<script>
export default {
  name: "shopManage_add",
  data() {
    return {
      listLoading: true,
      ruleForm: {
        address: "",
        longitude: "", // 经度
        latitude: "" // 纬度
      },
      map: null,
      local: null,
      localList: [], // 搜索地址列表
      shopaddress: "", // 详细地址
      loading: false,
      restaurants: [],
      address_detail: ""
    };
  },
  watch: {
    shopaddress(val) {
      this.local.search(val);
    }
  },
  mounted() {
    // this.map = new BMap.Map("l-map");
    // 修改状态
    // this.baiduMap();
    setTimeout(() => {
      this.map = new BMap.Map("r-map");
      this.baiduMap();
    }, 0);
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return restaurant;
      };
    },
    handleSelect(item) {
      this.map.clearOverlays(); // 清除地图上所有覆盖物
      this.shopaddress = item.address;
      this.ruleForm.longitude = item.point.lng;
      this.ruleForm.latitude = item.point.lat;
      this.ruleForm.address = item.address;
      const pp = item.point; // 获取第一个智能搜索的结果
      this.map.centerAndZoom(pp, 15);
      this.map.addOverlay(new BMap.Marker(pp)); // 添加标注
      this.$emit(
        "sendMsg",
        this.shopaddress,
        this.ruleForm.longitude,
        this.ruleForm.latitude
      );
    },
    baiduMap() {
      // 百度地图API功能
      // this.map = new BMap.Map('l-map')
      var _this = this;
      var point = new BMap.Point(116.331398, 39.897445);
      _this.map.centerAndZoom(point, 12); // 初始化地图,设置城市和地图级别。
      _this.map.addControl(
        new BMap.ScaleControl({ anchor: BMAP_STATUS_SUCCESS })
      );
      _this.map.addControl(new BMap.NavigationControl());

      var geolocation = new BMap.Geolocation();
      // 根据IP定位当前经纬度
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            // BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
            var mk = new BMap.Marker(r.point);
            _this.map.addOverlay(mk);
            _this.map.panTo(r.point);
          }
        },
        {
          enableHighAccuracy: true
        }
      );

      this.local = new BMap.LocalSearch(this.map, {
        onSearchComplete: res => {
          if (this.local.getStatus() === BMAP_STATUS_SUCCESS) {
            this.restaurants = [];
            // console.log(res);
            for (let i = 0; i < res.getCurrentNumPois(); i++) {
              this.restaurants.push(res.getPoi(i));
            }
            // console.log("restaurants", this.restaurants); // 搜索触发的地址列表;
          }
        }
      });
      // map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    }
  },
  components: {}
};
</script>
