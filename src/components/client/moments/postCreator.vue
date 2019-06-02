/*
import func from './vue-temp/vue-editor-bridge';
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 22:07:13 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-26 14:46:53
 */
<template>
  <el-row class="main-body">
    <el-row style="background-color:white;">
      <el-col :span="18" :offset="3">
        <el-row>
          <el-col style="padding-top: 20px;" :span="24">
            <el-input class="postWord" resize="none" type="textarea" :rows="4" placeholder="请输入内容" v-model="postBody.postWord"></el-input>
          </el-col>
        </el-row>
        <el-row v-if="openImg" class="imgArea" style="height: 100%;margin: 10px 20px;">
          <div v-for="(img,index) in imgURL" :style="{backgroundImage:'url('+img.url+')'}">
            <span class="el-icon-close" @click="deleteImg(index)"></span>
          </div>
          <div class="addImg" @click="addFile">
            <span class="iconfont iconjia"></span>
          </div>
        </el-row>
        <el-row class="post-item-body ">
          <el-col :span="4" class="post-item">
            <el-button icon="iconfont icontupian" size="mini" @click="expandImg">图片</el-button>
          </el-col>
          <el-col :span="4" class="post-item">
            <el-button icon="iconfont iconlianjie" size="mini" @click="expandLink">链接</el-button>
            <input type="file" accept="image/gif, image/jpeg, image/png, image/jpg" class="getFile" @change="getFile">
          </el-col>
          <el-col :span="4" :offset="12">
            <el-button style="width: 100%;" size="mini" type="primary">发布</el-button>
          </el-col>
        </el-row>
        <el-row style="padding: 10px 0" v-if="openLink">
          <el-col :span="18">
            <input v-model="linkAddress" type="text" class="link" placeholder="请输入链接地址">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-row>
</template>
<style scoped>
.main-body {
  background-color: white;
  height: 200px;
  margin-top: 20px;
  border-radius: 4px;
}
.postWord {
  font-size: 15px !important;
}
.post-item-body {
  align-items: center;
  padding: 10px 0;
  display: flex;
}
.post-item {
  cursor: pointer;
  color: rgb(84, 92, 100);
  font-size: 16px;
}
.post-item button {
  border: transparent;
  background: transparent;
}

.getFile {
  width: 0;
  height: 0;
}
.imgArea {
  display: flex;
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
}
.imgArea div {
  width: 80px;
  height: 80px;
  background-color: aqua;
  margin: 10px 10px;
  background: 50% no-repeat;
  background-size: cover;
}

.el-icon-close {
  background: rgba(255, 255, 255, 0.8);
  color: ccc;
  float: right;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
.el-icon-close:hover {
  background: rgba(255, 255, 255, 1);
}
.addImg {
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.addImg span {
  color: #ccc;
  font-size: 30px;
  text-align: center;
}
.link {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 25px;
  box-sizing: border-box;
  padding: 15px;
  color: #606266;
}
.link::placeholder {
  color: rgb(196, 196, 196);
}
</style>
<script>
export default {
  data() {
    return {
      postBody: { postWord: "" }, // 发布动态内容
      imgURL: [], // 上传图片的路径
      openImg: false, // 打开图片展示行
      openLink: false, // 打开链接输入行
      linkAddress:""
       };
  },
  methods: {
    /**
     * 选择img
     */
    expandImg() {
      // this.openImg = true;
      if (this.openImg == true) {
        this.openImg = false;
        this.imgURL = [];
      } else {
        const inputNode = document.getElementsByClassName("getFile")[0];
        inputNode.click();
        this.openImg = true;
      }
    },
    addFile() {
      const inputNode = document.getElementsByClassName("getFile")[0];
      inputNode.click();
    },
    /**
     * 获取 img的base64 并显示出现
     */
    getFile(e) {
      var that = this;
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function(e) {
        if (that.imgURL.length < 4) {
          that.imgURL.unshift({ url: e.target.result });
        } else {
          that.$message({
            message: "最多只能上传4张图片哦！",
            type: "warning"
          });
        }
      };
    },
    /**
     * 点击删除 删除该img
     */
    deleteImg(index) {
      this.imgURL.splice(index, 1);
    },
    /**
     * 展开链接输入行
     */
    expandLink() {
      this.openLink = !this.openLink;
    }
  }
};
</script>
