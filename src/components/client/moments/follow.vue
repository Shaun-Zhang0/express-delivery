/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 22:50:45 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-26 22:32:37
 */
<template>
  <div class="follow-body">
    <el-row class="message-body">
      <el-row class="message-head">
        <el-col :span="3">
          <div class="touxiang" :style="message.touxiang"></div>
        </el-col>
        <el-col :span="18">
          <el-row class="username">
            <el-col :span="24">火鸡中的颤抖鸡</el-col>
          </el-row>
          <el-row class="post-time">
            <el-col :span="24">
              <span>11:35</span>
              发布
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="1">
          <el-dropdown class="message-menu" trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span class="iconfont iconshoucang1" style="color:yellow;"></span>
                <span style="margin-left: 10px;">收藏</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span class="iconfont iconjubao1" style="color:red"></span>
                <span style="margin-left: 10px;">举报</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="message-word" :span="18" :offset="3" style="height:100%;">
          木纹背景
        </el-col>
        <el-row>
          <el-col class="message-image" :span="18" :offset="3">
            <img :src="message.img" alt="">
          </el-col>
        </el-row>
      </el-row>
      <el-row class="message-act-footer">
        <el-col :span="2" :offset="3">
          <div class="act-item" @click="like">
            <span class="iconfont icondianzan"></span>
            <span class="item-num">11</span>
          </div>
        </el-col>
        <el-col :span="2" :offset="1">
          <div class="act-item" @click="message.commentStatus = !message.commentStatus">
            <span class="iconfont iconactionbar_cmt_nor"></span>
            <span class="item-num">11</span>
          </div>
        </el-col>
        <el-col :span="2" :offset="1">
          <div class="act-item">
            <span class="iconfont iconzhuanfa"></span>
            <span class="item-num">11</span>
          </div>
        </el-col>
      </el-row>
      <el-row v-if="message.commentStatus" style="border-top: 2px solid #ebebeb;">
        <el-row>
          <post-comment></post-comment>
        </el-row>
        <el-row>
          <el-row style="margin-bottom:20px;">
            <el-col :span="12">最新评论</el-col>
          </el-row>
          <commment-body></commment-body>
        </el-row>
      </el-row>
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
.follow-body {
  background-color: #fff;
}
.touxiang {
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.username {
  font-size: 14px;
}
.post-time {
  font-size: 13px;
  color: #bfbfbf;
  margin-top: 10px;
}
.message-menu {
  cursor: pointer;
}
.message-word {
  word-wrap: break-word;
  word-break: break-all;
}
.message-image {
  height: 200px;
  margin-top: 20px;
}
.message-image img {
  width: 100%; /*图片自适应的父容器的宽*/
  height: 100%; /*图片自适应的父容器的高*/
}
.message-act-footer {
  margin-top: 20px;
  margin-bottom: 10px;
}
.act-item > .iconfont {
  font-size: 20px;
}
.item-num {
  font-size: 12px;
}
.act-item {
  color: #cccccc;
  font-weight: 700;
  cursor: pointer;
}
.act-item:hover {
  color: #409eff;
  animation: jiggle 1s ease-in infinite;
}
</style>
<script>
import postComment from "./postComment";
import commmentBody from "./latestComment";
export default {
  components: {
    postComment: postComment,
    commmentBody: commmentBody
  },
  data() {
    return {
      message: {
        touxiang: {
          backgroundImage:
            "url(" + require("./../../../assets/image/touxiang.jpg") + ")"
        },
        img: require("./../../../assets/image/background.jpg"),
        commentStatus: false,
        likeStatus: false
      }
    };
  },
  methods: {
    like(e) {
      const likeNode = e.currentTarget;
      this.message.likeStatus = !this.message.likeStatus;
      if (!this.message.likeStatus) {
        likeNode.style.color = "#409eff";
      } else {
        likeNode.style.color = "#cccccc";
      }
    },
    comment() {},
    forward() {}
  }
};
</script>
