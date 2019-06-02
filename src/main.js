import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import fonts from "./assets/fonts/iconfont.css";
import Vuex from "vuex";
import store from "./store/store";
Vue.use(Vuex);
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$http", {
  value: axios
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
