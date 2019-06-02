import Vue from "vue";
import Router from "vue-router";
import index from "./components/client/index/index.vue";
import clientLogin from "./components/client/login/login.vue";
import introduction from "./components/client/introduction/introduction.vue";
import submitRequest from "./components/client/submitRequest/submitRequest.vue";
import requestBuy from "./components/client/submitRequest/requestBuy/requestBuy.vue";
import requestTake from "./components/client/submitRequest/requestTake/requestGet.vue";
import moments from "./components/client/moments/moment.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    { path: "/", redirect: "index" },
    {
      path: "/index", // 主页
      name: "index",
      component: index
    },
    {
      path: "/introduction", // 服务介绍
      name: "introduction",
      component: introduction
    },
    {
      path: "/submitRequest", // 在线下单
      name: "submitRequest",
      component: submitRequest,
      redirect: "requestBuy",
      children: [
        { path: "/requestTake", component: requestTake }, // 帮我购
        { path: "/requestBuy", component: requestBuy } // 帮我取
      ]
    },
    {
      path: "/moments",
      name: "moments",
      component: moments
    },
    {
      path: "/clientLogin",
      name: "clientLogin",
      component: clientLogin,
      meta: {
        isLogin: true //需要登录才能进入
      }
    }
  ]
});
